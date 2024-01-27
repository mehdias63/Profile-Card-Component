import React from "react";

export default function State({ title, text }) {
  return (
    <div className="flex flex-col justify-center items-center mb-6">
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="text-[0.625rem] font-normal text-gray tracking-[0.09375rem]">
        {text}
      </p>
    </div>
  );
}
