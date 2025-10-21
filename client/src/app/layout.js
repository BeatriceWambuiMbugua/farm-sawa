import { Jost, Inria_Sans } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const inriaSans = Inria_Sans({
  variable: "--font-inria-sans",
  weight: ["300", "400", "700", ],
  subsets: ["latin"],
});



export const metadata = {
  title: "Climascan",
  description: "Assess climate hazards before investing - AI- powered property risk insights",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${inriaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
