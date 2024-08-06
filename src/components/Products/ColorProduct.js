import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

import CircleIcon from "@mui/icons-material/Circle";
import DeleteIcon from "@mui/icons-material/Delete";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
const ColorProduct = ({ setColorss }) => {
  const [color, setColor] = useState("");
  const [colors, setColors] = useState([]);
  const handleAdd = () => {
    if (color.trim() !== "") {
      // Check if color is not empty or just whitespace
      setColors((prevColors) => [...prevColors, color]); // Append the new color to the colors array
      setColor(""); // Clear the color input field after adding
    }
  };

  const handleDelete = (index) => {
    setColors((prevColors) => prevColors.filter((_, i) => i !== index));
  };

  useEffect(() => {
    setColorss(colors);
  }, [colors, setColorss]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8} md={8}>
          <TextField
            id="outlined-basic"
            label="Color"
            variant="outlined"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={4} md={4}>
          <Button
            onClick={handleAdd}
            variant="text"
            style={{ height: "100%" }}
            fullWidth
          >
            Add Color
          </Button>
        </Grid>
        <Grid item xs={12} md={12}>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Color</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {colors.map((color, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <CircleIcon style={{ color: color }} />
                    </TableCell>
                    <TableCell>
                      <DeleteIcon
                        onClick={() => handleDelete(index)}
                        style={{ color: "red" }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default ColorProduct;
