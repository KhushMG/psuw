"use client";
import logo from "../logo.png";
import Image from "next/image";

// props: Officer photo, officer name 
const OfficerCard = (props) => {
    return (
      <div className="grid-item bg-purple-300/70 rounded-md p-[2rem]">
        {/* <div className="hover:opacity-0 transition duration-150 ease-in-out"> */}
        <div className="image-border flex justify-center p-[2rem] border-[0.3rem] border-white rounded-md">
          <Image
            src={props.image}
            alt="Officer 5"
            className="fill-image rounded-md"
          />
        </div>
        <div className="under-image-border flex justify-center items-center py-[1rem] border-[0.3rem] border-white rounded-md mt-8">
          <h2 className="spec-font font-semibold md:text-2xl"> {props.name}</h2>
        </div>
        {/* </div> */}
      </div>
    );
};

export default OfficerCard; 