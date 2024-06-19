import Image from "next/image";
import logo from "../../public/logo.png";
import { SideNav } from "../component/sideNav";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 h-[100vh] overflow-hidden">
      <div className="grid col-span-12 shadow-sm shadow-slate-400">
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
      <div className="col-span-10">{children}</div>
    </div>
  );
}
