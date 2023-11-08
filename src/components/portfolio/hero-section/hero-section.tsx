import classes from "./hero-section.module.css";

const HeroSection = () => {
  return (
    <section className={`${classes.background} flex h-screen text-white`}>
      <div className="container mx-auto flex px-5 items-center justify-center flex-col">
        <div className="text-center lg:w-5/12 w-full">
          <h1 className="my-4 text-5xl font-bold leading-tight pt-16">
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
