"use client";
import React, { useState } from "react";

const visualModes = ["light", "dark"];

// sort of a canary element that sets the initial mode of our app
export default function DarkLightModeDecider() {
  const isBrowser = () => typeof window !== "undefined";
  const [currentVisualMode, setCurrentVisualMode] = useState(
    isBrowser() && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? visualModes[1]
      : visualModes[0]
  );
  return (
    <button
      data-visual-mode={currentVisualMode}
      onClick={() => {
        setCurrentVisualMode((e) => {
          const currentIndex = visualModes.indexOf(e);
          const visualModeLen = visualModes.length;
          return visualModes[(currentIndex + 1) % visualModeLen];
        });
      }}
      className="primary-btn"
    >
      <span>toggle theme</span>
    </button>
  );
}
