import {Github, Twitter, Linkedin, X}  from "lucide-react";
import { FC } from "react";
import { ActionTooltip } from "../action-tooltip";


 const socials = [
    {
        name: "Github",
        href: "https://github.com/tyfrxncis",
        icon: <Github className="w-6 h-6 text-blue-500 hover:text-blue-600" />,
    },
    
    {
        name: "X (Twitter)",
        href: "https://github.com/mafra",
        icon: <X className="w-6 h-6 text-blue-500 hover:text-blue-600" />,
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/francis-mawanda-8570a3229/",
        icon: <Linkedin className="w-6 h-6 text-blue-500 hover:text-blue-600" />,
    },
 ];


 export const Socials: FC = () => {
    return (
      <div className="grid grid-flow-col place-items-center gap-2 w-max">
        {socials.map((social) => {
          return (
            <ActionTooltip label={social.name} key={`social-${social.name}`}>
              <a href={social.href} target="_blank" className="cursor-pointer">
                {social.icon}
              </a>
            </ActionTooltip>
          );
        })}
      </div>
    );
  };


