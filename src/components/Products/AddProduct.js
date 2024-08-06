import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ColorProduct from "./ColorProduct";
import SiseProduct from "./SiseProduct";
import ImageProduct from "./ImageProduct";
import Button from "@mui/material/Button";

export const AddProduct = () => {
  const [categorie, setCategorie] = React.useState("");
  const [name, setName] = React.useState("");
  const [pricepurchase, setPricepurchase] = React.useState("");//achat
  const [pricesale, setPricesale] = React.useState("");//vente
  const [description, setDescription] = React.useState("");

  const [colors, setColors] = React.useState([]);
  const [sises, setSises] = React.useState([]);
  const [images, setImages] = React.useState([]);
   
   
   
  
  const handleChangeCat = (event) => {
    setCategorie(event.target.value);
  };
  
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  
  const handleChangePricePurch = (event) => {
    setPricepurchase(event.target.value);
  };
  
  const handleChangePriceSale = (event) => {
    setPricesale(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  
  const handleSubmit = (event) => {
    let data = {
      name,pricepurchase,pricesale,categorie,description,colors,sises,images
    }
    if(data.name.trim() !== "" && data.categorie.trim() !== "" && data.pricepurchase.trim() !== "" && data.pricesale.trim() !== "" && data.description.trim() !== ""){
      console.log(data)
    }else{
      alert("Data Empty")
    }
    
  };
  
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} mt={3}>
          <Button onClick={handleSubmit} variant="outlined" style={{ height: "100%" }} fullWidth>
            Add Product
          </Button>
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={handleChangeName}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="outlined-basic"
            label="Price Purchace (DA)"
            onChange={handleChangePricePurch}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="outlined-basic"
            label="Price Sale (DA)"
            variant="outlined"
            onChange={handleChangePriceSale}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            onChange={handleChangeDescription}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={categorie}
              label="Categorie"
              onChange={handleChangeCat}
            >
              <MenuItem value={"10"}>Ten</MenuItem>
              <MenuItem value={"20"}>Twenty</MenuItem>
              <MenuItem value={"30"}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h2">
            Colors
          </Typography>
          <ColorProduct setColorss={setColors}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h2">
            Sizes
          </Typography>
          <SiseProduct  setSisess={setSises}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h2">
            Images
          </Typography>
          <ImageProduct setImagess={setImages} />
        </Grid>
      </Grid>
    </>
  );
};
