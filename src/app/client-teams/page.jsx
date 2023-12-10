"use client";
import TextBlocks from "../components/TextBlocks";
import Image from "next/image";
import refer_me_logo from "../assets/referme_logo.png"

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="flex flex-col items-center justify-center font-bold mt-[2rem] lg:mt-[5rem] mb-3 text-4xl">
          {"ProductSphere@UW"}
        </h1>
        <div className="flex items-center text-2xl text-center px-6 mb-2">
          {"ProductSphere Client Teams"}
        </div>
        <p className="text-2xl mt-4"> Client: </p>
        <div className="flex items-center">
          <Image
            src={refer_me_logo}
            alt="refer.me Logo"
            width={100}
            height={100}
            className="mt-4 lg:mt-[1.5rem] mb-6 mr-4"
          />
          <p className="mb-4 mt-2 lg:mt-6 text-left text-4xl lg:text-3xl">
            <strong> refer.me </strong>
          </p>
        </div>
        <div className="flex items-center">
          <ul className="list-disc text ml-6 mb-4">
            <li>{"The world's #1 referral platform "}</li>
            <li>{"UW alum-founded"}</li>
            <li>{"AI resume feedback and builder tools"}</li>
          </ul>
        </div>
        <p className="text-2xl"> Team: </p>
      </div>
    </div>
  );
}
