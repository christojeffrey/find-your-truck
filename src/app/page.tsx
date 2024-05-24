import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#116BD9]">
      <div>logo</div>
      <Input placeholder="Nama lengkap" />
      <Input placeholder="Umur" />
      <Input placeholder="Profesi" />
      <Button className="bg-[#DA5243]">START QUIZ</Button>
    </div>
  );
}
