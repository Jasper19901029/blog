import React from "react";
import Link from "next/link";
export default function Navigation() {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
    </div>
  );
}
