export const projects: {
  name: string;
  description: string;
  techs: string[];
  work: string;
  image: string;
}[] = [
  {
    name: "Domain Management Tool",
    description: `ou DMT é uma ferramenta de gerenciamento dos erros cometidos pela IA
    do DNSFilter (empresa de segurança de DNS norte americana), que é
    responsável por bloquear sites maliciosos, tal como sites não
    maliciosos, como por exemplo, sites de desenvolvimento, sites de
    streaming, etc.`,
    work: "Fullstack Developer",
    techs: ["Typescript", "NestJS", "NextJS", "+ 12"],
    image: "/images/dns-filter.png",
  },
  {
    name: "Chatkick",
    description: `é uma empresa de recrutamento norte americana, que tem como
    objetivo conectar empresas e candidatos utilizando IA para levantar
    relatórios de pontos fortes e pontos fracos do candidato atravez da 
    gravação da entrevista. Elaborei o site da empresa utilizando NextJS com a com a UI/UX desenvolvida pela designer da empresa.`,
    work: "Frontend Developer",
    techs: ["Typescript", "NextJS", "TailwindCSS", "+ 4"],
    image: "/images/chatkick.png",
  },
  {
    name: "80Lines",
    description: `é uma empresa de desenvolvimento de software que oferece soluções de alta qualidade para empresas de
    todos os tamanhos. Tive a oportunidade de trabalhar com o time de design e de marketing para criar um website que
    refletisse a identidade da empresa.`,
    work: "Frontend Developer",
    techs: ["Typescript", "NextJS", "TailwindCSS", "+ 3"],
    image: "/images/80lines.png",
  },
];
