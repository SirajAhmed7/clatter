// import PageTransitionWrapper from "../components/ui/PageTransitionWrapper";
import { Analytics } from "@vercel/analytics/react";
import FloatingNav from "../components/ui/FloatingNav";
import { SmoothScrollWrapper } from "../components/ui/SmoothScrollWrapper";
import { NavProvider } from "../contexts/NavContext";
import "./globals.css";
import { Metadata } from "next";
import CartProvider from "../contexts/CartContext";
import ToasterConfig from "../components/ui/ToasterConfig";

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
    <html lang="en" className="scrollbar rounded-scrollbar scroll-smooth">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg" sizes="any" />
      </head>
      <body className="bg-primary-100">
        <SmoothScrollWrapper>
          <CartProvider>
            <NavProvider>
              {/* <div className="relative"> */}
              {/* <PageTransitionWrapper>{children}</PageTransitionWrapper> */}
              {/* {/* <PageTransitionWrapper>{children}</PageTransitionWrapper> */}
              {children}
              <FloatingNav />
              {/* </div> */}
            </NavProvider>
            <ToasterConfig />
          </CartProvider>
        </SmoothScrollWrapper>
        <Analytics />
      </body>
    </html>
  );
}
