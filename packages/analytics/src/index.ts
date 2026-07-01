export type AnalyticsEvent = { name: string; properties?: Record<string, string> };

export interface AnalyticsProvider {
  track(event: AnalyticsEvent): void;
}

export class NoopAnalyticsProvider implements AnalyticsProvider {
  track(_event: AnalyticsEvent): void {
    // Intentionally noop for demonstrations
  }
}
