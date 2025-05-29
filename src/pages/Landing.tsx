import ListItems from "../features/Landing/ListItems";
import LogoSlider from "../features/Landing/LogoSlider";
import NavbarMain from "../features/navabar/NavbarMain";
import bgVideo from "../assets/bgVideo.mp4";
import GridMain from "../features/Landing/GridMain";
import Offers from "../features/Landing/Offers";
import Button from "../components/Button";
import GetInTouch from "../features/Landing/GetInTouch";
import Logo from "../features/navabar/Logo";
import Footer from "../features/footer/Footer";

const Landing = () => {
  return (
    <main className="w-full min-h-screen h-auto p-0 m-0 overflow-hidden font-BBsans">
      <NavbarMain />

      <div className="h-[20rem] md:h-[37rem]   w-full overflow-hidden">
        <video
          src={bgVideo}
          className="w-full h-full object-cover "
          loop
          autoPlay
          playsInline
          muted
        ></video>
      </div>

      <h1 className="w-auto sm:max-w-[80%] px-3 text-2xl sm:text-3xl lg:text-6xl mt-12">
        <span className="opacity-50">Bakken & Bæck</span> is a design and
        technology studio. We build digital products, from zero to launch.
      </h1>

      <LogoSlider />

      <ListItems />

      <GridMain />

      <h1 className="w-auto sm:max-w-[80%] px-3 text-2xl sm:text-3xl lg:text-6xl my-10 mx-auto text-center">
        <span className="opacity-50">What we do.</span> We help companies
        explore product opportunities, build products from scratch or elevate
        them to new levels.
      </h1>

      <Offers />

      <h1 className="w-auto sm:max-w-[40%] px-3 text-2xl sm:text-3xl lg:text-4xl my-10 mx-auto text-start flex flex-col gap-2">
        “BBs excellence in strategy, design, and advanced technology is
        undeniable. Theyre not just experts within their field but also run a
        tight process and make things happen. They are genuinely nice people
        whom I would recommend as a partner any day.”
        <p className="text-sm py-2 ">
          — Kaave Pour, Co-founder and Head of SPACE10
        </p>
        <Button className="max-w-[8rem]">More Clients</Button>
      </h1>

      <GetInTouch />
      <div className="w-full mx-4 my-[2rem]">
        <Logo />
      </div>
      <Footer />
    </main>
  );
};

export default Landing;
