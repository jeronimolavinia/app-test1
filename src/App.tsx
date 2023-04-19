import React from "react";
import ButtonComponent from "./components/button-component";
import 'bootstrap/dist/css/bootstrap.min.css';


interface Props{

}

interface State{
    showModal: boolean;
    
}

export default class App extends React.Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state ={
            showModal: false
        }
    }    
    handleOpenCloseModal(){
        console.log(this.state)
        this.setState({showModal:!this.state.showModal}) // A exclamação(!) na função serve para inverter showModal para verdadeiro
        //
    }
    
    render(){
        return(
            <div> 
                <ButtonComponent showModal={this.state.showModal} handleOpenCloseModal={()=> this.handleOpenCloseModal()}/>         
            </div>
    // O simbolo ()=> aponta diretamente para função com intuito de evitar conflito com os atributos do Props do Button Component e ModalComponent

        )

    }


}