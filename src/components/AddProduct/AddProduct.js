import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import "./AddProduct.css";
import Sidebar from "../Sidebar/Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));
const AddProduct = () => {
  const classes = useStyles();

  const [products, setProducts] = useState({});
  const addToDataBase = (e) => {
    console.log(e.target.files);
    const newProducts = { ...products };
    newProducts.name = document.getElementById("name").value;
    newProducts.image = document.getElementById("image").value;
    newProducts.weight = document.getElementById("weight").value;
    newProducts.price = document.getElementById("price").value;
    setProducts(newProducts);
    if (products.name) {
      fetch("https://infinite-forest-25940.herokuapp.com/addProducts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(products),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    e.preventDefault();
  };
  return (
    <div className={classes.root}>
       <CssBaseline />
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Sidebar></Sidebar>


      <main className={classes.content}>
        <div className={classes.toolbar} />
        <form className="form" onSubmit={addToDataBase}>
          <label htmlFor="name">Product Name</label>
          <input type="text" name="name" id="name" />
          <br />
          <label htmlFor="weight">Weight</label>
          <input type="text" name="weight" id="weight" />

          <br />

          <label htmlFor="price">Add price</label>
          <input type="text" name="price" id="price" />
          <br />
          {/* <label htmlFor="pic">image</label>
            <input className="custom-file-input" onChange={handleImageUpload} type="file" name="pic" id=""/> */}
          <label htmlFor="imageLink"> Insert Your Image link</label>
          <input
            type="text"
            name="imageLink"
            placeholder="image link"
            id="image"
          />

          <br />

          <input type="submit" value="Submit" />
        </form>
      </main>
    </div>
  );
};

export default AddProduct;
