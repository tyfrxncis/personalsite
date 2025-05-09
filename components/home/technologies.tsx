import { FC } from "react";
import { cn } from "~/utils/cn";
import styles from "~/components/home/technologies.module.scss";
import { TechnologyIcon } from "~/components/home/technology-icon";


const technologies = [
    { name: "html", icon: "/assets/technologies/html.svg" },
    { name: "css", icon: "/assets/technologies/css.svg" },
    { name: "sass", icon: "/assets/technologies/sass.svg" },
    { name: "tailwindcss", icon: "/assets/technologies/tailwindcss.svg" },
    { name: "javascript", icon: "/assets/technologies/javascript.svg" },
    { name: "typescript", icon: "/assets/technologies/typescript.svg" },
    { name: "nodejs", icon: "/assets/technologies/nodejs.svg" },
    { name: "react", icon: "/assets/technologies/react.svg" },
    {name: "nextjs", icon: "/assets/technologies/nextjs_dark.svg", iconLight: "/assets/technologies/nextjs_light.svg",},
    { name: "graphql", icon: "/assets/technologies/graphql.svg" },
    { name: "c++", icon: "/assets/technologies/apollo.svg" },
    { name: "trpc", icon: "/assets/technologies/trpc.svg" },
    { name: "prisma", icon: "/assets/technologies/prisma.svg" },
    { name: "java", icon: "/assets/technologies/java.svg" },
    { name: "c++", icon: "/assets/technologies/c.svg" },
    { name: "ae", icon: "/assets/technologies/after.svg" },
    { name: "photo", icon: "/assets/technologies/photoshop.svg" }, 
  ];


  const learning = [
    "html",
    "css",
    "sass",
    "tailwindcss",
    "javascript",
    "typescript",
    "tailwind",
    "nodejs",
    "react",
    "nextjs",
    "graphql",
    "c++",
    "prisma",
    "c++",
    "java",
    "ae",
    "photo",
  ];

  export const Technologies: FC = () => {
    let technologiesIndex = 0;
    return (
        <div
          className={cn(
            "p-2 flex place-items-start gap-1 md:gap-2 max-w-[100vw] overflow-x-scroll",
            styles["technologies-container"],
          )}
        >
          {technologies.map((technology) => {
            const renderedIndex = technologiesIndex++;
    
            if (learning.includes(technology.name))
              return (
                <TechnologyIcon
                  name={technology.name}
                  icon={technology.icon}
                  iconLight={technology.iconLight}
                  key={`techonology-${technology.name}`}
                  delay={renderedIndex * 50 + 600}
                />
              );
          })}
        </div>
    
    );
  };


