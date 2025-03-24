"use client";

import { usePathname } from "next/navigation";
import Footer from "../Footer";

const ClientFooter = () => {
  const pathname = usePathname();

  if (pathname === "/login") return null;

  return <Footer />;
};

export default ClientFooter;
