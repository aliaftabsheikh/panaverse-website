import Image from "next/image";
import React from "react";
import { images } from "../../../../public/constants";

function CourseBrief() {
  return (
    <>
      <main className="bg-[#04182f] flex justify-center">
        <section className="py-12 w-[1280px] px-6 md:px-4 sm:px-2 text-white">
            <h2 className="text-2xl font-bold sm:text-xl">
              The Program in a Nutshell: <span className="text_gradient">Earn While You Learn</span>
            </h2>
            <p className=" text-gray-300 mt-4 sm:text-sm">
              In this brand-new type of curriculum, students will learn how to
              make money and boost exports in the classroom and will begin doing
              so within six months of the program&#39; beginning. It resembles a
              cross between a corporate venture and an educational project.
            </p>

            <h3 className="text-2xl font-bold mt-8 sm:text-xl">Program of Studies </h3>

            <p className=" text-gray-300 mt-4 sm:text-sm">
              This curriculum is intended for beginners who want to learn
              software development from the ground up. The first three quarters
              are shared by all specialties and are dedicated to studying
              Object-Oriented Programming and cutting-edge Full-Stack Web 2.0
              development. It is going to be a fifteen-month-long hybrid program
              that includes both onsite and online classes and is divided into
              five quarters of 13 weeks each. The emphasis will be on hands-on
              learning by educating students to produce projects. To accommodate
              everyone, courses will be held primarily on weekends or after 6:00
              p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching
              format, with core onsite classes complemented by online Zoom
              laboratories and recorded videos.
            </p>
        </section>
      </main>
    </>
  );
}

export default CourseBrief;
