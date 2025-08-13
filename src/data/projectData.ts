import Konnectify_ETL_Tool from "../../public/assets/ETL Tool.png";
import Agrocaste from "../../public/assets/agrocast-analytics.jpg";
import Wheather from "../../public/assets/Wheather-Prediction.jpeg";

export const projectData = [
  {
    image: Konnectify_ETL_Tool,
    title: "ETL Tool",
    description:
      "Built a cloud-based ETL pipeline in Node.js deployed on Google Cloud Run, enabling CSV data migration between SaaS platforms with dynamic field mapping, rate-limit control, and scalable processing. Reduced migration time by 40%.",
    technologies: ["React Native", "Javascript", "Firebase", "Google Cloud (GCP)", "Tailwind CSS"],
    liveUrl: "https://etl-frontend-3ddd3qo4lq-uc.a.run.app/jobs",
    githubUrl: null,
    status: "Completed",
  },
  {
    image: Agrocaste,
    title: "Agrocaste",
    description:
      "Designed and implemented a smart farming solution using IoT sensors and Raspberry Pi to capture real-time field data and transmit it to a Firebase-linked mobile application, enabling farmers to make data-driven decisions for improved crop yield",
    technologies: ["IOT", "Android Studio", "Firebase"],
    liveUrl: null,
    githubUrl: "https://github.com/RajaSomasundaram/Agrocasture",
    status: "Completed",
  },
  {
    image: Wheather,
    title: "Wheather Prediction",
    description:
      "Developed a machine learning model using historical climate data to predict seasonal changes such as summer and rainy periods, analysing temperature, humidity, and rainfall patterns to support agriculture and weather-dependent planning.",
    technologies: ["AI & Ml", "Python"],
    liveUrl: null,
    githubUrl: null,
    status: "Completed",
  },
];
