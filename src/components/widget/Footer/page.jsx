import { compulsoryQuartersOutline, specializedTracks } from "@/config";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  const socialLinks = [
    {
      icon: <FaFacebookF size={18} />,
      link: "https://www.facebook.com/groups/panaverse",
    },
    {
      icon: <FaYoutube size={18} />,
      link: "https://www.youtube.com/@panaverse/streams",
    },
    {
      icon: <FaTwitter size={18} />,
      link: "https://twitter.com/Panaverse_edu",
    },
    {
      icon: <FaLinkedinIn size={18} />,
      link: "https://www.linkedin.com/company/panaverse/",
    },
    {
      icon: <FaGithub size={18} />,
      link: "https://github.com/panaverse",
    },
  ];
  return (
    <main className="bg-secondary-color flex justify-center">
      <section className="w-[1280px] px-6 md:px-4 sm:px-2 py-16">
        <div className="grid grid-cols-3 gap-8 md:grid-cols-1">
          <div>
            <h2 className="text_gradient text-xl font-bold">
              Compulsory Quarters
            </h2>
            <div className="mt-4">
              {compulsoryQuartersOutline.map((item, index) => (
                <Link href={`/compulsory/${item.id}`} key={item.id}>
                  <p className="text-white truncate font-light mt-1 hover:text-[#44DA64]">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text_gradient text-xl font-bold">
              Specialized Quarters
            </h2>
            <div className="mt-4">
              {specializedTracks.map((item, index) => (
                <Link
                  href={`track/${item.id}`}
                  className="text-white font-light mt-1 hover:text-[#44DA64]"
                  key={item.id}
                >
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text_gradient text-xl font-bold">Social Links </h2>

            <div className="flex gap-4 mt-4">
              {socialLinks.map((item, index) => (
                <Link
                  target="_blank"
                  key={index}
                  href={item.link}
                  className="w-8 h-8 bg-[#44DA64] hover:bg-[#6366FF] hover:scale-105 hover:text-black transition-all rounded-full flex justify-center items-center text-slate-900"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Footer;
