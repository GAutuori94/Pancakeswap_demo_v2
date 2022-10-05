import React from "react";
import { useCustomNav } from "../hooks/useButtonNavigation";

export function FullButton() {
  const navigator = useCustomNav();

  function handleNav(url: string) {
    navigator.goTo(url);
  }

  return (
    <button
      className="full-primary-button"
      onClick={() => handleNav("/insertNavigationUrlHer")}
    >
      Trade now
    </button>
  );
}

export function VoidButton() {
  const navigator = useCustomNav();

  function handleNav(url: string) {
    navigator.goTo(url);
  }

  return (
    <button
      className="void-primary-button"
      onClick={() => handleNav("/insertNavigationUrlHer")}
    >
      Learn
    </button>
  );
}

export function OnlyBorderButton() {
  const navigator = useCustomNav();

  function handleNav(url: string) {
    navigator.goTo(url);
  }

  return (
    <div>
      <button
        className="border-primary-button flex align-center"
        onClick={() => handleNav("/insertNavigationUrlHer")}
      >
        Start earning
        <svg
          viewBox="0 0 24 24"
          color="invertedContrast"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          className="sc-5a69fd5e-0 dMScME fill-primary"
        >
          <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" />
        </svg>
      </button>
    </div>
  );
}
