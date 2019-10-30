import React from 'react';
import axios from 'axios';
import MonsterCard from '../monster-card/Monstercard'
<<<<<<< HEAD

=======
>>>>>>> 119468ee8b997f52a85d93fb7e8e9404f82dabd9



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
        console.log(this.state.monstres.monsters.map(x => x))
        return ( 
            <div>
                <MonsterCard monstres={this.state.monstres.monsters.map(x=>x)} />
            </div>
         );
    }
}
 
export default Api;