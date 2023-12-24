import Container from "../atom/container";
import FooterContent from "../molecules/footer-content";

export interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <footer className="relative mt-16 w-full bg-black">
      <Container>
        <div className="flex flex-col flex-1 justify-between">
          <div className="pt-16 pb-8  flex flex-col md:flex-row flex-1">
            <div className="flex-1 pb-8">
              <h4 className="text-primary-500 font-prompt text-lg lg:text-xl hover-effect-lg">
                Gabriel Messias da Rosa
              </h4>
            </div>
            <FooterContent />
          </div>

          <div>
            <p className="text-center py-8 text-gray-400 text-sm">
              {`Gabriel Messias da Rosa - 2024`}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
