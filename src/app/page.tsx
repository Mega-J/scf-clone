"use client";
import React from "react";
import { StaticImageData } from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Element } from "react-scroll";
import Image from "next/image";
import service1 from "@/components/assets/service1.png";
import service2 from "@/components/assets/service2.png";
import service3 from "@/components/assets/service3.png";
import service4 from "@/components/assets/service4.png";
import service5 from "@/components/assets/service5.png";
import service6 from "@/components/assets/service6.png";
import star from "@/components/assets/star.png";
import circlescf from "@/components/assets/circle-scf.png";
import scfceo from "@/components/assets/scf-ceo.png";
import scfcto from "@/components/assets/scf-cto.png";
import downbgm from "@/components/assets/scf-foot-s.png";
import downbgd from "@/components/assets/scf-foot-l.png";
import walletsc from "@/components/assets/scfwallet.png";
// import heroBg from "@/components/assets/hero-bg.png";
import orangebg from "@/components/assets/orangebg.png";
// import avatar1 from "@/components/assets/avatar1.png";
// import avatar2 from "@/components/assets/avatar2.png";
// import avatar3 from "@/components/assets/avatar3.png";
import avatar7 from "@/components/assets/avatar7.png";
import avatar8 from "@/components/assets/avatar8.png";
import house from "@/components/assets/house.png";
import { Polygon, Copyright } from "@/components/assets/icon";

const Title: React.FC<{
  title: string;
}> = ({ title }) => (
  <h2 className=" text-[24px] md:text-[32px] font-semibold text-center">
    {title}
  </h2>
);

type ServicesData = {
  id: number;
  image: StaticImageData;
  title: string;
  text: string;
};
type WhyUsData = {
  id: number;
  asset: React.ReactNode;
  title: string;
  text: string;
};
type TeamMembersData = {
  id: number;
  avatar: StaticImageData;
  name: string;
  role: string;
  description: string;
  href: string;
};

const Services: ServicesData[] = [
  {
    id: 1,
    image: service1,
    title: "FinSwap",
    text: "The crypto industry has entered the era of cross-chain, and with the continuous growth of the Web3.0 world's public chain ecosystems, many applications are built on different isolated ecosys-tems. FinSwap is a composable cross-chain liquidi-ty aggregation protocol, with contract executionfor handling cross chain transactions taking placeon the Fin-Chain with a TPS (Transactions Per Second) as high as 80,000+. Built on its own dual-chain lightning interaction architecture and atomic exchange service, FinSwap aims to address the industry's challenges of decentralized cross-chain liquidity.",
  },
  {
    id: 2,
    image: service2,
    title: "FinSBT",
    text: "FinSBT is the underlying infrastructure of the SCF public chain, collaborating with credit institutions and nodes. It collects and verifies basic informa-tion, credit ratings, and other data to develop smart contracts, enabling functionalities like user authorization for FinSBT information, institutional verification of FinSBT information, as well as stora-ge and updates of FinSBT information. Utilizing te-chnologies like zero-knowledge proofs, it ensures privacy protection, constructing a comprehensive financial identity system, and enhancing the effi-ciency and security of financial activities.",
  },
  {
    id: 3,
    image: service3,
    title: "FUSD",
    text: "FUSD is the stablecoin issued by the SCF Financial Public Chain, and its operation is maintained through a set of smart contracts for management, issuance, and redemption. The issuance of FUSD requires sufficient collateral as support. Regular audits of the collateral's value are conducted, and necessary adjustments are made based on market fluctuations. After users collateralize to mint FUSD stablecoins, they can enjoy fivefold benefits, inclu-ding investment returns, loans, stablecoin transac-tion fees, FinPAY payments, and collateral price fluctuations.",
  },
  {
    id: 4,
    image: service4,
    title: "FinPay",
    text: "FinPAY is a decentralized cross-border payment gateway based on the SCF public blockchain. It is currently mainly applied to payment settlements between banking systems collaborating with SCF. It can achieve low-cost and efficient circulation of various national currencies, with the process being secure and anonymous.",
  },
  {
    id: 5,
    image: service5,
    title: "FinBill",
    text: `As the foundational ecosystem of the SCF Financial Public Chain, FinBill aims to achieve six key functionalities in a decentralized manner, leveraging the concepts of WEB3.0:

    1) Issuance of Financial Bills as NFTs.
    
    2) Trading of Financial Bill NFTs.
    
    3) Providing Liquidity Support.
    
    4) Decentralization.
    
    5) Offering Credit Assessment Services.
    
    6) Delivering Data Query Services.`,
},
{
  id: 6,
  image: service5,
  title: "FinEx",
  text: `FinEX is the decentralized derivatives exchange on the SCF Financial Public Chain. It offers va-rious derivative trading products, including fu-tures, options, and contracts for difference (CFDs). Users can connect their wallets to FinEX and use their digital assets for trading.

  Features
  
  1) Diverse margin ratios.
  
  2) Decentralized trading matching mechanism.
  
  3) Transparent fee structure.
  
  4) Robust risk management.`,
},

  {
    id: 7,
    image: service6,
    title: "FinBox",
    text: "FinBox is a decentralized instant messaging + con-tent WEB3.0 social platform that leverages block-chain technology, IPFS technology, and encryption technology to achieve decentralized social interac-tons. It offers features such as instant messaging, social networking, wallet integration, purchasing, trading, and showcasing NFTs.",
  },
  {
    id: 8,
    image: service6,
    title: "FinSoul",
    text: "FinSOUL is a titan-level innovative masterpiece that combines co-created AGameFi, programmable NFTs, and metaverse DeFi. Developed based on Unreal Engine 5 and Cocos 2D, it supports both 3D and 2D gaming experiences. By integrating pro-grammable NFTs and the ChatGPT kernel, each player can create a unique AI companion and embark on a grand interstellar adventure with other players. During this adventure, they can earn abun-dant SOUL tokens, making FinSOUL their second life within the SCF public chain ecosystem.",
  },
];

