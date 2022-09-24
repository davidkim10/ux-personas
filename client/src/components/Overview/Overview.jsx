import React from "react";
import { Card } from "../Card/Card";
import { List } from "../List/List";
import { ListItem } from "../List/ListItem";
import "./overview.scss";

export const Overview = ({ data }) => {
  const {
    first_name: firstName,
    last_name: lastName,
    age,
    email,
    phone,
    location,
    quote,
    marital_status,
    occupation,
    hobbies,
    gender,
  } = data;
  const randomIndex = Math.max(Math.floor(Math.random() * 3), 1);
  const avatar = `img/${gender.toLowerCase()}${randomIndex}.png`;
  const maxHeight = "250px";
  return (
    <Card className="overview">
      <img
        className="overview__img img-fluid"
        src={avatar}
        alt="profile pic"
        style={{ maxHeight }}
      />
      <h1 className="overview__title h4 text-center">
        {firstName} {lastName}
      </h1>
      <p className="text-center">{occupation}</p>
      <List>
        <ListItem label="Age">{age}</ListItem>
        <ListItem label="Gender">{gender}</ListItem>
        <ListItem label="Residing State">{location}</ListItem>
        <ListItem label="Marital Status">{marital_status}</ListItem>
        <ListItem label="Email">{email}</ListItem>
        <ListItem label="Phone Number">{phone}</ListItem>
      </List>

      <div className="quote text-center mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="36px"
          viewBox="0 0 24 24"
          width="36px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>
        <p>
          <em>{quote}</em>
        </p>
      </div>

      <div className="overview__hobbies">
        {hobbies &&
          hobbies.map((hobby, key) => (
            <span key={key} className="badge rounded-pill bg-primary">
              {hobby}
            </span>
          ))}
      </div>
    </Card>
  );
};
