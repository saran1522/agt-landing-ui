import React from "react";
import BoltText from "./BoltText";
import Image from "next/image";
import { montserrat } from "../layout";

function SectionWrapper({
  title,
  description,
  text,
  img,
  className,
  children,
}: {
  title: string;
  description?: string;
  text: string;
  img?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative flex flex-col gap-10 px-4 sm:px-6 lg:px-18 ${className}">
      <div className="flex justify-between max-sm:flex-col">
        <div className="flex flex-col gap-8 ">
          <BoltText text={text} />
          <h2
            className={`text-4xl max-sm:text-3xl font-semibold mb-4 max-w-[750px] text-[#316BFF] ${className} ${montserrat.className}`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`text-[#6B7280] text-lg max-w-xl -mt-6 mb-4 tracking-wide ${montserrat.className}`}
            >
              {description}
            </p>
          )}
        </div>
        <div className="relative lg:right-20">
          {img && (
            <Image
              src={img}
              alt={title}
              width={350}
              height={400}
              className="drop-shadow-2xl"
            />
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

export default SectionWrapper;
