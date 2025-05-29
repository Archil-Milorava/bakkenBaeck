import Button from "../components/Button";
import ClientsGrid from "../features/clients/ClientsGrid";
import ClientVideo from "../features/clients/ClientVideo";
import Texts from "../features/clients/Texts";
import Footer from "../features/footer/Footer";
import GetInTouch from "../features/Landing/GetInTouch";
import NavbarMain from "../features/navabar/NavbarMain";

const Clients = () => {
  return (
    <main
      className="w-full min-h-screen h-auto p-0 m-0 overflow-hidden font-BBsans
    "
    >
      <NavbarMain />
      <h1 className="w-auto sm:max-w-[95%] pt-[15rem] px-3 text-2xl sm:text-3xl lg:text-6xl mt-12">
        <span className="opacity-50">Bakken & Bæck</span> is a design and
        technology studio. We build digital products, from zero to launch.
      </h1>
      <div className="w-full h-auto p-4 ">
        <img
          src="/photos/clients.webp"
          loading="lazy"
          alt="clients"
          className="object-cover w-full h-full rounded-sm overflow-hidden"
        />
      </div>

      <h1 className="w-auto sm:max-w-[40%] px-3 text-2xl sm:text-3xl lg:text-4xl my-10 mx-auto text-start flex flex-col gap-2">
        “We collaborated closely with BB every step of the way. Their
        well-managed creativity allowed us to reimagine the way we work and find
        new, intuitive ways of solving current and future problems.”
        <p className="text-sm py-2 ">
          — Jonas Neraal Jakobsen, Director System Design, Autostore
        </p>
        <Button className="max-w-[8rem]">Pio case</Button>
      </h1>
      <ClientsGrid />
      <h1 className="w-auto sm:max-w-[40%] px-3 text-2xl sm:text-3xl lg:text-4xl mx-auto text-start flex flex-col gap-2">
        We can act as your in-house team or strengthen your existing one.
        Wherever you are in your journey, we got you covered.
      </h1>
      <Texts />
      <ClientVideo />

      <h1 className="w-auto sm:max-w-[40%] px-3 text-2xl sm:text-3xl lg:text-4xl my-10 mx-auto text-start flex flex-col gap-2">
        “For the first-ever rebrand of our product, we went with the renowned
        design studio Bakken & Bæck. They worked with us throughout the entire
        process to get our new look just right. And they nailed it”.
        <p className="text-sm py-2 ">— Chris Kalani, CEO Phantom</p>
        <Button className="max-w-[8rem]">Phantom case</Button>
      </h1>
      <GetInTouch />
      <Footer />
    </main>
  );
};

export default Clients;
