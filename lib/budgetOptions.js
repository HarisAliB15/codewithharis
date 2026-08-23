export const packageBudgetOptions = [
  { value: '100', label: '$100 — Starter package', plan: 'starter' },
  { value: '400', label: '$400 — Growth package', plan: 'growth' },
  { value: '700', label: '$700 — Advanced package', plan: 'advanced' },
];

export const customBudgetOptions = [
  { value: '701-1200', label: '$701 — $1,200 — Custom scope' },
];

export const budgetOptions = [...packageBudgetOptions, ...customBudgetOptions];

export function getBudgetLabel(value) {
  return budgetOptions.find((option) => option.value === value)?.label ?? value;
}

export function getPackageBudget(plan) {
  return packageBudgetOptions.find((option) => option.plan === plan)?.value ?? '';
}
