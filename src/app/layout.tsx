import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata, meta, images } from "@/lib/metadata";

const font = Inter({ subsets: ["latin-ext"] });

export const metadata = {
  title: "Tyler Cross",
  description: "Personal website",
  icons: {
    icon: { url: '/icon.png', sizes: '192x192', type: 'image/png' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
