import Col from "./col";
import Row from "./row";

export type FooterProps = {};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Footer = ({}: FooterProps) => {
  return (
    <>
      <div className="border-b-2 border-gray-50/30 pt-16" />
      <footer className="px-8 ">
        <Col className="space-y-2 overflow-hidden py-20">
          <Col className="space-y-2 md:flex-row md:justify-between">
            <p className="bg-gradient-to-br from-[#ee0979] to-[#ff6a00] bg-clip-text font-poiret text-2xl font-extrabold text-transparent md:ml-0">
              Gabriel Messias da Rosa
            </p>
            <Row>
              <Col className="space-y-1">
                <a
                  href="https://www.linkedin.com/in/gabriel-messias-rosa/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit rounded-full border-2 bg-gradient-to-br from-[#ee0979] to-[#ff6a00] bg-clip-border p-2 text-white transition-all duration-300"
                >
                  <svg
                    className="h-4 w-4 "
                    viewBox="0 0 2500 2390"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_2)">
                      <path
                        d="M-4.76837e-06 278.012C-4.76837e-06 197.572 28.154 131.211 84.4595 78.9286C140.765 26.6433 213.965 0.501926 304.054 0.501926C392.536 0.501926 464.124 26.2403 518.822 77.722C575.128 130.811 603.282 199.986 603.282 285.251C603.282 362.471 575.934 426.819 521.236 478.301C464.93 531.39 390.927 557.934 299.228 557.934H296.815C208.333 557.934 136.745 531.39 82.0463 478.301C27.348 425.212 -4.76837e-06 358.448 -4.76837e-06 278.012ZM31.3707 2389.5V777.529H567.085V2389.5H31.3707ZM863.9 2389.5H1399.61V1489.4C1399.61 1433.09 1406.05 1389.66 1418.92 1359.09C1441.44 1304.39 1475.63 1258.14 1521.48 1220.34C1567.33 1182.53 1624.84 1163.63 1694.02 1163.63C1874.2 1163.63 1964.29 1285.09 1964.29 1528.01V2389.5H2500V1465.27C2500 1227.17 2443.69 1046.59 2331.08 923.523C2218.47 800.454 2069.66 738.919 1884.65 738.919C1677.12 738.919 1515.44 828.205 1399.61 1006.78V1011.6H1397.2L1399.61 1006.78V777.529H863.9C867.116 829.008 868.726 989.078 868.726 1257.74C868.726 1526.4 867.116 1903.65 863.9 2389.5Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2">
                        <rect
                          width="2500"
                          height="2389"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </Col>
            </Row>
          </Col>
          <Row>
            <Col>
              <p className="text-sm text-gray-300">
                2023 Gabriel Messias da Rosa.
              </p>
              <p className="text-sm text-gray-300">
                Made with{" "}
                <span role="img" aria-label="love">
                  ❤️
                </span>
              </p>
            </Col>
          </Row>
        </Col>
      </footer>
    </>
  );
};

export default Footer;
