import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BackgroundLogos from "./components/layout/BackgroundLogos";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Women Tech Makers | Empowering Women in Technology",
  description:
    "Join Women Tech Makers, a global program providing visibility, community, and resources for women in technology to drive innovation and participation in the field.",
  keywords: [
    "Women Tech Makers",
    "WTM",
    "Women in Tech",
    "Technology",
    "Tech Community",
    "Innovation",
    "Education",
    "Mentorship",
    "Career Development",
  ],
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: "https://developers.google.com/static/womentechmakers/images/wtm-logo_128.png", sizes: "128x128", type: "image/png" },
      { url: "https://developers.google.com/static/womentechmakers/images/wtm-logo_96.png", sizes: "96x96", type: "image/png" },
      { url: "https://developers.google.com/static/womentechmakers/images/wtm-logo_64.png", sizes: "64x64", type: "image/png" },
      { url: "https://developers.google.com/static/womentechmakers/images/wtm-logo_32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "https://developers.google.com/static/womentechmakers/images/wtm-logo_128.png", sizes: "128x128", type: "image/png" }
    ],
    shortcut: [
      { url: "https://developers.google.com/static/womentechmakers/images/wtm-logo_128.png", sizes: "128x128", type: "image/png" }
    ]
  },
  themeColor: '#00A9E0',
  appleWebApp: {
    title: 'WTM Zetech',
    statusBarStyle: 'default',
    capable: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable}`}>
      <body className={`${outfit.className} bg-white text-gray-900 antialiased`}>
        <div className="min-h-screen flex flex-col relative">
          <BackgroundLogos />
          <div className="flex-grow flex flex-col relative z-10">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
