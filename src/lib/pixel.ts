/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export function fbq(...args: any[]) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq(...args);
  }
}

export function trackInitiateCheckout(source: string) {
  fbq("track", "InitiateCheckout", {
    content_name: "Pacote Rússia Sem Filtro",
    content_ids: ["russo-sem-filtro-29"],
    value: 29,
    currency: "BRL",
    custom_data: { source },
  });
}

export function trackViewContent() {
  fbq("track", "ViewContent", {
    content_name: "Pacote Rússia Sem Filtro",
    content_ids: ["russo-sem-filtro-29"],
    value: 29,
    currency: "BRL",
  });
}

export function trackLead() {
  fbq("track", "Lead", {
    content_name: "Pacote Rússia Sem Filtro",
  });
}

export function trackCustomEvent(eventName: string) {
  fbq("trackCustom", eventName);
}
