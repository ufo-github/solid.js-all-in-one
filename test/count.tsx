import { render } from "solid-js/web";
import { createSignal } from "solid-js";

const [count, setCount] = createSignal(0);

// setInterval(() => setCount(count() + 1), 1000);
setInterval(() => setCount((c) => c + 1), 1000);
// Solid 的 Signal 也可以接收一个函数，你可以在其中使用前一个值来设置下一个值。

function Counter() {
  return <div>Count: {count()}</div>;
}

render(() => <Counter />, document.getElementById('app'));
