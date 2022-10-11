import Settings from "./Settings"
// import Wordpress from "wordpress-nextjs"
import Wordpress from "./Wordpress"
import { getPageUrl } from "./Wordpress"
import { htmlToText } from './Utils'

class SEO {


    /**
     * Renders the complete metadata for a page object.
     * 
     * @param {Wordpress Page} page Page object to exctract metadata from.
     */
    static pageMeta(page) {
        
        let title = page?.acf?.meta_title ?? Settings.META.TITLE
        let description = page?.acf?.meta_description ?? Settings.META.DESCRIPTION
        let localLink = getPageUrl(page)
        let canonical = page?.acf?.meta_canonical_url ?? Settings.WEBSITE_URL + (localLink != 'undefined' ? localLink : '')
        
        let thumbnail = page?.acf?.featured_image?.url
        let thumbnail_alt = page?.acf?.featured_image?.alt
        
        let type = 'website'

        return <>
            <title>{title}</title>
            <meta name="description" key="desc" content={description} />

            <meta name="robots" content="all" />
            <link rel="canonical" key="canonical" href={canonical} />
            
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={thumbnail} />
            <meta property="og:image:alt" content={thumbnail_alt} />
            <meta property="og:type" content={type} />
            <meta property="og:locale" content={`se_SE`} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta property="og:site_name" content={Settings.SITE_NAME} />
            <meta property="og:url" content={Settings.WEBSITE_URL + getPageUrl(page)} />

            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `
                {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "url": "${Settings.WEBSITE_URL}",
                    "logo": "${Settings.WEBSITE_LOGO}"
                }
            `}}/>

            
        </>
    }




    /**
     * Renders the complete metadata for a product object.
     * 
     * @param {Wordpress Post} post Post object to exctract metadata from.
     */
     static projectMeta(project) {
        



        let title = project?.title?.rendered ?? Settings.META.TITLE

        let description = htmlToText(project?.excerpt?.rendered) ?? Settings.META.DESCRIPTION
        let featuredMedia = project?.acf?.featured_image;
        let thumbnail = featuredMedia && featuredMedia.url
        let thumbnail_alt = featuredMedia && featuredMedia.alt
        let url = Settings.WEBSITE_URL + project.slug
        let type = 'post'

        return <>
            <title>{title}</title>
                <meta name="description" key="desc" content={description} />

            <meta name="robots" content="all" />
            <link rel="canonical" key="canonical" href={url} />
            
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={thumbnail} />
            <meta property="og:image:alt" content={thumbnail_alt} />
            <meta property="og:type" content={type} />
            <meta property="og:locale" content={`se_SE`} />
            <meta property="og:site_name" content={Settings.SITE_NAME} />
            <meta property="og:url" content={url} />
        </>
    }




    /**
     * Renders the complete metadata for a post object.
     * 
     * @param {Wordpress Post} post Post object to exctract metadata from.
     */
    static postMeta(post) {
        
        let title = post.title.rendered ?? Settings.META.TITLE
        let description = htmlToText(post.excerpt.rendered) ?? Settings.META.DESCRIPTION
        let featuredMedia = post._embedded['wp:featuredmedia'];
        let thumbnail = featuredMedia && featuredMedia[0] && featuredMedia[0].source_url
        let thumbnail_alt = featuredMedia && featuredMedia[0] && featuredMedia[0].alt_text
        let url = Settings.WEBSITE_URL + post.slug
        let type = 'article'


        return <>
            <title>{title}</title>
            <meta name="description" key="desc" content={description} />

            <meta name="robots" content="all" />
            <link rel="canonical" key="canonical" href={url} />
            
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={thumbnail} />
            <meta property="og:image:alt" content={thumbnail_alt} />
            <meta property="og:type" content={type} />
            <meta property="og:locale" content={`se_SE`} />
            <meta property="og:site_name" content={Settings.SITE_NAME} />
            <meta property="og:url" content={url} />

            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `
                {
                    "@context": "https://schema.org",
                    "@type": "NewsArticle",
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "${Settings.WEBSITE_URL}/nyheter"
                    },
                    "author": {
                        "@type": "Organization",
                        "name": "${Settings.SITE_NAME}",
                        "url": "${Settings.WEBSITE_URL}"
                    },
                    "headline": "${title}",
                    "image": [
                        "${thumbnail}"
                    ],
                    "datePublished": "${post.date}",
                    "dateModified": "${post.modified}",
                    "publisher": {
                        "@type": "Organization",
                        "name": "${Settings.SITE_NAME}",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "${Settings.WEBSITE_LOGO}"
                        }
                    }
                  }
            `}}/>
        </>
    }


   



}


export default SEO;