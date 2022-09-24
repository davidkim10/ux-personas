import React from "react";
import { Card } from "../Card/Card";
import { List } from "../List/List";
import { ListItem } from "../List/ListItem";
import img from "./job-search.png";

function formatMoney(n) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(n);
}
export const Occupation = ({ data }) => {
  const { highest_pay, average_pay, occupation_title } = data;
  const maxWidth = "150px";
  const margin = "0 auto";

  return (
    <Card className="employment">
      <img
        src={img}
        alt="employment"
        className="img-fluid"
        style={{ maxWidth, margin }}
      />
      <h1 className="h4 text-center mt-4 mb-4">Occupation</h1>
      <List>
        <ListItem label="Occupation">{occupation_title}</ListItem>
        <ListItem label="Highest Salary">{formatMoney(highest_pay)}</ListItem>
        <ListItem label="Average Salary">{formatMoney(average_pay)}</ListItem>
      </List>
    </Card>
  );
};
