"use client";
import React, { useEffect, useState } from "react";

const visualModes = [
  {
    name: "dark",
    icon: "☾",
  },
  { name: "light", icon: "✺" },
];

// sort of a canary element that sets the initial mode of our app
function DarkLightModeDecider() {
  useEffect(() => {
    setCurrentVisualMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? visualModes[0]
        : visualModes[1]
    );
  }, []);
  const [currentVisualMode, setCurrentVisualMode] = useState(visualModes[0]);
  return (
    <button
      data-visual-mode={currentVisualMode.name}
      onClick={() => {
        setCurrentVisualMode((e) => {
          const currentIndex = visualModes.findIndex(
            (vsItem) => e.name === vsItem.name
          );
          const visualModeLen = visualModes.length;
          return visualModes[(currentIndex + 1) % visualModeLen];
        });
      }}
      className="primary-btn"
    >
      <span>{currentVisualMode.icon}</span>
    </button>
  );
}

export default DarkLightModeDecider;
