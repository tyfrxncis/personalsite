import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import "./globals.scss";
import { cn } from "~/lib/utils";
import {ThemeProvider} from "~/components/providers/theme-provider";

const fira = Fira_Mono({ subsets: ["latin"], weight: "400" });
const websiteName = "francis.mawanda.dev";


export const metadata: Metadata = {
  metadataBase: new URL("https://francism.dev/"),
  title: `${websiteName}`,
  description: "This is my website",
  openGraph: {
    title: `🌴 ${websiteName}`,
    description: "This is my website",
    images: "/assets/palm_tree.png",
  },
  authors: [{ name: "Francis Mawanda", url: "https://francism.dev" }],
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          (cn(fira.className),
          "bg-neutral-200 dark:bg-neutral-900 min-h-screen")
        }
        dir="ltr"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
