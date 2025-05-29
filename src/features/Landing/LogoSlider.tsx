import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LogoSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="my-[5rem]">
      <Marquee speed={55} pauseOnHover>
        {logoImages.map((logo, index) => (
          <Link
            to={"/clients"}
            key={index}
            className="relative h-[6rem] w-[12rem] lg:h-[8rem] lg:w-[15rem] mx-1 flex items-center justify-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Logo Image */}
            <img
              className={`h-full w-full object-contain transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-0" : "opacity-100"
              }`}
              src={logo}
              alt={`Client logo ${index + 1}`}
            />

            {/* Hover Overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center bg-[#f1f1f1] text-black text-lg font-medium transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              } cursor-pointer text-sm`}
            >
              See all
            </div>
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoSlider;

const logoImages = [
  "https://cdn.sanity.io/images/pwab4i5g/v6/9adf81c6d55025b8843e668140b9b1795e9f0ea2-2000x1000.svg",
  "https://cdn.sanity.io/images/pwab4i5g/v6/020b9c30cc3811cd8eddb456be24e1a550f66b92-2000x1000.svg",
  "https://cdn.sanity.io/images/pwab4i5g/v6/5af9b09fd6758b58968cb40bab7fd70817cce051-2000x1000.svg",
  "https://cdn.sanity.io/images/pwab4i5g/v6/7eaf7f7ffbaf09e9ba21d1f6ad8891a99894df96-2000x1000.svg",
  "https://cdn.sanity.io/images/pwab4i5g/v6/1daae872ca0d55e72bb44ec644913cfd1f450d12-2000x1000.svg",
  "https://cdn.sanity.io/images/pwab4i5g/v6/22c58f18f0b7a2398a5c3844e61bc6ea5bb59926-2000x1000.svg",
  "https://cdn.sanity.io/images/pwab4i5g/v6/ce69480ed213a34554376ccbd6b210358e76c93a-2000x1000.svg",
  "https://cdn.sanity.io/images/pwab4i5g/v6/cd51dff8d105012c3a36d41212fd09dda302b798-2001x1000.svg",
  "https://cdn.sanity.io/images/pwab4i5g/v6/a9512e2a8c00d7b5dfc21ba5a144474aadb1d75e-2001x1000.svg",
  "https://cdn.sanity.io/images/pwab4i5g/v6/a003435adaed880f0c2a688aead277e14a5aa677-2000x1000.svg",
  "https://cdn.sanity.io/images/pwab4i5g/v6/a1db1eb7ad42f405308dd193f52814ddf55489bc-2000x1000.svg",
];
