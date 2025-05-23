import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "E-commerce Mobile App",
    description:
      "Developed a feature-rich mobile e-commerce application using React Native Expo, focusing on seamless shopping experiences, real-time order tracking, and multilingual support. Integrated Firebase for authentication and backend services. Utilized React Query for efficient state and server data management.",
    tools: [
      "React Native Expo",
      "NestJS",
      "Firebase",
      "React Query",
      "TypeScript",
      "Google Cloud Functions",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: ayla,
  },

  {
    id: 2,
    name: "Mobile Barber App",
    description:
      "Led the development of a mobile app for a barber shop using React Native Expo. Enabled clients to book appointments and barbers to manage reservations. Integrated Firebase for authentication, real-time updates, and database management, significantly improving operational efficiency and user experience.",
    tools: [
      "React Native Expo",
      "Socket.io",
      "Push Notifications",
      "Firebase",
      "JavaScript",
      "Node.js",
      "MongoDB",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Language Management System",
    description:
      "Designed and built a scalable platform to manage language learning resources. Developed RESTful APIs using NestJS and integrated real-time chat with Socket.io. Collaborated with teams to gather requirements and architect a solution enhancing digital learning accessibility.",
    tools: [
      "Next.js",
      "NestJS",
      "Formik",
      "Bootstrap",
      "SCSS",
      "TypeScript",
      "PostgreSQL",
      "Socket.io",
      "Gemini API",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Donation Platform",
    description:
      "I implemented RESTful APIs using Nest.js to enhance backend functionality, ensuring secure and efficient transactions. Collaborated closely with stakeholders to define requirements, developed user profiles, and built dashboards to track donations and project progress—fostering transparency and engagement.",
    tools: [
      "TypeScript",
      "React",
      "TypeORM",
      "Next.js",
      "Socket.io",
      "NestJS",
      "PostgreSQL",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 5,
    name: "Photographer's Desktop App (Electron)",
    description:
      "Built a cross-platform desktop app with Electron, enabling photographers to showcase and manage their work. Developed the frontend with React and backend with NestJS and SQLite. Included image editing features (filters, custom adjustments), image organization by size and price, and export/email functionality.",
    tools: [
      "Electron",
      "React",
      "NestJS",
      "SQLite",
      "TypeScript",
      "NodeMailer",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: ayla,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
