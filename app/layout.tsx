import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Learn-Stack | Enterprise AI-Powered LMS",
    template: "%s | Learn-Stack"
  },
  description: "A high-performance, SEO-optimized, and secure platform for digital education. Master skills with AI-driven curriculum.",
  keywords: ["LMS", "Education", "Next.js", "React", "Online Courses", "AI learning", "Learn-Stack"],
  authors: [{ name: "rasifalsaif" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://learnstack.edu",
    siteName: "Learn-Stack",
    title: "Learn-Stack | Master the Future of Technology",
    description: "Transform your career with our industry-leading courses and AI-driven curriculum.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn-Stack | Master the Future",
    description: "AI-powered learning platform for modern innovators.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            {children}
          </div>
          <Toaster closeButton position="bottom-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
