import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/layout'

import './about-page.styles.scss'

// Renders the about page.

const AboutPage = ({data: {sanitySiteContent}}) => (
    <Layout>
        <main className="container">
            <article className="about">
                <h1 className="about__title about__title--main-title">{sanitySiteContent.aboutTitle}</h1>
                <h2 className="about__title about__title--subtitle">{sanitySiteContent.aboutSubtitle}</h2>
                <img src={sanitySiteContent.aboutImage.image.asset.fluid.srcWebp} alt={sanitySiteContent.aboutImage.alt} className="about__image"/>
                <div className="about__description">
                    <p>{sanitySiteContent.aboutBody}</p>
                </div>
            </article>
        </main>
    </Layout>
)
    
export default AboutPage

export const query = graphql`
query AboutPageQuery {
    sanitySiteContent(_id: {eq: "78272e09-0638-4ded-958e-4a5a84646424"}) {
        aboutTitle
        aboutSubtitle
        aboutImage {
        image {
            asset {
            fluid {
                srcWebp
            }
            }
        }
        alt
        }
        aboutBody
    }
  }
`