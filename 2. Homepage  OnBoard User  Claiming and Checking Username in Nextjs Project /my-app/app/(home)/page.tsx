import { Button } from "@/components/ui/button";
import Image from "next/image";
import "dotenv/config"
import { onboardUser } from "@/modules/auth/actions";
import "../globals.css";


const HomePage = async()=> {
  await onboardUser()
  return (
    <div >
      {/* Homepage */}
    </div>
  );
}
export default HomePage