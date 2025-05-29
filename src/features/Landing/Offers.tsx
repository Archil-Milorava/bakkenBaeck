const Offers = () => {
  return (
    <main className="w-full  min-h-screen  flex flex-col items-center justify-center gap-2 ">
      {offers.map((offer, i) => (
        <div
          key={i}
          className="bg-[#F5F5F5] hover:bg-[#FFF9D7] group h-[15rem] max-w-[45rem] flex items-center justify-center rounded-sm overflow-hidden"
        >
          <img src={offer.image} alt={offer.title} className="h-40" />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{offer.title}</h1>
            <p className="text-sm  group-hover:">{offer.text}</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Offers;

const offers = [
  {
    image: "/photos/explore.webp",
    title: "Explore",
    text: "We create prototypes and strategies that lay the groundwork for future growth, helping you envision, analyse and act on product opportunities.",
  },
  {
    image: "/photos/build.webp",
    title: "Build",
    text: "We define, design and develop digital products and launch them into new and existing markets.",
  },
  {
    image: "/photos/elevate.webp",
    title: "Elevate",
    text: "Whether its through a bolder visual identity or a more sophisticated data platform, we elevate existing products to new levels.",
  },
];
