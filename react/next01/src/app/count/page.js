import React, { useState } from "react";

const page = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button onClick={() => setValue(value + 1)}>
        increment:
      </button>
      {value}
      <button onClick={() => setValue(value - 1)}>
        decrement:
      </button>
    </div>
  );
};

export default page;
