"use client";

import Image from "next/image";
import invoice from "./invoice.svg";
import home from "./home.svg";
import customers from "./customers.svg";
import logo from "../../public/logo.png";
import { inter } from "../ui/fonts";
import Link from "next/link";
import CustomerPage from "./customers/page";
import clsx from "clsx";
import { usePathname } from "next/navigation";

function SideNav() {
  const pathname = usePathname();

  return (
    <div>
      <div className="flex flex-row">
        <Link href="/" className="cursor-pointer">
          <Image src={logo} width={80} height={90} alt="MK logo" />
        </Link>
        <p
          className={`${inter.className} antialiased self-end mb-7 text-lg text-black `}
        >
          MK Workflow
        </p>
      </div>
      <ul className="">
        <Link href="/dashboard/">
          <li
            className={clsx(
              "flex flex-row p-2 hover:bg-sky-500 cursor-pointer hover:font-semibold m-1",
              { "bg-sky-500": pathname === "/dashboard" }
            )}
          >
            <Image src={home} alt="Home icon" className="m-2" />
            <p className="m-2">Home</p>
          </li>
        </Link>
        <Link href="/dashboard/invoices">
          <li
            className={clsx(
              "flex flex-row p-2 hover:bg-sky-500 cursor-pointer hover:font-semibold m-1",
              { "bg-sky-500": pathname === "/dashboard/invoices" }
            )}
          >
            <Image src={invoice} alt="Home icon" className="m-2" />
            <p className="m-2">Invoice</p>
          </li>
        </Link>
        <Link href="/dashboard/customers">
          <li
            className={clsx(
              "flex flex-row p-2 hover:bg-sky-500 cursor-pointer hover:font-semibold m-1",
              { "bg-sky-500": pathname === "/dashboard/customers" }
            )}
          >
            <Image src={customers} alt="Home icon" className="m-2" />
            <p className="m-2">Customers</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export { SideNav };
