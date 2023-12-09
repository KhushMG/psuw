"use client";
import Image from "next/image";
import team1 from "../assets/1.png";
import team2 from "../assets/2.png";
import team3 from "../assets/3.png";
import team4 from "../assets/4.png";
import team5 from "../assets/5.png";
import team6 from "../assets/6.png";
import team7 from "../assets/7.png";

export default function About() {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="flex flex-col items-center justify-center font-bold mt-20 mb-3 text-4xl">
              {"ProductSphere@UW"}
            </h1>
            <h2 className="flex flex-col items-center justify-center font-bold text-3xl">
              {"Meet the Team!"}
            </h2>
          </div>
          <div className="gridcont flex flex-col mt-10">
            <div className="grid-item bg-purple-300/70 rounded-md p-[2rem] shadow-md">
              {/* <div className="hover:opacity-0 transition duration-150 ease-in-out"> */}
              <div className="image-border flex justify-center p-[2rem] border-[0.3rem] border-white rounded-md">
                <Image
                  src={team1}
                  alt="Officer 1"
                  className="fill-image rounded-md"
                />
              </div>
              <div className="under-image-border flex justify-center items-center py-[1rem] border-[0.3rem] border-white rounded-md mt-5">
                <h2 className="spec-font font-semibold md:text-2xl">
                  {" "}
                  Marie Kang
                </h2>
              </div>
              {/* </div> */}
            </div>
            <div className="grid-item bg-purple-300/70 rounded-md p-[2rem] shadow-md">
              {/* <div className="hover:opacity-0 transition duration-150 ease-in-out"> */}
              <div className="image-border flex justify-center p-[2rem] border-[0.3rem] border-white rounded-md">
                <Image
                  src={team2}
                  alt="Officer 2"
                  className="fill-image rounded-md"
                />
              </div>
              <div className="under-image-border flex justify-center items-center py-[1rem] border-[0.3rem] border-white rounded-md mt-6 lg:mt-7">
                <h2 className="spec-font font-semibold md:text-2xl">
                  {" "}
                  Non Pronanun
                </h2>
              </div>
              {/* </div> */}
            </div>
            <div className="grid-item bg-purple-300/70 rounded-md p-[2rem] shadow-md">
              {/* <div className="hover:opacity-0 transition duration-150 ease-in-out"> */}
              <div className="image-border flex justify-center p-[2rem] border-[0.3rem] border-white rounded-md">
                <Image
                  src={team3}
                  alt="Officer 3"
                  className="fill-image rounded-md"
                />
              </div>
              <div className="under-image-border flex justify-center items-center py-[1rem] border-[0.3rem] border-white rounded-md mt-5">
                <h2 className="spec-font font-semibold md:text-2xl">
                  {" "}
                  Thomas Lee
                </h2>
              </div>
              {/* </div> */}
            </div>
            <div className="grid-item bg-purple-300/70 rounded-md p-[2rem] shadow-md">
              {/* <div className="hover:opacity-0 transition duration-150 ease-in-out"> */}
              <div className="image-border flex justify-center p-[2rem] border-[0.3rem] border-white rounded-md">
                <Image
                  src={team4}
                  alt="Officer 4"
                  className="fill-image rounded-md"
                />
              </div>
              <div className="under-image-border flex justify-center items-center py-[1rem] border-[0.3rem] border-white rounded-md mt-7">
                <h2 className="spec-font font-semibold md:text-2xl">
                  {" "}
                  Chloe Chung
                </h2>
              </div>
              {/* </div> */}
            </div>
            <div className="grid-item bg-purple-300/70 rounded-md p-[2rem] shadow-md">
              {/* <div className="hover:opacity-0 transition duration-150 ease-in-out"> */}
              <div className="image-border flex justify-center p-[2rem] border-[0.3rem] border-white rounded-md">
                <Image
                  src={team5}
                  alt="Officer 5"
                  className="fill-image rounded-md"
                />
              </div>
              <div className="under-image-border flex justify-center items-center py-[1rem] border-[0.3rem] border-white rounded-md mt-7">
                <h2 className="spec-font font-semibold md:text-2xl">
                  {" "}
                  Jasper Gan
                </h2>
              </div>
              {/* </div> */}
            </div>
            <div className="grid-item bg-purple-300/70 rounded-md p-[2rem] shadow-md">
              {/* <div className="hover:opacity-0 transition duration-150 ease-in-out"> */}
              <div className="image-border flex justify-center p-[2rem] border-[0.3rem] border-white rounded-md">
                <Image
                  src={team6}
                  alt="Officer 6"
                  className="fill-image rounded-md"
                />
              </div>
              <div className="under-image-border flex justify-center items-center py-[1rem] border-[0.3rem] border-white rounded-md mt-7">
                <h2 className="spec-font font-semibold md:text-2xl">
                  {" "}
                  Sean Yuan
                </h2>
              </div>
              {/* </div> */}
            </div>
            <div className="grid-item bg-purple-300/70 rounded-md p-[2rem] shadow-md">
              {/* <div className="hover:opacity-0 transition duration-150 ease-in-out"> */}
              <div className="image-border flex justify-center p-[2rem] border-[0.3rem] border-white rounded-md">
                <Image
                  src={team7}
                  alt="Officer 7"
                  className="fill-image rounded-md"
                />
              </div>
              <div className="under-image-border flex justify-center items-center py-[1rem] border-[0.3rem] border-white rounded-md mt-6">
                <h2 className="spec-font font-semibold md:text-2xl">
                  {" "}
                  Madelyn Lee
                </h2>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
