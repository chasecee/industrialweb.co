import Image from "next/image";
import Logo from "./components/Logo";

export default function Home() {
  const currentYear = new Date().getFullYear();

  let shadow = "";
  for (let i = 0; i < 16; i++) {
    shadow += `${(shadow ? "," : "") + -i * 0.05}vw ${i * 0.05}vw 0 #000`;
  }

  const shadowStyle = {
    textShadow: shadow,
  };

  return (
    <main className="flex min-h-[100dvh] flex-col items-start justify-between p-6 md:p-20 tracking-[-0.05em]">
      <div className="content flex flex-row gap-[3vw] items-center">
        <div className="w-[50px] md:min-w-[120px] md:w-[10vw] ">
          <Logo />
        </div>
        <div className="flex-col flex">
          <h1
            className="text-[clamp(16px,4.3vw,65px)] font-semibold leading-[100%]"
            style={shadowStyle}
          >
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
