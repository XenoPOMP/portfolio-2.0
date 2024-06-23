// CSS func wrapper
type Wrapper = (inp: string) => string;

// Creates wrapper function automatically.
const createWrapper = (prefix: string): Wrapper => {
  return inp => `${prefix}(${inp})`;
};

// Wraps inp with calc().
export const calc = createWrapper('calc');

// Wraps inp with var().
export const cssVar = createWrapper('var');
