import React from "react";

type CustomButtonProps = {
  text: string;
  onClick?: () => void;
  href?: string;
  color?: "amber" | "green" | "teal";
};

const CustomButton = ({
  text,
  onClick,
  href,
  color = "amber",
}: CustomButtonProps) => {
  const baseStyle =
    "font-semibold py-2 px-6 rounded shadow-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2";

  const colorStyles = {
    amber: "bg-amber-500 hover:bg-amber-600 text-black focus:ring-amber-400",
    green: "bg-green-500 hover:bg-green-300 text-black focus:ring-green-400",
    teal: "bg-teal-300 hover:bg-teal-400 text-black focus:ring-teal-200",
  };

  const buttonClass = `${baseStyle} ${colorStyles[color]}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button className={buttonClass}>{text}</button>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {text}
    </button>
  );
};

export default CustomButton;
