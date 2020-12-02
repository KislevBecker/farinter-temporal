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
          value: 'Consulta de productos/articulos/medicamentos',
          label: 'Consulta de productos/articulos/medicamentos',
          trigger: 'Asking for guides productos',
        },
        {
          value: 'Consulta de precios venta por menor',
          label: 'Consulta de precios venta por menor',
          trigger: 'Asking for guides',
        },
        {
          value: 'Donde ubicarnos',
          label: 'Donde ubicarnos',
          trigger: 'nuestra ubicación',
        },
        {
          value: 'Nuestros teléfonos de contacto',
          label: 'Nuestros teléfonos de contacto',
          trigger: 'telefonos',
        },
        {
          value: 'Nuestros horarios de atención',
          label: 'Nuestros horarios de atención',
          trigger: 'horarios',
        },
        {
          value: '¿Cuáles son las formas de pago?',
          label: '¿Cuáles son las formas de pago?',
          trigger: 'formas de pago',
        },
        {
          value: 'Requisitos para apertura de crédito personal o empresarial',
          label: 'Requisitos para apertura de crédito personal o empresarial',
          trigger: 'requisitos de apertura de credito',
        },
        {
          value: '¿Hacen envíos a nivel nacional?',
          label: '¿Hacen envíos a nivel nacional?',
          trigger: 'consulte con servicio al cliente',
        },
        {
          value: 'Devolución de productos / artículos',
          label: 'Devolución de productos / artículos',
          trigger: 'devoluciones de productos',
        },
        {
          value: 'Deseo trabajar en farinter',
          label: 'Deseo trabajar en farinter',
          trigger: 'trabajo en farinter',
        },
      ],
    },

    {
      id:'trabajo en farinter',
      options:[
        {
          value:'Quiero aplicar a una oportunidad de trabajo, ¿dónde puedo enviar mi hoja de vida?',
          label: 'Quiero aplicar a una oportunidad de trabajo',
          trigger:'consulta de trabajo',
        },
        {
          value: 'Quiero realizar mi práctica profesional en farinter, ¿dónde puedo enviar mi hoja de vida?',
          label: '¿Dónde puedo enviar mi hoja de vida?',
          trigger: 'consulta de trabajo',
        }
      ],
    },

    {
      id:'consulta de trabajo',
      message:'Estamos contentos de tu interés por pertenecer a nuestra organización, podrías indicarnos en que localidad estas interesado:',
      trigger: 'locacion de trabajo',
    },

    {
      id:'locacion de trabajo',
      options:[
        {
          value:'San Pedro Sula',
          label: 'San Pedro Sula',
          trigger:'consulta de trabajo sps',
        },
        {
          value: 'Tegucigalpa',
          label: 'Tegucigalpa',
          trigger: 'consulta de trabajo tga',
        }
      ],
    },

    {
      id:'consulta de trabajo sps',
      message: ' Puedes comunicarte con el departamento de Recursos Humanos al número   89328328932',
      trigger:'Asking for Something else',
    },
    {
      id:'consulta de trabajo tga',
      message: ' Puedes comunicarte con el departamento de Recursos Humanos al número   89328328932',
      trigger:'Asking for Something else',
    },

    {
      id:'devoluciones de productos',
      options:[
        {
          value:'Devolución de productos',
          label: 'Devolución de productos',
          trigger:'consulte con servicio al cliente',
        },
        {
          value: 'Producto dañado / vencido',
          label: 'Producto dañado / vencido',
          trigger: 'consulte con servicio al cliente',
        }
      ],
    },

    {
      id:'requisitos de apertura de credito',
      message:'Para mayor información comunicate con el departamento de créditos a los números aquí detallados (COLOCAR LOS NUMEROS O DARNOS LA LISTA DE NUMEROS QUE QUIEREN PRESENTAR) según tu ciudad de residencia. ',
      trigger:'Asking for Something else',
    },

    {
      id: 'formas de pago',
      options: [
        {
          value: '¿Cuáles son las formas de pago aceptadas? ',
          label: '¿Cuáles son las formas de pago aceptadas?',
          trigger: 'formas de pago aceptadas',
        },
        {
          value: 'Requisitos para pago con tarjeta de crédito ',
          label: 'Requisitos para pago con tarjeta de crédito ',
          trigger: 'requisitos tarjeta de credito',
        },
        {
          value: '¿Puedo pagar con dólares? ',
          label: '¿Puedo pagar con dólares? ',
          trigger: 'pago con dolar',
        },
        {
          value: '¿Cuál es la tasas de cambio para los dólares? ',
          label: '¿Cuál es la tasas de cambio para los dólares? ',
          trigger: 'tasa de cambio',
        },
      ],    
    },

    {
      id:'formas de pago aceptadas',
      message:'Los pagos se pueden realizarse en  efectivo, Tarjeta de crédito o Deposito a Nuestra Cuenta Farinter.',
      trigger:'Asking for Something else',
    },

    {
      id:'requisitos tarjeta de credito',
      message:'Para pago con tarjeta de crédito, se requiere que el tarjetahabiente dueño de la misma, se presente con su identidad para la realización del pago.',
      trigger:'Asking for Something else',
    },

    {
      id:'pago con dolar',
      message:'La moneda dólar es aceptada por nuestra empresa,  utilizando la tasa de cambio Vigente al momento de efectuar el pago.',
      trigger:'Asking for Something else',
    },

    {
      id:'tasa de cambio',
      message:'El Factor  de la tasa cambiaria del día Vigente al momento de efectuar el pago.',
      trigger:'Asking for Something else',
    },


    {
      id: 'horarios',
      message: 'Por favor selecciona la opción que deseas consultar',
      trigger: 'consulta horarios options',
    },
    {
      id: 'consulta horarios options',
      options: [
        {
          value: 'Jornada cotidiana ',
          label: 'Jornada cotidiana ',
          trigger: 'jornada normal',
        },
        {
          value: 'FERIADOS 1 de mayo, Morazanica, 25 dic. Y 1 de enero ',
          label: 'FERIADOS 1 de mayo, Morazanica, 25 dic. Y 1 de enero ',
          trigger: 'feriados',
        },
        {
          value: 'Otros feriados ',
          label: 'Otros feriados ',
          trigger: 'otros feriados',
        },
      ],    
    },

    {
      id: 'jornada normal',
      message: 'Nuestro horarios de atención al cliente a Nivel Nacional es:',
      trigger: 'horariolv',
    },
    {
      id: 'horariolv',
      message: 'Lunes a Viernes de 8:00 am a 6:pm.',
      trigger: 'horario-s',
    },
    {
      id: 'horario-s',
      message: 'Los sábados de 8:00 am a 12:00 md.',
      trigger: 'horariod',
    },
    {
      id: 'horariod',
      message: 'Cerrado los Domingos.',
      trigger: 'Asking for Something else',
    },

    {
      id: 'feriados',
      message: 'Por ser un feriado nacional, no estaremos laborando',
      trigger: 'Asking for Something else',
    },

    {
      id: 'otros feriados',
      message: 'Para conocer Nuestro Horario especial por Feriado Nacional o Festejo,',
      trigger: 'consulte con servicio al cliente',
    },



    {
      id: 'Asking for guides productos',
      message: 'Por favor selecciona la opción que deseas consultar',
      trigger: 'consulta productos options',
    },
    {
      id: 'consulta productos options',
      options: [
        {
          value: 'Ventas o existencia de productos/articulos/medicamentos',
          label: 'Ventas o existencia de productos/articulos/medicamentos',
          trigger: 'Asking for guides productos user',
        },
        {
          value: 'Proveedores / distribuidores / marca',
          label: 'Proveedores / distribuidores / marca',
          trigger: 'Asking for guides proveedores user',
        },
        {
          value: '¿Aplica la tercera edad?',
          label: '¿Aplica la tercera edad?',
          trigger: 'Asking for guides tercera edad user',
        },
        {
          value: 'Servicio al cliente',
          label: 'Servicio al cliente',
          trigger: 'Asking for agent',
        },
      ],
    },

    {
      id: 'Asking for guides tercera edad user',
      message: 'En Farinter apoyamos a la tercera edad,',
      trigger: 'consulte con servicio al cliente',
    },



    {
      id: 'Asking for guides proveedores user',
      message: 'Por favor ingresa tu consulta',
      trigger: 'respuesta de asking for guides proveedores user',
    },
    {
      id: 'respuesta de asking for guides proveedores user',
      user: true,
      trigger: 'respuesta de proveedores user',
    },
    {
      id: 'respuesta de proveedores user',
      message: 'Consulta nuestro catálogo de Proveedores en nuestra Página Web',
      trigger: 'Asking for Something else',
    },



    {
      id: 'Asking for guides productos user',
      message: 'Por favor ingresa tu consulta',
      trigger: 'respuesta de asking for guides productos user',
    },
    {
      id: 'respuesta de asking for guides productos user',
      user: true,
      trigger: 'respuesta de productos user',
    },
    {
      id: 'respuesta de productos user',
      message: 'Para mayor información comunicate con servicio al cliente a los números aquí detallados  (COLOCAR LOS NUMEROS O DARNOS LA LISTA DE NUMEROS QUE QUIEREN PRESENTAR) o escríbenos a nuestro correo consultas@farinter.com',
      trigger: 'Asking for Something else',
    },
    {
      id: 'telefonos',
      message: 'Puedes comunicarte con nosotros, según sea tu ubicación, a los teléfonos',
      trigger: 'TGAPhones',
    },
    {
      id: 'TGAPhones',
      message: 'En Tegucigalpa (504) 2225-2718, Fax (504) 2225-2732, y',
      trigger: 'SPSPhones',
    },
    {
      id: 'SPSPhones',
      message: 'San Pedro Sula  (504) 2531-9400, Fax : (504) 2553-5599',
      trigger: 'Asking for Something else',
    },
    {
      id: 'nuestra ubicación',
      message: 'Puedes encontrar nuestras oficinas en',
      trigger: 'TGALocation',
    },
    {
      id: 'TGALocation',
      message: 'Tegucigalpa: Barrio La Granja , Edificio Farinter, atrás de la Toyota . Tegucigalpa, Honduras',
      trigger: 'SPSLocation',
    },
    {
      id: 'SPSLocation',
      message: 'San Pedro Sula: Barrio Santa Rosa 7 y 8 Calle S.E. II Anillo de Circunvalacion  ,Edificio Farinter. Honduras ',
      trigger: 'Asking for Something else',
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
      id: 'consulte con servicio al cliente',
      message: 'Para mayor información comunicate con servicio al cliente a los números (COLOCAR LOS NUMEROS O DARNOS LA LISTA DE NUMEROS QUE QUIEREN PRESENTAR) aquí detallados según tu ciudad de residencia.', 
      trigger:'Asking for Something else',
    },

    {
      id: 'Asking for agent',
      message: 'Con gusto un agente de ventas te atenderá,  por favor comunicate a  los números (COLOCAR LOS NUMEROS O DARNOS LA LISTA DE NUMEROS QUE QUIEREN PRESENTAR) aquí detallados.',
      //end: true,
      trigger:'Asking for Something else',
    },
    {
      id: 'Done',
      message: '¡Que tenga un bonito día!, recuerda que estamos siempre aquí para ayudarte',
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
