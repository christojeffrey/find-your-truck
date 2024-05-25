"use client";
import Navbar from "@/components/navbar";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Lilita_One, Chivo } from "next/font/google";
const lilitaOne = Lilita_One({ subsets: ["latin"], weight: ["400"] });
const chivo = Chivo({ subsets: ["latin"] });
import { RevealList } from "next-reveal";

const allQuestions = [
  { questionSentence: "Bagaimana kamu mengurus food truck mu?", location: "bottom", options: ["Investasi ( sebagai pemodal saja)", "Bisnis Utama", "Usaha Sampingan"], image: "/questions/1/bg.png" },
  {
    questionSentence: "Bagaimana kamu menggunakan profit dari Food Truckmu?",
    location: "top",
    options: ["Keluarga (ibadah Haji & asuransi Orang Tua, pendidikan adik)", "Pengembangan Personal (menikah, biaya rumah, pendidikan)", "Pengembangan Bisnis"],
    image: "/questions/2/bg.png",
  },
  { questionSentence: "Berapa kisaran jumlah Modal Usaha?", location: "top", options: ["Rp. 5.000.000 - Rp. 9.000.000", "Rp. 10.000.000 - Rp. 19.000.000", "Rp. 20.000.000 +"], image: "/questions/3/bg.png" },
  { questionSentence: "Berapa proyeksi persentase biaya Marketing dan operasional dari modal yang dimiliki?", location: "top", options: ["15%", "50%", "75%"], image: "/questions/4/bg.png" },
  { questionSentence: "Apa yang ingin  dijual oleh Truckmu?", location: "bottom", options: ["Makanan Utama", "Minuman", "Snack"], image: "/questions/5/bg.png" },
  { questionSentence: "Jenis kuliner apa yang ingin dijual?", location: "top", options: ["Western", "Asian", "Indonesia"], image: "/questions/6/bg.png" },
  { questionSentence: "Apa preferensi kendaraan sehari-harimu?", location: "top", options: ["Mobil (panas dan hujan tetep aman)", "Motor (satset)", "Sepeda (sehat dan hemat)"], image: "/questions/7/bg.png" },
  { questionSentence: "Jenis kendaraan apa yang dirasa efektif untuk dipakai berniaga untukmu?", location: "top", options: ["Motor / Sepeda", "Mobil / Minivan / Losbak", "Truk"], image: "/questions/8/bg.png" },
  { questionSentence: "Berapa banyak kawan jualan barenganmu?", location: "bottom", options: ["Sendiri", "Berdua", "Lebih dari 5 orang"], image: "/questions/9/bg.png" },
  { questionSentence: "Ingin jualan di foodtruck sama siapa sih?", location: "bottom", options: ["Keluarga", "Teman", "Siapa saja asal professional"], image: "/questions/10/bg.png" },
  { questionSentence: "Kapan saja kamu akan berjualan?", location: "bottom", options: ["Setiap hari", "Weekday saja", "Jikalau ada event saja"], image: "/questions/11/bg.png" },
  { questionSentence: "Waktunya meluncurkan usahamu! Di mana kamu akan berjualan? ", location: "top", options: ["Daerah Sibuk (pasar, sekolah, dll.)", "Keliling", "Depan Sekolah / Kantor"], image: "/questions/12/bg.png" },
];
export default function QuestionsPage({ params }: { params: { number: string } }) {
  const router = useRouter();
  const currentQuestion = allQuestions[parseInt(params.number) - 1];
  function handleOptionSelect(value: number) {
    const answers = JSON.parse(localStorage.getItem("answers") || "{}");
    console.log("answers", answers);
    answers[parseInt(params.number)] = value;
    localStorage.setItem("answers", JSON.stringify(answers));
    if (parseInt(params.number) < allQuestions.length) {
      router.push(`/questions/${parseInt(params.number) + 1}`);
    } else router.push("/loading-end");
  }
  return (
    <div className="relative h-screen flex flex-col">
      <div className="z-20 flex flex-col h-full">
        <Navbar />

        <div className="p-4">
          <Progress className="my-4" value={(parseInt(params.number) / allQuestions.length) * 100} />
        </div>
        {/* questions detail */}
        <div className={`flex-1 flex flex-col ${currentQuestion.location === "top" ? "justify-start" : "justify-end"}`}>
          <RevealList interval={60} delay={200} className="p-6 text-center">
            <div className={`font-bold text-3xl mb-8 ${lilitaOne.className}`}>{currentQuestion.questionSentence}</div>
            <div className="flex flex-col gap-4">
              {currentQuestion.options.map((option: string, index) => {
                return (
                  <Option key={option} value={index + 1} onSelect={handleOptionSelect}>
                    {option}
                  </Option>
                );
              })}
            </div>
          </RevealList>
        </div>
      </div>
      <Image src={currentQuestion.image} alt="bg" fill className="object-cover " />
    </div>
  );
}

function Option({ children, onSelect, value }: any) {
  return (
    <div
      className={`${chivo.className} p-4 border-2 border-black rounded-full bg-white hover:cursor-pointer hover:bg-gray-100 transition-all`}
      onClick={(e) => {
        onSelect(value);
      }}
    >
      {children}
    </div>
  );
}
