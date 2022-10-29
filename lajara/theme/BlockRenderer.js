import React from 'react'
import HeroWordpress from 'src/blocks/Hero/Hero.Wordpress';
import ImageBannerWordpress from 'src/blocks/ImageBanner/ImageBanner.Wordpress';
import LogoBannerWordpress from 'src/blocks/LogoBanner/LogoBanner.Wordpress';
import SplitScreenWordpress from 'src/blocks/SplitScreen/SplitScreen.Wordpress';
import TimelineWordpress from 'src/blocks/Timeline/Timeline.wordpress';
import FeaturedPostsWordpress from 'src/blocks/FeaturedPosts/FeaturedPosts.Wordpress';
import PostPage from 'src/blocks/PostPage';
import Form from 'src/blocks/Form';
import LastPosts from 'src/blocks/LastPosts/LastPosts';
import ProjectGalleryWordpress from 'src/blocks/ProjectGallery/ProjectGallery.wordpress';

export default function BlockRenderer({ page, blocks, status }) {
    if (!blocks) return <></>;
    return blocks?.map((block, index) => {

        switch (block.acf_fc_layout) {
            case 'hero': return <HeroWordpress key={index} data={block} />
            case 'logo_grid': return <LogoBannerWordpress key={index} data={block} />
            case 'splitscreen': return <SplitScreenWordpress key={index} data={block} />
            case 'subhero': return <ImageBannerWordpress key={index} data={block} />
            case 'slider': return <TimelineWordpress key={index} data={block} />
            case 'featured_posts': return <FeaturedPostsWordpress key={index} data={block} />
            case 'last_posts': return <LastPosts key={index} data={block} />
            case 'residences': return <ProjectGalleryWordpress key={index} data={block} status={status} />
            case 'post_page': return <PostPage key={index} page={page} data={block} />
            case 'form': return <Form key={index} data={block} />
        }

    })
}
