import type { DesignTokens } from './tokens.js';

function flattenTokens(tokens: DesignTokens, prefix = '--sn'): Record<string, string> {
  const entries: Record<string, string> = {};

  for (const [group, values] of Object.entries(tokens)) {
    for (const [key, value] of Object.entries(values)) {
      entries[`${prefix}-${group}-${key}`] = value;
    }
  }

  return entries;
}

export function tokensToCssVariables(tokens: DesignTokens): string {
  const variables = flattenTokens(tokens);
  const lines = Object.entries(variables).map(([name, value]) => `  ${name}: ${value};`);
  return `:root {\n${lines.join('\n')}\n}`;
}
