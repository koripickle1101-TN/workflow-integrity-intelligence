import "./globals.css";

export const metadata = {
  title: "Workflow Integrity Intelligence | Kori Pickle",
  description:
    "Operational trust, workflow drift, and reconciliation density simulation dashboard for healthcare revenue cycle workflows."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
