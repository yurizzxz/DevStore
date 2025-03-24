"use client";
import { BadgePercent, Truck, Lock } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Topbar() {
  return (
    <div className="bg-purple">
      <div className="p-1 hidden lg:flex justify-between items-center w-full max-w-6xl mx-auto">
        <div className="flex items-center gap-2 font-semibold">
          <Lock className="size-4" />
          <p className="text-sm">Compras 100% seguras</p>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <Truck className="size-5" />
          <p className="text-sm">Frete Grátis para todo o Brasil</p>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <BadgePercent className="size-5" />
          <p className="text-sm">20% de desconto na primeira compra</p>
        </div>
      </div>

      <div className="p-1 lg:hidden flex justify-center">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="flex items-center gap-2 font-semibold justify-center">
              <Lock className="size-4" />
              <p className="text-sm">Compras 100% seguras</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-2 font-semibold justify-center">
              <Truck className="size-4" />
              <p className="text-sm">Frete Grátis para todo o Brasil</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-2 font-semibold justify-center">
              <BadgePercent className="size-4" />
              <p className="text-sm">20% de desconto na primeira compra</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
