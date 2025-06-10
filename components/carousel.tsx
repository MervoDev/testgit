// pages/-app.js
"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import logo from '../public/images/img1.jpg';
import logoA from '../public/images/img2.jpg';
export default function NextJsCarousel() {
  return (
    <div className="w-full max-w-4xl mx-auto -mt-20 relative">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        transitionTime={600}
      >
        <div>
          <img
            src="/images/img1.jpg"
            alt="Image 1"
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>
        <div>
          <img
            src="/images/img2.jpg"
            alt="Image 2"
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>
      </Carousel>
    </div>
  );
}
