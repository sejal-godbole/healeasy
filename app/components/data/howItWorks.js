import { Search, UserCheck, CalendarDays, Activity } from "lucide-react";

export const howItWorks = [
  {
    title: "Find Your Doctor",
    description: "Search by specialty, location, or doctor name to find the perfect match.",
    icon: <Search className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "View Profile & Reviews",
    description: "Check doctor credentials, experience, and patient feedback to book with confidence.",
    icon: <UserCheck className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Book an Appointment",
    description: "Select a convenient time slot and confirm your booking instantly.",
    icon: <CalendarDays className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Manage Your Health",
    description: "Receive reminders, join video calls, and access your digital prescriptions.",
    icon: <Activity className="w-8 h-8 text-blue-600" />,
  },
];