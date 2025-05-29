const ClientsGrid = () => {
  return (
    <>
      <h1 className="p-2 mt-[5rem] text-xl text-gray-500">selected clients</h1>
      <div className="mb-[5rem] grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 w-full gap-1 px-2 ">
        {logoImages.map((logo, i) => (
          <div key={i} className=" flex items-center justify-center">
            {/* Logo Image */}
            <img
              className="h-full w-full object-contain transition-opacity duration-300 
              opacity-100"
              src={logo}
              alt={`Client logo ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ClientsGrid;

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
  "https://cdn.sanity.io/images/pwab4i5g/v6/1daae872ca0d55e72bb44ec644913cfd1f450d12-2000x1000.svg",
  "https://cdn.sanity.io/images/pwab4i5g/v6/c2d1864fcfa56c657d1bb4812ec591b75a4aa10b-2000x1000.svg",
  "https://cdn.sanity.io/images/pwab4i5g/v6/e2d4a38b7d5917ac9812fb005639e57aa0c6c4f8-2000x1000.svg",
  "	https://cdn.sanity.io/images/pwab4i5g/v6/561158926d6729649a00b817b0a6cb483df81498-2000x1000.svg",
  "	https://cdn.sanity.io/images/pwab4i5g/v6/875dbda87c0438c33de99bcda06dc2613dcaaacb-2000x1000.svg",
  "https://cdn.sanity.io/images/pwab4i5g/v6/f93e0c4d42c98b3db8837d6a141b67a864886960-2000x1000.svg",
  "https://cdn.sanity.io/images/pwab4i5g/v6/5684b0b9fde431ed47e28d8ae82227b7572786a4-2000x1000.svg",
];
