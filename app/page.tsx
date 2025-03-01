import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Rent Bridge",
  description: "Find and rent homes easily.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-base-100 p-6">
      
      {/* Hero Section */}
      <main className="w-full max-w-6xl flex flex-col md:flex-row items-center text-center md:text-left mt-12">
        {/* Text Section */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-5xl font-bold text-primary leading-tight">
            Find Your Dream Home
          </h2>
          <p className="text-lg text-neutral mt-3">
            Discover the best rental options tailored to your needs, with seamless booking and chat features.
          </p>
          <Link href="/houses" className="mt-6 inline-block px-6 py-3 bg-primary text-base-100 text-lg font-medium rounded-full hover:opacity-80">
            Browse Houses
          </Link>
        </div>
        
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img src="/images/house.png" alt="Rent Bridge Mascot" className="w-80 h-auto" />
        </div>
      </main>
    </div>
  );
}
