import './Dropdown.css';
import { Button, Collapse } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import { useState } from 'react';

export const Dropdown = ({title = "Judul", component={}, isOpenValue=false}) => {
    const [isOpen, setIsOpen] = useState(isOpenValue);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="dropdown">
            <button 
                className="dropdown-btn btn btn-secondary d-flex justify-content-between align-items-center"
                onClick={toggleDropdown}
                aria-expanded={isOpen}
            >
                {title}
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {/* Control the display of dropdown-content based on isOpen state */}
            <div className={`dropdown-content ${isOpen ? 'd-block' : 'd-none'}`}>
                {component}
            </div>
        </div>
        </>
    );
}