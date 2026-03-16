import { LogWarning, WarningType } from "./log-warning.interface";
import { WindowsLog } from "./WindowsLog";

interface WarningLogMap {
    [key: number]: WarningType;
}

export class WindowsLogAdapter implements LogWarning {
    private windowsLog: WindowsLog;
    private readonly warningLogMap: WarningLogMap = {
        1: 'CRITICAL',
        2: 'WARNING',
        3: 'INFO'
    };

    constructor (windowsLog: WindowsLog) {
        this.windowsLog = windowsLog;
    }

    showWarning(): void {
        const legacyLog = this.windowsLog.logWarning();
        const parsedLog = this.warningLogMap[legacyLog];
        console.log(`[LOG]: Current status ${parsedLog}`);
    }
}