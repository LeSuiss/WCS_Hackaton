import React from 'react';




class Card extends React.Component {
   
    render() { 
        return ( 
        <div>
            <p>{this.props.monstres.map(x=>x.name)}</p>
        </div> 
        
        );
    }
}
 
export default Card;