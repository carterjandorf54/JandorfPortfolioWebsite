import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { newArr } from "./classarray";

function Classes() {
  let [classes, setClasses] = useState([...newArr]);

  function calculateGPA() {
    let total = 0;
    let count = 0;
    for (let i of classes) {
      if (i.grade == "A") {
        total += 4;
      } else if (i.grade == "B+") {
        total += 3.3;
      } else if (i.grade == "B") {
        total += 3;
      } else {
        total += 0;
      }
      count++;
    }

    return Math.round((total / count) * 100) / 100;
  }

  const getFilterData = () => {
    const text = document.getElementById("filter1").value;
    text.toLowerCase();
    const result = classes.filter(
      (v) =>
        v.year.toLowerCase() == text ||
        v.year.includes(text) ||
        v.short.toLowerCase() == text ||
        v.short.includes(text) ||
        v.lvl == text ||
        v.lvl.toString().includes(text) ||
        v.desc.toLowerCase() == text ||
        v.desc.includes(text) ||
        v.grade.toLowerCase() == text ||
        v.grade.includes(text) ||
        v.category.toLowerCase() == text ||
        v.category.includes(text)
    );
    setClasses([...result]);
  };

  const clearFilters = () => {
    document.getElementById("filter1").value = "";
    setClasses([...newArr]);
  };

  return (
    <div className="main">
      <div className="section-header">My Courses</div>
      <div className="search-box">
        <input
          type="text"
          id="filter1"
          className="search"
          placeholder="Filter By..."
        />
        <button
          id="search-button1"
          className="search-button"
          onClick={() => getFilterData()}
        >
          Filter
        </button>
        <button className="search-button2" onClick={() => clearFilters()}>
          Clear
        </button>
      </div>
      <div className="class-container">
        <ul className="list">
          <h3 className="header">Year</h3>
          {classes.map((item) => (
            <li key={item.lvl}>{item.year}</li>
          ))}
        </ul>
        <ul className="list">
          <h3 className="header">Tag</h3>
          {classes.map((item) => (
            <li key={item.lvl}>{item.short}</li>
          ))}
        </ul>
        <ul className="list">
          <h3 className="header">Level</h3>
          {classes.map((item) => (
            <li key={item.lvl}>{item.lvl}</li>
          ))}
        </ul>
        <ul className="list">
          <h3 className="header">Description</h3>
          {classes.map((item) => (
            <li key={item.lvl}>{item.desc}</li>
          ))}
        </ul>
        <ul className="list">
          <h3 className="header">Grade</h3>
          {classes.map((item) => (
            <li key={item.lvl}>{item.grade}</li>
          ))}
        </ul>
        <ul className="list">
          <h3 className="header">Category</h3>
          {classes.map((item) => (
            <li key={item.lvl}>{item.category}</li>
          ))}
        </ul>
      </div>
      <div className="gpa">
        <h3>GPA for Current Selection: {calculateGPA()}</h3>
      </div>
    </div>
  );
}

export default Classes;
