"use client";

import React from "react";
import type SwiperType from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";
import styles from "./PostGallery.module.scss";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import FullScreenImage from "@/app/components/FullScreenImage/FullScreenImage";

interface PostGalleryProps {
  urls: string[];
}

export default function PostGallery({ urls }: PostGalleryProps) {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <>
      <h3>Galeria zdjęć:</h3>
      {isDialogOpen && (
        <FullScreenImage setIsDialogOpen={setIsDialogOpen} urls={urls} />
      )}
      <section className={styles["post__gallery-section"]}>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper: swiper && !swiper.destroyed ? swiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles["post__gallery"]}
        >
          {urls.map((url, index) => (
            <SwiperSlide key={index}>
              <div className={styles["post__gallery-container"]}>
                <Image
                  src={url}
                  alt={`Car image ${index}`}
                  className={styles["post__gallery-image"]}
                  width={450}
                  height={800}
                  onClick={() => setIsDialogOpen(true)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setSwiper}
          modules={[FreeMode, Thumbs]}
          pagination={{ type: "fraction" }}
          loop={true}
          spaceBetween={16}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          className={`thumbs ${styles["post__subgallery"]}`}
        >
          {urls.map((url, index) => (
            <SwiperSlide key={index}>
              <button className={styles["post__subgallery-btn"]}>
                <Image
                  width={450}
                  height={800}
                  loading="eager"
                  className={styles["post__subgallery-image"]}
                  src={url}
                  alt={`Zdjęcia galerii posta nr ${index + 1}`}
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
