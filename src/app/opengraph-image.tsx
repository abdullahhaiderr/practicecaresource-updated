import { ImageResponse } from "next/og";

export const alt = "CareSource medical billing and practice support";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "76px", backgroundColor: "#F5EDE0", color: "#161311", fontFamily: "Arial, sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div style={{ width: "64px", height: "64px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "18px", backgroundColor: "#FF771C", color: "#161311", fontSize: "34px", fontWeight: 800 }}>C</div>
          <div style={{ fontSize: "38px", fontWeight: 700 }}>CareSource</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div style={{ color: "#8A431A", fontSize: "22px", fontWeight: 700, letterSpacing: "4px" }}>MEDICAL BILLING AND PRACTICE SUPPORT</div>
          <div style={{ maxWidth: "930px", fontSize: "72px", fontWeight: 700, lineHeight: 1.04, letterSpacing: "-3px" }}>The source of care for your practice.</div>
          <div style={{ fontSize: "26px", color: "#546877" }}>Billing · Credentialing · Practice support</div>
        </div>
        <div style={{ width: "100%", height: "3px", backgroundColor: "#FF771C" }} />
      </div>
    ),
    { ...size },
  );
}
