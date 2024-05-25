"use client";
import Navbar from "@/components/navbar";
import Image from "next/image";

import { Lilita_One } from "next/font/google";
import { truckList } from "../trucks/[truck]/page";
import { Button } from "@/components/ui/button";
import { RevealList } from "next-reveal";
const lilitaOne = Lilita_One({ subsets: ["latin"], weight: ["400"] });
export default function AllResult() {
  return (
    <div className="relative flex min-h-screen h-full flex-col text-[#116BD9]">
      <div className="z-20 flex flex-col h-full">
        <Navbar />
      </div>
      <div className="z-20 flex flex-col justify-center mb-12">
        <div className="text-center m-4">
          <div className={`${lilitaOne.className} text-3xl font-semi-bold`}>Hasil Lainnya...</div>
          <div>Tidak puas dengan hasilnya? Berikut pilihan Food Truck lainnya:</div>
        </div>

        <RevealList interval={60} delay={200} className="flex flex-col gap-4 mx-4 mb-4">
          {truckList.map((truck, index) => {
            return (
              <div key={index} className={`bg-[#${truck.color}] flex p-4 gap-2 items-center`}>
                <div className="relative w-48 h-24 flex justify-center items-center">
                  {/* white bg */}
                  <div className="w-36 h-24 bg-white rounded-xl"></div>
                  {/* truck image */}
                  <Image src={truck.image} alt="truck" fill className="object-contain" />
                </div>
                {/* text */}
                <div className="flex-1">
                  {/* title */}
                  <div className={`${lilitaOne.className} text-3xl`}>{truck.name}</div>
                  {/* desc */}
                  <div className="text-xs">
                    {truck.texts.map((text) => {
                      return (
                        <span key={text.text} className={text.isBold ? "font-bold" : ""}>
                          {text.text}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </RevealList>
        <Button className="bg-[#116BD9] mx-auto h-12 w-30 flex flex-col">
          <div>Konsultasi lebih</div>
          <div>lanjut</div>
        </Button>
      </div>
      <div className="absolute bottom-0 w-full h-[50vh]">
        <div className="relative h-full w-full">
          <Image src={"/bg.png"} alt="bg" fill className="object-cover" objectPosition="end" />
        </div>
        <div className="p-4 bg-[#D3EFA6] w-full">
          <div className="text-center font-bold">SHARE</div>
          <div className="flex gap-6 justify-center mt-4">
            <Image src="/share/2.png" alt="instagram" width={24} height={24} className="object-contain" />
            <Image src="/share/3.png" alt="tiktok" width={24} height={24} className="object-contain" />
            <Image src="/share/4.png" alt="twitter" width={24} height={24} className="object-contain" />
            <Image src="/share/5.png" alt="whatsapp" width={24} height={24} className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
