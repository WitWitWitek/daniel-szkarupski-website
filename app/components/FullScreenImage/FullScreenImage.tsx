import React, { Children } from "react";
import styles from "./FullScreenImage.module.scss";
import Image from "next/image";
import type SwiperType from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { IoClose } from "react-icons/io5";

type Props = {
  urls: string[];
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FullScreenImage({ urls, setIsDialogOpen }: Props) {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);

  return (
    <dialog className={styles.overlay}>
      <div className={styles.dialog}>
        <button
          className={styles["dialog__btn"]}
          onClick={() => setIsDialogOpen(() => false)}
        >
          <IoClose />
        </button>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper: swiper && !swiper.destroyed ? swiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles["dialog__gallery"]}
        >
          {urls.map((url, index) => (
            <SwiperSlide key={index}>
              <div className={styles["dialog__gallery-container"]}>
                <Image
                  src={url}
                  alt={`Car image ${index}`}
                  className={styles["dialog__gallery-image"]}
                  width={450}
                  height={800}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </dialog>
  );
}
