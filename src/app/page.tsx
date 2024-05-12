import { Nav, NavLink } from "@/components/Nav";
import dynamic from "next/dynamic";

const RoomScene = dynamic(() => import("@/components/RoomScene"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative flex flex-col w-full h-screen bg-slate-50 dark:bg-gray-950">
      <Nav>
        <div className="flex justify-start items-center w-full">
          <NavLink href="/">Home</NavLink>
        </div>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </Nav>

      <RoomScene />
    </main>
  );
}
