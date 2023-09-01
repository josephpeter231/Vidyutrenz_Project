import { useState } from "react";
import cd from "../assets/cit.png";


const Card = ({ Tech }) => {
  

  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };



  const cardStyle = {
    position: "relative",
    maxWidth: "300px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "filter 0.3s",
    borderRadius: "10px",
  };

  const imageStyle = {
    width: "100%",
    filter: hovered ? "blur(5px)" : "none",
    transition: "filter 0.3s",
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    display: hovered ? "none" : "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.9",
  };

  const overlayTextStyle = {
    color: "black",
    textAlign: "center",
    marginTop: "230px",
    
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ position: "relative" }}>
        <img style={imageStyle} src={cd} alt="Description of the Image" />
        <div style={overlayStyle}>
          <h1 className="mt-[48] font-bold backdrop-blur-lg w-full" style={overlayTextStyle}>
            {Tech.name}
          </h1>
        </div>
      </div>

      <div style={{ display: hovered ? "block" : "none" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection:"column",
            gap:"0.5rem",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 className="font-semibold">{Tech.name}</h1>
          <p className="font-semibold p-2 font-serif tracking-wide"style={{ color: "white", textAlign: "center", fontSize:"10px" }}>
            {Tech.description}
          </p>
          <button type="submit" className="p-3 text-xs border rounded-xl" ><a href="https://search.yahoo.com/search?fr=mcafee&type=E210US885G0&p=chat+gpt">Explore</a></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
