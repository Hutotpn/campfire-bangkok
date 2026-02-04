import Image from "next/image";

export default function Home() {
  return (
    <>
      <footer className="relative flex flex-col z-0 -mt-80">
        <div className="relative w-full h-[50vw]">
          <Image
            src="/backgrounds/footer-background.webp"
            alt="footer background"
            fill
            className="object-cover object-bottom select-none scale-105"
            sizes="100vw"
          />
        </div>

        <div className="relative w-full px-4 pb-32 md:pb-16 md:px-0 bg-[#0f371d] -mt-3 flex flex-col items-center justify-center gap-16 md:gap-6 z-10">
          <p
            className="text-white text-3xl md:text-3xl text-center font-bold font-ember"
            style={{
              textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
            }}
          >
            made with love by Hack Club & Open Sauce
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-16 max-w-6xl mx-auto px-4">
            <div className="flex flex-col items-center md:items-end gap-4 text-white text-4xl md:text-3xl font-ember font-bold z-20">
              <a
                href="https://hackclub.com/"
                target="_blank"
                className="hover:underline"
              >
                Hack Club
              </a>
              <a
                href="https://hackclub.com/slack"
                target="_blank"
                className="hover:underline"
              >
                Slack
              </a>
              <a
                href="https://hackclub.com/clubs"
                target="_blank"
                className="hover:underline"
              >
                Clubs
              </a>
              <a
                href="https://hackclub.com/conduct/"
                target="_blank"
                className="hover:underline"
              >
                Code of Conduct
              </a>

              <p className="text-white text-sm md:text-md text-right max-w-96 font-ember">
                © 2026 Hack Club. 501(c)(3) nonprofit (EIN: 81-2908499)
              </p>
            </div>

            <div className="flex-1 text-left">
              <p className="text-white text-lg md:text-xl font-ember leading-relaxed mb-4">
                Hack Club is a 501(c)(3) nonprofit and network of 60k+ technical
                high schoolers. We believe you learn best by building so we're
                creating community and providing grants so you can make awesome
                projects. In the past few years, we've partnered with GitHub to
                run{" "}
                <a
                  href="https://summer.hackclub.com/"
                  target="_blank"
                  className="underline hover:text-gray-300"
                >
                  Summer of Making
                </a>
                , hosted the{" "}
                <a
                  href="https://github.com/hackclub/the-hacker-zephyr"
                  target="_blank"
                  className="underline hover:text-gray-300"
                >
                  world's longest hackathon on land
                </a>
                , and ran{" "}
                <a
                  href="https://www.youtube.com/watch?v=QvCoISXfcE8"
                  target="_blank"
                  className="underline hover:text-gray-300"
                >
                  Canada's largest high school hackathon
                </a>
                .
              </p>
              <p className="text-white text-lg md:text-xl font-ember font-bold">
                At Hack Club, students aren't just learning, they're shipping.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
