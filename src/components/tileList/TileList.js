import React from "react";
import Tile from "../tile/Tile.js";


export const TileList = ({data}) => {
  console.log(data.map((a, i) => <Tile key={i} name={a.name} description={Object.keys(a).filter(k => k !== 'name').map(key => a[key])}  />))
  return (
    <div className="tiles-container"> {
      data.map((a, i) => <Tile key={i} name={a.name} description={Object.keys(a).filter(k => k !== 'name').map(key => a[key])}  />)
    } </div>
  );
};
