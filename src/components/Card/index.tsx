import React, { FC } from "react";

interface CardProps {
  id: string;
  title: string;
  platform: string;
  date: string;
}

const index: FC<CardProps> = ({ id, title, platform, date }) => {
  return (
    <div>
      <h1>{id}</h1>
      <h1>{title}</h1>
      <h1>{platform}</h1>
      <h1>{date}</h1>
    </div>
  );
};

export default index;
