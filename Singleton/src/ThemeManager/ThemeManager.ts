export type Theme = 'light' | 'dark';

export class ThemeManager {
    private currentTheme: Theme;
    private static readonly INSTANCE = new ThemeManager();
    private constructor () {
        console.log("ThemeManager instanciado via Eager Initialization.");
        this.currentTheme = 'light';
    }

    static getInstance() {
        return ThemeManager.INSTANCE;
    }

    setTheme(theme: Theme) {
        this.currentTheme = theme;
    }

    getTheme() {
        return this.currentTheme;
    }

    isDarkMode() {
        return this.currentTheme === 'dark';
    }
}