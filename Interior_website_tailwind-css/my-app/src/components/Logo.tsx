import Link from "next/link";
import logo from "../../public/logo (2).png";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"}>
        <Image 
        src={logo}
        width={160}
        height={55}
        alt="Logo">
    </Image>
    </Link>
  )
}

export default Logo