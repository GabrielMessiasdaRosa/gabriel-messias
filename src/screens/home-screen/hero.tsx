import Image from "next/image";
import Col from "../../components/col";
export type HeroProps = {};
const Hero = ({}: HeroProps) => {
  return (
    <Col className="items-center justify-center h-[54rem]">
      <Image
        alt="Gabriel Messias da Rosa Profile picture"
        src="/../public/images/me.jpeg"
        width={220}
        height={220}
        className="rounded-full overflow-hidden"
      />
      <Col className=" ">
        <h1 className="flex flex-col text-center space-x-2">
          <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#ee0979] to-[#ff6a00]">
            Hi, im Gabriel,
          </span>
          <span className="text-4xl font-extrabold">
            front-end developer from Brazil.
          </span>
        </h1>
        <h2 className="text-center text-lg font-extrabold text-gray-400">
          I build websites and web apps to make people's lives easier.
        </h2>
      </Col>
    </Col>
  );
};

export default Hero;
