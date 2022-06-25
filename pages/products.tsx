import React from "react";
import Router from "next/router";
export default function NextPage() {
  const handleClick = () => {
    Router.push("/");
  };
  return (
    <div className="titleWrapper">
      <h1>This is the products page.</h1>
      <button onClick={handleClick} className="buttonStyles">
        Home Page
      </button>
    </div>
  );
}
