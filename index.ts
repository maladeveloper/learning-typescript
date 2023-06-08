import { lineBreak } from './helpers'

const aCoolFunction = (coolNameA: string, coolNameB: string): void => {
  console.log(`I am with the cool kids ${coolNameA} and ${coolNameB}.`)
}
/*
TS unlike JS has strict arity such that the function call below will fail to compile since
the function needs exactly 2 arguments.Since the syntax was still valid, compilation occurred
even with type errors.
*/
// aCoolFunction('mal')
aCoolFunction('malavan', 'maiyuren')

lineBreak()

/*
* Once TS has inferred a type for a variable it can only take on that type.
*
*/
let stringVariable = 'iAmString' // TS has inferred stringVariable is a string type.
stringVariable = 'anotherString'
// stringVariable = 21 // will throw a TS error yet compile to JS and run successfully.
console.log('stringVariable:', stringVariable)

lineBreak()

/*
* Variables declared without an initial variable to infer from can be assigned different types.
*  */
let changingTypeVariable
console.log('changingTypeVariable:', changingTypeVariable)
console.log('changingTypeVariable type :', typeof changingTypeVariable)
changingTypeVariable = 'aString'
console.log('changingTypeVariable:', changingTypeVariable)
console.log('changingTypeVariable type :', typeof changingTypeVariable)
changingTypeVariable = 23
console.log('changingTypeVariable:', changingTypeVariable)
console.log('changingTypeVariable type :', typeof changingTypeVariable)

lineBreak()
