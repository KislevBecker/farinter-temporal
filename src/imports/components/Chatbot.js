/* eslint-disable no-unused-vars */
import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import flotanteChat from '../../img/chatbot.png';
import avatarUsuario from '../../img/perfil2.png';
import avatarChatbot from '../../img/farinter-avatar.png';


function CustomChatbot(props) {
  const config = {
    width: '300px',
    height: '400px',
    floating: true,
    floatingStyle: {
      width: '70px', height: '70px', background: 'white', 
      // boxshadow: 'none',
    },
    floatingIconStyle: { height: '60px', width: '60px' },
  };

  const theme = {
    background: 'white',
    fontFamily: 'Arial, Helvetica, sans-serif',
    headerBgColor: 'radial-gradient(circle, rgba(9,9,121,0.958420868347339) 15%, rgba(9,9,121,0.958420868347339) 22%, rgba(0,212,255,1) 100%);',
    headerFontColor: '#fff',
    headerFontSize: '25px',
    botBubbleColor: '#0c87e7', 
    botFontColor: '#fff', 
    userBubbleColor: '#C0C0C0', 
    userFontColor: '#fff', 
  };
  const steps = [
    {
      id: '1',
      message: 'Bienvenido a Farinter, ¿en qué te puedo ayudar?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Por favor ingresa tu nombre',
      trigger: '4',
    },
    {
      id: '4',
      user: true,
      trigger: '5',
    },
    {
      id: '5',
      message: 'Hola {previousValue}, Por favor selecciona el área en que deseas hacer tus consultas',
      trigger: '6',
    },
    {
      id: '6',
      options: [
        {
          value: 'Consulta de precios de farma',
          label: 'Consulta de precios de farma',
          trigger: 'Asking for guides',
        },
        {
          value: 'Consulta de precios de consumo',
          label: 'Consulta de precios de consumo',
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
      trigger: '6',
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

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} headerTitle="Chatbot" botAvatar={avatarChatbot} floatingIcon={avatarChatbot} userAvatar={avatarUsuario} placeholder="Escribe tu mensaje..."  />
    </ThemeProvider>
  );
}
export default CustomChatbot;
