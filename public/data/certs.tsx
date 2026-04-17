import { FaSwift, FaAws } from "react-icons/fa";
import { DiScrum } from "react-icons/di";

export interface CertsAchievements {
  name: string;
  date: string;
  icon: React.ReactNode | null;
  link: string | null;
}

export const certificates: CertsAchievements[] = [
  {
    name: "Certified Solutions Architect — Associate",
    date: "May 2024",
    icon: <FaAws size={30} className="fill-darkbackground" />,
    link: "https://www.credly.com/badges/c00c563d-afb7-4d0d-b00c-296a1701bfc1/public_url",
  },
  {
    name: "Professional Scrum Master™ I (PSM I)",
    date: "May 2024",
    icon: <DiScrum size={30} className="fill-darkbackground" />,
    link: "https://www.credly.com/badges/d36fa9c8-508f-449d-8662-27d9e6bd55a7/public_url",
  },
  {
    name: "App Development in Swift | Certified User",
    date: "March 2022",
    icon: <FaSwift size={30} className="fill-darkbackground" />,
    link: "https://www.credly.com/badges/049bd2c9-00a3-41b6-a521-7396b6cf57b9/public_url",
  },
  {
    name: "App Development in Swift | Associate",
    date: "January 2022",
    icon: <FaSwift size={30} className="fill-darkbackground" />,
    link: "https://www.credly.com/badges/d8761176-2a3f-4349-9af8-9efc7ef36809/public_url",
  },
];

export const achievements: CertsAchievements[] = [
  {
    name: "Polytechnic Champions",
    date: "Dell InnovateFest Hackathon 2025",
    icon: null,
    link: null,
  },
  {
    name: "Medallion of Excellence - Web Technologies",
    date: "WorldSkills Singapore 2025",
    icon: null,
    link: null,
  },
  {
    name: "CAAS Unmanned Aircraft Pilot's Licence",
    date: "December 2024",
    icon: null,
    link: null,
  },
  {
    name: "A*Star Science Award",
    date: "2024 - Current",
    icon: null,
    link: null,
  },
  {
    name: "FAA Private Pilot's Licence",
    date: "March 2024",
    icon: null,
    link: null,
  },
  {
    name: "Ngee Ann Polytechnic Scholarship",
    date: "2023 - Current",
    icon: null,
    link: null,
  },
];
