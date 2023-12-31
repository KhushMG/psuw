"use client";
import Image from "next/image";
import logo from "./logo.png";
import TextBlocks from "./components/TextBlocks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="absolute mt-5 mb-2 flex items-center justify-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-purple-700 before:dark:opacity-10 after:dark:from-purple-900 after:dark:via-magenta after:dark:opacity-100 before:lg:h-[360px] z-[-1]">
        <div className="flex items-center justify-center mt-20 lg:mt-22 px-2">
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={50}
            className="m-3 rounded-full"
          />
          <h1 className="flex items-center justify-center text-3xl font-bold">
            ProductSphere @ <br></br> the University of Washington
          </h1>
        </div>
      </div>
      <div className="items-center px-6 mt-[18rem]">
        <div>
          {" "}
          <p className="font-semibold text-xl lg:text-4xl text-left mb-2">
            {"Welcome to ProductSphere! "}
          </p>
          <p className="text-xl mb-2">
            We&apos;re a UW, student-led organization committed to product
            management, <br /> marketing, and design. We are open to all majors!
          </p>
          <p className="text-xl mb-2">
            {" "}
            We&apos;re looking for committed individuals who are 
             excited to <br/> learn more about this industry.
          </p>
          <p className="text-xl mb-4">
            {" "}
            No prior professional experience is required! <br/>
            Apply for our Fellowship program or come join us for <br/>
            our general events, open to everyone!
          </p>
        </div>
        <div></div>

        <TextBlocks title={"Our Two Programs:"} />
        <div>
          <p className="font-semibold text-xl lg:text-2xl text-left">
            {"Fellowship "}
          </p>
          <ul className="left-12">
            <li className="mb-1 text-left lg:text-xl list-disc ml-6">
              {" New to Product Management, Marketing, and Design?"}
              <ul className="absolute list-disc ml-6">
                <li>
                  We offer Mentorship with a group of fellows on PM topics{" "}
                  <br />
                  from our training materials and mentors:
                </li>
                <ul className="absolute list-disc ml-6">
                  <li>{"Interview processes"}</li>
                  <li>{"Design-Thinking"} </li>
                  <li>{"Market Analysis"} </li>
                  <li>{"Day-to-Day PM Responsibilities"} </li>
                </ul>
              </ul>
            </li>
          </ul>
        </div>
        <div className="mt-[12rem]">
          <p className="font-semibold text-xl lg:text-2xl text-left">
            {"Client "}
          </p>
          <ul className="left-12">
            <li className="mb-1 text-left lg:text-xl list-disc ml-6">
              {"Post Fellowship"}
              <ul className="absolute list-disc ml-4">
                <li>
                  {
                    "Apply your learnings as a product associate for a client company"
                  }
                </li>
                <ul className="absolute list-disc ml-6">
                  <li>
                    {" "}
                    Work under an experienced PM and <br /> student advisor in a
                    team of 4-6
                  </li>
                  <li>
                    {" "}
                    Devise and deliver thoughtful <br /> services/products for
                    companies{" "}
                  </li>
                  <li> Conduct user research </li>
                </ul>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex mt-[12rem] mb-[6rem]">
          <div>
            <TextBlocks title={"General Events: "} />
            <div className="flex flex-col lg:flex-row">
              <div className="lg:mr-[12rem]">
                <p className="font-semibold text-xl lg:text-2xl text-left">
                  {"Workshops "}
                </p>
                <ul className="text-[16px] lg:text-[20px] list-disc ml-6 mb-4">
                  <li>{"Resume Workshops"}</li>
                  <li>{"Design Workshops"}</li>
                  <li>{"Case Studies"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-xl lg:text-2xl text-left">
                  {"Speaker Panels "}
                </p>
                <ul className="lg:text-[20px] list-disc ml-6 mb-4">
                  <li>{"Q&A Opportunities"}</li>
                  <li>{"Day-to-day of a PM "}</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row">
              <div className="lg:mr-[12rem]">
                <p className="font-semibold text-xl lg:text-2xl text-left">
                  {"Mock Interviews "}
                </p>
                <ul className="lg:text-[20px] list-disc ml-7 mb-4">
                  <li>
                    Practice interviews <br /> with our mentors
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-xl lg:text-2xl text-left">
                  {"Socials  "}
                </p>
                <ul className="lg:text-[20px] list-disc ml-6 mb-4">
                  <li>{"Connect with like-minded students"}</li>
                  <li>{"Network with Professionals "}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
