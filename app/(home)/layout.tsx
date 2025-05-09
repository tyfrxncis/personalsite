export const metadata = {
  title: "Home",
  description: "Home page",
};

export default function RootLayout({
    children,
}: {children: React.ReactNode;}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body> {children}</body>
        </html>
    )
}