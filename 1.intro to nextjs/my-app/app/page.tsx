import { Button } from "@/components/ui/button";
import Image from "next/image";
import "dotenv/config"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">One Piece</h1>
      <Button>Hello World!</Button>
    </div>
  );
}