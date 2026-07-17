import { useState } from "react";

function Options() {
  const [selectedOption, setSelectedOption] = useState("First");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form>
      <label htmlFor="example-option">Example option</label>
      <select
        id="example-option"
        onChange={handleChange}
        value={selectedOption}
      >
        <option value="First">First</option>
        <option value="Second">Second</option>
        <option value="Third">Third</option>
      </select>
    </form>
  );
}

export default Options;
