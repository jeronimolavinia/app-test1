import React from "react";
import { Button } from "react-bootstrap";
import ModalComponent from "./modal-component";

interface Props{
    showModal: boolean;
    handleOpenCloseModal: any;

}



export default class ButtonComponent extends React.Component<Props>{
    
    render(){
        return(
            <div>
                <Button variant="primary" onClick={this.props.handleOpenCloseModal}> Meu Botão </Button>
                <ModalComponent showModal={this.props.showModal} handleOpenCloseModal={this.props.handleOpenCloseModal}/>
            </div>
            
        )
        
    }

}