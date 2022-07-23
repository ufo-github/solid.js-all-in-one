import { createSignal, createEffect } from "solid-js";

const [count, setCount] = createSignal(1);
// 一个是 getter，一个是 setter
// 第一个返回值是一个 getter 而不是值本身

// count is function ✅
let doubleCount = () => count() * 2;

setInterval(() => {
  // setCount(count() + 1);
  setCount((c) => c + 1);
  // Solid 的 Signal 也可以接收一个函数，你可以在其中使用前一个值来设置下一个值。
}, 1000);

// createEffect 接收一个函数，并监视其执行情况。
// createEffect 会自动订阅在执行期间读取的所有 Signal，并在这些 Signal 值之一发生变化时重新运行该函数。
createEffect(() => {
  // doubleCount is function ✅
  console.log('new doubleCount =', doubleCount());
});
