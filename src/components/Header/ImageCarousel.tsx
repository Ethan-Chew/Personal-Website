"use client";

import { useEffect, useRef, useState } from 'react';

export default function ImageCarousel() {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Adjust scrolling speed (px/slide)
  const slideWidth = 300;
  const scrollSpeed = 10;
  
  useEffect(() => {
    // Create a continuous scrolling effect by shifting the currentIndex
    const startCarousel = () => {
      timeoutRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + scrollSpeed;

          // If the next index reaches the end of the cloned images, reset back to the original images
          if (nextIndex >= slideWidth * images.length) {
            return 0;
          }

          return nextIndex;
        });
      }, 16); // Roughly 60 frames per second
    };

    startCarousel();

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [images.length]);

  useEffect(() => {
    if (currentIndex >= slideWidth * images.length) {
      // Reset the currentIndex without causing a visible jump
      setCurrentIndex(0);
    }
  }, [currentIndex, images.length]);

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div
        ref={carouselRef}
        className="flex space-x-4 transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex}px)`,
        }}
      >
        {/* Duplicating the images to achieve the infinite scroll */}
        {images.concat(images).map((image, index) => (
          <div key={index} className="min-w-[200px] sm:min-w-[250px] md:min-w-[300px] lg:min-w-[350px] flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
