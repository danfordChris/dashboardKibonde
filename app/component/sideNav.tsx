import Image from "next/image";
import product from "../../public/product.svg";
import Link from "next/link";
function SideNav() {
  return (
    <div className="bg-blue-600 h-full text-white font-bold">
      <ul className="p-2">
        <Link href={"/products"}>
          <li className="flex flex-row p-3 m-1 hover:bg-blue-500 hover:cursor-pointer">
            <Image
              src={product}
              alt="Products icon"
              className="me-6 shadow-sm shadow-blue-400"
            />
            <p className="">Products</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export { SideNav };
