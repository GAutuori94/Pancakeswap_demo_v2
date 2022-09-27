import * as React from "react";
import "../../../style/index.css";
import ImageComponent from "./ImageComponent";

export default function CtaTrade() {
  return (
    <section id="flex flex-col">
      <div className="container mx-auto flex flex-row max-w-screen-lg ">
        <div className="flex flex-col flex-1 self-center mt justify-center h-screen ">
          <h2 className="text-4xl font-bold m-4">
            <span className="text-purple-600">Trade</span> anything. No
            registration, no hassle.
          </h2>
          <div>
            <p className=" text-gray-500 text-lg font-bold">
              Trade any token on BNB Smart Chain in seconds, just by connecting
              your wallet.
            </p>
          </div>
          <div className="flex flex-row self-start mx-10">
            <button className="rounded-lg bg-green-400  hover:opacity-60 text-white font-bold py-2 px-4 mx-4">
              Trade Now
            </button>
            <a
              className="text-green-400 rounded-lg font-bold hover:underline decoration-2 py-1 px-4 mx-4"
              href=""
              target="_blank"
            >
              Learn
            </a>
          </div>
        </div>
        <div className="flex flex-row flex-1 items-center justify-between place-content-start relative py-10 h-screen">
          <ImageComponent />
        </div>
      </div>
    </section>
  );
}
