// import React,  {useEffect, useState } from 'react'

// function index() {

//   const [message, setMessage] = useState('Loading');

//   useEffect(()=>{
//     fetch("http://localhost:8080/api/home").then(
//       response => response.json()
//     ).then(
//       data => {
//         console.log(data)
//         setMessage(data.message);
//       }
//     )
//   }, [])


//   return (
//     <div>{message}</div>
//   )
// }

// export default index

// src/App.js
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Link from "next/link";
import Banner from "./homepage/banner";
import Rpage from "./maincomp/rpage";
import Lpage from "./maincomp/lpage"
import BLpage from "./maincomp/blpage"
import BRpage from "./maincomp/brpage"
import PosBlock from './maincomp/posblock'
import Heading from "./maincomp/heading";
import About from "./about/about";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import IconRenderer from "./components/IconRenderer";

function App() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ name: "" });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [activeBox, setActiveBox] = useState<number | null>(null);
  // Fetch the list of items from the backend
  useEffect(() => {
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit for creating or updating items
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      // Update item if in edit mode
      fetch(`http://localhost:8080/update/${editId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then(() => setEditMode(false))
        .then(() => fetchItems()); // Refresh the list after update
    } else {
      // Create a new item
      fetch("http://localhost:8080/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then(() => setFormData({ name: "" })) // Reset form
        .then(() => fetchItems()); // Refresh the list after creation
    }
  };

  // Fetch items again
  const fetchItems = () => {
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  };

  // Handle delete
  const handleDelete = (id) => {
    fetch(`http://localhost:8080/delete/${id}`, {
      method: "POST",
    }).then(() => fetchItems()); // Refresh the list after deletion
  };

  // Handle edit mode
  const handleEdit = (id, name) => {
    setEditMode(true);
    setEditId(id);
    setFormData({ name });
  };

  const handlePosBlockClick = (value:number) => {
    return true;
  }
  const resetActiveBox = () => {
    setActiveBox(null); // or setActiveBox(0) if you prefer
  };

  return (
    <>
    <div className="relative h-screen bg-green-800">
      <IconRenderer type="fa" classes="text-black bounce-in-bottom fa50 z-[11] fixed" iconName="FaBasketballBall" setcolor="orange" />
      <div onClick={()=>alert(1)} className={`fixed text-center border border-gray-400 cursor-pointer bg-white rotate-45 flex w-28 h-28 z-[12] text-black ${activeBox == null && "left-0 right-0 top-0 bottom-0"} ${activeBox === 1 && "right-0 bottom-0"} m-auto transition-all duration-300 justify-center items-center`}>
        <h1 className="-rotate-45 text-black font-bold text-3xl">RMR</h1>
      </div>
      <PosBlock  resetActiveBox={resetActiveBox} icon="FaInfo" capital="R" containerClass={"left-0 text-black top-0 bg-white cursor-pointer border-b border-r border-gray-300"}  text="About Me" onClickHandler={() => handlePosBlockClick(1)}  newBg='bg-white'>
        <About />
      </PosBlock>
      <PosBlock resetActiveBox={resetActiveBox}  icon="FaInternetExplorer" capital="A" containerClass={"right-0  text-black top-0 bg-white cursor-pointer border-b border-l border-gray-300 raining-character"} text="Work Experience"  onClickHandler={() => handlePosBlockClick(1)} newBg='bg-gray-200' >
        <Experience />  
      </PosBlock>
      <PosBlock resetActiveBox={resetActiveBox}  icon="FaRProject" capital="N" containerClass={"bottom-0 text-black left-0 bg-white  cursor-pointer  border-t border-r border-gray-300"}  text="Portfolio" onClickHandler={() => handlePosBlockClick(1)} newBg='bg-white' >
        <Projects />
      </PosBlock>

      <PosBlock resetActiveBox={resetActiveBox}  icon="FaEnvelopeOpenText" capital="I" containerClass={"bottom-0 text-black right-0 bg-white  cursor-pointer border-t border-l border-gray-300"}  text="Let's Work Together!" onClickHandler={() => handlePosBlockClick(1)}  newBg='bg-white'  />
    </div>
    {/* <Nav />
    <Banner /> */}
    {/* <div className="flex overflow-hidden h-screen w-screen">
      <div className="overflow-y-auto overflow-x-hidden mt-20 pb-10 px-5  w-full ">
        {/* <div className="flex justify-between gap-4">
          <div className="flex flex-col">
            <div className="menu flex rounded-sm border-gray-300 border mb-5  w-full h-max-content p-4 max-w-3xl justify-center gap-5">
              <div className="flex w-max-content flex-col cursor-pointer ">
                <img src="https://www.placeholder.com/50x50" alt="" className="w-full roun ded-full" />
                <h5 className="font-bold text-md text-center">Food</h5>
              </div>
              <div className="flex w-max-content flex-col cursor-pointer ">
                <img src="https://www.placeholder.com/50x50" alt="" className="w-full rounded-full" />
                <h5 className="font-bold text-md text-center">Food</h5>
              </div>
              <div className="flex w-max-content flex-col cursor-pointer ">
                <img src="https://www.placeholder.com/50x50" alt="" className="w-full rounded-full" />
                <h5 className="font-bold text-md text-center">Food</h5>
              </div>
              <div className="flex w-max-content flex-col cursor-pointer ">
                <img src="https://www.placeholder.com/50x50" alt="" className="w-full rounded-full" />
                <h5 className="font-bold text-md text-center">Food</h5>
              </div>
              <div className="flex w-max-content flex-col cursor-pointer ">
                <img src="https://www.placeholder.com/50x50" alt="" className="w-full rounded-full" />
                <h5 className="font-bold text-md text-center">Food</h5>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[320px] md:max-w-[500px] border-2 rounded-sm text-center flex-shrink-0 bg-white absolute right-5 md:block md:relative md:right-0">
              <h2 className="border-b-2 border-gray text-center font-bold uppercase py-2">orders</h2>
              <div className="flex flex-col max-h-[500px] overflow-x-hidden overflow-y-auto h-[400px] p-3">
                <div className="flex flex-col text-left">
                  <h3>Product Name</h3>
                </div>
              </div>
          </div>
        </div> */}
        {/* <h1 className="my-5">CRUD with React and Express</h1> */}

        {/* <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter item name"
            required
          />
          <button type="submit">{editMode ? "Update Item" : "Create Item"}</button>
        </form>

        <h2>Items List</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name}{" "}
              <button onClick={() => handleEdit(item.id, item.name)}>Edit</button>{" "}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul> */}
            {/* <div>
      <h1>Welcome to the Home Page</h1>
      <Link href="/login">
        Go to Login
      </Link> */}
    {/* </div> */}

{/*        
      </div>
    </div> */} 
    </>
  );
}

export default App;
