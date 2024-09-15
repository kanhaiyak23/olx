// global.d.ts
export {};

declare global {
  interface GoogleTranslateElementOptions {
    pageLanguage?: string;
    includedLanguages?: string;
    layout?: any; // You can further define this based on specific types if needed
    autoDisplay?: boolean;
  }

  interface GoogleTranslate {
    TranslateElement: {
      new (options: GoogleTranslateElementOptions, elementId: string): void;
      InlineLayout: {
        SIMPLE: any; // Use string or specific type as needed
        HORIZONTAL: any; // Use string or specific type as needed
      };
    };
  }

  interface Window {
    google: {
      translate: GoogleTranslate;
    };
    googleTranslateElementInit: () => void;
  }
}
