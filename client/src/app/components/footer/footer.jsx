import { FaLinkedin } from "react-icons/fa";
import Container from "../container";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="py-4 bg-[#DCFFE8]/30 w-full">
      <Container>
        <div className="flex items-center justify-center gap-10">
          <Link href="">
            <FaLinkedin fill="blue" size={30} />
          </Link>
          <Link href="">
            <FaSquareXTwitter size={30} />
          </Link>
          <Link href="">
            <MdMail size={30} />
          </Link>
        </div>
        <p className="text-sm text-gray-600 text-center mt-4 font-mono">
          © 2025 ClimaScan All rights reserved 
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
