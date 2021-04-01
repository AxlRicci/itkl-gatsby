import React from 'react'

import { Link } from 'gatsby'

import './mosaic-issue-gallery.styles.scss'

// Renders a mosaic of issue covers. 
// Cover sizes and placements vary depending on featured and FeatureRank properties.
// Props:
// 1. An array of issues

const MosaicIssueGallery = ({featuredInterviews, features}) => {
        // create list of featured interviews so featured can be identified from the list.
    const featuredIds = featuredInterviews.map(interview => interview.id)

    return (
        <section className="issue-gallery">
            {
                features.map((feature) => (
                    <div className={featuredIds.includes(feature.id) ? `issue-gallery__featured-item issue-gallery__featured-item--${featuredIds.indexOf(feature.id) + 1}` : `issue-gallery__item`} key={feature.id}> 
                        <Link to={`features/${feature.slug.current}`}>
                            <img
                                className="issue-gallery__img" 
                                alt={feature.alt}
                                src={feature.interviewCover.image.asset.fluid.srcWebp}
                            />
                        </Link>
                        <span className="sr-only">{feature.alt}</span>
                    </div>
                ))
            }
        </section>
    )
}

export default MosaicIssueGallery;