import React from "react";
import { Button, Modal } from "react-bootstrap";

interface Props{
    showModal: boolean;
    handleOpenCloseModal: any;

}

export default class ModalComponent extends React.Component<Props>{
    render(){
        return(
            // O onHide chama o atributo handleOpenCloseModal
            //Editar modal importado pelo react bootstrap 
            <div>
                <Modal show={this.props.showModal} onHide={this.props.handleOpenCloseModal}> 
                    <Modal.Header closeButton>
                    <Modal.Title>Bem-vindo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <p>Deseja salvar as alterações?</p>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleOpenCloseModal}>Sair</Button>
                    <Button variant="primary" onClick={this.props.handleOpenCloseModal}>Salvar</Button>
                    </Modal.Footer>
                </Modal>
                </div>
        )
    }
}