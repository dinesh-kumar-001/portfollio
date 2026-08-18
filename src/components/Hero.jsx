import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiX } from "react-icons/si";
import { cn } from "../lib/utils";
import { DrawLineText } from "./ui/draw_line_text";

const Hero = () => {
  return (
    <>
      <div className="relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black overflow-hidden px-4 py-16">
        {/* Dot Background */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />

        {/* Radial Mask */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        {/* Content */}
        <div className="relative z-20 text-center">
          <div className="flex justify-center items-center gap-3 flex-wrap">
            <span
              className="font-bold tracking-tight bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent
                         text-5xl sm:text-6xl md:text-6xl lg:text-[71px]"
              style={{ lineHeight: 1 }}
            >
              Hi, I'm
            </span>
            <DrawLineText
              fontSize={{
                base: 40,
                sm: 50,
                md: 60,
                lg: 70,
              }}
              strokeWidth={1.5}
              text="Dinesh Kumar"
              color="url(#gradient)"
            />
          </div>

          <svg width="0" height="0">
            <defs>
              <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                <stop stopColor="#e5e5e5" offset="0%" />
                <stop stopColor="#737373" offset="100%" />
              </linearGradient>
            </defs>
          </svg>

          <h2 className="text-md md:text-xl lg:text-2xl text-neutral-300 mt-4">
            Dreams Coded into Reality with{" "}
            <span className="text-indigo-300 font-semibold typing-text">
              <Typewriter
                words={[
                "Full-Stack Web Developer",
                "MERN Stack Developer",
                "Developing Fast & Secure APIs",
                "Creating Responsive User Interfaces",
                "Coding with Java & JavaScript",
                "Learning • Building • Growing",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <div className="flex justify-center gap-4 mt-6 text-2xl">
            <a
              href="https://github.com/dinesh-kumar-001"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-circle hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/dkofficial_1710/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-circle hover:text-pink-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/dineshkumar025/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-circle hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/DineshK79350461"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-circle hover:text-neutral-400 transition-colors"
            >
              <SiX />
            </a>
        
          </div>
          <a
            href="/Dinesh_Kumar_Resume_2026.pdf"
            download="Dinesh_Kumar_Resume_2026.pdf"
            className="mt-8 inline-block shadow-[0_0_0_3px_#000000_inset] px-6.5 py-1 bg-transparent border border-black/70 dark:border-white/70 dark:text-white/80 text-black/50 rounded-lg font-bold transform hover:-translate-y-1 transition duration-450"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
