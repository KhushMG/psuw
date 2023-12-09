"use client";
import logo from "../logo.png";
import Image from "next/image";

export default function About() {

  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <div className="flex justify-center items-center">
              <Image
                src={logo}
                alt="Logo"
                width={120}
                height={120}
                className="rounded-full lg:mt-[10rem]"
              />
            </div>
            <div>
              <h1 className="flex justify-center items-center font-bold lg:mt-[1.5rem] text-3xl lg:text-5xl mb-2">
                {"ProductSphere@UW"}
              </h1>
              <h1 className="flex justify-center items-center font-bold lg:mt-[1.5rem] text-2xl lg:text-4xl mb-4 lg:mb-10">
                {"About Us"}
              </h1>
              <div className="items-center text-lg text-center px-6">
                <p className="font-semibold text-xl lg:text-3xl underline text-left">
                  {" "}
                  Our Mission{" "}
                </p>
                <p className="mb-4 text-left lg:text-xl">
                  {" "}
                  To give UW students real-world opportunities and experiences{" "}
                  <br />
                  within tech and business sectors.
                </p>

                <p className="font-semibold text-xl lg:text-3xl underline text-left">
                  {" "}
                  Fellowship{" "}
                </p>
                <p className="mb-4 text-left lg:text-xl">
                  Exclusive training and support from mentors and fellows.{" "}
                </p>

                <p className="font-semibold text-xl lg:text-3xl underline text-left">
                  {" "}
                  Client Teams{" "}
                </p>
                <p className="mb-4 text-left lg:text-xl">
                  Tackle projects including but not limited to marketing,
                  business strategy, design, development, and data science.{" "}
                </p>

                <p className="font-semibold text-xl lg:text-3xl underline text-left ">
                  {" "}
                  Our values of Diversity and Community{" "}
                </p>
                <p className="mb-8 text-left lg:text-xl">
                  We believe the best solutions derive from diverse ideas,
                  majors, and individuals.{" "}
                </p>
                <p className="font-semibold text-xl lg:text-3xl underline text-left ">
                  {" "}
                  Interested? {" "}
                </p>
                <p className="mb-4 text-left lg:text-xl">
                  Keep an eye out for our Fellowship application form!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
