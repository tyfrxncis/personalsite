"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { cn } from "~/utils/cn";
import styles from "~/components/home/technology-icon.module.scss";
import { useTheme } from "next-themes";
import { ActionTooltip } from "~/components/action-tooltip";


export interface TechnologyIconProps 
    extends React.HTMLAttributes<HTMLDivElement>
{

    name: string;
    icon: string;
    iconLight?: string;
    delay: number;
}

export const TechnologyIcon: FC<TechnologyIconProps> = ({ 
    name, icon, iconLight, delay, ...props }) => 
        {
            const { theme } = useTheme();
            const [isMounted, setIsMounted] = useState(false);

            useEffect(() => {
                setIsMounted(true);
            }, []);


            if (!isMounted) return <div className="w-8 h-8"></div>;

            return(
                <ActionTooltip label={name} side="bottom">
                <div
                  {...props}
                  className={cn(
                    "w-8 h-8 relative cursor-pointer !aspect-square",
                    styles["fade-in-right"],
                    props.className,
                  )}
                  style={{ animationDelay: `${delay.toString()}ms` }}
                >
                  {iconLight && theme === "light" ? (
                    <Image src={iconLight} alt={name} fill />
                  ) : (
                    <Image src={icon} alt={name} fill />
                  )}
                </div>
              </ActionTooltip>
            )
        }




