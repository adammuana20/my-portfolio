import React from "react";
import { Link } from "react-router-dom";

import './Button.styles.scss'

interface ButtonProps {
  onClick?: () => void;
  label?: string;
  value?: string;
  className?: string;
  link?: string;
  iconcolor?: string;
  iconSVG?: React.FC<{ className: string }>;
  buttoncolor?: string;
  buttonhovercolor?: string;
  type?: "button" | "submit" | "reset";
  elementType?: "input" | "button";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  link,
  value,
  iconSVG: IconSVGComponent,
  buttoncolor,
  buttonhovercolor,
  type,
  elementType,
}) => {
  const commonProps = {
    onClick,
    type,
    className: `common-props ${buttoncolor} ${buttonhovercolor}`,
  };

  if (elementType === "input") {
    return <input {...commonProps} value={value}></input>;
  } else {
    return (
      <Link to={link || ""}>
        <button {...commonProps}>
          {IconSVGComponent ? (
            <IconSVGComponent className={"icon-svg"} />
          ) : (
            <img
              src={buttoncolor || ""}
              alt={`${label}-icon`}
              className={`${buttoncolor || ""} `}
            />
          )}
          {label}
        </button>
      </Link>
    );
  }
};

export default Button;
