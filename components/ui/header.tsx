import Link from "next/link";
import Logo from "./logo";
import BuyImage from "../../public/images/buy.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          {/* <div className="flex flex-1 items-center"> */}
          <Logo />
          {/* </div> */}

          {/* Desktop sign in links */}
          <ul className=" w-[80%] flex flex-1 items-center justify-center gap-3">
            <li>
              <Link
                href="/#who"
                className="font-satoshi font-bold bg-transparent text-gray-800  "
              >
                Who is it
              </Link>
            </li>

            <li>
              <Link
                href="/#story"
                className="font-satoshi font-bold bg-transparent text-gray-800  "
              >
                Story
              </Link>
            </li>

            <li>
              <Link
                href="/#kfeature"
                className="font-satoshi font-bold bg-transparent text-gray-800  "
              >
                Key Features
              </Link>
            </li>

            <li>
              <Link
                href="/#buy"
                className="font-satoshi font-bold bg-transparent text-gray-800  "
              >
                Staking
              </Link>
            </li>

            <li>
              <Link
                href="/#tokenomics"
                className="font-satoshi font-bold bg-transparent text-gray-800  "
              >
                Tokenomics
              </Link>
            </li>

            <li>
              <Link
                href="/#community"
                className="font-satoshi font-bold bg-transparent text-gray-800  "
              >
                Community
              </Link>
            </li>
          </ul>

          <div className="w-[20%] justify-items-center cursor-pointer">
            {/* <div
              className="w-full justify-center cursor-pointer h-max-[50px]"
              style={{
                backgroundImage: `url(${BuyImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div> */}
            <Image
              alt="BUY"
              src={BuyImage}
              className="cursor-pointer w-[60%]"
            ></Image>
          </div>
        </div>
      </div>
    </header>
  );
}
