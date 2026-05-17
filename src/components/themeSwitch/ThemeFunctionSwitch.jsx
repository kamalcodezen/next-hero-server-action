"use client";

import {  Moon,  Sun } from "@gravity-ui/icons";
import { Switch, useTheme } from "@heroui/react";

export function ThemeFunction() {
  const { theme, setTheme } = useTheme();
  return (
    <Switch onChange={() => setTheme(theme === "light" ? "dark" : "light")}>
      {({ isSelected }) => (
        <>
          <Switch.Control
            className={`h-[22px] w-[44px] ${isSelected ? " shadow-[0_0_12px_rgba(6,182,212,0.5)]" : ""}`}
          >
            <Switch.Thumb
              className={`size-[20px]  shadow-sm ${isSelected ? "ms-[22px] shadow-lg" : ""}`}
            >
              <Switch.Icon>
                {isSelected ? (
                  <Sun className="size-4 " />
                ) : (
                  <Moon className="size-4 " />
                )}
              </Switch.Icon>
            </Switch.Thumb>
          </Switch.Control>
        </>
      )}
    </Switch>
  );
}
