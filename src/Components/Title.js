import React from "react";
import "./Title.css";

function Title(props) {
  const titles = props.titles;
  return (
    <div>
      <div>
        <h1 >List of Titles</h1>
        <ul>
          {titles.map((title) => (
            <li key={title.id}>
              <h2 className="title">{title.name}</h2>
              <p className="description">{title.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Title;
