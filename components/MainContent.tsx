import React from "react";

// taking two props and showing them
type MainContentProps = {
  title: string;
  content: string;
};

const MainContent = ({ title, content }: MainContentProps) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default MainContent;
