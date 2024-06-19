import { inter } from "./ui/fonts";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-white h-[100vh] text-black w-screen">
      <div className="h-36 m-2 bg-sky-500 rounded-md grid items-end">
        <div className="flex flex-row">
          <Image src={logo} width={90} height={90} alt="MK logo" />
          <p
            className={`${inter.className} antialiased self-end mb-7 text-2xl text-white`}
          >
            MK Workflow
          </p>
        </div>
      </div>
      <div className="mt-28 p-8">
        <p className="line-clamp-3 text-lg">Welcome to MK Workflow</p>
        <p className="line-clamp-3 text-lg">Invoice and customer services</p>
        <Link href="/dashboard">
          <button
            className="bg-sky-500 p-1 w-24 rounded-md text-white text-sm font-semibold m-2
          hover:bg-sky-800"
          >
            Log in
          </button>
        </Link>
      </div>
    </main>
  );
}
