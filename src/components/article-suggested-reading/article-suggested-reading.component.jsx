import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'
import './article-suggested-reading.styles.scss'

// Renders a row of 6 suggested issues.
// ** Filtering suggested articles needs to be done before passing the prop as component does not filter.

const ArticleSuggestedReading = ({data}) => {
    console.log(data)
    return (
        <StaticQuery query={query} render={({allSanityFeatureInterview}) => {
            console.log(allSanityFeatureInterview)
            return (
            <section className="suggested-reading__container">
                <h3 className="suggested-reading__intro">Suggested Reading</h3>
                <div className="suggested-reading__issue-list">
                    {
                        allSanityFeatureInterview.nodes.map((feature) => (
                            <Link to={`/features/${feature.slug.current}`} key={feature.slug.current}>
                                <img src={feature.interviewCover.image.asset.fluid.srcWebp} className="suggested-reading__cover-img" alt={feature.interviewCover.alt}/>
                            </Link>
                        ))
                    }
                </div>
            </section>
        )}} />
)}

export default ArticleSuggestedReading

// Add this into filter to not suggest the same article -> filter: {_id: {ne: ""}},
export const query = graphql`
    query suggestedQuery {
        allSanityFeatureInterview(limit: 6) {
        nodes {
            slug {
            current
            }
            interviewCover {
            image {
                asset {
                fluid {
                    srcWebp
                }
                }
            }
            alt
            }
        }
        }
    }
`