import "./globals.css";

export const metadata = {
  title: "Workflow Integrity Intelligence | Kori Pickle",
  description:
    "Operational trust, workflow drift, and reconciliation density simulation dashboard for healthcare revenue cycle workflows.",
  themeColor: "#ffffff",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ colorScheme: "light" }}>
      <head>
        <meta name="color-scheme" content="light only" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="supported-color-schemes" content="light" />
      </head>
      <body style={{ backgroundColor: "#ffffff", color: "#111111" }}>{children}</body>
    </html>
  );
}
