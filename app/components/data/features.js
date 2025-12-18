import { 
  Stethoscope, 
  CalendarDays, 
  Video, 
  ShieldCheck 
} from "lucide-react";

export const features = [
  {
    icon: <Stethoscope className="w-10 h-10 mb-4 text-blue-600" />,
    title: "Find Top Specialists",
    description:
      "Browse through a verified list of doctors across 20+ specialties including Cardiology, Pediatrics, and more.",
  },
  {
    icon: <CalendarDays className="w-10 h-10 mb-4 text-blue-600" />,
    title: "Instant Booking",
    description:
      "Book your appointment in real-time. No more waiting on phone calls; pick a slot that fits your schedule.",
  },
  {
    icon: <Video className="w-10 h-10 mb-4 text-blue-600" />,
    title: "Telemedicine Ready",
    description:
      "Consult with your doctor from the comfort of your home via secure, high-quality video consultations.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 mb-4 text-blue-600" />,
    title: "Secure Health Records",
    description: "Your data is encrypted and safe. Access your prescriptions and medical history anytime, anywhere.",
  },
];