import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata = {
  title: "Elibert Hernandez | Portfolio",
  description: "Bilingual portfolio (EN/FR) built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
