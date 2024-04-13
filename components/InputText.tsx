import React, { useState, useEffect } from "react";
import clsx from "clsx";

interface InputTextProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "link";
}

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function isEmailValid(email: string): boolean {
  return email === "" || emailRegex.test(email);
}

function isLinkValid(link: string, label: string): boolean {
  try {
    const url = new URL(link);
    const { hostname, pathname } = url;
    const domain = hostname.replace("www.", "");

    switch (domain) {
      case "linkedin.com":
        return label === "LinkedIn" && pathname.startsWith("/in/");
      case "youtube.com":
        return label === "YouTube" && pathname.startsWith("/user/");
      case "twitter.com":
        return label === "Twitter";
      case "facebook.com":
        return label === "Facebook";
      case "instagram.com":
        return label === "Instagram";
      default:
        return false;
    }
  } catch (e) {
    return false;
  }
}

const InputText: React.FC<InputTextProps> = ({
  type = "text",
  label,
  id,
  name,
  value,
  onChange,
}) => {
  const isValidationNeeded = type === "email" || type === "link";
  const isValid =
    (type === "email" && isEmailValid(value)) ||
    (type === "link" && isLinkValid(value, label));
  const showValidBorder = isValidationNeeded && isValid && value.length > 0; // currently not used, instead there is a pulse animation
  const showInvalidBorder = isValidationNeeded && !isValid && value.length > 0;
  const [wasInvalid, setWasInvalid] = useState(false);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (wasInvalid && isValid) {
      setWasInvalid(false);
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500);
    } else if (!wasInvalid && !isValid) {
      setWasInvalid(true);
    }
  }, [value, isValid, wasInvalid]);

  return (
    <div>
      <label
        className={clsx("block p-2 font-semibold text-default")}
        htmlFor={id}
      >
        {label}
      </label>

      <input
        className={clsx(
          "w-full my-2 p-2 rounded border-2 border-highlight text-input focus:outline-none",
          animate && "pulse-green",
          showInvalidBorder && "border-invalid",
        )}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />

      {showInvalidBorder && (
        <p
          className={clsx("text-sm", {
            "text-invalid": isValidationNeeded && !isValid && value.length > 0,
          })}
        >
          {isValidationNeeded && !isValid && value.length > 0
            ? `This does not look like a valid ${
                type === "email" ? "email" : "profile link"
              }, make sure to check your info`
            : ""}
        </p>
      )}
    </div>
  );
};

export default InputText;
