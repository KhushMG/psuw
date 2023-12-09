import Image from 'next/image'
import logo from "./logo.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="absolute flex items-center justify-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-purple-700 before:dark:opacity-10 after:dark:from-purple-900 after:dark:via-magenta after:dark:opacity-100 before:lg:h-[360px] z-[-1]">
        <div className="flex items-center justify-center mt-20 px-2">
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={50}
            className="m-5 rounded-full"
          />
          <h1 className="flex items-center justify-center text-3xl font-bold">
            ProductSphere @ <br></br> the University of Washington
          </h1>
        </div>
        <div className="absolute left-12 items-start justify-center indent-4 mt-[20rem]">
          We are ProductSphere
        </div>
      </div>
    </main>
  );
}
