import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import JoinImage from "@/public/images/join.png";
import LeftArrow from "@/public/images/left-arrow.png";
import RightArrow from "@/public/images/right-arrow.png";
import Dogs from "@/public/images/dogs.png";
import ElonDog from "@/public/images/elon.png";
import SpaceDog from "@/public/images/space-dog.png";
import MetamaskImg from "@/public/images/metamask.png";
import SwapImg from "@/public/images/swap.png";
import BuyDogeImg from "@/public/images/bdoge.png";
import AddressBackground from "@/public/images/address-back.png";
import MoneyDog from "@/public/images/money-dog.png";
import { SiDiscord, SiTelegram, SiGitter } from "react-icons/si";
import { SocialIcon } from "react-social-icons";
import DogGlass from "@/public/images/dog-glass.png";
import BottomBack from "@/public/images/bottom-back.png";
import TopBack from "@/public/images/top-back.png";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="">
        {/* Hero content */}
        <div className=" pt-32  md:pt-40 ">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold font-slacky md:text-8xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              $DOGES
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700 font-satoshi"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                A meme token with no utility, no promises, and no mercy. Just{" "}
                <br />
                vibes, chaos, and the sacred bond
                <br />
                between Doge and Shiba
              </p>
              <div className=" relative flex items-center justify-between h-14 before:absolute before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div className="flex-1 text-elft mt-[20%]">
                  <h3 className="text-left text-[10px] font-bold">
                    @ElonMusk Tweet
                  </h3>
                  <Image
                    alt="Left"
                    src={LeftArrow}
                    className="ml-4"
                    style={{ width: "20%" }}
                  ></Image>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2">
                  <Image
                    alt="Join"
                    src={JoinImage}
                    style={{ width: "50%" }}
                    className="mx-auto"
                  ></Image>
                </div>

                <div className="flex-1 text-right mt-[30%]">
                  <h3 className=" text-[10px] font-bold">Hey! Elon</h3>
                  <Image
                    alt="Right"
                    src={RightArrow}
                    className="mr-4"
                    style={{ width: "20%", float: "right" }}
                  ></Image>
                </div>
              </div>

              <Image src={Dogs} alt="Shiba"></Image>
            </div>
          </div>
          {/* Hero image */}
          <div className="relative aspect-video rounded-2xl  px-5 py-3  before:pointer-events-none before:absolute before:-inset-5 [background-image:linear-gradient(to_bottom,white_73.5%,transparent_26.5%)]">
            <h1 className="font-slacky text-2xl sm:text-4xl md:text-6xl lg:text-9xl text-center">
              ABOUT
            </h1>

            <div className="flex items-center justify-center mt-4 gap-4 relative ">
              {/* $ Symbol */}
              <h1 className="text-8xl mr-2 font-bold m-0 rotate-[-30deg] text-[#1B1B1B0F] mb-[40%] mr-12">
                $
              </h1>

              {/* Overlapping Quote Box */}
              {/* <div className="absolute -translate-x-1/1 mb-4  z-10 bg-white rounded-2xl p-4 shadow-lg">
                <h3 className="text-black font-satoshi text-[16px]">
                  “They said we need utility.
                  <br /> We gave them vibes.”
                </h3>
                <h3 className="text-black font-satoshi mt-2 text-[16px] text-[#5B6873]">
                  @someMemeLord
                </h3>
              </div> */}

              {/* Main Image - stays in place */}
              <Image src={ElonDog} alt="Back" className="z-0" />
            </div>
            <p className="text-[16px] font-satoshi text-center">
              Stay tuned for chaotic wisdom and spicy memes
              <br /> from the community. Twitter is our temple.
            </p>
          </div>

          <div className=" sm:flex w-full mt-8 text-center md:mt-4 p-8">
            {/* 40% width div */}
            <div className=" w-full sm:w-[40%]  ">
              <h3 className="text-center sm:text-left font-slacky text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                AIR
                <br /> DROP
              </h3>
              <h3 className="text-center sm:text-left font-satoshi text-[10px] md:text-[16px] mt-2">
                Were you a loyal $SHIB hodler? Then you might
                <br /> already be rich. We’re snapshotting a random
                <br /> Ethereum block (soon™️).
                <br /> <br />
                If you held $SHIB at that moment, you’ll get <br /> $DOGES. No
                forms, no KYC, no begging.
                <br />
                You either exist… or you don’t.
              </h3>
            </div>

            {/* 60% width div */}
            <div className="w-full sm:w-[60%]  items-center justify-items-center">
              <Image src={SpaceDog} alt="Shiba"></Image>
            </div>
          </div>

          <div className="w-full mt-8 text-center md:mt-4">
            <h3 className="font-slacky w-full text-[28px] sm:text-[64px] md:text-[82px]">
              HOW TO BUY
            </h3>
            <h3 className="font-satoshi text[16px]">
              The holy grail of meme coins is here.
              <br />
              Born from the ashes of utility and structure, $DOGES is a <br />
              vibe-first, logic-later token for those who simply get it.
            </h3>

            <div className="flex w-full items-center justify-items-center mt-8">
              <div className=" w-[33%] ml-[10%] ">
                <div className="w-full items-center justify-items-center p-2">
                  <Image src={MetamaskImg} alt="metamask"></Image>
                </div>
                <h2 className="font-slacky text-[10px] text-md sm:text-xl md:text-2xl">
                  METAMASK
                </h2>
                <p className="font-satoshi text-[9px] md:text-[16px]">
                  Install MetaMask (or your <br />
                  fave Web3 wallet)
                </p>
              </div>
              <div className=" w-[33%]">
                <div className="w-full items-center justify-items-center p-2">
                  <Image src={SwapImg} alt="swap"></Image>
                </div>
                <h2 className="font-slacky text-[10px] sm:text-xl md:text-2xl">
                  SWAP
                </h2>
                <p className="font-satoshi text-[9px] md:text-[16px]">
                  Swap ETH for <br />
                  $DOGES on Uniswap
                </p>
              </div>
              <div className=" w-[33%] mr-[10%]">
                <div className="w-full items-center justify-items-center p-2">
                  <Image src={BuyDogeImg} alt="Buy Doge"></Image>
                </div>
                <h2 className="font-slacky text-[10px] sm:text-xl md:text-2xl">
                  BUY $DOGES
                </h2>
                <p className="font-satoshi text-[9px] md:text-[16px]">
                  Buy the top, ride the wave, <br />
                  or just hold and howl
                </p>
              </div>
            </div>

            <div className=" w-full items-center justify-items-center mt-8 text-center">
              <h3 className="font-slacky text[32px] sm:text-[58px] md:text-[82px] text-center w-full">
                TOKENOMICS
              </h3>
              <h3 className="font-satoshi text-[16px]">
                No taxes. No burns. Just freedom.
              </h3>
              <Image className="mt-8" src={MoneyDog} alt="Shiba"></Image>
            </div>

            <div
              className=" w-full items-center justify-items-center mt-32 text-center"
              style={{
                backgroundImage: `url(${BottomBack.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className=" text-white font-slacky text-[28px] sm:text-[64px] md:text-[82px] text-center w-full">
                JOIN
                <br />
                COMMUNITY
              </h3>
              <h3 className="font-satoshi text-[16px] text-white">
                Join the $DOGES cult — where memes are <br />
                sacred and Degenism is a way of life.
              </h3>
              <div className="w-[40%] flex mt-8">
                <div className="w-[30%]">
                  <SocialIcon url="https://twitter.com" />
                </div>
                <div className="w-[30%]">
                  <SocialIcon url="https://discord.com" />
                </div>
                <div className="w-[30%]">
                  <SocialIcon url="https://telegram.org" />
                </div>
              </div>
              <Image src={DogGlass} alt="Shiba"></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
