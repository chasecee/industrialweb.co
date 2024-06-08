import Image from "next/image";
import Logo from "./components/Logo";

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <main className="flex min-h-[100dvh] flex-col items-start justify-between p-6 md:p-20">
      <div className="content flex flex-row gap-[3vw] items-center">
        <div className="w-[50px] md:min-w-[120px] md:w-[10vw] ">
          <Logo />
        </div>
        <div className="flex-col flex">
          <h1 className="text-[4.3vw] font-semibold big-shadow">
            Industrial Web Company
          </h1>
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
