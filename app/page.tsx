"use client";

import {
  AlertTriangle,
  Activity,
  GitBranch,
  ShieldCheck
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const telemetry = [
  { day: "Day 1", trust: 96, drift: 12, recon: 8 },
  { day: "Day 3", trust: 94, drift: 18, recon: 10 },
  { day: "Day 5", trust: 92, drift: 23, recon: 13 },
  { day: "Day 7", trust: 89, drift: 29, recon: 17 },
  { day: "Day 10", trust: 91, drift: 21, recon: 12 },
  { day: "Day 14", trust: 94, drift: 16, recon: 9 }
];

const stressTests = [
  {
    test: "Trust Collapse Test",
    result: "Passed",
    score: "9.4 / 10",
    finding:
      "Trust decay was detected before manual reconciliation expanded."
  },
  {
    test: "Operational Drift Test",
    result: "Passed",
    score: "9.3 / 10",
    finding:
      "Low-grade workflow variance was isolated before backlog formation."
  },
  {
    test: "Human Dependency Test",
    result: "Passed",
    score: "8.9 / 10",
    finding:
      "Workflow continuity remained traceable without a single staff member carrying the process."
  }
];

const readiness = [
  ["Trust Stability", "9.4 / 10"],
  ["Drift Resistance", "9.3 / 10"],
  ["Human Dependency Risk", "8.9 / 10"],
  ["Escalation Containment", "9.2 / 10"],
  ["Workflow Integrity", "9.5 / 10"],
  ["Operational Recovery", "9.3 / 10"],
  ["Reconciliation Reduction", "9.4 / 10"]
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <div>
          <div className="kicker">Healthcare Workflow Intelligence</div>
          <h1 className="serif">
            Operational Trust
            <br />
            <span className="orange">Intelligence.</span>
          </h1>
          <p className="subtitle">
            A simulated healthcare revenue cycle operating model designed to
            detect trust decay, workflow drift, reconciliation density, and
            human middleware dependency before downstream failure appears.
          </p>
        </div>

        <div className="card">
          <div className="kicker">Framework</div>
          <h2 className="serif section-title">
            Workflow Integrity Intelligence™
          </h2>
          <p className="subtitle">
            Built by Kori Pickle to model how prior authorization workflows
            break before denial, delay, burnout, or revenue leakage becomes
            visible.
          </p>
        </div>
      </section>

      <section className="grid">
        <div className="metric">
          <ShieldCheck color="#FF8200" />
          <div className="metric-label">Trust Stability</div>
          <div className="metric-value">9.4</div>
        </div>

        <div className="metric">
          <GitBranch color="#FF8200" />
          <div className="metric-label">Drift Resistance</div>
          <div className="metric-value">9.3</div>
        </div>

        <div className="metric">
          <Activity color="#FF8200" />
          <div className="metric-label">Recovery Speed</div>
          <div className="metric-value">9.3</div>
        </div>

        <div className="metric">
          <AlertTriangle color="#FF8200" />
          <div className="metric-label">Recon Reduction</div>
          <div className="metric-value">9.4</div>
        </div>
      </section>

      <section className="section card">
        <div className="kicker">System Telemetry</div>
        <h2 className="serif section-title">
          Trust continuity stayed stable under operational stress.
        </h2>

        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={telemetry}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="trust"
              stroke="#FF8200"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="drift"
              stroke="#111111"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="recon"
              stroke="#777777"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>

      <section className="section">
        <h2 className="serif section-title">Stress Test Results</h2>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Test</th>
                <th>Result</th>
                <th>Score</th>
                <th>Operational Finding</th>
              </tr>
            </thead>
            <tbody>
              {stressTests.map((row) => (
                <tr key={row.test}>
                  <td>{row.test}</td>
                  <td>
                    <span className="badge">{row.result}</span>
                  </td>
                  <td>{row.score}</td>
                  <td>{row.finding}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section card">
        <div className="kicker">Failure Cascade Map</div>
        <h2 className="serif section-title">
          Variance no longer cascaded uncontrolled.
        </h2>
        <p className="subtitle">
          Variance introduced → behavioral trust signals detected → predictive
          instability forecasting → localized containment → adaptive recovery
          intelligence → workflow continuity preserved.
        </p>
      </section>

      <section className="section">
        <h2 className="serif section-title">Final Readiness Score</h2>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {readiness.map(([category, score]) => (
                <tr key={category}>
                  <td>{category}</td>
                  <td>{score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer className="footer">
        <p>Created by Kori Pickle</p>
        <p className="signature">Kori Pickle</p>
        <p>LinkedIn · GitHub · Healthcare Workflow Intelligence</p>
        <p className="disclaimer">
          This is a simulated operational intelligence prototype for healthcare
          workflow trust, prior authorization drift, and revenue cycle instability
          analysis. It is not a live hospital system and does not use patient data.
        </p>
      </footer>
    </main>
  );
}