const WhyUs: WhyUsData[] = [
  {
    id: 1,
    title: "Expertise & Experience",
    text: "Our team comprises skilled professionals experienced in document verification, fraud detection, and risk assessment. With their expertise, you can trust that we’ll deliver accurate and reliable results.",
    asset: <Polygon />,
  },
  {
    id: 2,
    title: "Confidentiality & Security",
    text: "We understand the sensitivity of the information involved in the mortgage application process. That’s why we prioritize strict confidentiality and maintain robust security measures to protect your data.",
    asset: <Polygon />,
  },
  {
    id: 3,
    title: "Efficiency & Timelines",
    text: "We recognize the importance of timely processing in the mortgage industry. Our streamlined verification procedures ensure quick turnaround times without compromising accuracy.",
    asset: <Polygon />,
  },
  {
    id: 4,
    title: "UK-based Company",
    text: " is a UK-based company, well-versed in the local regulations and compliance requirements. We understand the unique needs of UK financial institutions and provide services tailored to meet those requirements.",
    asset: <Polygon />,
  },
];

const TeamMembers: TeamMembersData[] = [
  {
    id: 3,
    avatar: scfceo,
    name: "..",
    role: "Head of Client Experience & Mortgage Consultant",
    description:
      "....",
    href: "#",
  },
  {
    id: 2,
    avatar: scfcto,
    name: "..",
    role: "Head of Partnerships",
    description:
      "...",
    href: "#",
  },
  /* {
    id: 1,
    avatar: avatar2,
    name: "..",
    role: "Financial Director & Mortgage Consultant",
    description:
      "...",
    href: "#",
  },
  {
    id: 3,
    avatar: avatar7,
    name: "..",
    role: "Lead Mortgage Advisor",
    description:
      "....",
    href: "#",
  }, */
];

