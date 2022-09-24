import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "./components/Header/Header";
import { Layout } from "./components/Layout/Layout";
import { Overview } from "./components/Overview/Overview";
import { Occupation } from "./components/Occupation/Occupation";
import { Education } from "./components/Education/Education";
import { SocialMedia } from "./components/SocialMedia/SocialMedia";
import "./App.scss";

const App = () => {
  const [currentIndex, setCurrent] = useState(0);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const USER_API = `/users`;
  const currentUser = userData[currentIndex];
  const isNextDisabled = currentIndex === userData.length - 1;
  const isPrevDisabled = currentIndex === 0;

  const handleNext = async () => {
    const next = currentIndex + 1;
    const maxIndex = userData.length - 1;
    const value = Math.min(next, maxIndex);
    setCurrent(value);
  };
  const handlePrev = () => {
    const prev = currentIndex - 1;
    const value = Math.max(prev, 0);
    setCurrent(value);
  };

  const getUsers = async () => {
    try {
      const res = await axios.get(USER_API);
      setUserData(res.data);
      setLoading(false);
      return res;
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    console.log("ran");
    getUsers();
  }, []);

  if (userData.length <= 0 || loading) {
    return "Loading...";
  }

  return (
    <Layout>
      <Header
        onNext={handleNext}
        onPrev={handlePrev}
        isNextDisabled={isNextDisabled}
        isPrevDisabled={isPrevDisabled}
      />
      <Overview data={currentUser} />
      <SocialMedia data={currentUser} />
      <Occupation data={currentUser} />
      <Education data={currentUser} />
    </Layout>
  );
};

export default App;
