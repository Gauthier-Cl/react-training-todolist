import React from "react";
import "./Header.css";
import { type } from "os";


type TitleProps = {
  title : string;
}


export const Header = ({title}: TitleProps) => {
  return (
   <div className="header">
  <h1>{title}</h1>
</div>
  );
};
