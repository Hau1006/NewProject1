import React, { FC } from "react";
import Card from "../components/Card/index";
import "./Certificatescard.scss";
interface CardProps {
  id: string;
  title: string;
  platform: string;
  date: string;
}
const certificates: CardProps[] = [
  {
    id: "01",
    title: "Python 3 Master Course for 2021",
    platform: "Udemy",
    date: "Nov 08, 2021",
  },
  {
    id: "02",
    title: "Web Development",
    platform: "mimi",
    date: "Dec 12, 2021",
  },
  {
    id: "03",
    title: "Learn C++ Course",
    platform: "Codecademy",
    date: "Jan 03, 2022",
  },
  {
    id: "04",
    title: "JavaScript (Intermediate)",
    platform: "HackerRank",
    date: "Apr 14, 2021",
  },
  {
    id: "05",
    title: "Scientific Computing with Python",
    platform: "freeCodeCamp",
    date: "Mar 02, 2021",
  },
  {
    id: "06",
    title: "Microsoft AI Classroom Series",
    platform: "Microsoft",
    date: "Jan 03, 2021",
  },
  {
    id: "07",
    title: "Become a Software Developer",
    platform: "LinkedIn",
    date: "Oct 25, 2021",
  },
  {
    id: "08",
    title: "JavaScript Algorithms and Data Structures",
    platform: "freeCodeCamp",
    date: "Jul 09, 2022",
  },
];

const bgColors = [
  "#F0FAFF", // Very Light Blue
  "#F7FDFA", // Very Light Green
  "#F5F2FF", // Very Light Purple
  "#FFF1F1", // Very Light Pink
  "#FEFFED", // Very Light Yellow
];
const combineCertificationWithColors = (
  certificates: CardProps[],
  bgColors: string[]
) => {
  return certificates.map((certificate, i) => ({
    ...certificate,
    color: bgColors[i % bgColors.length],
  }));
};
const CertificationWithColors = combineCertificationWithColors(
  certificates,
  bgColors
);

const Certificatescard: FC = () => {
  return (
    <>
      <div className="container">
        <h1 className="main-title">Certification</h1>
        {CertificationWithColors.map((certificate) => (
          <Card
            key={certificate.id}
            id={certificate.id}
            title={certificate.title}
            platform={certificate.platform}
            date={certificate.date}
            color={certificate.color}
          />
        ))}
      </div>
    </>
  );
};

export default Certificatescard;
