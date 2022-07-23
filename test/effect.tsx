import { render } from 'solid-js/web';
import { createSignal, createEffect } from 'solid-js';

function Counter() {
  const [count, setCount] = createSignal(0);
  const clickHandler = () => setCount(c => c + 1);
  // const clickHandler = () => setCount(count() + 1)
  createEffect(() => {
    console.log("The count is now", count());
  });
  return (
    <>
      <button onClick={clickHandler}>Click Me</button>
      <p>count = {count()}</p>
    </>
  );
}

render(() => <Counter />, document.getElementById('app'))


/*

了解 Solid 的工作原理，你应该想象 JSX 中的每个表达式都可能是一个单独包装的 Effect，它会在其依赖信号发生变化时重新执行


从 Solid 的角度来看，所有渲染都只是响应系统的副作用。

开发者使用 createEffect 创建的 Effect 会在渲染完成后运行，主要用于调度渲染后与 DOM 交互的更新。

*/
