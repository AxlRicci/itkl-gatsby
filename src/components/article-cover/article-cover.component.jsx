import React from 'react'
import './article-cover.styles.scss'

// Displays the feature cover and professional description.
// * Professional description is optional and only renders if the component's type is set to 'standard'.
// * Image optimization for screen widths 320px to 1440px. ** image has a max width of 50rem.

const ArticleCover = ({ name, alt, img, description}) => (
    <section className="cover__container">
        <img 
            className="cover__image"
            alt={alt}
            src={img}
        />
        <h1 className="cover__title">
            {name}
        </h1>
        <p className="cover__subtitle">
            {description}
        </p>
    </section>
)

export default ArticleCover
