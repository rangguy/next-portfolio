import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="pt-36 ps-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full self-center lg:w-1/2">
            <h1 className="text-base font-semibold text-teal-600 md:text-xl">
              Halo Semua 👋, saya{" "}
              <span className="block font-bold text-gray-800 text-4xl mt-1 lg:text-5xl">
                Rangga Dwi Mahendra
              </span>
            </h1>
            <h2 className="font-medium text-gray-600 text-lg mb-5 lg:text-2xl">
              Fresh graduate in Informatics &{" "}
              <span className="text-gray-800">FullStack Developer</span>
            </h2>
            <p className="font-medium text-gray-600 mb-10 leading-relaxed">
              Lulusan Informatika yang antusias belajar hal-hal baru di bidang
              teknologi terutama pada pengembangan website, backend, dan juga sistem berbasis AI.
            </p>
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <a href="#contact">Hubungi Saya</a>
            </Button>
          </div>
          <div className="w-full self-end lg:w-1/2">
            <div className="relative mt-10 lg:right-0 lg:mt-9">
              <img
                src="/images/foto.png"
                alt="Rangga Dwi Mahendra"
                className="relative z-10 mx-auto max-w-full rounded-full"
              />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:scale-125">
                <svg
                  width="400"
                  height="400"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#14b8a6"
                    d="M47.4,-51C59.2,-35.6,65.1,-17.8,63.4,-1.7C61.7,14.5,52.6,28.9,40.8,36.6C28.9,44.2,14.5,45,-2,47C-18.4,49,-36.8,52.1,-45.4,44.5C-53.9,36.8,-52.5,18.4,-51.2,1.3C-49.9,-15.8,-48.7,-31.7,-40.2,-47.1C-31.7,-62.4,-15.8,-77.3,1,-78.3C17.8,-79.2,35.6,-66.3,47.4,-51Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
