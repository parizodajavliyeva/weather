import React from "react";

function RightItem({airData , airType}) {
  return (
    <div>
      <li className="listts-item">
        <p>{airType}</p>
        <p className="p">{airData}</p>
      </li>
    </div>
  );
}

export default RightItem;
