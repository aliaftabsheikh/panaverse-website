import Image from "next/image";
import React from "react";
import { images } from "../../../../public/constants";

function OutcomeBrief() {
  const impLinks = [
    {
      text: "Top 5 'Metaverse' jobs that will rule the future of tech industry",
      link: "https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms",
    },
    {
      text: "Blockchain Developer Salary - Jun 2022",
      link: "https://web3.career/web3-salaries/blockchain-developer",
    },
    {
      text: "Web3 Salaries Soar to $750,000 for Rank-and-File Devs",
      link: "https://thedefiant.io/web3-soaring-salaries/",
    },
    {
      text: "The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters",
      link: "https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022",
    },
    {
      text: "How To Become Metaverse Developer: Scope, Skills, and Salary",
      link: "https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/",
    },
  ];

  return (
    <main className="bg-[#021327] flex justify-center">
      <section className="w-[1280px] px-6 md:px-4 sm:px-2 py-16 flex justify-between items-center gap-6 lg:flex-col-reverse lg:gap-6">
        <div className="w-1/2 lg:w-full flex items-center">
          <Image className="lg:m-auto" src={images.outComeImg} alt="robot" />
        </div>

        <div className="w-1/2 lg:w-full">
          <h2 className="text-5xl lg:text-4xl text_gradient font-bold py-3">
            The Outcome for Participants of the Program
          </h2>
          <p className="mt-4 text-gray-400">
            The graduates of this program will own products (Full-Stack App
            Templates, AR and VR Experiences, and APIs) that are marketed
            globally by the Panaverse DAO and, if they like, will also be able
            to start off by offering services at a rate of $50 per hour ($96,000
            per year). This would give Pakistani professionals and students a
            fantastic opportunity to better their financial situation while also
            giving the economy a much-needed boost by expanding software
            exports.
          </p>

          <div className="mt-5">
            {impLinks.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 text-gray-400 hover:text-[#44DA64] transition-all"
              >
                <a
                  href={item.link}
                  className="underline underline-offset-2 mt-1"
                >
                  <p className="text-sm font-semibold">{item.text}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default OutcomeBrief;
