"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>();
  const [profession, setProfession] = useState<string>("");
  function handleButtonClick() {
    if (name && age && profession) {
      localStorage.setItem("name", name);
      localStorage.setItem("age", age?.toString() || "");
      localStorage.setItem("profession", profession);
      router.push("/loading");
    } else {
      console.log("not valid");
    }
  }

  function handleNameChange(e: any) {
    setName(e.target.value);
  }
  function handleAgeChange(e: any) {
    setAge(e.target.value);
  }
  function handleProffesionChange(e: any) {
    setProfession(e.target.value);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between pb-8 bg-[#116BD9]">
      {/* logo */}
      <div className="w-full">
        <div className="relative w-full h-96">
          <Image alt="logo" src="/logo.png" fill className="object-contain object-top" />
        </div>
        <div className="relative w-full h-48 -top-24">
          <Image alt="icon" src="/icon.png" fill className="object-contain" />
        </div>
      </div>
      <div className="flex flex-col gap-4 w-3/5">
        <Input className="p-8" placeholder="Nama lengkap" value={name} onChange={handleNameChange} />
        <Input className="p-8" placeholder="Umur" value={age} onChange={handleAgeChange} type="number" />
        <Input className="p-8" placeholder="Profesi" value={profession} onChange={handleProffesionChange} />
        <Button className="bg-[#DA5243] w-fit mx-auto px-8 py-6" disabled={!(name && age && profession)} onClick={handleButtonClick}>
          START QUIZ
        </Button>
      </div>
    </div>
  );
}
