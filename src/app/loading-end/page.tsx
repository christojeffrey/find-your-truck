"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Lilita_One } from "next/font/google";
const lilitaOne = Lilita_One({ subsets: ["latin"], weight: ["400"] });
import Lottie from "lottie-react";
import animationData from "../../../public/lottie/loading.json";
import Image from "next/image";
const funFact =
  "Lebih dari 90 persen pengunjung food truck menilai kualitas makanan pada food truck sebagai sangat baik atau bagus dan lebih dari 80 persen dari mereka menggunakan kata-kata seperti menyenangkan, mengasyikkan, baru, berbeda, dan unik ketika ditanya mengapa mereka makan di sana.";
export default function LoadingPage() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [isReady, setIsReady] = useState<boolean>(false);
  useEffect(() => {
    setName(localStorage.getItem("name") || "");

    // redirect after 5 seconds
    setTimeout(() => {
      // router.push("/questions/1");
    }, 5000);
    setIsReady(true);
  }, []);
  if (!isReady) return null;
  return (
    <div className="bg-[#116BD9] h-screen flex flex-col p-12 text-white text-center">
      <div className={`${lilitaOne.className} font-bold text-5xl mt-24`}>Terima kasih, {name}!</div>
      <div className="flex-1 flex flex-col justify-end items-center gap-8">
        <div className="relative w-full h-full">
          <Image src="/truck.png" alt="truck" fill className="object-contain" />
        </div>

        <Lottie animationData={animationData} className="size-48 flex justify-center items-center" loop={true} />

        <div className="font-bold">Tahukah kamu?</div>
        <div>{funFact}</div>
      </div>
    </div>
  );
}
