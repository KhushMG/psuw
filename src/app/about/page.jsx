"use client";
import logo from "../logo.png";
import Image from "next/image";
import TextBlocks from "../components/TextBlocks";

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
                
                <TextBlocks
                  title={"Our Mission"}
                  body={
                    "To give UW students real-world opportunities and experiences within tech and business sectors."
                  }
                />

                <TextBlocks
                  title={"Fellowship"}
                  body={
                    "Exclusive training and support from mentors and fellows."
                  }
                />

                <TextBlocks
                  title={"Client Teams"}
                  body={
                    "Tackle projects including but not limited to marketing, business strategy, design, development, and data science."
                  }
                />

                <TextBlocks
                  title={"Our Values: Diversity and Community"}
                  body={
                    "We believe the best solutions derive from diverse ideas, majors, and individuals."
                  }
                />

                <TextBlocks
                  title={"Interested?"}
                  body={"Keep an eye out for our Fellowship application form!"}
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
