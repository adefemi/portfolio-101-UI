import Image from "next/image";
import Header from "./common/header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="m-auto mt-72 grid grid-cols-3 gap-24 max-w-fit">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="flex items-center justify-end font-normal text-lg text-secondary mt-24">
              Hello There{" "}
              <Image
                src="/assets/wave.png"
                width={30}
                height={30}
                alt="hello wave"
                className="w-12 ml-3"
              />
            </h3>

            <h1 className="flex items-center justify-end font-bold text-6xl mt-6">
              I am Adefemi Oseni
            </h1>
          </div>
          <div>
            <h2 className="text-white text-opacity-60 text-2xl font-light flex justify-end mb-36">
              I enjoy building softwares
            </h2>
          </div>
        </div>
        <div className="inner m-auto h-150 w-150">
          <Image
            src="/assets/html.png"
            width="150"
            height="150"
            alt="mainImage"
            className="w-24 absolute z-10 -top-12 -left-3"
          />
          <Image
            src="/assets/python.png"
            width="150"
            height="150"
            alt="mainImage"
            className="w-24 absolute z-10 -top-36 python"
          />
          <Image
            src="/assets/js.png"
            width="150"
            height="150"
            alt="mainImage"
            className="w-24 absolute z-10 -top-12 -right-3"
          />
          <Image
            src="/assets/main.svg"
            width="150"
            height="150"
            alt="mainImage"
            className="w-120 mainImage"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="font-normal text-lg text-secondary">
            I&apos;ve been called...
          </h3>
          <h1 className=" font-bold text-6xl mt-6">A Software Engineer</h1>
        </div>
      </div>
      <div className="flex items-center justify-center mt-72 relative z-10">
        <Image
          src="/assets/mouse.png"
          width={34}
          height={34}
          alt="mouse"
          className="w-12 cursor-pointer"
        />
      </div>
    </main>
  );
}
