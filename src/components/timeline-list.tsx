"use client";

import { PeriodType } from "@/types/period-type";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TimelineItem from "./timeline-item";

export interface TimelineListProps {}

export default function TimelineList({}: TimelineListProps) {
  const targetRef = useRef(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [direction, setDirection] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    // @ts-ignore
    return targetRef.current.scrollTo(currentPage);
  }, [currentPage]);
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Parallax
        config={{ duration: 0, decay: 1, mass: 0.4, tension: 0.4 }}
        ref={targetRef}
        pages={periods.length}
        className="max-w-[100dvw] of-hidden  max-h-[80dvh] md:px-8"
      >
        {periods.map((timelinePeriod, index) => {
          return (
            <TimelineItem
              currentPage={currentPage}
              key={index}
              index={index}
              period={timelinePeriod}
            />
          );
        })}
        <ParallaxLayer
          className="max-w-fit justify-center flex flex-col"
          sticky={{
            start: 0,
            end: periods.length,
          }}
        >
          <div>
            <button
              onClick={() =>
                setCurrentPage((prev) => {
                  setDirection("up");
                  if (prev === 0) return prev;
                  return prev - 1;
                })
              }
              className="bg-black w-12 h-16  transition-all hover:scale-105 hover:bg-primary-500 active:scale-100 hover-effect arrow-up"
            />

            <div className="flex flex-col">
              <div className="bg-black w-12 h-12 items-center justify-center flex rounded-full">
                <motion.p
                  initial={{
                    opacity: 0,
                    translateX: direction === "up" ? -100 : 100,
                  }}
                  animate={{
                    opacity: 1,
                    translateX: 0,
                  }}
                  transition={{ type: "spring", stiffness: 100 }}
                  key={currentPage}
                  className="text-white mix-blend-difference text-base font-bold"
                >
                  {
                    {
                      0: "2021",
                      1: "2022",
                      2: "2023",
                    }[currentPage]
                  }
                </motion.p>
              </div>
            </div>
            <button
              onClick={() => {
                setCurrentPage((prev) => {
                  setDirection("down");
                  if (prev === periods.length - 1) return prev;
                  return prev + 1;
                });
              }}
              className="bg-black w-12 h-16  transition-all hover:scale-105 hover:bg-primary-500 active:scale-100 hover-effect arrow-down"
            />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

