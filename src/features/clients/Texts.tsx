const Texts = () => {
  return (
    <div className="my-[5rem] py-[2rem]  flex flex-col items-center gap-28">
      {texts.map((item, i) => (
        <div className=" px-2 md:px-0  md:max-w-[40%] flex flex-col gap-4" key={i}>
          <h1 className="text-xl md:text-3xl font-bold">{item.title}</h1>
          <p className=" md:text-xl">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Texts;

const texts = [
  {
    title: "Guide your team",
    text: "Are you thinking about building a digital product, but you have no idea where to start? Hire us to be the trusted advisor you can turn to setting up digital projects and guide your team through every step of the process.",
  },
  {
    title: "Be your team",
    text: "Already have a concrete product in mind, but no team to build it? Hire us to be the product team you can rely on to translate your vision into actionable roadmaps and deliverables, while helping you hire and grow your in-house teams.",
  },
  {
    title: "Boost your team",
    text: "Do you already have a product team, but short on expert design or development resources? Hire us to boost your internal capacity with specific skills, so your team can stay focused on their core activities.",
  },
];
