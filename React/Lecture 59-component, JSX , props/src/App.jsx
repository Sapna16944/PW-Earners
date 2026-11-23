import Footer2, { Footer } from "./components/Footer";
import Navbar from "./components/Navbar"; //default import

import Products from "./components/Products";

console.log(2);

// function Navbar() {
//   console.log(4);
//   return (
//     <>
//       <ul>
//         <li>home</li>
//         <li>shop</li>
//         <li>about us</li>
//         <li>login</li>
//       </ul>
//     </>
//   );
// }

const user = {
  name: "sapna",
  isLoggedIn: true,
};

const products = [
  {
    title: "Nike ka joota",
    price: 10000,
  },
  {
    title: "Redtape ka joota",
    price: 1000,
  },
  {
    title: "Campus ka joota",
    price: 800,
  },
];
function App() {
  console.log(3);
  return (
    <>
      <Navbar user={user} />
      <Products products={products}>
        <p>products</p>
      </Products>
      
      <Footer />
      <Footer2 />
    </>
  );
}

export default App;
