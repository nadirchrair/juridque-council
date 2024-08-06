import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
//import { AddCategory } from "../../Fetch";



const Categories = () => {
  const [name, setName] = useState("")
  const handleClickAddCat = () =>{
  //  AddCategory(name);
  }
  return (
    <>
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e)=> setName(e.target.value)}
            value={name}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button onClick={handleClickAddCat} variant="outlined" style={{ height: "100%" }} fullWidth>
            Add Categorie
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Categories;
