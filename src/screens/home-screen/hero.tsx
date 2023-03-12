import Image from "next/image";
import Col from "../../components/col";
export type HeroProps = {};
const Hero = ({}: HeroProps) => {
  return (
    <Col>
      <Col className="items-center justify-center space-y-10 py-5 md:space-y-16 md:p-20">
        <Image
          alt="Gabriel Messias da Rosa Profile picture"
          src="https://media.licdn.com/dms/image/C4D03AQEpHyv9RwJeVA/profile-displayphoto-shrink_800_800/0/1619282232881?e=1684368000&v=beta&t=Y16aHfqnbv3DjX1KwN0MaA7vg4CtWEk05iTdIgelfmw"
          width={220}
          height={220}
          className="overflow-hidden rounded-full"
        />
        <Col className="items-center">
          <Col className="text-center">
            <h1>
              <span className="bg-gradient-to-br from-[#ee0979] to-[#ff6a00] bg-clip-text text-3xl md:text-5xl font-extrabold text-transparent">
                Hi, im Gabriel,{" "}
              </span>
              <span className="text-2xl md:text-4xl font-extrabold">
                front-end developer from Brazil.
              </span>
            </h1>
          </Col>
          <h2 className="w-3/4 text-center text-base md:text-lg font-extrabold text-gray-400 md:w-1/2">
            I'm a passionate developer who loves to create things that live on
            the internet, my main goal is to always build products that provide
            pixel-perfect, performant experiences.
          </h2>
        </Col>
      </Col>
    </Col>
  );
};

export default Hero;
