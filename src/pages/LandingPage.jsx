import About from "@/components/About";
import BeyondCoding from "@/components/BeyodCoding";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import ProfileInfo from "@/components/ProfileInfo";
import RecentProject from "@/components/RecentProject";
import TechStack from "@/components/TechStack";

export default function LandingPage() {
  return (
    <main className="w-full max-w-3xl mx-auto ">
      <ProfileInfo />

      <div className="grid grid-cols-3 gap-4 p-4">
        <About />
        <Certifications />
        <TechStack />
        <RecentProject />
        <BeyondCoding />
        <Contact />
       
      </div>
    </main>
  );
}
