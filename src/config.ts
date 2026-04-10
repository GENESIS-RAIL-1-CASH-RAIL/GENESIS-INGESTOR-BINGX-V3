export const CONFIG = {
  EXCHANGE: "BINGX_V3" as const,
  SOURCE: "bingx" as const,
  TYPE: "CEX" as const,
  CHAIN: "multi" as const,
  PORT: parseInt(process.env.PORT || "10284", 10),
  SERVICE_NAME: "GENESIS-INGESTOR-BINGX-V3",
  API_URL: "https://open-api.bingx.com/openApi/spot/v1/ticker/bookTicker", // API URL FIXED 2026-04-10 — was 24hr endpoint, need bookTicker for bid/ask
  TICKER_URL: "",
  INGESTION_GATE_URL: process.env.INGESTION_GATE_URL || "http://genesis-ingestion-gate:8700/ingest",
  FETCH_TIMEOUT_MS: parseInt(process.env.FETCH_TIMEOUT_MS || "10000", 10),
  VERSION: "2.0.0-sf",
};
