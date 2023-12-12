import React, { useState } from 'react';

const abc = () => {
  const [names, setNames] = useState(["SUBIN", "SREEHARI", "THOMAS", "ANWIN"]);

  return (
    <div>
      <ol>
        {names.map((value, index) => (
          <b><li 
            key={index}>{value}
          </li></b>
        ))}
      </ol>
    </div>
  );
};

export default abc;
