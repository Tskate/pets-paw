import {useLayoutEffect, useState} from "react";

export function useTheme() {
    const defaultTheme = window.matchMedia('(prefers-color-theme): light').matches
    const [theme, setTheme] = useState((localStorage.getItem('is-light-theme') === 'true') || defaultTheme )

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme ? 'light' : 'night')
        localStorage.setItem('is-light-theme', theme.toString())
    }, [theme]);

    return {theme, setTheme}
}