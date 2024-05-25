"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Lilita_One } from "next/font/google";
import Link from "next/link";
import { RevealList } from "next-reveal";
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { truckList } from "@/truck";
const lilitaOne = Lilita_One({ subsets: ["latin"], weight: ["400"] });

export default function Truck({ params }: { params: { truck: string } }) {
  const toScreenShotRef = useRef<HTMLDivElement>(null);
  const currentTruck = truckList[parseInt(params.truck) - 1];
  const [name, setName] = useState("");
  useEffect(() => {
    setName(localStorage.getItem("name") || "");
  }, []);

  if (!name) return null;
  return (
    <div ref={toScreenShotRef} className="">
      <RevealList interval={60} delay={200} className="min-h-screen flex flex-col text-[#116BD9]">
        <div className="h-12"></div>
        <div className="relative h-[50vh] w-full">
          <Image src="/trucks/bg.png" fill alt="bg" className="object-cover" />
          <Image src={currentTruck.image} fill alt="bg" className="pt-36 px-12 object-contain" />
          <div className={`${lilitaOne.className} absolute mt-4 text-center h-full w-full font-bold text-5xl`}>
            <div>Hai {name},</div>
            <div>Foodtruck mu adalah</div>
          </div>
        </div>

        {/* title and text */}
        <div>
          <div className={`${lilitaOne.className} text-center text-5xl font-bold mt-8`}>{currentTruck.name}</div>
          <div className="text-center mt-4">
            {currentTruck.texts.map((text) => {
              return (
                <span key={text.text} className={text.isBold ? "font-bold" : ""}>
                  {text.text}
                </span>
              );
            })}
          </div>
        </div>
        {/* buttons */}
        <div className="flex flex-col gap-2 justify-center items-center w-full mt-4">
          <Link href="/all-result">
            <Button className={`${lilitaOne.className} bg-[#F06B4C] h-12`}>CEK HASIL LAINNYA{">"}</Button>
          </Link>
          <div className="flex gap-2 ">
            <Button
              className="bg-[#116BD9] h-12 w-30 flex flex-col"
              onClick={() => {
                let thisDiv = toScreenShotRef.current;
                html2canvas(thisDiv!).then(function (canvas) {
                  let link = document.createElement("a");
                  link.download = `your-truck.png`;
                  link.href = canvas.toDataURL("image/png");
                  link.click();
                });
              }}
            >
              <div>Download</div>
              <div>Hasil</div>
            </Button>
            <Button className="bg-[#116BD9] h-12 w-30 flex flex-col">
              <div>Konsultasi lebih</div>
              <div>lanjut</div>
            </Button>
          </div>
          {/* share */}
          <div className="p-4 bg-[#D3EFA6] w-full">
            <div className="text-center font-bold">SHARE</div>
            <div className="flex gap-6 justify-center mt-4">
              <Image src="/share/1.png" alt="screenshot" width={24} height={24} className="object-contain" />
              <Image src="/share/2.png" alt="instagram" width={24} height={24} className="object-contain" />
              <Image src="/share/3.png" alt="tiktok" width={24} height={24} className="object-contain" />
              <Image src="/share/4.png" alt="twitter" width={24} height={24} className="object-contain" />
              <Image src="/share/5.png" alt="whatsapp" width={24} height={24} className="object-contain" />
            </div>
          </div>
        </div>
      </RevealList>
    </div>
  );
}
