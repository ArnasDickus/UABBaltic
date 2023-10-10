const HeroSection = () => {
  return (
    <section
      className="h-screen text-white"
      style={{
        background:
          "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)",
      }}>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-5/12 w-full">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Hello, I&#39;m Arnas Dičkus
          </h1>
          <p className="text-2xl mb-8">Front-end developer.</p>
          <div className="flex justify-center mx-auto"></div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
