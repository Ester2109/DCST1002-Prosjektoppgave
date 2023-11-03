import { useState } from "react";
import styles from "./Dropdown.module.css"

const Dropdown = ({ children, style, ... prop }) => {

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className={styles.dropdown}>
            <button onClick={toggleDropdown}>Vis/Skjul Dropdown</button>
            {isDropdownVisible && (
                <div className="dropdownContent">
                </div>
      )}
        </div>
    );
};

export default Dropdown;