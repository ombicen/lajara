import React from 'react'
import Head from 'next/head'
import SEO from 'util/SEO'
import { ImageBanner } from 'src/blocks/ImageBanner/ImageBanner'
import { getImageSize } from 'util/Utils'


const PostPage = ({ post }) => {

    let image = post['_embedded']['wp:featuredmedia']?.[0]

    return <>
            
            <Head>
                {SEO.postMeta(post)}
            </Head>

            <ImageBanner 
                html={`
                <div class="spacer l"></div>
                <h1 style="margin-bottom: 1rem;">${post.title.rendered}</h1>
                <p>${post['_embedded']['wp:term']?.[0]?.[0]?.name}</p>
                <div class="spacer l"></div>
                `}
                image={{
                    src: image ? getImageSize(image, '2048x2048') : null,
                    alt: image?.alt_text
                }}
            />

            <div className="spacer l"></div>

            <div className="contained extra-small">
                <div className="text" dangerouslySetInnerHTML={{__html: post.content.rendered}} />
            </div>

            <div className="spacer xl"></div>
            
        </>
}

export { PostPage }