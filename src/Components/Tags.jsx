import React from "react";

const Tags = ({ tags }) => {
  return (
    <ul className="tags__container">
      {tags.map((tags, index) => {
        return (
          <li key={index} className="tags__list">
            {tags}
          </li>
        );
      })}
    </ul>
  );
};

export default Tags;
