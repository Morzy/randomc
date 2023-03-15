import React from "react";
import { ThemedButton } from "./ThemedButton";

const ThemeContext = React.createContext("light")

export function ToolBar() {

    return (<ThemeContext value="dark">
        <ThemedButton></ThemedButton>

    </ThemeContext>)
}