import React from 'react'
import './article-contact.styles.scss'

const ArticleContact = ({ contactInfo, fullName }) => {

    return (
        <section className="contact__container">
            <h3 className="contact__title">
                Connect with {fullName.split(' ')[0]}:
            </h3>
            <ul className="contact__list">
                {
                    // Create list items for all non-empty contact info types.
                    contactInfo.map((contact) => (
                        <li className="contact__item" key={contact.contactType}>
                            <a href={contact.url} className="contact__link" rel="noopener noreferrer" target="_blank">{contact.contactType}</a>
                        </li>
                    ))
                }
            </ul>
        </section> 
    )
}

export default ArticleContact
