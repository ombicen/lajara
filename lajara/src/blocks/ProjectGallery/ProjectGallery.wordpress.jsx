import React from 'react'
import { limitWords } from 'src/utils/Utils'
import { getImageSize, htmlToText, loadImage } from 'util/Utils'
import { ProjectGallery } from './ProjectGallery'
import { useQueryParams } from 'util/Utils'
import useProjects from 'util/useProjects'

export default function ProjectGalleryWordpress({ data, status }) {

    
    
    const {projects} = useProjects({limit : data.limit})

    
    
    return <ProjectGallery 
        title={data.title}
        categories = {status && status.map(s => {

            return {
                id : s.id,
                name: s.name
            }

        })}

        projects={projects?.map(p => {

            let image = p['_embedded']['wp:featuredmedia']?.[0]

            return {
                id: p.id,
                link: `/projekt/${p.slug}`,
                status: p['_embedded']['wp:term']?.flatMap(t => t).find(t => t.taxonomy == 'status')?.slug,
                type: p['_embedded']['wp:term']?.flatMap(t => t).find(t => t.taxonomy == 'type_of')?.name,
                name: p.title.rendered,
                city: p.acf.details?.location?.state,
                image: {
                    src: image ? getImageSize(image, 'large') : 'https://via.placeholder.com/700x500',
                    alt: image?.alt_text,
                },
                excerpt: p.acf.description ? limitWords(htmlToText(p.acf.description), 10).replace('\n', ' ') : ''
            }
        })}
    />
}
