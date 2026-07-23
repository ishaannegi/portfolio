import { GoogleTagManager } from "@next/third-parties/google";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata = {
  metadataBase: new URL("https://ishaanportfolio-i1p1vu38w-ishaannegi.vercel.app"),
  title: "Portfolio of Ishaan Negi - CS Student & DevOps Enthusiast",
  description:
    "This is the portfolio of Ishaan Negi. I am a Computer Science student specializing in IoT, passionate about Data Structures & Algorithms, cloud deployment, and DevOps automation.",
  openGraph: {
    title: "Portfolio of Ishaan Negi - CS Student & DevOps Enthusiast",
    description:
      "This is the portfolio of Ishaan Negi. I am a Computer Science student specializing in IoT, passionate about Data Structures & Algorithms, cloud deployment, and DevOps automation.",
    url: "https://ishaanportfolio-i1p1vu38w-ishaannegi.vercel.app/",
    siteName: "Ishaan Negi Portfolio",
    images: [
      {
        url: "/card.png",
        width: 1200,
        height: 630,
        alt: "Ishaan Negi Portfolio Card",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} font-sans antialiased`} suppressHydrationWarning>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      {process.env.NEXT_PUBLIC_GTM && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      )}
    </html>
  );
}
