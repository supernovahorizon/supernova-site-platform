import type { ZodSchema } from 'zod';

export function formatValidationErrors(error: {
  issues: Array<{ path: (string | number)[]; message: string }>;
}): string {
  return error.issues
    .map((issue) => {
      const path = issue.path.length > 0 ? issue.path.join('.') : 'root';
      return `${path}: ${issue.message}`;
    })
    .join('\n');
}

export function parseOrThrow<T>(schema: ZodSchema<T>, input: unknown, label: string): T {
  const result = schema.safeParse(input);
  if (!result.success) {
    throw new Error(`Invalid ${label}:\n${formatValidationErrors(result.error)}`);
  }
  return result.data;
}
