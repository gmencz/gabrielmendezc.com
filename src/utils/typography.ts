import Typography from 'typography'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import fairyGateTheme from 'typography-theme-fairy-gates'

const typography = new Typography(fairyGateTheme)

export const {scale, rhythm, options} = typography
export default typography
