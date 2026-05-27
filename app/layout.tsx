import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CopyGuard – Track Revenue Lost to Content Theft",
  description: "Monitor the web for stolen content, estimate traffic and revenue lost to plagiarizers, and generate DMCA takedown notices automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f2dffc4b-9f65-42b5-b720-a50084cfc622"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
