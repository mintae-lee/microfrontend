import { createSignal } from "solid-js";

export default () => {
  const [count, setCount] = createSignal(0);
  
  return (
    <div class="bg-blue-600 text-white p-5">
      <div>合計 = { count() }</div>
      <button class="bg-gray-700 hover:bg-gray-600 text-white rounded px-4 py-2" onClick={ () => setCount(count() + 1) }>Add</button>
    </div> 
  )
}

