// src/types/global.d.ts
export { };

declare global {
    interface Window {
        showGlobalAlert: (type: "success" | "error" | "info", message: string) => void;
    }
}