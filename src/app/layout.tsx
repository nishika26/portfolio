import type { Metadata } from "next";
import "./globals.css";
import Ladybug from "@/components/Ladybug";

export const metadata: Metadata = {
  title: "Nishika Yadav — Backend & AI Engineer",
  description: "Backend & AI Engineer building production LLM platforms, RAG pipelines, and multi-provider orchestration systems.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ position: "relative" }}>
        <Ladybug />
        {children}
      </body>
    </html>
  );
}