import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import { Grid } from "@mui/material";
import celebrities from "./data";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          lg={5}
          style={{
            marginTop: "4rem",
          }}
        >
          {celebrities.map((celebrity) => {
            return (
              <Grid item md={12}>
                <Card
                  image={celebrity.image}
                  name={celebrity.name}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default App;
