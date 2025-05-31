import Image from "next/image";
import React from "react";

function BoltText({ text }: { text: string }) {
  return (
    <div
      className={`border rounded-lg w-fit px-2 py-1 flex gap-2 items-center ${
        text === "Metomic solutions" ? "border-white" : "border-[#4787FF]"
      }`}
    >
      <Image src="/bolt.svg" alt="Bolt icon" width={20} height={20} />
      <p
        className={`text-sm font-normal  ${
          text === "Metomic solutions" ? "text-white" : "text-[#4787FF]"
        }`}
      >
        {text}
      </p>
    </div>
  );
}

export default BoltText;
