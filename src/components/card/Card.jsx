import React from 'react';




class Card extends React.Component {
   
    render() { 
        return ( 
        <div>
            {this.props.monstres.map(x=>x.name)}
        </div> 
        
        );
    }
}
 
export default Card;