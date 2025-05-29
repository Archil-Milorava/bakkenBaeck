import ListItems from "../features/Landing/ListItems";
import LogoSlider from "../features/Landing/LogoSlider";
import NavbarMain from "../features/navabar/NavbarMain";
import bgVideo from "../assets/bgVideo.mp4";

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
    </main>
  );
};

export default Landing;
