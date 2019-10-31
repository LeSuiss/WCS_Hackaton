import './MonsterCard.css';
import React, { Component } from 'react';
import axios from 'axios'
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container
} from 'reactstrap';



class MonsterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        monsters:[]
      },
      name:[],
      picture:[],
      level:[],
      attack:[],
      defense:[],
      special:[],
      description:[],
      id:[],
      modale:false,
      cross:true

    }

  }
  componentDidMount() {
    axios.get('https://hackathon-wild-hackoween.herokuapp.com/monsters')
      .then(res => {
        this.setState({ data: res.data })
      })
  }

    


  render() {

    return (
      <div className='total' onLoad={()=>this.setState({modale:false})}>
        <div className='info' className={this.state.modale === false ? 'display' : 'displayNone'} 
          className={this.state.cross === false ? 'display':'displayNone'}>

            <h1>{this.state.name}</h1>
            <p>Level : {this.state.level}</p>
            <p>Attack : {this.state.attack}</p>
            <p>Defense : {this.state.defense}</p>
            <p>Special : {this.state.special}</p>
            <p>Description : {this.state.description}</p>
          
          </div>  
           
        <Container className='cont' >
          
            <Row>
            

          {this.state.data.monsters.map((x) =>
          <Col  sm="4" style={{margin:'0px !important',textAlign:'center'}}key={x.id} onClick={() => this.setState({
              name: x.name,level:x.level, attack:x.attack,defense:x.defense,special:x.special,description:x.description, picture:x.picture,id:x.id,modale:!this.state.modale,cross:!this.state.cross
            })}>
                <Card style={{marginTop:50}} className='Card' body>

                <CardTitle style={{height:'90px',color:'#f39422'}}><h1>{x.name}</h1></CardTitle>
                <img src={x.picture} alt='picture'/>
                <Button style={{marginTop:'40px',backgroundColor:'black'}} >Détails</Button>
                </Card>
            </Col>)}
            </Row>
            {this.scary}
        </Container>
        
        
          {/* {this.scary()?<audio id="audioPlayer" src="cris-de-peur-effrayant-exorciste.mp3"></audio>{console.log('salut')}:""} */}
        </div>
    
    );
  }
}
export default MonsterCard;

// import './MonsterCard.css';
// import React, { useState } from 'react';

// import {Card,CardTitle,Row,Col,Container} from 'reactstrap';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




// const MonsterCard=(props) => {
//     const {
//       monstres, className
//     } = props;
//   { console.log(monstres) }


//     const [modal, setModal] = useState(false);

//     const toggle = () => setModal(!modal);

//     return ( 

//       <Container className='cont'>
//           <Row>
//               {props.monstres.map(x =>
//           <Col sm="4" style={{margin:'0px !important'}} key={x.id}>
//             <Card className='Card' body>
//               <CardTitle style={{textAlign:'center'}}><h1>{x.name}</h1></CardTitle>
//               <img src={x.picture} alt='image' />
//               <Button style={{marginTop:'40px'}}  onClick={toggle}>Détails</Button>
//             </Card>
//           </Col>
//           )}
//         </Row>
//         <div>
//           {props.monstres.map(y =>
//           <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
//             <ModalHeader >Name : {y.name}</ModalHeader>
//             <ModalHeader >Level : {y.level}</ModalHeader>
//               <ModalHeader >{y.attack}</ModalHeader>
//               <ModalHeader >{y.defense}</ModalHeader>
//               <ModalHeader >{y.special}</ModalHeader>
//               <ModalHeader >{y.description}</ModalHeader>          
//             <ModalFooter>
//               <Button color="secondary" onClick={toggle}>Cancel</Button>
//             </ModalFooter>
//           </Modal>
//           )}
//         </div>
//     </Container>
//      );

//   }

//  export default MonsterCard
