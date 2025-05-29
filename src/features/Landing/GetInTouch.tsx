const GetInTouch = () => {
  return (
    <div className="bg-[#FFF9D7] p-2 m-4 rounded-sm flex flex-col gap-16 md:flex-row md:justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl md:text-5xl opacity-60">Want to work with us?</h1>
        <h1 className="text-3xl md:text-5xl">Wed love to hear from you!</h1>
      </div>
      <img src="/photos/chair.webp" className="max-h-[25rem] md:max-h-[20rem] rounded-sm" />
    </div>
  );
};

export default GetInTouch;
