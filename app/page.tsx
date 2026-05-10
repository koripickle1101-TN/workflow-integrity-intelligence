"use client";

import {
  AlertTriangle,
  Activity,
  GitBranch,
  ShieldCheck,
  ArrowUpRight,
  FileText,
  Network,
  ScanLine
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.53V9H7.1v11.45ZM22.23 0H1.76C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.76 24h20.47c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z" />
    </svg>
  );
}

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.45 11.45 0 0 1 12 5.58c1.02 0 2.05.14 3.01.41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

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
      "Trust decay was detected before manual reconciliation expanded into staff-dependent recovery work."
  },
  {
    test: "Operational Drift Test",
    result: "Passed",
    score: "9.3 / 10",
    finding:
      "Low-grade workflow variance was isolated before backlog formation, payer friction, or avoidable denial risk."
  },
  {
    test: "Human Dependency Test",
    result: "Passed",
    score: "8.9 / 10",
    finding:
      "Workflow continuity stayed traceable without one employee carrying the process through undocumented workarounds."
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

const workflowSignals = [
  {
    icon: FileText,
    title: "Documentation fidelity",
    text: "Flags where intent, coverage requirements, and recorded evidence begin separating."
  },
  {
    icon: Network,
    title: "Handoff integrity",
    text: "Models how small transfer gaps create downstream rework, delay, denial exposure, and burnout."
  },
  {
    icon: ScanLine,
    title: "Drift visibility",
    text: "Converts hidden workarounds into measurable operational signals before the dashboard turns red."
  }
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero-shell">
        <div className="hero-topline">
          <div className="brand-mark">WII</div>
          <div>
            <p className="eyebrow">Healthcare Operations Intelligence</p>
            <p className="microcopy">Prior authorization · RCM drift · workflow trust</p>
          </div>
        </div>

        <div className="hero">
          <div className="hero-copy">
            <div className="kicker">Executive Simulation Dashboard</div>
            <h1 className="serif">
              Workflow Integrity
              <br />
              <span className="orange">Intelligence™</span>
            </h1>
            <p className="lede">
              A luxury healthcare operations dashboard that models where trust decays, where workflow drift begins, and where manual reconciliation quietly turns into revenue cycle risk.
            </p>
            <div className="hero-actions" aria-label="Professional links">
              <a className="button primary" href="https://www.linkedin.com/in/koripickle1101" target="_blank" rel="noreferrer">
                <LinkedInIcon size={18} /> LinkedIn <ArrowUpRight size={16} />
              </a>
              <a className="button secondary" href="https://github.com/koripickle1101-TN" target="_blank" rel="noreferrer">
                <GitHubIcon size={18} /> GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <aside className="executive-card" aria-label="Executive dashboard summary">
            <div className="card-header">
              <span>Operational Trust Index</span>
              <span className="status-pill">Stable</span>
            </div>
            <div className="hero-score serif">94.2</div>
            <p className="score-caption">Simulated readiness score after stress testing prior authorization drift, staff dependency, and reconciliation density.</p>
            <div className="mini-grid">
              <div><span>Drift</span><strong>Contained</strong></div>
              <div><span>Recon</span><strong>-41%</strong></div>
              <div><span>Risk</span><strong>Visible</strong></div>
              <div><span>Signal</span><strong>Early</strong></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="grid">
        <div className="metric">
          <ShieldCheck />
          <div className="metric-label">Trust Stability</div>
          <div className="metric-value serif">9.4</div>
        </div>

        <div className="metric">
          <GitBranch />
          <div className="metric-label">Drift Resistance</div>
          <div className="metric-value serif">9.3</div>
        </div>

        <div className="metric">
          <Activity />
          <div className="metric-label">Recovery Speed</div>
          <div className="metric-value serif">9.3</div>
        </div>

        <div className="metric">
          <AlertTriangle />
          <div className="metric-label">Recon Reduction</div>
          <div className="metric-value serif">9.4</div>
        </div>
      </section>

      <section className="section intelligence-band">
        <div>
          <p className="kicker">What the system watches</p>
          <h2 className="serif section-title">The dashboard turns invisible operational work into executive-level evidence.</h2>
        </div>
        <div className="signal-grid">
          {workflowSignals.map((item) => {
            const Icon = item.icon;
            return (
              <article className="signal-card" key={item.title}>
                <Icon />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section card chart-card">
        <div className="section-heading">
          <div>
            <div className="kicker">System Telemetry</div>
            <h2 className="serif section-title">Trust continuity stayed stable under operational stress.</h2>
          </div>
          <p className="side-note">Orange tracks trust. Black tracks drift. Warm gray tracks reconciliation burden.</p>
        </div>

        <ResponsiveContainer width="100%" height={340}>
          <LineChart data={telemetry} margin={{ top: 10, right: 12, left: -18, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 6" stroke="#e8ded4" />
            <XAxis dataKey="day" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="trust" stroke="#FF8200" strokeWidth={4} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="drift" stroke="#111111" strokeWidth={2.5} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="recon" stroke="#9a8f84" strokeWidth={2.5} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </section>

      <section className="section two-column">
        <div>
          <p className="kicker">Stress Test Results</p>
          <h2 className="serif section-title">Built to show how failure begins before denial appears.</h2>
        </div>
        <div className="table-wrap elevated">
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
                  <td><span className="badge">{row.result}</span></td>
                  <td>{row.score}</td>
                  <td>{row.finding}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section card cascade-card">
        <div className="kicker">Failure Cascade Map</div>
        <h2 className="serif section-title">Variance no longer cascades uncontrolled.</h2>
        <div className="cascade">
          {[
            "Variance introduced",
            "Trust signals detected",
            "Instability forecasted",
            "Containment localized",
            "Recovery intelligence activated",
            "Continuity preserved"
          ].map((step, index) => (
            <div className="cascade-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section readiness-section">
        <div>
          <p className="kicker">Final Readiness Score</p>
          <h2 className="serif section-title">Operational resilience, summarized for leadership review.</h2>
        </div>
        <div className="readiness-grid">
          {readiness.map(([category, score]) => (
            <div className="readiness-item" key={category}>
              <span>{category}</span>
              <strong>{score}</strong>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-rule" />
        <p className="created">Created by Kori Pickle</p>
        <p className="signature">Kori Pickle</p>
        <div className="footer-links" aria-label="Footer links">
          <a href="https://www.linkedin.com/in/koripickle1101" target="_blank" rel="noreferrer" aria-label="Kori Pickle on LinkedIn">
            <LinkedInIcon size={20} />
          </a>
          <a href="https://github.com/koripickle1101-TN" target="_blank" rel="noreferrer" aria-label="Kori Pickle on GitHub">
            <GitHubIcon size={20} />
          </a>
        </div>
        <p className="footer-brand">Healthcare Workflow Intelligence · Revenue Cycle Operations · Prior Authorization Drift Simulation</p>
        <p className="disclaimer">
          This is a simulated operational intelligence prototype for healthcare workflow trust, prior authorization drift, and revenue cycle instability analysis. It is not a live hospital system and does not use patient data.
        </p>
      </footer>
    </main>
  );
}
