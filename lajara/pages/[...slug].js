import React from 'react'
import Wordpress from '../util/Wordpress'
import Head from "next/head";
import BlockRenderer from 'theme/BlockRenderer';
import SEO from 'util/SEO';
import { localLink } from '../util/Wordpress';
import loadAdditionalData from 'util/loadAdditionalData';


export async function getStaticProps(context) {

	const page = await Wordpress.getPageBySlug(context.params.slug) ?? null;
	const status = await Wordpress.getTaxonomi('status') ?? null;
	const options = await Wordpress.getOptions() ?? null;
	const logo = await Wordpress.getLogo() ?? null;
	const menu = await Wordpress.getMenu() ?? null;

	if (!page) {
		return {
			notFound: true,
		}
	}

	await loadAdditionalData(page?.acf?.blocks)

	return {
		props: {
			page,
			status,
			options,
			logo,
			menu
		},
		revalidate: 60
	}
}


export async function getStaticPaths(context) {

	const pages = await Wordpress.getPages();

	let paths = pages.map(p => `${localLink(p.link)}`).filter(l =>
		l != '' &&
		l != '/bostader' &&
		l != '/aktuellt'
	);

	return {
		paths,
		fallback: 'blocking'
	}
}

export default function Page({ page, status }) {

	return (
		<>

			<Head>
				{SEO.pageMeta(page)}
			</Head>

			<BlockRenderer page={page} blocks={page?.acf?.blocks} status={status} />

		</>
	)
}
