import { LuCircleDollarSign } from "react-icons/lu";
import { GrSecure } from "react-icons/gr";
import { IoReload } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { SiAirbnb } from "react-icons/si";
import { TbBrandBooking } from "react-icons/tb";
import { FaTripadvisor } from "react-icons/fa";
import { TbKayak } from "react-icons/tb";
import { FaWindows } from "react-icons/fa";
import {
  audi,
  baobab,
  beach,
  bmw,
  chevrolet,
  daniella,
  erica,
  ford,
  jaguar,
  land_rover,
  mercedes,
  porche,
  restaurant,
  rodrygo,
} from "../../assets";

export const services = [
  {
    icon: <LuCircleDollarSign />,
    title: "Competitive Prices",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  {
    icon: <GrSecure />,
    title: "Secure Booking",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  {
    icon: <IoReload />,
    title: "Seamless Experience",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
];

export const partners = [
  {
    icon: <FcGoogle />,
    name: "Google",
  },
  {
    icon: <TbBrandBooking />,
    name: "Booking.",
  },
  {
    icon: <SiAirbnb />,
    name: "Airbnb",
  },
  {
    icon: <FaTripadvisor />,
    name: "Tripadvisor",
  },
  {
    icon: <TbKayak />,
    name: "Kayak",
  },
  {
    icon: <FaWindows />,
    name: "Windows",
  },
];

export const cars = [
  {
    id: 1,
    name: "Audi",
    image: audi,
    star: 4.8,
    price: "225.000",
    location: "Florida",
  },
  {
    id: 2,
    name: "BMW",
    image: bmw,
    star: 4.8,
    price: "122.000",
    location: "Canada",
  },
  {
    id: 3,
    name: "Chevrolet",
    image: chevrolet,
    star: 4.7,
    price: "247.000",
    location: "California",
  },
  {
    id: 4,
    name: "Ford",
    image: ford,
    star: 4.5,
    price: "142.000",
    location: "Texas",
  },
  {
    id: 5,
    name: "Jaguar",
    image: jaguar,
    star: 4.3,
    price: "225.000",
    location: "Floride",
  },
  {
    id: 6,
    name: "Mercedes",
    image: mercedes,
    star: 3.9,
    price: "138.000",
    location: "Ohio",
  },
  {
    id: 7,
    name: "Porsche",
    image: porche,
    star: 3.8,
    price: "272.000",
    location: "Indiana",
  },
  {
    id: 8,
    name: "Land Rover",
    image: land_rover,
    star: 3.4,
    price: "292.000",
    location: "Alaska",
  },
];

export const blogs = [
  {
    id: 1,
    title: "Delicious restaurant at Hanalei Bay",
    text: "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...",
    image: restaurant,
    date: "February 20, 2024",
  },
  {
    id: 2,
    title: "Top 10 most beautiful check-in spots in Ph ...",
    text: "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...",
    image: beach,
    date: "February 20, 2024",
  },
  {
    id: 3,
    title: "Baobab of Madagascar",
    text: "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...",
    image: baobab,
    date: "February 20, 2024",
  },
];

export const testimonials = [
  {
    id: 1,
    user: {
      name: "Erica",
      title: "Model",
      image: erica,
    },
    rating: 5,
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    id: 2,
    user: {
      name: "Rodrygo",
      title: "Footballer",
      image: rodrygo,
    },
    rating: 5,
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    id: 3,
    user: {
      name: "Daniella",
      title: "Data science",
      image: daniella,
    },
    rating: 5,
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
];
