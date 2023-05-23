import React from "react";


import "./Task.css";
import "./Header.css"

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
};