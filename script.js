const form = document.getElementById('auditForm');
const report = document.getElementById('report');
const scoreValue = document.getElementById('scoreValue');
const riskBadge = document.getElementById('riskBadge');
const summaryText = document.getElementById('summaryText');
const trustText = document.getElementById('trustText');
const driftText = document.getElementById('driftText');
const humanText = document.getElementById('humanText');
const copyReport = document.getElementById('copyReport');

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getNumber(id) {
  return Number(document.getElementById(id).value || 0);
}

function grade(score) {
  if (score >= 7.5) return { label: 'Low Risk · Build-Ready', className: 'low' };
  if (score >= 5.5) return { label: 'Moderate Risk · Stabilize Before Scale', className: 'moderate' };
  return { label: 'Critical Risk · Human-Patched Infrastructure', className: 'critical' };
}

function generateReport(data) {
  const trustStability = clamp(10 - ((data.manual * .035) + (data.duplicate * .03) + (data.escalation * .025)), 1, 10);
  const driftResistance = clamp(10 - ((data.queue * .04) + (data.escalation * .025) + (data.duplicate * .02)), 1, 10);
  const humanDependencyRisk = clamp(10 - (data.human * .075), 1, 10);
  const operationalRecovery = clamp((data.recovery / 10) + (trustStability * .22) + (driftResistance * .18), 1, 10);
  const workflowIntegrity = clamp((trustStability + driftResistance + humanDependencyRisk + operationalRecovery) / 4, 1, 10);
  const reconciliationReduction = clamp(10 - ((data.manual + data.duplicate + data.human) / 33), 1, 10);
  const finalScore = ((trustStability + driftResistance + humanDependencyRisk + operationalRecovery + workflowIntegrity + reconciliationReduction) / 6).toFixed(1);

  const risk = grade(Number(finalScore));

  return {
    finalScore,
    risk,
    trustStability: trustStability.toFixed(1),
    driftResistance: driftResistance.toFixed(1),
    humanDependencyRisk: humanDependencyRisk.toFixed(1),
    operationalRecovery: operationalRecovery.toFixed(1),
    workflowIntegrity: workflowIntegrity.toFixed(1),
    reconciliationReduction: reconciliationReduction.toFixed(1),
    summary: `The workflow scored ${finalScore}/10. The strongest signal is whether staff can continue using the official workflow without creating shadow systems, side spreadsheets, repeated calls, or just-in-case verification. Current inputs suggest the workflow needs tighter trust controls before scale.`,
    trust: `Trust stability scored ${trustStability.toFixed(1)}/10. Manual verification and duplicate work are the primary trust-failure signals. These are not staff behavior problems; they are evidence that the workflow is not yet trusted enough to carry operational load.`,
    drift: `Drift resistance scored ${driftResistance.toFixed(1)}/10. Queue buildup and escalation growth show whether small friction is being absorbed or converted into downstream operational drag. The priority is early variance detection before delays become denials, rework, or patient frustration.`,
    human: `Human dependency scored ${humanDependencyRisk.toFixed(1)}/10. A lower score means the system is still relying on invisible labor, tribal knowledge, and go-to problem solvers. The workflow must become understandable, traceable, recoverable, routable, and measurable without specific people holding it together.`
  };
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    manual: getNumber('manual'),
    duplicate: getNumber('duplicate'),
    escalation: getNumber('escalation'),
    queue: getNumber('queue'),
    human: getNumber('human'),
    recovery: getNumber('recovery')
  };

  const result = generateReport(data);
  scoreValue.textContent = result.finalScore;
  riskBadge.textContent = result.risk.label;
  summaryText.textContent = result.summary;
  trustText.textContent = result.trust;
  driftText.textContent = result.drift;
  humanText.textContent = result.human;
  report.classList.remove('hidden');
  report.scrollIntoView({ behavior: 'smooth' });

  copyReport.dataset.report = `OPERATIONAL INTEGRITY STRESS TEST REPORT\n\nFinal Readiness Score: ${result.finalScore}/10\nRisk Grade: ${result.risk.label}\n\nTrust Stability: ${result.trustStability}/10\nDrift Resistance: ${result.driftResistance}/10\nHuman Dependency Risk: ${result.humanDependencyRisk}/10\nWorkflow Integrity: ${result.workflowIntegrity}/10\nOperational Recovery: ${result.operationalRecovery}/10\nReconciliation Reduction: ${result.reconciliationReduction}/10\n\nExecutive Summary:\n${result.summary}\n\nTrust Failure Analysis:\n${result.trust}\n\nDrift Resistance Analysis:\n${result.drift}\n\nHuman Dependency Analysis:\n${result.human}`;
});

copyReport.addEventListener('click', async () => {
  const text = copyReport.dataset.report || 'Run the audit first.';
  await navigator.clipboard.writeText(text);
  copyReport.textContent = 'Copied Report';
  setTimeout(() => (copyReport.textContent = 'Copy Report Text'), 1800);
});
