import {Menu,MenuItem} from '@mui/material';

const DropDownProfile = ({ anchorEl, handleClose }) => {

    return(
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            sx={{
                mt: '75px',  // Move down by 10px
                ml: '-85px', // Move left by 10px
            }}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My Account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    )
}

export default DropDownProfile;