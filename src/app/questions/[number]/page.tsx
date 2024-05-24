"use client";
import Navbar from "@/components/navbar";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
// const questions = [];
// const questions = "Bagaimana kamu mengurus food truck mu?";
// const location: "top" | "bottom" = "bottom";
// const options = ["Investasi ( sebagai pemodal saja)", "Bisnis Utama", "Usaha Sampingan"];

const allQuestions = [
  { questionSentence: "Bagaimana kamu mengurus food truck mu?", location: "bottom", options: ["Investasi ( sebagai pemodal saja)", "Bisnis Utama", "Usaha Sampingan"], image: "/questions/1/bg.png" },
  { questionSentence: "Bagaimana kamu mengurus food truck mu? 2", location: "bottom", options: ["Investasi ( sebagai pemodal saja)", "Bisnis Utama", "Usaha Sampingan"], image: "/questions/1/bg.png" },
  { questionSentence: "Bagaimana kamu mengurus food truck mu? 3", location: "bottom", options: ["Investasi ( sebagai pemodal saja)", "Bisnis Utama", "Usaha Sampingan"], image: "/questions/1/bg.png" },
];
export default function QuestionsPage({ params }: { params: { number: string } }) {
  const currentQuestion = allQuestions[parseInt(params.number) - 1];
  function handleOptionSelect(value: number) {
    const answers = JSON.parse(localStorage.getItem("answers") || "{}");
    console.log("answers", answers);
    answers[parseInt(params.number)] = value;
    localStorage.setItem("answers", JSON.stringify(answers));
  }
  return (
    <div className="relative h-screen flex flex-col">
      <div className="z-20 flex flex-col h-full">
        <Navbar />

        <div className="p-4">
          <Progress className="my-4" />
        </div>
        {/* questions detail */}
        <div className={`flex-1 flex flex-col ${currentQuestion.location === "top" ? "justify-start" : "justify-end"}`}>
          <div className="h-1/2 p-12 text-center">
            <div className="font-bold text-xl mb-8">{currentQuestion.questionSentence}</div>
            <div className="flex flex-col gap-4">
              {currentQuestion.options.map((option: string, index) => {
                return (
                  <Option key={option} value={index + 1} onSelect={handleOptionSelect}>
                    {option}
                  </Option>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Image src="/questions/1/bg.png" alt="bg" fill className="object-cover " />
    </div>
  );
}

function Option({ children, onSelect, value }: any) {
  return (
    <div
      className="p-4 border-2 border-black rounded-full bg-white"
      onClick={(e) => {
        onSelect(value);
      }}
    >
      {children}
    </div>
  );
}
