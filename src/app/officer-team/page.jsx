"use client";
import Image from "next/image";
import team1 from "../assets/1.png";
import team2 from "../assets/2.png";
import team3 from "../assets/3.png";
import team4 from "../assets/4.png";
import team5 from "../assets/5.png";
import team6 from "../assets/6.png";
import team7 from "../assets/7.png";
import OfficerCard from "../components/OfficerCard";

export default function About() {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="flex flex-col items-center justify-center font-bold mt-20 mb-3 text-4xl lg:text-4xl lg:mt-[7rem]">
              {"ProductSphere@UW"}
            </h1>
            <h2 className="flex flex-col items-center justify-center font-bold text-3xl ">
              {"Meet the Team!"}
            </h2>
          </div>
          {/* Officer Cards. Props: Officer image, officer name. Reference OfficerCard.jsx for styling */}
          <div className="gridcont flex flex-col mt-10 max-w-[60vw]">
            <OfficerCard image={team1} name={"Marie Kang"} />

            {/* Not using OfficerCard as special adjustments needed for this card. */}
            <div className="grid-item bg-purple-300/70 rounded-md p-[2rem] shadow-md">
              {/* <div className="hover:opacity-0 transition duration-150 ease-in-out"> */}
              <div className="image-border flex justify-center p-[1rem] border-[0.3rem] border-white rounded-md">
                <Image
                  src={team2}
                  alt="Officer 2"
                  className="fill-image rounded-md"
                />
              </div>
              <div className="under-image-border flex justify-center items-center py-[1rem] border-[0.3rem] border-white rounded-md mt-[2.17rem] lg:mt-[3.6rem] ">
                <h2 className="spec-font font-semibold md:text-2xl px-2">
                  {" "}
                  Non Pronanun
                </h2>
              </div>
              {/* </div> */}
            </div>

            <OfficerCard image={team3} name={"Thomas Lee"} />

            <OfficerCard image={team4} name={"Chloe Chung"} />

            <OfficerCard image={team5} name={"Jasper Gan"} />

            <OfficerCard image={team6} name={"Sean Yuan"} />

            <OfficerCard image={team7} name={"Madelyn Lee"} />
          </div>
        </div>
      </div>
    </div>
  );
}
