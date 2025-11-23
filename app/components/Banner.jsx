"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import image1 from "@/public/Images/ss1.png";
import image2 from "@/public/Images/ss2.png";
import image3 from "@/public/Images/ss3.png";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <Carousel autoPlay={true}>
        <div>
          <Image src={image1} alt="image1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <Image src={image2} alt="image2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <Image src={image3} alt="image3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}
