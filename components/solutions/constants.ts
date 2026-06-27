// components/solution/constants.ts

/* ==========================================================
   UI CONFIG
========================================================== */

export const UI = {
  CONTAINER_HEIGHT: 760,

  RADAR_SIZE: 460,

  FACE_WIDTH: 170,
  FACE_HEIGHT: 240,

  PARTICLE_COUNT: 28,

  BINARY_COLUMNS: 18,
  BINARY_ROWS: 34,
};

/* ==========================================================
   BINARY RAIN
========================================================== */

export const binaryColumns = Array.from(
  { length: UI.BINARY_COLUMNS },
  (_, i) => ({
    id: i,
    left: `${4 + i * 5.2}%`,
    duration: 10 + (i % 6),
    delay: i * 0.4,
  })
);

/* ==========================================================
   FACE LANDMARKS
========================================================== */

export const landmarks = [
  { x: "50%", y: "24%" },
  { x: "42%", y: "36%" },
  { x: "58%", y: "36%" },
  { x: "50%", y: "44%" },
  { x: "45%", y: "54%" },
  { x: "55%", y: "54%" },
  { x: "40%", y: "66%" },
  { x: "60%", y: "66%" },
  { x: "50%", y: "76%" },
];

/* ==========================================================
   LIVE ANALYTICS
========================================================== */

export const analyticsItems = [
  {
    label: "Detection",
    value: "100%",
  },
  {
    label: "Landmarks",
    value: "468",
  },
  {
    label: "Face Quality",
    value: "98.7%",
  },
  {
    label: "Liveness",
    value: "PASS",
  },
];

/* ==========================================================
   DATABASE
========================================================== */

export const databaseItems = [
  {
    label: "Records",
    value: "12.4M",
  },
  {
    label: "Matched",
    value: "1 Result",
  },
  {
    label: "Confidence",
    value: "99.83%",
  },
  {
    label: "Watchlist",
    value: "CLEAR",
  },
];

/* ==========================================================
   PIPELINE
========================================================== */

export const timelineSteps = [
  "CAPTURE",
  "DETECT",
  "LANDMARKS",
  "EMBED",
  "SEARCH",
  "VERIFY",
];

/* ==========================================================
   STATUS
========================================================== */

export const leftStatusItems = [
  "EDGE AI ACTIVE",
  "LIVENESS VERIFIED",
  "ANTI SPOOF ENABLED",
];

export const rightStatusItems = [
  "GPU READY",
  "DATABASE ONLINE",
  "WATCHLIST CLEAR",
];