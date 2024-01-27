import React from "react";
import State from "./State";

export default function Card() {
  return (
    <div className="flex flex-col justify-center items-center relative bg-white rounded-xl font-kum w-80 lg:[21.875rem]">
      <img
        src="/images/bg-pattern-card.svg"
        alt="Background"
        className="rounded-t-xl"
      />
      <img
        src="/images/image-victor.jpg"
        className="mx-auto -mt-[3rem] h-24 rounded-full border-[5px] border-white"
        alt="Avatar"
      />
      <div className="border-gray border-b flex flex-col items-center w-[20rem] mt-8 mb-4">
        <div className="flex gap-3">
          <h1 className="text-lg font-bold">Victor Crest</h1>
          <p className="text-lg font-normal text-gray">26</p>
        </div>
        <p className="text-sm font-normal text-gray mb-6 mt-2">London</p>
      </div>
      <div className="flex gap-14 items-center">
        <State title="80K" text="Followers" />
        <State title="803K" text="Likes" />
        <State title="1.4K" text="Photos" />
      </div>
    </div>
  );
}
