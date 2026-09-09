import { Fade } from 'react-awesome-reveal';
import React from 'react';
import styled from 'styled-components';

// ─── Estilos ─────────────────────────────────────────────────────────────────

const FincaGallerySection = styled.section`
  width: 100%;
  background: #DFD8C7;
  display: flex;
  justify-content: center;
  padding: 20px 80px 60px;

  @media (max-width: 1024px) {
    padding: 20px 40px 60px;
  }
  
  @media (max-width: 640px) {
    padding: 20px 20px 40px;
  }
`;

const GalleryGrid = styled.div`
  max-width: 1280px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  
  /* Aspect ratio original de Figma para escritorio */
  aspect-ratio: 632 / 232;

  /* Aspect ratio razonable para tablet */
  @media (max-width: 1024px) {
    aspect-ratio: 16 / 9;
  }

  /* Aspect ratio razonable para mobile */
  @media (max-width: 640px) {
    aspect-ratio: 4 / 3;
  }
`;


// ─── Componente ───────────────────────────────────────────────────────────────

function FincaGallery() {
  const images = [
    'primera.webp',
    'segunda.webp',
    'tercera.webp',
    'cuarta.webp'
  ];

  return (
    <FincaGallerySection>
      <GalleryGrid>
        <Fade cascade damping={0.15} direction="up" triggerOnce duration={800} style={{ display: 'contents' }}>
          {images.map((imgName, index) => (
            <GalleryImage 
              key={index}
              src={`${process.env.PUBLIC_URL}/grid-gallery/${imgName}`} 
              alt={`Terra Brasilis Finca view ${index + 1}`} 
              loading="lazy"
            />
          ))}
        </Fade>
      </GalleryGrid>
    </FincaGallerySection>
  );
}

export default FincaGallery;
