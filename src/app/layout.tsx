import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollButtons from "@/components/ScrollingUpButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body>
          <Header />
          <ScrollButtons />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
