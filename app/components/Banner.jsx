"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import banner1 from "@/public/Images/banner1.png";
import banner2 from "@/public/Images/banner2.png";
import banner3 from "@/public/Images/banner3.png";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <Carousel autoPlay={true} interval={2000} infiniteLoop={true}>
        <div>
          <Image src={banner1} alt="banner1" className="rounded-3xl" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <Image src={banner2} alt="banner2" className="rounded-2xl" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <Image src={banner3} alt="banner3" className="rounded-3xl" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
}
