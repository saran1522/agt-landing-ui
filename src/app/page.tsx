import Image from "next/image";
import NavLink from "./components/NavLink";
import {
  brands,
  services,
  featuresdata,
  trustusdata,
  testimonials,
  footerdata,
} from "./Data";
import BoltText from "./components/BoltText";
import ServiceCard from "./components/ServiceCard";
import SectionWrapper from "./components/SectionWrapper";
import FeatureCard from "./components/FeatureCard";
import TrustusCard from "./components/TrustusCard";
import { MdArrowOutward } from "react-icons/md";
import TestimonialCard from "./components/TestimonialCard";
import FooterLinks from "./components/FooterLinks";
import NextButton from "./components/NextButton";
import ViewScreen from "./components/ViewScreen";
export default function Home() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden space-y-14 max-sm:space-y-10">
      {/* Header */}
      <header className="">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#0078FF]">LOGO</span>
            </div>
            <div className="hidden md:flex flex-col items-center gap-4">
              <span className="h-[1px] w-full bg-gradient-to-r from-white via-blue-300 to-white"></span>
              <nav className="flex space-x-8">
                <NavLink href="#" text="Platform" />
                <NavLink href="#" text="Resource center" />
                <NavLink href="#" text="Company" />
                <NavLink href="#" text="Case studies" />
                <NavLink href="#" text="Patners" />
              </nav>
              <span className="h-[1.5px] w-full bg-gradient-to-r from-white via-blue-300 to-white"></span>
            </div>
            <button className="bg-[#4787FF] px-5 py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm text-gray-100 cursor-pointer">
              Sign Up Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="lg:p-4">
        <div className="relative rounded-3xl overflow-hidden h-full min-h-[calc(100vh-100px)] flex justify-center">
          <div className="absolute inset-0 h-full w-full bg-white [background:radial-gradient(90%_140%_at_50%_10%,#fff_60%,#4895ef_140%)]"></div>
          <div className="relative mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-8">
            <div className="mx-auto">
              <BoltText text="End to End Innovation" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#316BFF] mb-6">
              <span className="underline decoration-blue-600">
                Your Partner in Digital
              </span>
              <br />
              <span className="bg-gradient-to-b from-white to-[#4787FF] bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="text-gray-600 font-light text-lg mx-auto max-w-xl">
              We design, develop, and deliver scalable software, IT training,
              and digital transformation services tailored to your goals.
            </p>
            <button className="bg-white text-[#4787FF] px-8 py-3 rounded-full text-lg transition-colors w-fit mx-auto cursor-pointer font-medium shadow-md shadow-blue-100 hover:bg-blue-400 hover:shadow-none hover:text-white trnasition-colors">
              Explore Services
            </button>
          </div>
          <NextButton />
        </div>
      </section>

      {/* Brands logos section */}
      <section>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-12">
          <h3 className="text-center font-medium text-[#040404]">
            Trusted by users and teams at
          </h3>
          <div className="flex justify-center items-center space-x-20 w-full overflow-x-auto max-sm:px-4 hidescroll">
            {brands.map((brand, index) => (
              <Image
                key={brand}
                src={brand}
                alt="Brand logo"
                width={100}
                height={10}
                className=""
                style={{
                  animation: "fadeIn 0.5s ease-in-out",
                  animationDelay: `${index * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="lg:px-4 pb-4 overflow-hidden">
        <div className="relative bg-gradient-to-b from-[#316BFF] via-white to-white rounded-3xl pt-20">
          <div className="absolute bottom-0 left-0 right-0 -top-11 bg-[linear-gradient(to_right,#a6b1e17A_1px,transparent_1px),linear-gradient(to_bottom,#a6b1e17A_1px,transparent_1px)] bg-[size:55px_55px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_110%)]"></div>
          <SectionWrapper
            title="Everything you need to protect & secure sensitive data in your SaaS apps"
            text="Metonic solutions"
            className="text-white"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                />
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Features Section */}
      <section className="lg:p-4 bg-white mt-4">
        <SectionWrapper
          title="Everything you need to build, connect, and launch next-gen tech"
          text="How We Help"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {featuresdata.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  icon={feature.icon}
                />
              ))}
            </div>
            <ViewScreen />
          </div>
        </SectionWrapper>
      </section>

      {/* Trust us section */}
      <section className="lg:p-4">
        <div className="relative bg-gradient-to-t from-[#316BFF] via-[#D6E4FE] to-white rounded-3xl pb-20">
          <SectionWrapper
            title="How we build lasting value for technology-driven businesses"
            description="We go beyond building tech — we create solutions that are reliable, scalable, and engineered for long-term success. Here’s what sets us apart:"
            text="Why Trust Us"
            img="/aineuralnets.png"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustusdata.map((trust, index) => (
                <TrustusCard
                  key={index}
                  title={trust.title}
                  description={trust.description}
                  icon={trust.icon}
                />
              ))}
            </div>
            <button className="bg-white w-fit text-[#4787FF] px-4 py-2 rounded-xl font-medium flex items-center gap-2 -mt-4 cursor-pointer">
              Read More
              <MdArrowOutward size={20} />
            </button>
          </SectionWrapper>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white relative">
        <SectionWrapper
          title="From Concept to Launch — We Build What Matters"
          description="We go beyond building tech — we create solutions that are reliable, scalable, and engineered for long-term success. Here’s what our partners and clients say:"
          text="What People Say"
          img="/devteam.png"
          className="text-[#4787FF]"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                description={testimonial.description}
                img={testimonial.img}
                pfp={testimonial.pfp}
                name={testimonial.name}
                about={testimonial.about}
              />
            ))}
          </div>
          <div className="hidden lg:flex justify-center items-center gap-4">
            <button className="bg-gray-200 text-gray-600 px-6 py-6 rounded-2xl font-medium hover:bg-gray-100 transition-colors cursor-pointer">
              <Image
                src="/arrowbackward.svg"
                alt="arrow-left"
                width={18}
                height={18}
              />
            </button>
            <button className="bg-gray-200 text-gray-600 px-6 py-6 rounded-2xl font-medium hover:bg-gray-100 transition-colors cursor-pointer">
              <Image
                src="/arrowforward.svg"
                alt="arrow-right"
                width={18}
                height={18}
              />
            </button>
          </div>
        </SectionWrapper>
      </section>

      {/* CTA Section */}
      <section className="lg:px-4 pb-4 overflow-hidden flex justify-center items-center">
        <div className="text-center bg-gradient-to-b from-[#8AB2FB] to-[#FDFDFD] rounded-3xl p-10 w-full max-sm:px-4">
          <div className="space-y-8">
            <h2 className="text-[2rem] md:text-5xl font-semibold text-white max-w-2xl lg:leading-16 mx-auto">
              Transform your data to transform the future
            </h2>
            <p className="text-center text-[#4787FF] max-w-md mx-auto">
              The synthetic data platform for businesses that want to change the
              world.
            </p>
            <div className="flex flex-row gap-4 justify-center">
              <button className="bg-white text-[#4787FF] px-6 py-2.5 rounded-2xl font-medium hover:bg-gray-100 transition-colors cursor-pointer">
                Contact Us
              </button>
              <button className=" bg-blue-200 px-6 py-2.5 rounded-2xl font-mediu text-[#4787FF] transition-colors cursor-pointer hover:bg-blue-400 hover:text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-8">
            <div className="lg:col-span-2">
              <span className="text-2xl font-medium text-[#0078FF]">LOGO</span>
            </div>
            {footerdata.map((link, index) => (
              <FooterLinks key={index} title={link.title} links={link.links} />
            ))}
          </div>
          <div className="mt-28 text-center text-gray-400">
            <p>&copy; 2025 Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
