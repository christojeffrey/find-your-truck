import Navbar from "@/components/navbar";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
// const questions = [];
const questions = "Bagaimana kamu mengurus food truck mu?";
const location: "top" | "bottom" = "bottom";
const options = ["Investasi ( sebagai pemodal saja)", "Bisnis Utama", "Usaha Sampingan"];

export default function QuestionsPage({ params }: { params: { number: string } }) {
  console.log("parse int", parseInt(params.number));
  return (
    <div className="relative h-screen flex flex-col">
      <div className="z-20 flex flex-col h-full">
        <Navbar />

        <div className="p-4">
          <Progress className="my-4" />
        </div>
        {/* questions detail */}
        <div className={`flex-1 flex flex-col ${location === "top" ? "justify-start" : "justify-end"}`}>
          <div className="h-1/2 p-12 text-center">
            <div className="font-bold text-xl mb-8">{questions}</div>
            <div className="flex flex-col gap-4">
              {options.map((option: string) => {
                return <Option key={option}>{option}</Option>;
              })}
            </div>
          </div>
        </div>
      </div>
      <Image src="/questions/1/bg.png" alt="bg" fill className="object-cover " />
    </div>
  );
}

function Option({ children }: any) {
  return <div className="p-4 border-2 border-black rounded-full bg-white">{children}</div>;
}