const LandingPage = () => {
  return (
    <div className="relative top-10 xl:top-0">
      <section className="relative pb-12 text-white xl:pb-0 xl:h-screen herobg">
        <div className="absolute inset-0 -z-10">
          <Image src={orangebg} className="object-cover" alt="Image" fill />
        </div>{" "}
        <div className="z-10">
          <h2 className="pt-20 leading-[42px] px-2 md:leading-[72px] text-center font-bold text-[28px] md:text-[56px]">
            Cutting-Edge DeFi Technology
          </h2>
          <p className="md:text-xl w-auto px-8 xl:max-w-[1011px] mx-auto mt-8 md:mt-12 font-semibold text-center text-lg leading-[32px] md:leading-[36px]">
            Enjoy blockchain finance has never been so easy!
          </p>
          <a
            href="https://www.fintoch.icu/"
            className=" text-lg text-center md:text-[20px]  block mt-12 text-black mx-auto font-semibold p-3 w-[139px] md:w-[250px] rounded-lg bg-white"
          >
            Get Started Now
          </a>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-x-8 mt-32 md:pl-24 md:grid-cols-2">
        <div className="self-center md:order-1"  >
          <Image src={circlescf} alt="Image" />
        </div>
        <div className="flex flex-col order-2 self-center px-6 mt-16 space-y-4 md:px-0 md:space-y-6 md:mt-0 md:order-1">
          <Title title="SCF Chain: Building the Next Generation Cross-Chain Financial Standard" />
          <p className="mx-auto text-md md:text-[20px] md:leading-[32px] leading-[32px] text-center">
            SCF Chain supports digital asset interaction with other public chains through `atomic swaps`, which is a peer-to-peer (P2P) transaction system using different blockchains to allow full release of asset liquidity and further enhance user experience.

            Zero-knowledge proof is one of the Layer2 capacity expansion schemes supported by SCF double chains, and is also an optional module when constructing parallel chains through Fin-Chain.

            Fin-Chain parallel chain supports non-interactive zero-knowledge proof and recursive zero-knowledge proof to ensure the privacy and security of Fin-Chain.

            The above two proof methods are the mathematical model and cryptography basis of SCF’s public chain financial infrastructure.
          </p>
        </div>
      </section>

      <Element name="services">
        <section className="relative px-6 mt-28 md:px-20">
          <Title title="" />
          {/* <div className="w-[110px] hidden top-[100px] left-[10px] md:top-[100px] md:left-[60px] absolute md:flex justify-center items-center bg-[#152330]  h-[110px]">
            <div className=" w-[80px] h-[80px] bg-[#D8B15C]"></div>
          </div> */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-28 mt-24 lg:ml-6 md:grid-cols-2 lg:grid-cols-3">
            {Services.map((service) => (
              <div
                key={service.id}
                className="flex z-20 bg-[#FAFAFA] flex-col space-y-2 md:space-y-6 border-t-4 border-r-4 border-b-4 border-l-4 border-orange-500"
        >
              
               {/*  <div className="overflow-hidden relative w-full">
                  <Image
                    src={service.image}
                    className="w-full h-full duration-300 hover:scale-105"
                    alt={service.title}
                  />
                </div> */}
                <h3 className="p-2 text-xl font-semibold text-center md:text-2xl">
                  {service.title}
                </h3>
                <p className=" text-lg leading-[32px] md:text-base px-4 pb-4 text-center md:leading-[32px]">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
         {/*  <div className="w-[110px] hidden z-10 -bottom-[50px] right-[30px] absolute md:flex justify-center items-center bg-[#152330]  h-[110px]">
            <div className=" w-[80px] h-[80px] bg-[#D8B15C]"></div>
          </div> */}
        </section>
      </Element>

     

      <Element name="team">
        <section className="mt-32">
          <div className="flex mx-auto space-x-2 md:space-x-20 w-fit">
            {/* <Image src={star} alt="Image" /> */}
            <Title title="SCF Team" />
           {/*  <Image src={star} alt="Image" /> */}
          </div>

          <Splide
            options={{
              direction: 'ttb',
              height: '500px',
              rewind: true,
              perPage: 1,
              gap: "2rem",
              autoplay: true,
              breakpoints: {
                640: {
                  perPage: 1,
                  autoplay: true,
                },
              },
            }}
            className="px-10 py-12 mt-8 md:py-12 md:px-20 md:mt-16"
          >
            {TeamMembers.map((member) => (
              <SplideSlide
                key={member.id}
                className="flex flex-col justify-around space-y-6 md:space-y-10"
              >
                <Image
                  src={member.avatar}
                  alt="Image"
                  className="mx-auto w-fit"
                />

               {/*  <div className="flex flex-col space-y-4">
                  <h2 className=" text-[20px] md:text-2xl font-semibold text-center ">
                    {member.name}
                  </h2>
                  <h3 className="text-base font-medium text-center md:text-xl">
                    {member.role}
                  </h3>
                  <p className=" text-lg md:text-base text-center font-medium leading-[32px] md:leading-[32px] ">
                    {member.description}
                  </p>
                </div> */}
                {/* <a
                  href={member.href}
                  className="w-full bg-[#152330] p-4 text-white text-center rounded-lg text-base md:text-xl font-semibold"
                >
                  Book a Meeting
                </a> */}
              </SplideSlide>
            ))}
          </Splide>
        </section>
      </Element>

      <Element name="News">
        <section className="mt-32">
          <div className="flex mx-auto space-x-2 md:space-x-20 w-fit">
            {/* <Image src={star} alt="Image" /> */}
            <Title title="SCF News" />
           {/*  <Image src={star} alt="Image" /> */}
          </div>
          <div className="text-lg md:text-base text-center font-medium leading-[32px] md:leading-[32px]" >
          <Title title="Keep up to date with our news and event" />
        </div>

          <Splide
            options={{
              rewind: true,
              perPage: 1,
              gap: "2rem",
              autoplay: true,
              breakpoints: {
                640: {
                  perPage: 1,
                  autoplay: true,
                },
              },
            }}
            className="px-10 py-12 mt-8 md:py-12 md:px-20 md:mt-16"
          >
            {TeamMembers.slice(0, 1).map((member) => (
              <SplideSlide
                key={member.id}
                className="flex flex-col justify-around space-y-6 md:space-y-10"
              >
                <Image
                  src={member.avatar}
                  alt="Image"
                  className="mx-auto w-fit"
                />

               {/*  <div className="flex flex-col space-y-4">
                  <h2 className=" text-[20px] md:text-2xl font-semibold text-center ">
                    {member.name}
                  </h2>
                  <h3 className="text-base font-medium text-center md:text-xl">
                    {member.role}
                  </h3>
                  <p className=" text-lg md:text-base text-center font-medium leading-[32px] md:leading-[32px] ">
                    {member.description}
                  </p>
                </div> */}
                {/* <a
                  href={member.href}
                  className="w-full bg-[#152330] p-4 text-white text-center rounded-lg text-base md:text-xl font-semibold"
                >
                  Book a Meeting
                </a> */}
              </SplideSlide>
            ))}
          </Splide>
        </section>
      </Element>

      <section className="grid relative grid-cols-1 gap-x-8 mt-32 h-screen md:pl-24 md:grid-cols-2 herobg"
     
      >
         <div className="absolute inset-0 -z-10">
          <Image src={downbgd} className="object-cover" alt="Image" fill />
        </div>{" "}
      
        <div className="flex flex-col order-2 self-center px-6 mt-16 space-y-4 text-center text-white md:px-0 md:space-y-6 md:mt-0 md:order-1">
          <Title title="Touch Finance, Enjoy Finance" />
          <p className="mx-auto text-lg md:text-[14px] md:leading-[32px] leading-[32px] text-center">
            
          </p>
          <a
            
            className="text-lg text-center md:text-[20px] mx-auto font-semibold text-white p-3 w-[139px] md:w-[250px]  rounded-lg bg-[#152330]"
          >
            Get Started
          </a>
        </div>
        <div className="order-1 self-center md:order-2">
          <Image src={walletsc} alt="Image" />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
