import { FC } from "react";
import "./Card.scss";
interface CardProps {
  id: string;
  title: string;
  platform: string;
  date: string;
  color?: string;
}

const index: FC<CardProps> = ({ id, title, platform, date, color }) => {
  return (
    <div className="card" key={id} style={{ background: color }}>
      <div>
        <h3 className="title">{title}</h3>
        <p className="platform">{platform}</p>
      </div>
      <div className="flx">
        <span className="date">{date}</span>
        <button className="view-btn">View</button>
      </div>
    </div>
  );
};

export default index;
