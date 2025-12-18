"use client"

import React from 'react'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { 
  LayoutDashboard, 
  CalendarCheck, 
  Search, 
  Clock, 
  ClipboardList 
} from 'lucide-react'

// Shadcn UI Imports
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-foreground/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo2.png" 
            alt="DocReserve Logo"
            width={80}
            height={60}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            {/* Dashboard Link */}
            <Link href="/dashboard">
              <Button variant="outline" className=" bg-foreground/30 hidden md:flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </Button>
            </Link>

            {/* Appointment Management Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default" className="bg-blue-300 border-black hover:bg-blue-400">
                  <CalendarCheck className="h-4 w-4 mr-2" />
                  <span className="hidden md:block">Appointments</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Link href="/find-doctor" className="flex w-full items-center space-x-2">
                    <Search className="h-4 w-4 text-blue-600" />
                    <span>Book New</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/my-bookings" className="flex w-full items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span>My Schedule</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/records" className="flex w-full items-center space-x-2">
                    <ClipboardList className="h-4 w-4 text-blue-600" />
                    <span>Medical Records</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          {/* Authentication Section */}
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline">Sign In</Button>
            </SignInButton>
            <SignUpButton mode="modal">
               <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 border border-blue-100",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default Header