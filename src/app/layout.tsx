import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "byMiriana - Nature, Moments, and Meaning",
  description: "She captures what others don't stop to see — nature, moments, and feelings, all in a single frame. A visual diary of roses, light, streets, and quiet beauty.",
  keywords: ["photography", "nature photography", "artistic photography", "moments", "nature", "visual diary", "Miriana"],
  authors: [{ name: "Miriana" }],
  openGraph: {
    title: "byMiriana - Nature, Moments, and Meaning",
    description: "She captures what others don't stop to see — nature, moments, and feelings through Miriana's eyes.",
    url: "https://bymiriana.com",
    siteName: "byMiriana",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
