import Navbar from "@/components/Navbar";
import SocialBar from "@/components/SocialBar";
import Hero from "@/components/Hero";
import Sections from "@/components/Sections";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <SocialBar />

      <main className="relative min-h-[calc(100vh-72px)] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(37,99,235,0.55)_1px,transparent_1px)] [background-size:22px_22px]" />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />

        <div className="relative flex min-h-[calc(100vh-72px)] items-center justify-center px-6">
          <Hero />
        </div>
      </main>

      <Sections />
      <Footer />
    </div>
  );
}
