import { Inter } from "next/font/google";
import Bintang from "./Bintang";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">


      <section className="bg-black h-screen w-screen relative">
        <Navbar />


        <div className="relative z-10 flex justify-center items-center drop-shadow-[0px_10px_20px_rgba(255,255,0)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-96"
            viewBox="0 0 200 100"
          >
            <path d="M30 20 L30 80" stroke="white" strokeWidth="4" />
            <path d="M40 20 L60 75 L80 20" stroke="white" strokeWidth="4" />
            <path d="M80 80 L100 25 L120 80" stroke="white" strokeWidth="4" />
            <path d="M113 60 H100 88 " stroke="white" strokeWidth="4" />

            <path
              d="M130 20 L130 80 L160 20 L160 80"
              stroke="white"
              strokeWidth="4"
            />
          </svg>
        </div>


        <Bintang />
      </section>

      <section className="bg-black h-screen w-screen relative">
        <div class="card z-10 relative">
          <div class="card-info">
            <p class="title font-bold tracking-wide">Magic Card</p>
          </div>
        </div>

        <Bintang />
      </section>
    </div>
  );
}
