import React, { useState } from 'react';
import cards from './cards.css';
import { unstable_batchedUpdates } from 'react-dom';
import TinderCard from 'react-tinder-card';

function Cards(){
    const [people,setPeople]=useState([
        {
            name: 'Captain america',
            url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F04%2Fmcdavag_ec072_h-2000.jpg'
        },
        {
            name: 'iron man',
            url: 'https://images.immediate.co.uk/production/volatile/sites/3/2018/05/IRON-2008-d7a2706.jpg?quality=90&resize=768,574'
        },
        {
            name: 'Scarlet Witch',
            url: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/18/1462461414-captain-america-civil-war-elizabeth-olsen1.jpg?crop=0.739xw:1.00xh;0.157xw,0&resize=480:*'
        },
        {
            name: 'Thor',
            url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/thor-endgame-avengers-4-1559993083.jpg?crop=0.515xw:0.977xh;0.263xw,0.0231xh&resize=480:*'
        },
        {
            name: 'Black Panther',
            url: 'https://pyxis.nymag.com/v1/imgs/461/bab/09ed06126f0834fbc423f37b97d26e8d7e-black-panther.rsquare.w1200.jpg'
        }

    ]); //Syntax of Declaring an array in react
    return(
        <div>
            <h1>
                Avengers and Devlopers 
            </h1>
            <div className='cont'>
            {people.map((person) => (
                <TinderCard
                className='swipe'
                key={person.name}
                >
                    <div 
                    style={{backgroundImage: `url(${person.url})`}}
                    className='cardd'>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
        </div>
           
    );
}

export default Cards;