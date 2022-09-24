import React from "react";
import { Card } from "../Card/Card";
import { List } from "../List/List";
import { ListItem } from "../List/ListItem";
import img from "./education.png";
export const Education = ({ data }) => {
  const { college, degrees } = data;
  const maxWidth = "150px";
  const margin = "0 auto";
  return (
    <div className="education">
      <Card>
        <img
          src={img}
          alt="employment"
          className="img-fluid"
          style={{ maxWidth, margin }}
        />
        <h1 className="h4 text-center mt-4 mb-4">Education</h1>
        <List>
          <ListItem label="Education">{college}</ListItem>
          {degrees.map((degree) => (
            <ListItem label="Degree">{degree}</ListItem>
          ))}
        </List>
      </Card>
    </div>
  );
};
