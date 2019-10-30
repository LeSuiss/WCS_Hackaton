import React from 'react';
import axios from 'axios';
import Card from '../card/Card'




class Api extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            monstres:{
                monsters:[]
            }
         }
    }

    componentDidMount() {
        axios.get('https://hackathon-wild-hackoween.herokuapp.com/monsters')
            .then(res => {
                this.setState({ monstres: res.data})
            })
    }


    render() { 
        return ( 
            <div>
                <Card monstres={this.state.monstres.monsters.map(x=>x)} />
            </div>
         );
    }
}
 
export default Api;