import React from "react";
import { useCustomNav } from "../hooks/useButtonNavigation";

export function FullButton({
  value,
  children,
}: {
  value?: string;
  children?: JSX.Element;
}): JSX.Element {
  const navigator = useCustomNav();

  function handleNav(url: string) {
    navigator.goTo(url);
  }

  return (
    <button
      className="full-primary-button dark:"
      onClick={() => handleNav("/insertNavigationUrlHer")}
    >
      {value}
      {children}
    </button>
  );
}

export function FullSlimButton({
  value,
  children,
}: {
  value?: string;
  children?: JSX.Element;
}): JSX.Element {
  const navigator = useCustomNav();

  function handleNav(url: string) {
    navigator.goTo(url);
  }

  return (
    <button
      className="full-slim-primary-button"
      onClick={() => handleNav("/insertNavigationUrlHer")}
    >
      {value}
      {children}
    </button>
  );
}

export function VoidButton({ value }: { value?: string }) {
  const navigator = useCustomNav();

  function handleNav(url: string) {
    navigator.goTo(url);
  }

  return (
    <button
      className="void-primary-button"
      onClick={() => handleNav("/insertNavigationUrlHer")}
    >
      {value}
    </button>
  );
}

export function OnlyBorderButton({
  value,
  children,
}: {
  value?: string;
  children?: JSX.Element;
}) {
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
        {value}
        {children}
      </button>
    </div>
  );
}
