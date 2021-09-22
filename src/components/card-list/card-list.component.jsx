import React from "react";
import "./card-list.styles.css"; //importing the css file
import { Card } from "../card/card.component"; //importing the Card component

export const CardList = (props) => (
  //giving the div a class called card-list, which has a css defined on it
  <div className="card-list">
    {
      //using the .map() we are trying to display the monster array in <h1> tag
      props.monster.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))
    }
  </div>
);
