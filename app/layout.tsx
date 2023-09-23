import FloatingNav from "../components/ui/FloatingNav";
import { SmoothScrollWrapper } from "../components/ui/SmoothScrollWrapper";
import { NavProvider } from "../contexts/NavContext";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clatter",
  description:
    "Discover sustainable footwear with Clatter. Explore our eco-friendly shoe collections that blend style, comfort, and ethical production. Step into a greener future with Clatter.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg" sizes="any" />
      </head>
      <body className="bg-primary-100">
        <NavProvider>
          <SmoothScrollWrapper>
            {/* <div className="relative"> */}
            {children}
            <FloatingNav />
            {/* </div> */}
          </SmoothScrollWrapper>
        </NavProvider>
      </body>
    </html>
  );
}
