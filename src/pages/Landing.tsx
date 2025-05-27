import NavbarMain from "../features/navabar/NavbarMain";

const bgImage =
  "https://plus.unsplash.com/premium_photo-1675748283204-22940562d00d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Landing = () => {
  return (
    <main className="w-full min-h-screen h-auto p-0 m-0 overflow-hidden bg-green-300  font-BBsans">
      <NavbarMain />
      <div className={`w-full h-[50rem] overflow-hidden  bg-[url(${bgImage})]`}></div>
    </main>
  );
};

export default Landing;
