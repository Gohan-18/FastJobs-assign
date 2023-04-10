import Image from "next/image";
import { Inter } from "next/font/google";
import InputForm from '../components/inputForm'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main className="flex min-h-screen items-center justify-center flex-col lg:flex-row">
      <div className="bg-indigo-500 w-full lg:w-2/3 h-screen flex pt-48 items-start justify-start relative px-5 sm:px-10 md:px-14 xl:px-32 ">
        <h1 className="text-white text-2xl absolute top-14 font-bold border-2 px-2 py-1 rounded">
          FastJobs.io
        </h1>
        <div className=" flex items-start justify-center flex-col">
          <h3 className=" text-white text-sm pb-1">Congratulations!</h3>
          <h3 className=" text-white text-2xl font-bold">
            Company XYZ is inviting
          </h3>
          <h3 className=" text-white text-2xl font-bold pb-3">
            you to take an interview
          </h3>
          <h3 className=" text-white text-xs pb-1">Skills being assessed:</h3>
          <div className="flex flex-wrap gap-2">
            <span className=" text-white text-xs border-2 rounded-xl px-2 py-0.5 ">
              UI/UX
            </span>
            <span className=" text-white text-xs border-2 rounded-xl px-2 py-0.5 ">
              Product Design
            </span>
            <span className=" text-white text-xs border-2 rounded-xl px-2 py-0.5 ">
              Motion Graphics
            </span>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 w-full lg:w-1/3 h-screen flex items-center justify-center lg:items-start lg:justify-start lg:pt-36 flex-col p-4 sm:pl-6 lg:pl-16 gap-2 ">
        <InputForm/>
      </div>
    </main>
  );
}
