import { ImageResponse } from "next/og";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080908",
          color: "#f3f4f1",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 52,
                height: 52,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: 10,
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              SK
            </div>
            <div style={{ fontSize: 22, fontWeight: 600 }}>Sharare Keshvari</div>
          </div>
          <div style={{ fontSize: 18, color: "#86e4bf" }}>Frontend Developer</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ maxWidth: 920, fontSize: 70, lineHeight: 1.05, fontWeight: 700, letterSpacing: -3 }}>
            Product interfaces for everyday work.
          </div>
          <div style={{ fontSize: 24, color: "rgba(243,244,241,0.66)" }}>
            React · Next.js · TypeScript · RTL/LTR interfaces
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 17, color: "rgba(243,244,241,0.52)" }}>
          <div style={{ width: 8, height: 8, borderRadius: 999, background: "#86e4bf" }} />
          Accounting · language learning · clinic software
        </div>
      </div>
    ),
    socialImageSize,
  );
}
