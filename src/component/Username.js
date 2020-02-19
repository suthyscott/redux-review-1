import React from 'react';

function Username(props){
    return(
        <div>
            {props.user.username ? 
            <header id='username'>Username.js</header>
            :
            <div>
                nothing here bro
            </div> }
            
        </div>
    )
}

export default Username