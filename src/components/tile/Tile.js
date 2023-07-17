import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {
        description.map((d,i) => <p key={i} className="tile">{d}</p>)
      }
    </div>
  );
};

export default Tile;