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
          {/* grid container */}
          <div className="gridcont ">
            <div className="grid-item relative mb-5 rounded-md bg-purple-800">
              <Image
                src={team1}
                alt="Officer 1"
                className="fill-image md:mb-2"
              />
              <div className="absolute md:top-[283px] bottom-[-1px] sm:h-[30px] md:h-[50px] w-full bg-purple-800 rounded-sm">
                <h2 className="font-semibold sm:mb-[40px] md:text-2xl">
                  {" "}
                  Marie Kang{" "}
                </h2>
              </div>
            </div>
            <div className="grid-item relative mb-5 rounded-md bg-purple-800">
              <Image
                src={team2}
                alt="Officer 2"
                className="fill-image md:mb-2"
              />
              <div className="absolute md:top-[283px] bottom-[-1px] sm:h-[30px] md:h-[50px] w-full bg-purple-800 rounded-sm">
                <h2 className="spec-font font-semibold sm:mb-[40px] md:text-2xl">
                  {" "}
                  Non Pronanun{" "}
                </h2>
              </div>
            </div>
            <div className="grid-item relative mb-5 rounded-md bg-purple-800">
              <Image
                src={team3}
                alt="Officer 3"
                className="fill-image md:mb-2"
              />
              <div className="absolute md:top-[283px] bottom-[-1px] sm:h-[30px] md:h-[50px] w-full bg-purple-800 rounded-sm">
                <h2 className="font-semibold sm:mb-[40px] md:text-2xl">
                  {" "}
                  Thomas Lee{" "}
                </h2>
              </div>
            </div>
            <div className="grid-item relative mb-5 rounded-md bg-purple-800">
              <Image
                src={team4}
                alt="Officer 4"
                className="fill-image md:mb-2"
              />
              <div className="absolute md:top-[283px] bottom-[-1px] sm:h-[30px] md:h-[50px] w-full bg-purple-800 rounded-sm">
                <h2 className="font-semibold sm:mb-[12px] md:text-2xl">
                  {" "}
                  Chloe Chung{" "}
                </h2>
              </div>
            </div>
            <div className="grid-item relative mb-5 rounded-md bg-purple-800/80">
              <Image
                src={team5}
                alt="Officer 5"
                className="fill-image md:mb-2"
              />
              <div className="absolute md:top-[283px] bottom-[-1px] sm:h-[30px] md:h-[50px] w-full bg-purple-800 rounded-sm">
                <h2 className="font-semibold sm:mb-[12px] md:text-2xl">
                  {" "}
                  Jasper Gan{" "}
                </h2>
              </div>
            </div>
            <div className="grid-item relative mb-5 rounded-md bg-purple-800">
              <Image
                src={team6}
                alt="Officer 6"
                className="fill-image md:mb-2"
              />
              <div className="absolute md:top-[283px] bottom-[-1px] sm:h-[30px] md:h-[50px] w-full bg-purple-800 rounded-sm">
                <h2 className="font-semibold sm:mb-[12px] md:text-2xl">
                  {" "}
                  Sean Yuan{" "}
                </h2>
              </div>
            </div>
            <div className="grid-item relative mb-5 rounded-md bg-purple-800">
              <Image
                src={team7}
                alt="Officer 7"
                className="fill-image md:mb-2 rounded-sm"
              />
              <div className="absolute md:top-[283px] bottom-[-1px] sm:h-[30px] md:h-[50px] w-full bg-purple-800 rounded-sm">
                <h2 className="font-semibold sm:mb-[12px] md:text-2xl">
                  {" "}
                  Madelyn Lee{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
