import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

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
const SiseProduct = ({ setSisess }) => {
  const [sise, setSise] = useState("");
  const [sises, setSises] = useState([]);
  const handleAdd = () => {
    if (sise.trim() !== "") {
      // Check if color is not empty or just whitespace
      setSises((prevsises) => [...prevsises, sise]); // Append the new color to the colors array
      setSise(""); // Clear the color input field after adding
    }
  };

  const handleDelete = (index) => {
    setSises((prevSises) => prevSises.filter((_, i) => i !== index));
  };

  useEffect(() => {
    setSisess(sises);
  }, [sises, setSisess]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8} md={8}>
          <TextField
            id="outlined-basic"
            label="Sise"
            variant="outlined"
            type="text"
            value={sise}
            onChange={(e) => setSise(e.target.value)}
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
            Add Sise
          </Button>
        </Grid>
        <Grid item xs={12} md={12}>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Sise</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sises.map((sise, index) => (
                  <TableRow key={index}>
                    <TableCell>{sise}</TableCell>
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

export default SiseProduct;
