import React from 'react'
import { PostPage } from 'src/pages/Post/Post'
import Wordpress from 'util/Wordpress';

export async function getStaticProps(context) {

    const post = await Wordpress.getPostBySlug(context.params.slug);
    const options = await Wordpress.getOptions()
    const logo = await Wordpress.getLogo()
    const menu = await Wordpress.getMenu()



    if (post == undefined) {
        return {
            notFound: true,
        }
    }

	return {

		props: { 
            post,
            options,
            logo,
            menu
		},
        revalidate: 10
	}
}

export async function getStaticPaths(context) {

    const posts = await Wordpress.getPosts();

    return {
        paths: posts?.posts.map(p => `/aktuellt/${p.slug}`),
        fallback: 'blocking'
    }
}


export default function Post( props ) {
    return <PostPage {...props} />
}