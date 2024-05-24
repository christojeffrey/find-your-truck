import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-16 bg-[#116BD9] flex w-full justify-between items-center p-4">
      <Link href="/">home</Link>
      <div>logo</div>
    </div>
  );
}
