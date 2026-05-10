import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Workflow Integrity Intelligence by Kori Pickle";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#FFFFFF",
          color: "#111111",
          padding: "56px",
          fontFamily: "Georgia, serif"
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "2px solid #F2D8BD",
            borderRadius: "34px",
            padding: "56px",
            background: "linear-gradient(135deg, #FFFFFF 0%, #FBF8F4 100%)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            <div
              style={{
                width: "104px",
                height: "104px",
                borderRadius: "999px",
                border: "2px solid #FF8200",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FF8200",
                fontSize: "24px",
                fontWeight: 700,
                letterSpacing: "0.16em"
              }}
            >
              WII
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "22px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  fontWeight: 700
                }}
              >
                Healthcare Operations Intelligence
              </div>
              <div
                style={{
                  marginTop: "10px",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "24px",
                  color: "#756D64"
                }}
              >
                Prior authorization · RCM drift · workflow trust
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "18px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "#333333"
              }}
            >
              Executive Simulation Dashboard
            </div>
            <div
              style={{
                marginTop: "24px",
                display: "flex",
                flexDirection: "column",
                fontSize: "92px",
                lineHeight: 0.92,
                letterSpacing: "-0.055em"
              }}
            >
              <span>Workflow Integrity</span>
              <span style={{ color: "#FF8200" }}>Intelligence™</span>
            </div>
            <div
              style={{
                marginTop: "34px",
                maxWidth: "910px",
                fontFamily: "Arial, sans-serif",
                fontSize: "30px",
                lineHeight: 1.35,
                color: "#333333"
              }}
            >
              A healthcare operational trust and workflow drift simulation dashboard by Kori Pickle.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "Arial, sans-serif",
              fontSize: "22px",
              color: "#756D64"
            }}
          >
            <span>workflow-integrity-intelligence.vercel.app</span>
            <span style={{ color: "#FF8200", fontWeight: 700 }}>Created by Kori Pickle</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
