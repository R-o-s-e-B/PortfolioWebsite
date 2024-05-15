import redCircle from "../assets/images/red_circle.png";
import planmate from "../assets/images/planmate.png";
import miso from "../assets/images/miso.png";
import meta from "../assets/images/metaverse.png";
import artopia from "../assets/images/artopia.png";
import uni from "../assets/images/uni.png";
import furn from "../assets/images/furniture.png";
import taske from "../assets/images/taske.png";
import ecom from "../assets/images/ecom.png";
import ml from "../assets/images/ml.png";
import aichat from "../assets/images/aichat.png";
import sigame from "../assets/images/sigame.png";
import color from "../assets/images/colorpalette.png";
import char1 from "../assets/images/misc/charcoal1.png";
import char2 from "../assets/images/misc/charcoal2.png";
import char3 from "../assets/images/misc/charcoal3.png";
import char4 from "../assets/images/misc/charcoal4.jpeg";
import graph from "../assets/images/misc/graphite1.png";
import dig1 from "../assets/images/misc/dig1.png";
import dig2 from "../assets/images/misc/dig2.png";
import dig3 from "../assets/images/misc/dig3.png";
import dig4 from "../assets/images/misc/dig4.png";
import dig5 from "../assets/images/misc/dig5.png";
import three1 from "../assets/images/misc/three1.png";
import three2 from "../assets/images/misc/three2.png";
import three3 from "../assets/images/misc/three3.png";
import three4 from "../assets/images/misc/three4.png";

const threeD = [
  { image: three1, info: "3D Modelling - Zbrush" },
  { image: three2, info: "3D Sculpting - Zbrush" },
  { image: three3, info: "3D Modelling - Blender" },
  { image: three4, info: "Lighting - Marmoset" },
];

const charcoal = [char1, char2, char3, char4, graph];
const digital = [dig2, dig3, dig4, dig5, dig1];

const works = [
  {
    title: "PlanMate - UX and App development",
    image: planmate,
    code: true,
    gitlink: "",
    blink:
      "https://www.behance.net/gallery/195901353/PlanMate-Daily-planner-App%28UIUX-and-Development%29",
    link: "",
    website: false,
  },
  {
    title: "Miso - UX Case study",
    image: miso,
    code: false,
    gitlink: "",
    blink:
      "https://www.behance.net/gallery/175205501/Miso-Restaurant-reservation-app",
    link: "",
    website: false,
  },
  {
    title: "Metaverse - Interaction Design",
    image: meta,
    code: true,
    gitlink: "https://github.com/R-o-s-e-B/languageTranslatorConcept",
    blink:
      "https://www.behance.net/gallery/194839585/Communication-in-the-metaverse",
    link: "",
    website: false,
  },
  {
    title: "Artopia - UX Case Study",
    image: artopia,
    code: false,
    gitlink: "",
    blink:
      "https://www.behance.net/gallery/187933343/Artopia-Art-Community-website",
    link: "",
    website: false,
  },
  {
    title: "UniConnect - Campus app",
    image: uni,
    code: false,
    gitlink: "",
    blink: "https://www.behance.net/gallery/184853417/Uniconnect-Campus-app",
    link: "",
    website: false,
  },
  {
    title: "Furniture E-commerce website",
    image: furn,
    code: true,
    gitlink:
      "https://github.com/R-o-s-e-B/Furniture-website/tree/R-o-s-e-B-patch-1",
    blink: "",
    link: "https://furniturewebiste.onrender.com",
    website: true,
  },
  {
    title: "Task-E website",
    image: taske,
    code: true,
    gitlink: "https://github.com/R-o-s-e-B/to-do-list",
    blink: "",
    link: "https://task-e-web.onrender.com",
    website: false,
  },
  {
    title: "E-Commerce website",
    image: ecom,
    code: true,
    gitlink: "https://github.com/R-o-s-e-B/paymentwebsite",
    blink: "",
    link: "https://test-payment-g733.onrender.com",
    website: false,
  },
  {
    title: "Color palette generator",
    image: color,
    code: true,
    gitlink: "https://github.com/R-o-s-e-B/Color_palette_generator",
    blink: "",
    link: "https://color-palette-pfk4.onrender.com",
    website: false,
  },
  {
    title: "AI API",
    image: aichat,
    code: true,
    gitlink: "https://github.com/R-o-s-e-B/AI-website",
    blink: "",
    link: "https://github.com/R-o-s-e-B/AI-website",
    website: false,
  },
  {
    title: "ML Chatbot",
    image: ml,
    code: true,
    gitlink: "https://github.com/R-o-s-e-B/chatBot",
    blink: "",
    link: "https://github.com/R-o-s-e-B/chatBot",
    website: false,
  },
  {
    title: "Space Invaders",
    image: sigame,
    code: true,
    gitlink: "https://github.com/R-o-s-e-B/Space_invaders",
    blink: "",
    link: "https://github.com/R-o-s-e-B/Space_invaders",
    website: false,
  },
];

const experiences = [
  {
    title: "App Development",
    company_name: "Project",
    icon: redCircle,
    iconBg: "#383E56",
    date: "01-02-24 - 08-03-24",
    points: [
      "Developer a Daily planner app for android called TaskTrek",
      "With Android Studio / Kotlin",
    ],
  },
  {
    title: "Web Development",
    company_name: "Project",
    icon: redCircle,
    iconBg: "#E6DEDD",
    date: "06/23 - 08/23",
    points: [
      "Developed a furniture e-commerce website",
      "With Javascript / React.js / Python Flask / PostgreSQL",
    ],
  },
  {
    title: "Illustrator",
    company_name: "Freelance",
    icon: redCircle,
    iconBg: "#383E56",
    date: "01/12/22",
    points: ["Portrait illustrations", "Graphic designs on redbubble"],
  },
];

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "Python",
  "React.js",
  "SQL",
  "Kotlin",
  "C++",
  "Java",
  "TailwindCSS",
];

const designSkills = [
  "User Experience",
  "User Research",
  "Interaction Design",
  "Wireframing",
  "Prototyping",
  "Illustrations",
];

export { experiences, skills, designSkills, works, charcoal, digital, threeD };
