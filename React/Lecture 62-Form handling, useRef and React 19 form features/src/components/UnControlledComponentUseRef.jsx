import {useRef} from "react";

function UnControlledComponentUseRef() {
  const nameRef=useRef("Sapna");
  
  function signup(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
    //console.log(nameRef.current.value);
    nameRef.current.style.color="red";
    nameRef.current.focus();
  }

  return (
    <>
      <h2>Form in React (UnControlled Component - useRef)</h2>
      <form action="" onSubmit={signup}>
        <label  htmlFor="name">Name : </label>
        <input ref={nameRef} type="text" name="name" id="name" />
        <br />
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" id="email" />
        <br />
        <label htmlFor="password">Password : </label>
        <input type="password" name="password" id="password" />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default UnControlledComponentUseRef;
