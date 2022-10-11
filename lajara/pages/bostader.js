import React, { createContext, useContext, useEffect } from 'react'
import Wordpress from '../util/Wordpress'
import Head from "next/head";
import useProjects from 'util/useProjects';
import SEO from 'util/SEO';


export async function getStaticProps(context) { 

	const page = await Wordpress.getPageBySlug('bostader');
    
	if (!page) {
        return {
            notFound: true,
        }
    }
	
	return {
		props: { 
			page
		},
		revalidate: 10
	}
}


export default function Index({page}) {



	//U should send in Page as well when building the actual block
	// const {projects, pages, page, setPage} = useProjects()
	const {projects, pages, setPage} = useProjects()
	
    return <>

			<Head>
                {SEO.pageMeta(page)}
            </Head>

			
			
			<h1>Page data</h1>
			<pre>{JSON.stringify(page)}</pre>


			<h1>Projects data</h1>
			<pre>{JSON.stringify(projects)}</pre>

		</>
}