import { render } from 'solid-js/web';
import { createSignal, Show } from 'solid-js';

function App() {
  const [loggedIn, setLoggedIn] = createSignal(false);
  const toggle = () => setLoggedIn(!loggedIn())
  // <button onClick={toggle}>Log out</button>
  // <button onClick={toggle}>Log in</button>
  // fallback 属性充当 else，在传递给 when 的条件不为 true 时显示。
  return (
    <>
      <Show
        when={loggedIn()}
        fallback={() => <button onClick={toggle}>Log in</button>}
        >
        <button onClick={toggle}>Log out</button>
        </Show>
    </>
  );
}

render(() => <App />, document.getElementById('app'))
