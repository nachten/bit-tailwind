import React from "react";
import { TailwindButton } from "./tailwind-button";

export const BasicTailwindButton = () => (
  <div className="border-1 border-red-500 p-16">
    <TailwindButton
      text="hello from TailwindButton"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    />
  </div>
);
