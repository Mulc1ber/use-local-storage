import { useLocalStorage } from "../hooks";

export function UseLocalStorage() {
  const [value, { setItem, removeItem }] = useLocalStorage<string>("some-key");

  return (
    <div>
      <p>Значение из LocalStorage: {value}</p>
      <div>
        <button onClick={() => setItem("new storage value")}>
          Задать значение
        </button>
        <button onClick={() => removeItem()}>Удалить значение</button>
      </div>
    </div>
  );
}
