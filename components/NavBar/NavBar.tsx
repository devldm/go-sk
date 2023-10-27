import styles from "./NavBar.module.css";
import Link from "next/link";
import skFlag from "../../public/sk.svg";
import Image from "next/image";
import Button from "../Button/Button";

export default function NavBar() {
  return (
    <div className="w-full bg-[#222]">
      <div className="flex items-center justify-between m-auto flex-row md:w-[80%] w-[90%]">
        <div className="min-w-max max-w-max my-6">
          <Link href="/" className="">
            <h2 className="text-3xl font-bold">GO-SK</h2>
          </Link>
        </div>
        <div className="w-full lg:w-[35%] text-right flex justify-between items-center">
          <Link href="/jobs" className="text-xl font-bold">
            JOBS
          </Link>
          <Link href="/jobUpload" className="hidden md:block ">
            <Button buttonText="Upload a role" />
          </Link>
        </div>
      </div>
    </div>
  );
}
