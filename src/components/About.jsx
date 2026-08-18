import React from 'react';
import { cn } from "../lib/utils";
import BlurImage from './utils/BlurImage';


const About = () => {
  return (
    <section className="about-container relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black text-center py-20 px-4">
      
      {/* Background pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Faded radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Image */}
        <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0 border-4 border-neutral-800">
        <BlurImage
          src="profile_pic.jpeg"          
          blurhash="LAB._mEN5SkC-TNdofWX0hay}=WC"
          alt="Profile"
          className="w-full h-full"
        />
        </div>

        {/* Text Content */}
        <div className="text-left text-neutral-300 max-w-2xl ml-8 md:ml-16">
          <h1 className="text-4xl sm:text-7xl font-bold tracking-tight bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-8">
            About Me.
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            I'm Dinesh Kumar R, a Computer Science Engineering graduate and an aspiring Full-Stack Developer with a strong interest in building modern, responsive, and scalable web applications. I enjoy transforming ideas into real-world digital solutions by combining clean UI design with efficient backend development. I'm continuously improving my skills through hands-on projects and self-learning.
           </p>
          <p className="text-lg leading-relaxed mb-4">
          My technical stack includes Java, HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, SQL, and Git/GitHub. I have developed full-stack applications using the MERN stack, including authentication systems with JWT and role-based access. I focus on writing clean, maintainable code and creating user-friendly web experiences while learning industry best practices.
          </p>
          <p className="text-lg leading-relaxed">
           As a fresher, I'm actively looking for opportunities where I can contribute, learn from experienced developers, and grow as a software engineer. I'm passionate about problem-solving, continuous learning, and building applications that create real value. My goal is to become a skilled Full-Stack Developer and contribute to innovative software products.
           </p>
        </div>
      </div>
    </section>
  );
};

export default About;