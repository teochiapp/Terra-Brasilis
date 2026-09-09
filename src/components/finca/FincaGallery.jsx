import { Fade } from 'react-awesome-reveal';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ─── Estilos ─────────────────────────────────────────────────────────────────

const FincaGallerySection = styled.section`
  width: 100%;
  background: #DFD8C7;
  display: flex;
  justify-content: center;
  padding: 20px 80px 60px;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 20px 40px 60px;
  }
  
  @media (max-width: 640px) {
    padding: 20px 0px 40px;
  }
`;

const FullImageContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  display: block;

  @media (max-width: 640px) {
    display: none;
  }
`;

const FullImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

const MobileWrapper = styled.div`
  display: none;
  width: 100%;

  @media (max-width: 640px) {
    display: block;
  }
`;

const CarouselRelativeWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: 16px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const CarouselItem = styled.img`
  flex: 0 0 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 8px;
  scroll-snap-align: center;
`;

const ChevronButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.85);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  color: #183029;
  
  &.prev {
    left: 28px; /* 20px padding + 8px in */
  }
  
  &.next {
    right: 28px;
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

  const carouselRef = useRef(null);

  const scrollNext = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
      
      if (isAtEnd) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollBy({ left: clientWidth + 16, behavior: 'smooth' });
      }
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      carouselRef.current.scrollBy({ left: -(clientWidth + 16), behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let interval;
    
    const startAutoplay = () => {
      interval = setInterval(() => {
        if (window.innerWidth <= 640) {
          scrollNext();
        }
      }, 3000);
    };

    startAutoplay();

    return () => clearInterval(interval);
  }, []);

  return (
    <FincaGallerySection>
      {/* Desktop y Tablet: Imagen completa */}
      <FullImageContainer>
        <Fade direction="up" triggerOnce duration={800}>
          <FullImage 
            src={`${process.env.PUBLIC_URL}/globalImgs/gallery-grid.webp`} 
            alt="Terra Brasilis Finca Full Gallery" 
            loading="lazy"
          />
        </Fade>
      </FullImageContainer>

      {/* Mobile: Carrusel autoplay */}
      <MobileWrapper>
        <Fade direction="up" triggerOnce duration={800}>
          <CarouselRelativeWrapper>
            <ChevronButton className="prev" onClick={scrollPrev} aria-label="Previous Image">
              <ChevronLeft size={20} />
            </ChevronButton>
            
            <CarouselContainer ref={carouselRef}>
              {images.map((imgName, index) => (
                <CarouselItem 
                  key={index}
                  src={`${process.env.PUBLIC_URL}/grid-gallery/${imgName}`} 
                  alt={`Terra Brasilis Finca view ${index + 1}`} 
                  loading="lazy"
                />
              ))}
            </CarouselContainer>
            
            <ChevronButton className="next" onClick={scrollNext} aria-label="Next Image">
              <ChevronRight size={20} />
            </ChevronButton>
          </CarouselRelativeWrapper>
        </Fade>
      </MobileWrapper>
    </FincaGallerySection>
  );
}

export default FincaGallery;
