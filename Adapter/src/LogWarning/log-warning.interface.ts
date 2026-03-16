export type WarningType = 'CRITICAL' | 'WARNING' | 'INFO';

export interface LogWarning {
    showWarning(): void;
}