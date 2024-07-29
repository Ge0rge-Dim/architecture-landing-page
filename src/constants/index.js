import hamOpen from "../assets/icons/ham-menu.svg";
import hamClose from "../assets/icons/ham-menu-close.svg";
import imageOne from "../assets/images/hero-image-one.jpg";
import imageTwo from "../assets/images/hero-image-two.jpg";
import imageThree from "../assets/images/hero-image-three.jpg";
import carouselOne from "../assets/images/carouselOne.png";
import carouselTwo from "../assets/images/carouselTwo.png";
import carouselThree from "../assets/images/carouselThree.png";
import carouselFour from "../assets/images/carouselFour.png";
import carouselFive from "../assets/images/carouselFive.png";
import teamOne from "../assets/images/team-one.jpg";
import teamTwo from "../assets/images/team-two.jpg";
import teamThree from "../assets/images/team-three.jpg";
import teamFour from "../assets/images/team-four.jpg";
import teamFive from "../assets/images/team-five.jpg";
import teamSix from "../assets/images/team-six.jpg";
import teamSeven from "../assets/images/team-seven.jpg";
import teamEight from "../assets/images/team-eight.jpg";
import Linkedin from "../assets/icons/Linkedin.svg";
import Facebook from "../assets/icons/Facebook.svg";
import Instagram from "../assets/icons/Instagram.svg";

export const hamMenu = [
  { src: hamOpen, alt: "hamburger icon" },
  { src: hamClose, alt: "close icon" },
];

export const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "", label: "Careers" },
];

export const heroImages = {
  imageOne,
  imageTwo,
  imageThree,
};

export const carouselImages = [
  {
    src: carouselOne,
    title: "CRAZIES HALL",
  },
  {
    src: carouselTwo,
    title: "WELLNESS ATRIUM",
  },
  {
    src: carouselThree,
    title: "TOWN HALL",
  },
  {
    src: carouselFour,
    title: "CITY HALL",
  },
  {
    src: carouselFive,
    title: "WETHERED PARK",
  },
];

export const teamImages = [
  { src: teamOne, title: "LIAM THOMPSON", description: "DIRECTOR" },
  { src: teamTwo, title: "OLIVIA BENNETT", description: "DIRECTOR" },
  { src: teamThree, title: "SOPHIA REYNOLDS", description: "FINANCE DIRECTOR" },
  { src: teamFour, title: "NOAH HARISSON", description: "OFFICE MANAGER" },
  { src: teamFive, title: "EMILY CARTER", description: "associate DIRECTOR" },
  {
    src: teamSix,
    title: "Ethan Cooper",
    description: "architectural assistant",
  },
  { src: teamSeven, title: "Ava Mitchell", description: "interior designer" },
  {
    src: teamEight,
    title: "Mason Brooks",
    description: "Architectural Technologist",
  },
];

export const socialMedia = [
  { src: Facebook, alt: "facebook icon" },
  { src: Linkedin, alt: "Linkedin icon" },
  { src: Instagram, alt: "Instagram icon" },
];

export const footerLinksOne = [
  { href: "", label: "Home" },
  { href: "", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "", label: "Careers" },
];

export const footerLinksTwo = [
  { href: "", label: "Privacy Policy" },
  { href: "", label: "Terms of Service" },
];
