import React from 'react'
import './header-gallery.styles.scss';

const HeaderGallery = ({data, mainImage, sideTopImage, sideBottomImage }) => {
  return (
  <header className="header-gallery">
      <div className="header-gallery__item header-gallery__item--main">
          <img 
              className="header-gallery__img" 
              alt={mainImage.alt}
              src={mainImage.image.asset.fluid.srcWebp}
              />
      </div>
      <div className="header-gallery__item header-gallery__item--side-1">
          <img 
              className="header-gallery__img" 
              alt={sideTopImage.alt}
              src={sideTopImage.image.asset.fluid.srcWebp}
          />
      </div>
      <div className="header-gallery__item header-gallery__item--side-2">
          <img 
              className="header-gallery__img"
              alt={sideBottomImage.alt}
              src={sideBottomImage.image.asset.fluid.srcWebp}
          />
      </div>
  </header>
)}

export default HeaderGallery