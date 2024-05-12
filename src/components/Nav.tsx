"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

export function Nav({ children }: { children: React.ReactNode }) {
  return (
    <nav className="relative w-full flex felx-row justify-end items-center py-2 px-20 bg-transparent z-50 gap-4">
      {children}
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={`p-2 hover:text-slate-600 text-xl font-semibold ${
        pathname === props.href ? "text-blue-500" : "text-slate-500"
      }`}
    />
  );
}
