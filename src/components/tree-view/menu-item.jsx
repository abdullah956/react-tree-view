import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  // State to track which items' children are currently displayed
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  // Function to toggle the display of the children of a specific menu item
  function handleToggleChildren(getCurrentlabel) {
    // Update the state, flipping the boolean value for the specified label
    setDisplayCurrentChildren({
      ...displayCurrentChildren, // Spread existing state
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel], // Toggle the value for this label
    });
  }

  console.log(displayCurrentChildren); // Log the current state to see which items are expanded

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          // If the item has children, show a toggle button (plus/minus icon)
          <span onClick={() => handleToggleChildren(item.label)}>
            {
              displayCurrentChildren[item.label] ? (
                <FaMinus color="#fff" size={25} /> // Show minus icon if children are displayed
              ) : (
                <FaPlus color="#fff" size={25} />
              ) // Show plus icon if children are hidden
            }
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        // If the item has children and the state indicates they should be displayed, render the child list
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
