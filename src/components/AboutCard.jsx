import React from "react";

function AboutCard({ size, img }) {
    return (
      <div
        style={{
          ...styles.card,
          ...styles[size],
          backgroundImage: `url(${img})`, // Dynamically set the background image
          filter: "grayscale(90%)", // Decrease saturation close to black and white
        }}
      ></div>
    );
  }

const styles = {
  card: {
    margin: "15px 10px",
    padding: 0,
    borderRadius: "16px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  small: {
    gridRowEnd: "span 26",
  },
  medium: {
    gridRowEnd: "span 33",
  },
  large: {
    gridRowEnd: "span 45",
  },
};

export default AboutCard;
