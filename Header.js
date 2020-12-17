import React from 'react';
import './Header.css'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton'


function Header() {
    return(
        <div className='header'>
            <IconButton>
            <AssignmentIndIcon  className='fhicon' fontSize='large'/>
            </IconButton>
            <img 
            className='tinlogo'
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
            alt='t'/>
            <IconButton>
            <SendIcon  className='fhicon' fontSize='large'/>
            </IconButton>
        </div>
    )

}

export default Header