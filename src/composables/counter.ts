const counter = ref(1);

export function useCounter() {
  function inc() {
    counter.value++;
  }
  return {
    inc,
    counter,
  };
}
