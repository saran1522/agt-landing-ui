import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});
interface FeatureCardProps {
  title: string;
  icon: string;
}

export default function FeatureCard({ title, icon }: FeatureCardProps) {
  return (
    <div
      className={`flex items-center gap-6 px-4 pb-8 border-b border-gray-200 ${
        icon === "/feature1.svg" ? "shadow-2xl text-[#316BFF]" : "text-gray-600"
      }`}
    >
      <Image src={icon} alt={`${title} icon`} width={20} height={24} />
      <div className="space-y-4">
        <h4
          className={`font-medium ${montserrat.className} ${
            icon === "/feature1.svg" ? "text-[#316BFF]" : "text-[#444444]"
          }`}
        >
          {title}
        </h4>
        {icon === "/feature1.svg" && (
          <p className="text-gray-500 lg:w-[400px]">
            We build smart, scalable systems — from firmware to platform — with
            faster delivery, better performance, and lower costs.
          </p>
        )}
      </div>
    </div>
  );
}
