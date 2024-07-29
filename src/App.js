const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "charger", quantity: 1, packed: false },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <Packlist />
      <Stats />
    </div>
  );
}

export default App;

function Logo() {
  return (
    <>
      <div className="">
        <h1>🌴Far Away 💼</h1>
      </div>
    </>
  );
}
function Form() {
  return (
    <>
      <form className="add-form">
        <h3>what do you need for your trip</h3>
        <select>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input type="Text" placeholder="Text"></input>
        <button>Add</button>
      </form>
    </>
  );
}
function Packlist() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item, ind) => (
          <Item item={item} key={ind} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      {/* <button ></button> */}
      <span style={item.packed ? { textDecoration: "line-Through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <>
      <div className="stats">
        <footer>
          <em>you have X items on your list, and you already packed X (X%)</em>
        </footer>
      </div>
    </>
  );
}
