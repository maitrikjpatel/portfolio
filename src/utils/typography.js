import Typography from 'typography'

const typography = new Typography({
  headerFontFamily: ['Lato', 'sans-serif'],
  bodyFontFamily: ['Avenir Next', 'Helvetica', 'sans-serif'],
  baseFontSize: '1.125rem',
  baseLineHeight: 1.75,
  headerGray: '30',
  bodyGray: '15',
  headerWeight: '400',
  bodyWeight: '300',
  boldWeight: '700',
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
