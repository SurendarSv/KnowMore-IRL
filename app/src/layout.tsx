import type { Metadata } from "next";
import "./style.css";
import { AuthProvider } from "../context/AuthContext"; // Added AuthProvider import

export const metadata: Metadata = {
  title: "KnowMoreIRL - Learn, Grow, Innovate",
  description: "KnowMoreIRL - Your gateway to learning, growth, and innovation. Explore courses, projects, and insights.",
  openGraph: {
    title: "KnowMoreIRL - Learn, Grow, Innovate",
    description: "Your gateway to learning, growth, and innovation",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon.png" />
        <link rel="apple-touch-icon" href="favicon.png" />
        <link rel="shortcut icon" href="favicon.png" />
      </head>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
