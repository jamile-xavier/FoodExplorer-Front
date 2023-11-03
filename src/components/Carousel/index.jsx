import { useRef, useEffect } from "react";

// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper modules
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";

import { Container } from "./styles";

export function Carousel({ children, params }) {
  return (
    <>
      <Container>
        <Swiper
          loop={true}
          keyboard={{ enabled: true }}
          navigation={true}
          pagination={{ clickable: true }}
          a11y={{
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
          }}
          modules={[Navigation, Pagination, Keyboard]}
          {...params}
          className="myCarousel"
        >
          {children}
        </Swiper>
      </Container>
      <style jsx="true">
        {`
          .swiper-pagination-bullet {
            background: #ab4d55;
          }
        `}
      </style>
    </>
  );
}
