// src/services/translate.ts
export type TranslateResult = {
  translatedText: string;
  detectedSourceLanguage?: string | null;
};

export async function translateText(q: string, target = "en"): Promise<TranslateResult> {
  const base = import.meta.env.VITE_LIBRETRANSLATE_URL || "https://libretranslate.com";
  const res = await fetch(`${base}/translate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ q, source: "auto", target, format: "text" }),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error("LibreTranslate error: " + txt);
  }
  const data = await res.json();
  return { translatedText: data.translatedText, detectedSourceLanguage: (data.detectedLanguage ?? null) };
}
