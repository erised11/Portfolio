import React from "react";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <div className="bg-gray-500 w-full text-white p-8 font-terminal">
      <h1 className="text-6xl">Portfolio</h1>
      <p className="text-xl my-4 pb-8 border-b-2">
        Here all personal AI/Frontend projects created by Brandon.
      </p>
    </div>
  );
};

export default Portfolio;
