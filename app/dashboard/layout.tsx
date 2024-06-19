import React from "react";
import { SideNav } from "./sideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row h-[100vh] w-screen">
      <div className="md:w-64 bg-slate-200 overflow-y-auto h-full">
        <SideNav />
      </div>
      <div className="w-full p-6 m-2">
        {children}
      </div>
    </div>
  );
}
