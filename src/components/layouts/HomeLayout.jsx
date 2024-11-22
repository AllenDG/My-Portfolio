import { Outlet } from "react-router-dom";
import Navbar from "../ui/navbar/Navbar";
import Footer from "../ui/footer/Footer";

export default function HomeLayout() {
  return (
<div>
  <Navbar />
  <main className="min-h-[80vh] overflow-hidden">
        <Outlet />
      </main>
      <Footer/>
</div>
  );
}
