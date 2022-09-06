import { GetStaticProps } from 'next'
import Container from '../components/container'
import { fetchAPI } from '../lib/api'

export default function Index({ homePost }) {
  // console.log(homePost)

  return (
    <>

      <Container>

      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
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
  const homePost = await fetchAPI(` {
    pageBy(uri: "/") {
      id
      title
      slug
      startsida_acf {
        bildspel {
          beskrivning
          huvudRubrik
          knappar {
            knappText
            lank
          }
          overRubrik
          heroBild {
            sourceUrl
            title
          }
        }
        samarbetspartner {
          sourceUrl
          title
        }
        inlaggSammanfattning {
          __typename
          ... on Page {
            id
            title
            content
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
  
    }
    bostader {
      nodes {
        title
        bostad_acf {
          beskrivning {
            rubrik
            text
          }
        }
      }
    }
    posts {
      nodes {
        excerpt
        featuredImage {
          node {
            sourceUrl
            title
          }
        }
        title
      }
    }
  }`)
  return {
    props: { homePost, menuItems },
    revalidate: 3600,
  }
}