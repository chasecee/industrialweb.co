import Image from "next/image";
import logo from "../public/logomark.svg";

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-6 md:p-20">
      <div className="content flex flex-row gap-[3vw] items-center">
        <div className="w-[50px] md:min-w-[100px] md:w-[10vw] ">
          <Image src={logo} alt="Logo" />
        </div>
        <div className="flex-col flex">
          <h1 className="text-[5vw] font-semibold">Industrial Web Company</h1>
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <p>&copy; {currentYear}</p>
        <a
          className="underline underline-offset-2"
          target="_blank"
          href="mailto:info@industrialweb.co"
        >
          Contact
        </a>
      </div>
    </main>
  );
}
