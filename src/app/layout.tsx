import type { Metadata } from "next";
import "./globals.css";
 
export const metadata: Metadata = {
  title: "Nishika Yadav — Backend & AI Engineer",
  description: "Backend & AI Engineer with 1.5+ years building production LLM platforms, RAG pipelines, and multi-provider orchestration systems.",
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
 