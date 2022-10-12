import Head from "next/head";
import styled from "styled-components";
import Wordpress from '../util/Wordpress'
import SEO from "util/SEO";
import BlockRenderer from "theme/BlockRenderer";
import loadAdditionalData from "util/loadAdditionalData";

export async function getStaticProps(context) {

	const page = await Wordpress.getPageBySlug('startsida') ?? null;
	const status = await Wordpress.getTaxonomi('status') ?? null

	await loadAdditionalData(page?.acf?.blocks)

	if (!page) {
		return {
			notFound: true,
		}
	}

	let options = await Wordpress.getOptions() ?? null
	let logo = await Wordpress.getLogo() ?? null
	let menu = await Wordpress.getMenu() ?? null
	console.log('options', options);
	return {
		props: {
			page,
			options,
			logo,
			status,
			menu
		},
		revalidate: 10
	}
}




export default function Home({ page, status }) {

	return <>

		<Head>
			{SEO.pageMeta(page)}
		</Head>

		<Style className="main">


			<BlockRenderer blocks={page?.acf?.blocks} status={status} />


		</Style>
	</>
}

const Style = styled.main`

	& > p {
		line-height: 1.6em;
	}

	& > span {
		display: inline;
		background-color: #f0f0f0;
		padding: 0.15rem 0.4rem;
		border-radius: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.5;
		color: #333;
		margin: 0.5rem 0;
	}
`
