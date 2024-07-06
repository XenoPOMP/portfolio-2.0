import { calc, cssVar } from '@/src/utils/css';

export const HEADER_PADDING = 'calc(var(--p-level-2) * .9375)';

// Section padding from landing
export const SECTION_PADDING = 'calc(var(--p-level-1) * 2.14)';

// Gap between items in project list section
export const PROJECT_LIST_GAP = calc(`${cssVar('--p-level-2')} * 1.25`);
