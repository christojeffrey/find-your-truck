"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const funFact =
  'Food truck pertama kali muncul pada tahun 1950-an di Amerika Serikat. Pada awalnya, food truck dikenal sebagai "lunch wagon" dan biasanya beroperasi di sekitar lokasi kerja atau pabrik untuk memberikan makanan cepat saji kepada pekerja.';
export default function LoadingPage() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  useEffect(() => {
    setName(localStorage.getItem("name") || "");

    // redirect after 5 seconds
    setTimeout(() => {
      router.push("/questions/1");
    }, 5000);
  }, []);
  return (
    <div className="bg-[#116BD9] h-screen flex flex-col p-12 text-white text-center">
      {name && <div className="font-bold text-5xl mt-24">Hi, {name}!</div>}
      <div className="flex-1 flex flex-col justify-end gap-8">
        <div>...</div>
        <div className="font-bold">Tahukah kamu?</div>
        <div>{funFact}</div>
      </div>
    </div>
  );
}
