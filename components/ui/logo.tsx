import Link from "next/link";
import Image from "next/image";
import Logo1 from "../../public/images/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image src={Logo1} alt="Logo" width="100" height="50"></Image>
    </Link>
  );
}
