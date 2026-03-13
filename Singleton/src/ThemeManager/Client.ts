import { ThemeManager } from "./ThemeManager";

class Client {
    execute() {
        const manager1 = ThemeManager.getInstance();
        console.log(`Tema atual: ${manager1.getTheme()}`);
        manager1.setTheme('dark');
        const manager2 = ThemeManager.getInstance();
        console.log('O tema atal e o dark?', manager2.isDarkMode());
        console.log('As instancias de manager sao iguais?', manager1 === manager2);
    }
}

(() => {
    new Client().execute();
})();