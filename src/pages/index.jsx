import { Inter } from "next/font/google";
import Bintang from "./Bintang";
import Navbar from "./Navbar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <section className="bg-black h-screen w-screen relative">
        {/* <Navbar /> */}

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

        {/* <div className="w-96 bg-[#272829] z-20 relative border-4 border-[#F8DE22] rounded-lg">
          <h1 className="text-white">hello</h1>
        </div> */}

        {/* make linear gradient FFA33C to FFFB73 and background 272829 */}
        <div class="mx-auto flex items-center justify-center">
          <div class=" w-fit rounded-md shadow-lg shadow-[#FFFB73] bg-gradient-to-r from-red-500 via-[#FFA33C] to-[#FFFB73] p-1">
            <div class="flex p-10 h-full w-full justify-center bg-[#222222]">
              <div class="flex gap-10 text-2xl font-black text-white">
                <div className="w-96 ">

                

                  <Image
                    src="/../public/Foto_Ivan.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="rounded-full"
                  />


                  </div>
                <div className="text-lg w-96">As a passionate Computer Science student, I have a strong dedication to becoming a successful web developer. My experience in various projects and organizations focused on website development has enriched my technical skills in the world of web development. I am determined to continue honing these skills and contribute to innovative and impactful web projects. With a strong focus on web development, I am determined to become a dedicated and productive web specialist.</div>

                
              </div>
            </div>
          </div>
        </div>

        {/* <Bintang /> */}
      </section>

      {/* <section className="bg-black h-screen w-screen relative">
        <div class="card z-10 relative">
          <div class="card-info">
            <p class="title font-bold tracking-wide">Magic Card</p>
          </div>
        </div>

        <Bintang />
      </section> */}
    </div>
  );
}
