import { createSignal, createEffect } from "solid-js";

const [count, setCount] = createSignal(1);

// count is function ✅
let doubleCount = () => count() * 2;

setInterval(() => {
  setCount(count() + 1);
}, 1000);

createEffect(() => {
  // doubleCount is function ✅
  console.log('new doubleCount =', doubleCount());
});
