"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsChevronDown } from 'react-icons/bs';
import { FaBars, FaCross, FaTimes } from 'react-icons/fa';
import { Disclosure } from '@headlessui/react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useRouter } from 'next/router';
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
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Image
                  src="/images/logo-dark.png"
                  alt="logo"
                  className="cursor-pointer" width={160} height={80}
                />
              </SheetTitle>

              <SheetDescription className="pt-10 text-lg">
                <Link href="#">Home</Link>
              </SheetDescription>
              <SheetDescription className="pt-3 text-lg">
                <Link href="#">How it works</Link>
              </SheetDescription>
              <SheetDescription className="pt-3 text-lg">
                <Link href="#">Rates & Fees</Link>
              </SheetDescription>
              <SheetDescription className="pt-3 text-lg">
                <Link href="#">FAQ's</Link>
              </SheetDescription>
              <SheetDescription className="pt-3 text-lg">
                <Link href="#">Contact</Link>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>










      </nav>

    </div>
  );
};

export default Navbar;
