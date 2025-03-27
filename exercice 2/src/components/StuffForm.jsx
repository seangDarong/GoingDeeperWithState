import { useState } from "react";
export default function StuffForm({addStuff}) {

  const [name,setName] = useState(null);
  const [price,setPrice] = useState(null);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newStuff = {name,price};
    addStuff(newStuff);
    setName("");
    setPrice("");
  }

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" value={name} onChange={(e)=> setName(e.target.value)}/>

      <p>Stuff price</p>
      <input type="search" placeholder="15" value={price} onChange={(e) => setPrice(e.target.value)} />

      <button>Add Stuff</button>
    </form>
  );
}
