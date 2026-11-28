import { useState } from "react";

function ControlledComponent() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [form, setForm] = useState({ name: "Sapna", email: "9410596350abc@gmail.com", password: "" });

  function signup(e) {
    e.preventDefault();
    console.log("form submitted");
    console.log(form);
  }

  function handleInput(e) {
    // let value=e.target.value;
    // let name=e.target.name;

    const { value, name } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    //console.log(name, value);
  }

  return (
    <>
      <h2>Form in React (Controlled Component)</h2>
      <form action="" onSubmit={signup}>
        <label htmlFor="name">Name : </label>
        <input
          value={form.name}
          type="text"
          name="name"
          id="name"
          //onInput={(e) => setName(e.target.value)}
          onInput={handleInput}
        />
        <br />
        <label htmlFor="email">Email : </label>
        <input
          value={form.email}
          type="email"
          name="email"
          id="email"
          //onInput={(e) => setEmail(e.target.value)}
          onInput={handleInput}
        />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          value={form.password}
          type="password"
          name="password"
          id="password"
          //onInput={(e) => setPassword(e.target.value)}
          onInput={handleInput}
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default ControlledComponent;
