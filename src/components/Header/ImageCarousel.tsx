"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll'

export default function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true })
  ])
  const images = [
    'https://via.placeholder.com/300x200?text=Image+1',
    'https://via.placeholder.com/300x200?text=Image+2',
    'https://via.placeholder.com/300x200?text=Image+3',
    'https://via.placeholder.com/300x200?text=Image+4',
    'https://via.placeholder.com/300x200?text=Image+5',
    'https://via.placeholder.com/300x200?text=Image+6',
    'https://via.placeholder.com/300x200?text=Image+7',
    'https://via.placeholder.com/300x200?text=Image+8',
  ];

  return (
    <div className="embla my-10 sm:my-4 md:my-16 h-fit" ref={emblaRef}>
      <div className="embla__container">
        {images.map((image, index) => (
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="embla__slide"
          />
        ))}
      </div>
    </div>
  );
}