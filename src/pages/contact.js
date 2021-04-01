import React from 'react'
import Layout from '../layouts/layout'
import SEO from '../components/seo'

import { graphql } from 'gatsby'
import ContactForm from '../components/contact-form/contact-form.component'

import './contact-page.styles.scss'

// Renders the contact page and form component.

const ContactPage = ({data: {sanitySiteContent}}) => {
    return (
        <Layout>
            <SEO 
                title={'Contact'}
                description={'Get in touch with In the Know Local'}
                pathname={'/contact'}
            />
            <main className="container">
                <div className="contact-form__container">
                    <section className="contact-form__content">
                        <h1 className="contact-form__title contact-form__title--main-title">Contact Us!</h1>
                        <h3 className="contact-form__title contact-form__title--subtitle">You have questions, we have answers!</h3>
                        <p className="contact-form__info">
                            <span>
                                Email us: &nbsp;
                                <a href="mailto:sharon@influencefactor.ca" className="contact-form__link contact-form__link--email">
                                    sharon@influencefactor.ca
                                </a>
                            </span>
                            <span>
                                Tweet to us: &nbsp;
                                <a href="mailto:sharon@influencefactor.ca" className="contact-form__link contact-form__link--twitter">
                                    @influencefactor
                                </a>
                            </span>
                            <span>
                                Or fill in your information below and we'll get back to you pronto!
                            </span>
                        </p>
                        <ContactForm/>
                    </section>
                    <img src={sanitySiteContent.contactPageImage.image.asset.fluid.srcWebp} alt={sanitySiteContent.alt} className="contact-form__image"/>
                </div>
            </main>
        </Layout>
    )
}
    
export default ContactPage

export const query = graphql`
query contactPageQuery {
    sanitySiteContent(_id: {eq: "78272e09-0638-4ded-958e-4a5a84646424"}) {
      contactPageImage {
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
`