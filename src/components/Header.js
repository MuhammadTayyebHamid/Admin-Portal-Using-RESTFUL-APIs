import '../styles/Header.css'
import PersonIcon from '@mui/icons-material/Person';
import DropDown from './DropDownProfile.js'
import { useState } from 'react';

function Header() {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        console.log('Closing menu');

        setAnchorEl(null);

        setTimeout(() => setAnchorEl(false), 0); 
    };

    return (
      
        <header>

            <div className='logo-container'>

                

                <div className='profile'>

                    <div className='icon' onClick={handleClick}>
                        <PersonIcon sx={{color: "#ffffff", padding : "5px", height: "2.5rem", width: "auto", cursor: "pointer"}}/>

                        <p2> Muhammad Tayyeb Hamid </p2>
                    </div>

                    <DropDown anchorEl={anchorEl} handleClose={handleClose}/>
                    
                </div>

            </div>

        </header>


    );
  }
  
  export default Header;