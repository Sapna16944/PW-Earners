//import React, { useState } from "react";

function UnControlledComponent() {

  function signup(e) {
    e.preventDefault();
    console.log("form submitted");
    console.log(e.target);
    const formData=new FormData(e.target);
    console.log(Object.fromEntries(formData));
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
      <h2>Form in React (UnControlled Component)</h2>
      <form action="" onSubmit={signup}>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          name="name"
          id="name"
          //onInput={(e) => setName(e.target.value)}
          //onInput={handleInput}
        />
        <br />
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          id="email"
          //onInput={(e) => setEmail(e.target.value)}
          //onInput={handleInput}
        />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          id="password"
          //onInput={(e) => setPassword(e.target.value)}
          //onInput={handleInput}
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default UnControlledComponent;
