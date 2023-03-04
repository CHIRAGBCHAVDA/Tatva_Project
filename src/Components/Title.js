import React from "react";

function Title(props) {
  const titles = props.titles;
  return (
    <div>
      <div>
        <h1>List of Titles</h1>
        <ul>
          {titles.map((title) => (
            <li key={title.id}>
              <h2>{title.name}</h2>
              <p>{title.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Title;
