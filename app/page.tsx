import { inter } from "./ui/fonts";
import { SideNav } from "./component/sideNav";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-cols-12 h-[100vh] overflow-hidden">
      <div className="grid col-span-12">
        <Image
        src={logo}
        width={50}
        height={50}
        alt="Mk logo"
        className="justify-self-start"
        />
      </div>
      <div className="col-span-2 h-screen">
        <SideNav />
      </div>
      <div className="col-span-10"></div>
    </div>
  );
}
