"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";;
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignRight } from "lucide-react";

const Navbar = ({ bgcolor }) => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // close menu on click
  const closeMenu = () => setClick(false);

  // change nav color when scrolling

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  });
  return (
    <div className="bg-white container py-6" >
      <nav className="navbar flex justify-between">
        <Link href="/" className="logo">
          <Image
            src="/images/logo-dark.png"
            alt="logo"
            className="cursor-pointer" width={160} height={80}
          />
        </Link>
        <Sheet>
          <SheetTrigger><AlignRight className="text-xl" /></SheetTrigger>
          <SheetContent onCloseAutoFocus={event => event.preventDefault()}>
            <SheetHeader>
              <SheetTitle>
                <Image
                  src="/images/logo-dark.png"
                  alt="logo"
                  className="cursor-pointer" width={160} height={80}
                />
              </SheetTitle>

            </SheetHeader>
            <div className="flex flex-col space-y-5 font-bold text-md">
            <SheetTrigger asChild className="mt-10">
              <Link  href="/">Home</Link>
            </SheetTrigger>
           
            <SheetTrigger  asChild>
              <Link href="/how-it-works">How it works</Link>
            </SheetTrigger>
           
            <SheetTrigger asChild>
              <Link href="/rates-&-fees">Rates & Fees</Link>
            </SheetTrigger>
           
            <SheetTrigger asChild>
              <Link href="/faq">Faq</Link>
            </SheetTrigger>
           
            <SheetTrigger asChild>
              <Link href="/contact">Conatct</Link>
            </SheetTrigger>
            </div>


          </SheetContent>
        </Sheet>










      </nav>

    </div>
  );
};

export default Navbar;
