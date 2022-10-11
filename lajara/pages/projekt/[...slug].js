import React from 'react'
import { Project } from 'src/pages';
import { getImageSize } from 'util/Utils';
import Wordpress from 'util/Wordpress';

export async function getStaticProps(context) {

    const project = await Wordpress.getProjectBySlug(context.params.slug);
    const menu = await Wordpress.getMenu()

    if (project == undefined) {
        return {
            notFound: true,
        }
    }

    const options = await Wordpress.getOptions()

	return {

		props: { 
            project,
            options,
            menu
		},
        revalidate: 10
	}
}

export async function getStaticPaths(context) {

    const projects = await Wordpress.getProjects({limit : 50});

    
    return {
        // paths: producers.filter((_,i) => i <= 10).map(p => `/producenter/${p.slug}`),
        paths: projects?.map(p => `/projekt/${p.slug}`),
        fallback: 'blocking'
    }
}

export default function ProjectRoute({ project, options }) {


    let featuredMedia = project['_embedded']['wp:featuredmedia']?.[0];

    console.log(project)

    return <Project project={project} options={options} data={{
        title: project.title.rendered,
        heroImage: {
            src: featuredMedia ? getImageSize(project['_embedded']['wp:featuredmedia']?.[0], '2048x2048') : null,
            alt: featuredMedia?.alt_text
        },

        status: project['_embedded']['wp:term'].find(t => t[0].taxonomy == 'status')?.[0]?.name,

        customInfo: [
            (project.acf?.details?.rooms && {
                label: 'Rum',
                value: project.acf.details.rooms
            }),
            (project.acf?.details?.living_area && {
                label: 'Yta',
                value: project.acf.details.living_area
            }),
            (project.acf?.details?.sale_date && {
                label: 'Försäljningsstart',
                value: project.acf.details.sale_date
            }),
            (project.acf?.details?.moving_in_date && {
                label: 'Inflyttningsdatum',
                value: project.acf.details.moving_in_date
            }),
            (project.acf?.details?.architect && {
                label: 'Arkitekt',
                value: project.acf.details.architect
            }),
        ],

        gallery: project.acf.image_gallery.map(image => {
            return {
                src: getImageSize(image, 'large'),
                alt: image.alt
            }
        }),

        description: project.acf.description,

        residences: project.acf.residences,
        
        location: project.acf.details.location,

    }} />
}