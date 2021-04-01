import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../layouts/layout'
import SEO from '../components/seo'

import './issue-list.styles.scss'

// Fetches all features from Firebase and renders out a grid of feature covers.
// * Each cover has a link to feature section using the feature's slug.
// * The link will change if the slug is 'joette-fielding' -- A legacy feature this will route to the legacy article page.

const IssueList = ({ data }) => {
    return (
        <Layout>
            <SEO 
                title={'Issues'}
                description={'In the Know Local Issue Archive'}
                pathname={'/issues'}
            />
            <main className="container">
                  <section className="issue__grid">
                    {
                      data.allSanityFeatureInterview.nodes.map((feature) => (
                          <Link key={feature.slug.current} to={`/features/${feature.slug.current}`}>
                            <div className="">
                              <img
                                  className="issue__img"
                                  alt={`${feature.basicInformation.fullName}'s In The Know Local Magazine Cover for ${feature.basicInformation.area}`}
                                  src={feature.interviewCover.image.asset.fluid.srcWebp}
                              />
                            </div>
                          </Link>
                      ))
                    }
                  </section>
            </main>
        </Layout>
    )
}
    
export default IssueList

export const query = graphql`
query IssueList {
    allSanityFeatureInterview {
      nodes {
        slug {
          current
        }
        basicInformation {
          area
          description
          fullName
        }
        interviewCover {
          image {
            asset {
              fluid {
                srcWebp
              }
            }
          }
        }
      }
    }
  }
  
`