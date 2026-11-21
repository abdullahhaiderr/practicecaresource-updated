import { ImageResponse } from "next/og";

export const alt = "Practice Care Source medical billing and practice support";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#F8FBFC",
          color: "#161311",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "62px",
              height: "62px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "17px",
              backgroundColor: "#0653C7",
              color: "#FFFFFF",
              fontSize: "38px",
              fontWeight: 700,
            }}
          >
            +
          </div>
          <div style={{ fontSize: "36px", fontWeight: 700 }}>
            Practice Care Source
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              color: "#0748B4",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "3px",
            }}
          >
            MEDICAL BILLING AND PRACTICE SUPPORT
          </div>
          <div
            style={{
              maxWidth: "930px",
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: "-3px",
            }}
          >
            The source of care for your practice.
          </div>
          <div style={{ fontSize: "25px", color: "#546877" }}>
            Medical billing · Credentialing · Practice support
          </div>
        </div>
        <div style={{ width: "100%", height: "4px", backgroundColor: "#0653C7" }} />
      </div>
    ),
    { ...size },
  );
}
