import Typography from "typography"

const typography = new Typography({
  baseFontSize: '14px',
  baseLineHeight: 1.42,
  headerFontFamily: ['Courier'],
  bodyFontFamily: ['Courier'],
  // See below for the full list of options.
})

// Output CSS as string.
typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
