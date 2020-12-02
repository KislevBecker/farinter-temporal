/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import farinter from '../../img/farinter-avatar.png';
import flotanteChat from '../../img/chatbot.png';
import avatarUsuario from '../../img/perfil2.png';

class ChatDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
      text: '',
    };
    const steps = [
      {
        id: 'Greet',
        message: 'Bienvenido a Farmacias Kielsa, soy tu asistente, ¿en qué te puedo ayudar?',
        trigger: 'Ask City',
      },
      {
        id: 'Ask City',
        message: '¿De qué ciudad y colonia nos escribes?',
        trigger: 'Waiting user input for city',
      },
      {
        id: 'Waiting user input for city',
        user: true,
        trigger: 'Ask Name',
      },
      {
        id: 'Ask Name',
        message: 'Por favor ingresa tu nombre',
        trigger: 'Waiting user input for name',
      },
      {
        id: 'Waiting user input for name',
        user: true,
        trigger: 'Asking options',
      },
      {
        id: 'Asking options',
        message: 'Hola {previousValue}, Por favor selecciona el área en que deseas hacer tus consultas',
        trigger: 'Displaying options to search',
      },
      {
        id: 'Displaying options to search',
        options: [
          {
            value: 'Consultas generales',
            label: 'Consultas generales',
            trigger: 'Asking for guides',
          },
          {
            value: 'Quejas',
            label: 'Quejas',
            trigger: 'Option Not available',
          },
          {
            value: 'Consultas de kielsa cash',
            label: 'Consultas de kielsa cash',
            trigger: 'Option Not available',
          },
        ],
      },
      {
        id: 'Option Not available',
        message: 'Lo sentimos, en este momento no está disponible esta opción, por favor intenta de nuevo más tarde',
        trigger: 'Asking for Something else',
      },
      {
        id: 'Asking for Something else',
        message: '¿Hay algo más en lo que podamos ayudarte?',
        trigger: 'Asking for user options',
      },
      {
        id: 'Asking for user options',
        options: [
          {
            value: true,
            label: 'Si',
            trigger: 'Asking for user selection',
          },
          {
            value: 'false',
            label: 'No',
            trigger: 'Done',
          },
        ],
      },
      {
        id: 'Asking for user selection',
        message: 'Por favor selecciona el área en que deseas hacer tus consultas',
        trigger: 'Displaying options to search',
      },
      {
        id: 'Asking for guides',
        message: '¿Qué producto necesitas?',
        trigger: 'Waiting user input for help',
      },
      {
        id: 'Waiting user input for help',
        user: true,
        trigger: 'Asking for recipe',
      },
  
      {
        id: 'Asking for recipe',
        message: '¿Tienes una receta?',
        trigger: 'Adding treat',
      },
  
      {
        id: 'Adding treat',
        options: [
          {
            value: true,
            label: 'Si',
            trigger: 'Asking for agent',
          },
          {
            value: 'false',
            label: 'No',
            trigger: 'Asking for agent',
          },
        ],
      },
      {
        id: 'Asking for agent',
        message: 'En breve uno de nuestros agentes contestará todas sus preguntas',
        end: true,
      },
      {
        id: 'Done',
        message: '¡Que tengas un lindo día!, recuerda que estamos siempre aquí para ayudarte',
        end: true,
      },
    ];
  }
  render() {
    const { showing, text } = this.state;
    
    return (
      <div onClick={this.setReadChat}>
        <a className="flotante2" onClick={() => this.setState({ showing: !showing })}>
          <img src={flotanteChat} className="card-circle w-75" alt="chat bubble" />
        </a>
        <div style={{ display: (showing ? 'block' : 'none') }}>
          <div id="tarjeta-chat" className="card">
            <div className="Card-H" onClick={() => this.setState({ showing: !showing })}>
              <div className="modal-header header-chatbot text-white">
                <h2 className="modal-title center"><i className="far fa-comments"></i> Chatbot</h2>
                <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            <div id="msg-history" className="card-body Card-list-msg text-center">
              <div>
                <div className="avatar-kielsa">
                  <img src={farinter} style={{ width: '40px' }} alt="Avatar-farinter" />
                </div>
                <div className="container-chat text-left">
                  <p>
                    Bienvenido a Farinter, ¿en qué te puedo ayudar?
                  </p>
                </div>
                <div>
                        <div className="avatar-usuario">
                          <img src={avatarUsuario} style={{ width: '40px' }} alt="Avatar" className="right" />
                        </div>
                        <div className="container-darker text-left">
                          <span className="text-black-50">Hola que tal</span>
                        </div>
                        <span className="time-left text-muted">
230933
                        </span>
                        <br />
                      </div>

                <div id="invisibleDiv" />
              </div>
              <div style={{ height: '1rem', marginBottom: '0.5rem' }}>
                    <span>
                      Leído:
                      {' '} 16:20pm
                      {/* //{moment(chat.supportRead).format('h:mm:ss a DD/MM/YYYY')} */}
                    </span>
              
                   <span />}
              </div>
            </div>
            <div className="card-footer">

              <form className="d-flex flex-row">
                <input
                  placeholder="Escribe tu mensaje..."
                  className="form-control pr-5"
 
                  />
                <button disabled className="btn btn-transparent rounded-left-search ojo" type="submit">
                  <i className="fas fa-paper-plane" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatDashboard;
