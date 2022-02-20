import React, { useState } from "react";

const ControlledComponents1 = () => {
  const [value, setValue] = useState("Hello React - Composants contrôlés");

  const handleChange = (event) => setValue(event.target.value);

  return (
    <div>
      <h2>Exemple 1 - Composants contrôlés</h2>
      <hr />
      <label>
        My uncontrolled Input: <input type="text" onChange={handleChange} />
      </label>

      <p>
        <strong>Output :</strong> {value}
      </p>
    </div>
  );
};

export default ControlledComponents1;
