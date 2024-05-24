import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="bg-[#116BD9] flex w-full justify-between items-center">
      <Link href="/" className="relative h-14 w-14">
        <Image src="/home button.png" alt="home button" fill className="p-2"/>
      </Link>
      <div className="relative h-20 w-24 flex justify-start items-start pr-2">
        <Image src="/logo.png" alt="home button" fill className="object-contain" />
      </div>
    </div>
  );
}
