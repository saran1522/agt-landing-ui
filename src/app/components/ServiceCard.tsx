import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import { montserrat } from "../layout";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  title,
  description,
  href = "#",
}: ServiceCardProps) {
  return (
    <div className="relative bg-white rounded-xs shadow-[0_0_20px_0_rgba(0,0,0,0.1)] border border-gray-100 ">
      <div className="space-y-8 p-6">
        <Image
          src="/configicon.svg"
          alt={`${title} icon`}
          width={48}
          height={48}
          className="text-blue-500"
        />
        <h3
          className={`text-2xl text-[#393E46] ${montserrat.className} font-medium`}
        >
          {title}
        </h3>
        <p className="text-[#9C9C9C] leading-relaxed">{description}</p>
        <a
          href={href}
          className="flex items-center gap-3 text-[#0078FF] font-medium hover:text-blue-700 border rounded-lg border-[#87B0FC] pl-4 pr-1 py-1 w-fit"
        >
          Read more
          <IoArrowForward className="bg-[#0078FF1A] rounded-md p-2" size={30} />
        </a>
      </div>
      <span className="h-1 w-1 bg-purple-200 absolute -left-0.5 -top-0.5"></span>
      <span className="h-1 w-1 bg-purple-200 absolute -right-0.5 -top-0.5"></span>
      <span className="h-1 w-1 bg-purple-200 absolute -left-0.5 -bottom-0.5"></span>
      <span className="h-1 w-1 bg-purple-200 absolute -right-0.5 -bottom-0.5"></span>
    </div>
  );
}
