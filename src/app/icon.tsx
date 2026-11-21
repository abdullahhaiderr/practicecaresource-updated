import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "14px", backgroundColor: "#FF771C", color: "#161311", fontSize: "42px", fontWeight: 800, fontFamily: "Arial, sans-serif" }}>
        C
      </div>
    ),
    { ...size },
  );
}
