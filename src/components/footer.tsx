import Container from "./container";
import FooterContent from "./footer-content";

export interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <footer className="relative mt-16 w-full bg-black">
      <div className="custom-shape-divider-top-1692881415">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="fill-current text-gray-100"
        >
          <path
            d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <Container>
        <div className="flex flex-col flex-1 justify-between">
          <div className="pt-16 pb-8  flex flex-col md:flex-row flex-1">
            <div className="flex-1 pb-8">
              <h4 className="text-primary-500 font-prompt text-lg lg:text-xl hover-effect-lg">
                Gabriel Messias da Rosa
              </h4>
              <h5 className="-mt-4 lg:-mt-2">
                <span className=" font-bold font-prompt text-sm lg:text-bse hover-effect-lg">
                  desenvolvedor
                </span>
              </h5>
            </div>
            <FooterContent />
          </div>

          <div>
            <p className="text-center py-8 text-gray-400 text-sm">
              {`Gabriel Messias da Rosa - 2023`}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
