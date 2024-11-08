import Image from "next/image";

export default function About() {
  return (
    <section className="bg-slate-800 text-white min-h-[100%]">
      <div className="container mx-auto flex px-3 sm:py-24 py-12 md:flex-row items-center flex-col-reverse">
        <div className="text-left sm:pl-4 lg:flex-grow md:w-1/2 lg:pl-16 md:pl-2 flex flex-col md:items-center items-center ">
          <h1 className="mb-5 mt-6 font-bold text-[30px] sm:text-4xl text-center ">
            About ME
          </h1>

          <p className="mb-8 sm:text-[16px]  text-[14px] sm:leading-7 sm:px-5 pl-1 ">
          Hi,My name is Kiran Ahmed, and I am a dedicated frontend developer with a strong foundation in creating engaging, high-performance applications using Next.js and React. Beyond frontend development, I am actively broadening my expertise in backend development and cloud computing, along with a deep dive into the transformative world of agentic AI. I am passionate about continuous learning and adapting to new technologies, striving to stay at the forefront of industry trends. My goal is to craft innovative and user-friendly digital experiences that drive results and meet the evolving needs of modern users.
          </p>
        </div>
        <div className=" lg:max-w-lg lg:w-full w-5/6 md:w-1/2 mb-8 md:mb-0 mt-20 sm:mt-2 ">
          <Image
            className="p-0 img rounded-full hover:scale-105 duration-300 ease-linear cursor-pointer sm:pl-2  object-cover object-center mx-auto w-[22rem]"
            src={require("../../../public/assets/picture/pic.jpg")}
            width={500}
            height={500}
            alt={"about-logo"}
          ></Image>
        </div>
      </div>
    </section>
  );
}
