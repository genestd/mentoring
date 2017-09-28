export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function increment() {
  return ({
    type: INCREMENT,
  });
}

export function decrement(amount) {
  return ({
    type: DECREMENT,
    payload: amount,
  });
}
