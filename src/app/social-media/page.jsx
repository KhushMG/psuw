"use client";
import logo from "../logo.png";
import Image from "next/image";
import IG_LOGO from "../assets/IGLOGO.png";
import gmail_logo from "../assets/gmail_logo.png";

export default function About() {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center"></div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={50}
            className="mt-[2rem] lg:mt-[7rem] rounded-full"
          />
          <h1 className="flex flex-col items-center justify-center font-bold mt-8 mb-8 text-3xl lg:text-5xl px-2">
            {"ProductSphere@UW"}
          </h1>
          <div className="items-center text-xl text-center px-6">
            <p className="font-semibold text-2xl lg:text-3xl text-left mb-4">
              Connect with us!
            </p>

            <div className="flex items-center">
              <Image
                src={IG_LOGO}
                alt="Logo"
                width={60}
                height={60}
                className="mt-4 lg:mt-[0.75rem] mb-6 mr-4"
              />
              <p className="mb-4 text-left lg:text-2xl">
                <strong>Instagram: </strong> <br /> @productsphereuw
              </p>
            </div>

            <div className="flex items-center ">
              <Image
                src={gmail_logo}
                alt="Gmail Logo"
                width={60}
                height={60}
                className="mt-4 lg:mt-[1rem] mb-7 mr-4"
              />
              <p className="mb-4 text-left text-lg lg:text-2xl">
                <strong>Email: </strong> <br/> productsphereuw@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
