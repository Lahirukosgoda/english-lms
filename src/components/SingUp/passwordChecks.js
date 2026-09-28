export function getPasswordChecks(password) {
  return [
    { label: "8+ characters", passed: password.length >= 8 },
    { label: "1 number", passed: /[0-9]/.test(password) },
    { label: "1 symbol", passed: /[^A-Za-z0-9]/.test(password) },
  ];
}

export function getStrength(password) {
  if (!password) return { score: 0 };

  const passedCount = getPasswordChecks(password).filter((c) => c.passed).length;
  const bonus = password.length >= 12 ? 1 : 0;
  const score = Math.max(1, passedCount + bonus); // 1 to 4

  const levels = {
    1: { label: "Weak password", bar: "bg-red-500", text: "text-red-500" },
    2: { label: "Fair password", bar: "bg-amber-500", text: "text-amber-500" },
    3: { label: "Good password", bar: "bg-emerald-400", text: "text-emerald-500" },
    4: { label: "Strong password", bar: "bg-emerald-500", text: "text-emerald-600" },
  };

  return { score, ...levels[score] };
}