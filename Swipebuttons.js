import React from 'react'
import './footer.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton'
function Swipeb(){
    return(
        <div className='fottu'>
            <IconButton className='replay'>
                <ReplayIcon/>
            </IconButton>
            <IconButton className='close'>
                <CloseIcon/>
            </IconButton>
            <IconButton className='start'>
                <StarRateIcon/>
            </IconButton>
            <IconButton className='fav'>
                <FavoriteIcon/>
            </IconButton>
            <IconButton className='flash'>
                <FlashOnIcon/>
            </IconButton>
        </div>

    )
}

export default Swipeb