import React, { useState } from 'react';

// Set the number of images in the gallery (Change it if you have more images or add more images)
const totalImages = 12;
const galleryImages = Array.from({ length: totalImages }, (_, index) => ({
  src: `/img/gallery${index + 1}.jpg`,
  alt: `Gallery image ${index + 1}`
}));

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const [visibleCount, setVisibleCount] = useState(8);
  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const visibleImages = galleryImages.slice(0, visibleCount);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };
  const closeLightbox = () => {
    setCurrentImage(null);
    setLightboxOpen(false);
  };

  return (
    <section className="gallery container" id="gallery">
      <h2 className="gallery__title">Gallery</h2>
      <hr className="gallery__title--line" />

      <div className="gallery__grid">
        {visibleImages.map((img, index) => (
          <div
            key={index}
            className="gallery__item"
            onClick={() => openLightbox(img)}
          >
            <img src={img.src} alt={img.alt} className="gallery__img" />
          </div>
        ))}
      </div>

      {visibleCount < galleryImages.length && (
        <button className="gallery__see-more" onClick={handleSeeMore}>
          See More
        </button>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <span className="lightbox__close" onClick={closeLightbox}>
              &times;
            </span>
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="lightbox__img"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
