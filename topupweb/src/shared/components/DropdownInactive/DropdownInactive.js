import './DropdownInactive.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const DropdownInactive = ({title = "Judul", component={}}) => {

    return (
        <>
        <div 
            className='top-up-card'
        >
            <div className='top-up-top top-up-2 dropdown-inactive'>
                {title}
                <FaChevronDown />
            </div>
            <div className=' top-up-3 dropdown-inactive-container'>
                {component}
            </div>
        </div>
        </>
    );
}