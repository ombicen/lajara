import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'


export default function Post({ post, posts, preview }) {
    const router = useRouter()
    const morePosts = posts?.edges

    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <Layout>
            <Container>
                <Header />
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article>
                            <Head>
                                <title>
                                    {post.title} | Next.js Blog Example with {CMS_NAME}
                                </title>
                                <meta
                                    property="og:image"
                                    content={post.featuredImage?.sourceUrl}
                                />
                            </Head>
                            <PostHeader
                                title={post.title}
                                coverImage={post.featuredImage}
                                date={post.date}
                                author={post.author}
                                categories={post.categories}
                            />
                            <PostBody content={post.content} />
                            <footer>
                                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
                            </footer>
                        </article>

                        <SectionSeparator />
                        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                    </>
                )}
                <div>asoasda</div>
            </Container>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({
    params,
    preview = false,
    previewData,
}) => {
    const data = await getPostAndMorePosts(params?.slug, preview, previewData)
    const menuItems = await fetchAPI(`
    {
      menu(id: "dGVybToy") {
        name
        slug
        menuItems {
          edges {
            node {
              label
              url
              path
            }
          }
        }
      }
      customLogo {
        file
        height
        width
      }
    }
    `)
    return {
        props: {
            menuItems,
            preview,
            post: data.post,
            posts: data.posts,
        },
        revalidate: 10,
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const allPosts = await getAllPostsWithSlug()

    return {
        paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
        fallback: true,
    }
}