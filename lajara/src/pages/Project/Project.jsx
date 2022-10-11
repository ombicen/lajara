import React from 'react'
import { ProjectHero } from './components/ProjectHero'
import { Button } from 'src/elements'
import { NavigationIcons } from './components/NavigationIcons'
import { ProjectMeta } from './components/ProjectMeta'
import { ProjectContent } from './components/ProjectContent'
import { decodeHtml, getImageSize } from 'util/Utils'
import Head from 'next/head'
import { getAbsolutePageUrl, renderTitle } from 'util/Wordpress'
import { ResidencesTable } from './components/ResidencesTable'
import { Map } from './components/Map'
import BlockRenderer from 'theme/BlockRenderer'
import SEO from 'util/SEO'

const Project = ({ data, project, options }) => {


    return <>

        <Head>

            {SEO.projectMeta(project)}

        </Head>

        <ProjectHero 
            image={data.heroImage}
            title={data.title}
        >
            <NavigationIcons />
            <div className="spacer s"></div>
            <Button color={'white'} onClick={() => alert('Not implemented yet')}>Intresseanmälan</Button>
        </ProjectHero>

        <ProjectMeta meta={[{
            label: 'Projektstatus',
            value: data.status
        }, ...data.customInfo]} />

        <ProjectContent
            html={data.description}
            gallery={data.gallery}
        />

        <ResidencesTable 
            residences={data.residences}
        />

        <Map 
            location={data.location}
        />

        <BlockRenderer blocks={options.blocks} />

    </>
}

export { Project }