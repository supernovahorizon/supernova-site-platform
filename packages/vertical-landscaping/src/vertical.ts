export const LANDSCAPING_VERTICAL_ID = 'landscaping' as const;

export type SupportedVerticalId = typeof LANDSCAPING_VERTICAL_ID;

const SUPPORTED_VERTICAL_IDS: readonly SupportedVerticalId[] = [LANDSCAPING_VERTICAL_ID];

export function getSupportedVerticalIds(): readonly SupportedVerticalId[] {
  return SUPPORTED_VERTICAL_IDS;
}

export function isSupportedVertical(vertical: string): vertical is SupportedVerticalId {
  return (SUPPORTED_VERTICAL_IDS as readonly string[]).includes(vertical);
}

export function assertVerticalExists(vertical: string): SupportedVerticalId {
  if (!isSupportedVertical(vertical)) {
    const supported = SUPPORTED_VERTICAL_IDS.join(', ');
    throw new Error(`Unknown vertical "${vertical}". Supported verticals: ${supported}.`);
  }

  return vertical;
}
