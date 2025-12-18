import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Video, Clock } from "lucide-react";

// Component Imports
import HeroSection from "./components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Data Imports (Ensure these are the updated medical versions)
import { features } from "./components/data/features";
import { howItWorks } from "./components/data/howItWorks";
import { testimonials } from "./components/data/testimonials";
import { faqs } from "./components/data/faqs";

export default function Home() {
  return (
    <div className="min-h-screen ">
      {/* Background Pattern */}
      <div className=""></div>

      <HeroSection />

      {/* 1. Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Complete Healthcare at Your Fingertips
            </h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              Everything you need to manage your medical appointments and health records in one secure platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-blue-300 transition-all duration-300 shadow-sm">
                <CardContent className="pt-8 text-center flex flex-col items-center">
                  <div className="mb-4 rounded-full bg-blue-50 p-3 text-blue-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Stats Section (Healthcare Context) */}
      <section className="w-full py-12 md:py-24 bg-blue-300 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <h3 className="text-4xl font-bold">10k+</h3>
              <p className="text-blue-100 uppercase text-xs tracking-widest font-semibold">Verified Doctors</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <h3 className="text-4xl font-bold">25+</h3>
              <p className="text-blue-100 uppercase text-xs tracking-widest font-semibold">Specialties</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <h3 className="text-4xl font-bold">1M+</h3>
              <p className="text-blue-100 uppercase text-xs tracking-widest font-semibold">Appointments Booked</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <h3 className="text-4xl font-bold">4.9/5</h3>
              <p className="text-blue-100 uppercase text-xs tracking-widest font-semibold">Patient Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              Simplifying the path to better health in four easy steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {howItWorks.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4 relative">
                <div className="w-16 h-16 rounded-2xl bg-blue-300 flex items-center justify-center text-white shadow-lg">
                  {step.icon}
                </div>
                <h3 className="font-bold text-xl">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Trusted by Thousands of Patients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, index) => (
              <Card key={index} className="bg-white border-none shadow-sm flex flex-col h-full">
                <CardContent className="pt-8 flex-grow">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-300 text-yellow-300" />)}
                  </div>
                  <blockquote className="text-slate-700 italic mb-6">
                    &quot;{t.quote}&quot;
                  </blockquote>
                  <div className="flex items-center space-x-4 mt-auto">
                    <Image
                      width={48}
                      height={48}
                      src={t.image}
                      alt={t.author}
                      className="rounded-full border-2 border-blue-100"
                    />
                    <div>
                      <p className="font-bold text-slate-900">{t.author}</p>
                      <p className="text-xs text-muted-foreground">{t.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground italic">Find quick answers to your healthcare queries</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="hover:text-blue-300 text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 6. Call to Action (CTA) */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-blue-300 rounded-3xl p-12 text-center text-white space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <h2 className="text-3xl md:text-5xl font-bold">Take Charge of Your Health Today</h2>
            <p className="max-w-xl mx-auto text-blue-100 md:text-xl">
              Join thousands of patients who have simplified their healthcare journey.
            </p>
            <Link href="/dashboard" className="inline-block">
              <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-lg group">
                Book Your First Appointment <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}