const periods: PeriodType[] = [
  {
    year: "2021",
    projects: [
      {
        name: "~/DMT-Domain Management Tool",
        description: `UI interna do DNS Filter (Washington, D.C - EUA).
         Projeto chamado DMT ( Domain Management Tool ), visa agilizar 
         a administração de reports de domínios. (sem mais detalhes devido
         condiçoẽs contratuais).`,
        techStack: ["Typescript", "NextJS", "TailwindCSS"],
        image: "https://via.placeholder.com/1024x720",
      },
      {
        name: "~/Aero-assados",
        description: `
        Minha contribuição para o Aero-assados (Santa Catarina - BR) incluiu a revitalização do sistema administrativo
        e a criação de um app de delivery em React Native. Por meio da combinação de tecnologias poderosas
        como Next.js, React e React Native com TypeScript, Chakra UI e React Query, conseguimos criar 
        uma experiência envolvente para os clientes. Essas inovações não apenas otimizaram a gestão
        de pedidos e estoque, mas também resultaram em um notável aumento nas vendas. Além disso,
        a integração com o Firebase permitiu uma tomada de decisões baseada em dados, impulsionando 
        o sucesso dessa churrascaria modernizada.
        `,
        techStack: [
          "NextJS",
          "TailwindCSS",
          "Typescript",
          "Chakra UI",
          "React Native",
          "Firebase",
        ],
        image: "https://via.placeholder.com/1024x720",
      },
    ],
  },
  {
    year: "2022",
    projects: [
      {
        name: "~/Chatkick",
        description: `
        No início de 2022, o Chatkick (Nova Iorque - EUA) me convidou para participar da transformação
        do design inicial do site comercial, elaborado no Figma, em um código robusto
        e eficiente. Ao seguir as melhores práticas de programação e otimização para mecanismos
        de busca (SEO), alcancei resultados notáveis que surpreenderam pelo aumento no número de visitas.
        Fui então encarregado de consolidar os websites comerciais de duas empresas distintas - Talent
        CRM e Chatkick em um único ecossistema, o chatkick.com. A minha habilidade em unir
        de forma sinérgica essas duas vertentes resultou no website que agora está ativo e 
        disponível para o público. Através desse processo, conseguimos oferecer uma experiência
        unificada e envolvente para os usuários, refletindo o compromisso da Chatkick em
        se manter na vanguarda da tecnologia de recrutamento e seleção.
        `,
        techStack: ["Typescript", "NextJS", "TailwindCSS", "Framer motion"],
        image: "https://via.placeholder.com/1024x720",
      },
      {
        name: "~/DMT-Domain Management Tool",
        description: `Segui pelo ano de 2022 inteiro trabalhando na UI interna do DNS Filter, muitas features foram adicionadas e manutençoẽs feitas e com isso, mais 
        conhecimento foi adquirido. No meio do ano de 2022, o entendimento de produto e de negócio já era muito mais claro.`,
        techStack: ["Typescript", "NextJS", "TailwindCSS"],
        image: "https://via.placeholder.com/1024x720",
      },
      {
        name: "~/80Lines",
        description: `
        No final de 2022, fui convidado para participar do desenvolvimento do website da 80Lines (Santa Catarina - BR). 
        A 80Lines é uma empresa de desenvolvimento de software que oferece soluções de alta qualidade para empresas de 
        todos os tamanhos. Tive a oportunidade de trabalhar com o time de design e de marketing para criar um website que
        refletisse a identidade da empresa.
`,
        techStack: ["Typescript", "NextJS", "TailwindCSS", "Framer motion"],
        image: "https://via.placeholder.com/1024x720",
      },
    ],
  },
  {
    year: "2023",
    projects: [
      {
        name: "~/DMT-Domain Management Tool",
        description: `No início de 2023, o DNS Filter me convidou para participar do desenvolvimento do back-end do DMT, devido aos cortes do ultimo layoff,
        o time de back-end ficou com poucos membros e com isso, a necessidade de mais pessoas para o time era grande.
        Com isso, tive a oportunidade de aprender mais sobre o back-end e sobre o produto em si. Conhecendo mais de perto a parte de infraestrutura e de
        como funciona o fluxo de dados.
        Foi por um curto periodo de tempo, cerca de 4 meses, mas foi o suficiente para aprender mais sobre o produto e sobre o back-end.
        `,
        techStack: [
          "Typescript",
          "NestJS",
          "TypeORM",
          "PostgreSQL",
          "Cloud - AWS",
        ],
        image: "https://via.placeholder.com/1024x720",
      },
      {
        name: "~/Aero-assados",
        description: `Devido ao sucesso do app na região, fez-se necessário a reformulaçao do backend e alguns ajustes no app e na dashboard admin.
          Participei da migracao do backend para NestJS e TypeORM, e da implementaçao de novas features no app e na dashboard admin. 
          Esse foi o meu primeiro projeto Full-stack de verdade. 
         `,
        techStack: [
          "Typescript",
          "NextJS",
          "TailwindCSS",
          "Chakra UI",
          "React Native",
          "NestJS",
          "TypeORM",
          "PostgreSQL",
          "Cloud - AWS",
        ],
        image: "https://via.placeholder.com/1024x720",
      },
      {
        name: "~/80Lines",
        description: `
        Em meados de 2023, fui convidado, novamente, para participar do desenvolvimento do novo website da 80Lines.
        A empresa passou por um rebranding e com isso, o website precisava ser atualizado para refletir a nova identidade da empresa.
        O site que esta no ar atualmente é o resultado desse trabalho.
      `,
        techStack: ["Typescript", "NextJS", "TailwindCSS", "Framer motion"],
        image: "https://via.placeholder.com/1024x720",
      },
      /* {
        name: "~/A sua empresa aqui !",
        description: ` Vamos fazer algo incrível juntos ? Entre em contato comigo e vamos conversar sobre como podemos fazer essa história acontecer.`,
        techStack: [
          "Typescript",
          "NextJS",
          "TailwindCSS",
          "Chakra UI",
          "Framer motion",
          "React Native",
          "NestJS",
          "TypeORM",
          "PostgreSQL",
          "Cloud - AWS",
        ],
        image: "https://via.placeholder.com/1024x720",
      }, */
    ],
  },
];
