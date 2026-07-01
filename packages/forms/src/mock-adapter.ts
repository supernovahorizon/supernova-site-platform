import {
  QuoteRequestSchema,
  type LeadFormAdapter,
  type LeadSubmissionResult,
} from './contracts.js';

export class MockLeadAdapter implements LeadFormAdapter {
  async submitQuoteRequest(input: unknown): Promise<LeadSubmissionResult> {
    const parsed = QuoteRequestSchema.safeParse(input);
    if (!parsed.success) {
      return { ok: false, code: 'validation', message: 'Please correct the highlighted fields.' };
    }

    if (parsed.data.honeypot) {
      return { ok: false, code: 'spam', message: 'Submission rejected.' };
    }

    return { ok: true, referenceId: `mock-${Date.now()}` };
  }
}
