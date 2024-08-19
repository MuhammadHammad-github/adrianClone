import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

function valuetext(value) {
  return `$${value}`;
}

export default function RangeSlider({ num1 = 0, num2 = 1 }) {
  const [value, setValue] = useState([num1, num2]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "full" }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={num2}
        sx={{
          color: "#FB5C42", // Slider track color
          height: 8, // Track size
          "& .MuiSlider-thumb": {
            backgroundColor: "#fff", // Thumb color
            width: 15, // Thumb size
            height: 15,
            border: "2px solid #FB5C42", // Optional border around thumb
          },
          "& .MuiSlider-rail": {
            color: "#757575", // Inactive track color
            height: 8, // Inactive track size
          },
        }}
      />
      <span>
        Price: ${value[0]} - ${value[1]}
      </span>
    </Box>
  );
}
