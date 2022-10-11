import React from 'react'
import { FeaturedPosts } from '..'
import { getImageSize, htmlToText, loadImage } from 'util/Utils'
import { useEffect, useState } from 'react'
import Wordpress from 'util/Wordpress'


export default function FeaturedPostsWordpress({ data }) {




    return <FeaturedPosts 
        posts = {data?.data_posts?.map((p) => {

            return {
                category: p?._embedded['wp:term']?.[0]?.[0]?.name,
                link: `/aktuellt/${p?.slug}`,
                title: p?.title.rendered,
                excerpt: htmlToText(p.excerpt.rendered),
                image: {
                    src: p?._embedded['wp:featuredmedia']?.[0].source_url,
                    alt: p?._embedded['wp:featuredmedia']?.[0].alt_text
                }
            }
        })}
    />
}
