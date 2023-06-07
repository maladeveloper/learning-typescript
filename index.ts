
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
