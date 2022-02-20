import React, { useState } from "react";

const ControlledComponents2 = () => {
  const [value, setValue] = useState("Hello React - Composants contrôlés");

  const handleChange = (event) => setValue(event.target.value);

  return (
    <div>
      <h2>Exemple 2 - Composants contrôlés</h2>
      <hr />
      <label>
        My uncontrolled Input:{" "}
        <input type="text" value={value} onChange={handleChange} />
      </label>

      <p>
        <strong>Output :</strong> {value}
      </p>
    </div>
  );
};

export default ControlledComponents2;
