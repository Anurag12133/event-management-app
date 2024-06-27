import Image from "next/image";
import "@/app/css/mainPage.css";
import { NavbarDemo } from "./components/Navbar";
import ContentSection from "./components/ContentSection";
export default function Home() {
  return (
    <body className="main-body">
      <div>
        <NavbarDemo />
        <ContentSection />
      </div>
    </body>
  );
}
