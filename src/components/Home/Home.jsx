import React from "react";
import home1 from "../../assets/home1.jpg"
import Button from 'react-bootstrap/Button';
import classes from "./Home.module.css"
function Home() {
  return (
    <div >
     <img src={home1} style={{width:"100%",height:"600px"}}/>
     <Button className={classes.buttonStyled} variant="primary">Download Now</Button>
    </div>
  );
}

export default Home;
