// import PageTransitionWrapper from "../components/ui/PageTransitionWrapper";
import { Analytics } from "@vercel/analytics/react";
import FloatingNav from "../components/ui/FloatingNav";
import { SmoothScrollWrapper } from "../components/ui/SmoothScrollWrapper";
import { NavProvider } from "../contexts/NavContext";
import "./globals.css";
import { Metadata } from "next";
import CartProvider from "../contexts/CartContext";
import { Toaster } from "react-hot-toast";
import { PiShoppingCartFill, PiWarningCircleFill } from "react-icons/pi";

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
    <html lang="en" className="scrollbar rounded-scrollbar">
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
            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                success: {
                  duration: 4000,
                  icon: (
                    <PiShoppingCartFill color="#5FB5AC" fontSize={"24px"} />
                  ),
                },
                error: {
                  duration: 4000,
                  icon: (
                    <PiWarningCircleFill
                      fontSize={"24px"}
                      className="text-amber-500"
                    />
                  ),
                },
                style: {
                  fontSize: "16px",
                  maxWidth: "500px",
                  padding: "16px 24px",
                  backgroundColor: "#fff",
                  color: "#22343D",
                  borderRadius: "20px",
                },
              }}
            />
          </CartProvider>
        </SmoothScrollWrapper>
        <Analytics />
      </body>
    </html>
  );
}
