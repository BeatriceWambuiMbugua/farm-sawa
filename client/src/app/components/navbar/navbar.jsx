import Image from "next/image";
import Link from "next/link";
import Container from "../container";

const Navbar = () => {
  return (
    <nav className=" py-4 bg-[#DCFFE8]/30 w-full  ">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Climascan Logo"
              width={120}
              height={50}
              className=" object-cover"
            />
          </Link>

          <div className="space-x-12 text-base font-medium uppercase">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <button className="bg-black text-white px-4 py-2 rounded-3xl hover:bg-black/90 transition">
              <Link href="/signin">Sign in</Link>
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
