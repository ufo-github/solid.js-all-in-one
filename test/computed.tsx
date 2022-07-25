import { render } from "solid-js/web";
import { createSignal } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(0);

  setInterval(() => setCount(count() + 1), 1000);
  // const doubleCount = count() * 2;
  // 计算属性
  const doubleCount = () => count() * 2;
  return (
    <>
      <div>Count: {count()}</div>
      <div>doubleCount: {doubleCount()}</div>
    </>
  );
  // <div>doubleCount: {doubleCount()}</div>
  // div>doubleCount: {doubleCount}</div>
}

render(() => <Counter />, document.getElementById('app'));
