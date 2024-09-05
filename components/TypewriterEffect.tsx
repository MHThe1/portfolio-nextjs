"use client";
import { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export default function TypewriterEffect() {
  const wordsBundle = [
    [{ text: "Software" }, { text: "Engineer" }],
    [{ text: "Full" }, { text: "Stack" }, { text: "Developer" }],
    [{ text: "Mobile" }, { text: "App" }, { text: "Developer" }],
    [{ text: "Competitive" }, { text: "Programmer" }],
  ];

  const [currentBundleIndex, setCurrentBundleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBundleIndex(
        (prevIndex) => (prevIndex + 1) % wordsBundle.length
      );
    }, 7000);

    return () => clearInterval(interval); 
  }, [wordsBundle.length]);

  return (
    <TypewriterEffectSmooth
      key={currentBundleIndex}
      words={wordsBundle[currentBundleIndex]}
    />
  );
}
