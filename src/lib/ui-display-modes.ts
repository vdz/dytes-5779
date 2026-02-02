/**
 * UI Display Modes for form states
 */
export const DISPLAY_MODES = {
    normal: 0,
    processing: 1,
    error: 2,
    done: 3,
    active: 4,
} as const;

export type DisplayMode = typeof DISPLAY_MODES[keyof typeof DISPLAY_MODES];
