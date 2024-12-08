import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { NavbarComponent } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/LOGO-TPCEXPRESS.ico",
    apple: "/LOGO-TPCEXPRESS.ico",
    shortcut: "/LOGO-TPCEXPRESS.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="dark" lang="es">
      <head />
      <body className={clsx("min-h-screen bg-background")}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex h-screen flex-col">
            <NavbarComponent />
            <main className="container mx-auto max-w-5xl flex-grow px-6 pt-10">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
