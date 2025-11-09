import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link"; 
import "dotenv/config";
import ClaimLinkForm from "@/modules/Home/components/claim-link-form";
import { onboardUser  } from "@/modules/auth/actions";
import "../globals.css";

const HomePage = async () => {
  await onboardUser();

  return (
    <div className="min-h-screen">
      <main className="text-center space-y-8 py-32">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-zinc-50">
            Your digital presence.<br />
            <span className="text-[#418313]">Unified in one smart link.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Join millions of creators using LinkOrbit to connect their audiences.
            One simple link to share everything you create, curate, and sell —
            all from your social profiles.
          </p>

          <div className="pt-4">
            <Link href="/dashboard"> 
              <Button size="lg" className="px-8 py-3 text-lg font-medium cursor-pointer">
                LinkOrbit Dashboard
              </Button>
            </Link>
          </div>

          <section className="pb-16 md:pb-24">
            <div className="max-w-md mx-auto">
              <ClaimLinkForm/>

            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
