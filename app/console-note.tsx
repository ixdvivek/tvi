"use client";
import { useEffect } from "react";

export default function ConsoleNote() {
  useEffect(() => {
    console.log(
      "%c▶ The Vivek Interface%c\nYou opened DevTools on a coming-soon page. We'd get along.\nThe real site is mid-recording. Say hi on LinkedIn.",
      "font: 700 16px sans-serif; color: #141414; background: #ffc531; padding: 4px 8px;",
      "font: 12px monospace; color: inherit;"
    );
  }, []);
  return null;
}
