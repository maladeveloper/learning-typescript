import { LINE_BREAK_LENGTH } from './constants'

export const lineBreak = (): void => {
  let str = ''
  for (let i = 0; i < LINE_BREAK_LENGTH; i++) {
    str += '-'
  }
  console.log(`\n${str}\n`)
}
