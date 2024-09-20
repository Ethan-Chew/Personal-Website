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
  
  // Correctly typed ref for the carousel div element
  const carouselRef = useRef<HTMLDivElement | null>(null); 

  const speed = 10; // Speed of the scrolling in pixels per frame

  useEffect(() => {
    if (!carouselRef.current) return; // Ensure carouselRef is not null before accessing it

    const totalWidth = carouselRef.current.scrollWidth; 
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndex = prev + speed;
        return newIndex >= totalWidth ? 0 : newIndex; // Reset the index when it reaches the end
      });
    }, 50); // Smooth scrolling every 50ms

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={carouselRef} // Attach the ref to the carousel container
        className="flex space-x-4"
        style={{
          transform: `translateX(-${currentIndex}px)`, // Scroll horizontally
        }}
      >
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
