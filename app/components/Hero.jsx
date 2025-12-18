"use client"

import React, { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, Calendar } from "lucide-react"

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    const handleScroll = () => {
      if (!imageElement) return;
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10 px-4">
      <div className="space-y-10 text-center">
        {/* Main Content */}
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter">
            Your Health, <br />
            <span className="text-blue-400">Our Priority.</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Find the right doctor, book instant appointments, and manage your health records all in one secure place.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/find-doctor">
            <Button size="lg" className="px-8 bg-blue-400 hover:bg-blue-300 h-12">
              <Search className="mr-2 h-5 w-5" /> Find a Doctor
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" variant="outline" className="px-8 h-12">
              <Calendar className="mr-2 h-5 w-5" /> View Schedule
            </Button>
          </Link>
        </div>

        {/* Animated Banner Image */}
        <div className="hero-image-wrapper mt-12">
          <div ref={imageRef} className="hero-image transition-all duration-700 ease-in-out">
            <Image
              src="/banner.jpeg" // Use a high-quality medical dashboard or clinic image
              width={900}
              height={520}
              alt="Healthcare Dashboard"
              className="rounded-xl shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;