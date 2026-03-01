import type { Metadata, Viewport } from "next";
import { cinzel, crimsonText, oswald, caveat, patrickHand, permanentMarker } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Investigators' Codex — Madness on the Miskatonic",
  description: "Player companion for the Madness on the Miskatonic campaign",
};

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${cinzel.variable}
          ${crimsonText.variable}
          ${oswald.variable}
          ${caveat.variable}
          ${patrickHand.variable}
          ${permanentMarker.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
