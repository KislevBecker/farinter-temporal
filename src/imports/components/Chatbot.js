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
      message: 'Buen día soy el asistente virtual de Farinter, gracias por contactarnos, estoy aquí para ayudarle con sus dudas o consultas en relación a los productos y servicios de Farinter. ¿En qué puedo ayudarle?',
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
          value: 'Compras al crédito',
          label: 'Compras al crédito',
          trigger: 'preguntas del credito',
        },
        {
          value: 'Sobre los envíos',
          label: 'Sobre los envíos',
          trigger: 'envios',
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
      id:'envios',
      options:[
        {
          value:'¿Hacen envíos nacionales?',
          label: '¿Hacen envíos nacionales?',
          trigger: 'envio nacional',
        },
        {
          value: '¿Hacen envíos a domicilio?',
          label: '¿Hacen envíos a domicilio?',
          trigger: 'Option Not available',
        },
      ],
    },

    {
      id:'envio nacional',
      message: 'Para mayor información sobre Envíos a Nivel Nacional, por favor comunícate con el departamento de Telemercadeo  a los números indicados para cada ciudad:',
      trigger: 'TGAPhones',
    },

    {
      id:'preguntas del credito',
      options:[
        {
          value:'Quiero saber si puedo comprar al crédito',
          label: 'Quiero saber si puedo comprar al crédito',
          trigger:'respuesta sobre el crédito',
        },
        {
          value: 'Ya tengo crédito aperturado y quiero comprar',
          label: 'Ya tengo crédito aperturado y quiero comprar',
          trigger: 'credito si',
        },
        {
          value: 'No tengo crédito aperturado, quiero abrir crédito',
          label: 'No tengo crédito aperturado, quiero abrir crédito',
          trigger: 'credito no',
        },
      ],
    },

    {
      id:'respuesta sobre el crédito',
      message: '¿Tiene línea de crédito aperturado con nosotros?',
      trigger: 'opciones sobre el crédito',
    },

    {
      id:'opciones sobre el crédito',
      options:[
        {
          value: 'Si',
          label: 'Si',
          trigger: 'credito si',
        },
        {
          value: 'No',
          label: 'No',
          trigger: 'credito no',
        },
      ]
    },

    {
      id: 'credito si',
      message: 'Si tienes línea de crédito activa con nostros, puedes comunicarte con el departamento de Telemercadeo a los números aquí indicados para realizar tus pedidos.',
      trigger:'TGAPhones'
    },

    {
      id: 'credito no',
      message: 'Agredecemos su interés de aperturar una línea de crédito con Farinter, nuestro departamento de créditos con gusto le atenderá para brindarte los requisitos necesarios para aperturar una línea de crédito. Por favor comunicate vía telefónica a los números aquí indicados para cada ciudad:',
      trigger:'TGAPhones'
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
      message: 'Puedes comunicarte con el departamento de Recursos Humanos al número (504) 2531-9400, Fax : (504) 2553-5600 o escríbenos a reclutamientotgu@farinter.hn',
      trigger:'Asking for Something else',
    },
    {
      id:'consulta de trabajo tga',
      message: ' Puedes comunicarte con el departamento de Recursos Humanos al número  (504) 2225-2718 , Fax (504) 2225-2732 o escríbenos a reclutamientotgu@farinter.hn',
      trigger:'Asking for Something else',
    },

    {
      id:'devoluciones de productos',
      options:[
        {
          value:'Devolución de productos',
          label: 'Devolución de productos',
          trigger:'consulte devoluciones',
        },
        {
          value: 'Producto dañado / vencido',
          label: 'Producto dañado / vencido',
          trigger: 'consulte devoluciones',
        }
      ],
    },

    {
      id:'consulte devoluciones',
      message:'Con mucho gusto atenderemos su consulta. Por favor para conocer sobre nuestra política de devoluciones y reclamos, contactar al departamento de Telemercadeo a los números de teléfono que se  indican a continuación: ',
      trigger:'TGAPhones',
    },

    
    {
      id:'requisitos de apertura de credito',
      message:'Agradecemos su interés de apertura crédito con Farinter, Nuestro departamento de créditos con gusto le atenderá para brindarte los requisitos necesarios para apertura una línea de crédito. Por favor comunícate vía telefónica a los números aquí indicados para cada ciudad: En Tegucigalpa (504) 2225-2718, Fax (504) 2225-2732   y San Pedro Sula  (504) 2531-9400, Fax : (504) 2553-5599',
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
      message:'Con Gusto te indicamos nuestras formas de pago.',
      trigger:'pago indicaciones',
    },
    {
      id:'pago indicaciones',
      message:'Puedes cancelar tus productos mediante efectivo, tarjeta de crédito o depósito a nuestra cuenta FARINTER.',
      trigger:'Asking for Something else',
    },

    {
      id:'requisitos tarjeta de credito',
      message:'Con gusto aceptamos tarjeta de crédito, como único requisito se solicita que el tarjetahabiente dueño de la misma, se presente con su Identidad para la realización del pago.',
      trigger:'Asking for Something else',
    },

    {
      id:'pago con dolar',
      message:'La moneda Dólares Americanos es aceptada por FARINTER y se usa la tasa de cambio vigente del día al momento de efectuar el pago.',
      trigger:'Asking for Something else',
    },

    {
      id:'tasa de cambio',
      message:'El Factor de la tasa cambiaria del día vigente al momento de efectuar el pago.',
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
          value: 'FERIADOS 1 de mayo, Morazánica, 25 diciembre y 1 de enero ',
          label: 'FERIADOS 1 de mayo, Morazánica, 25 diciembre y 1 de enero ',
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
      message: 'Contamos con un amplio horario de atención, el cual te brindamos a continuación:',
      trigger: 'horariolv',
    },
    {
      id: 'horariolv',
      message: 'Lunes a Viernes de 8:00 am a 6:00 pm.',
      trigger: 'horario-s',
    },
    {
      id: 'horario-s',
      message: 'Los sábados de 8:00 am a 12:00 md.',
      trigger: 'horariod',
    },
    {
      id: 'horariod',
      message: 'Cerrado los domingos.',
      trigger: 'Asking for Something else',
    },

    {
      id: 'feriados',
      message: 'Por ser un feriado nacional, no estaremos laborando',
      trigger: 'Asking for Something else',
    },

    {
      id: 'otros feriados',
      message: 'Para conocer nuestro horario especial por feriado nacional o festejo, para mayor información por favor comunicate con el departamento de Telemercadeo a los números que se detallan a continuación: Tegucigalpa (504) 2225-2718, Fax (504) 2225-2732   y San Pedro Sula  (504) 2531-9400, Fax: (504) 2553-5599 o escríbanos a nuestro correo consultas@farinter.com, donde gustosamente te atenderemos.',
      trigger: 'Asking for Something else',
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
      message: 'Trabajamos en armonía con la Ley Integral de Protección del Adulto Mayor,',
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
      message: 'Te invitamos a ver nuestros Catálogos de Proveedores aquí en nuestra página web.',
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
      message: 'Para mayor información sobre nuestros productos por favor comunicate con el departamento de Telemercadeo a los números que se detallan a continuación: Tegucigalpa (504) 2225-2718, Fax (504) 2225-2732   y San Pedro Sula  (504) 2531-9400, Fax: (504) 2553-5599 o escríbenos a nuestro correo consultas@farinter.com, donde gustosamente te atenderemos.',
      trigger: 'Asking for Something else',
    },
    {
      id: 'telefonos',
      message: 'Nuestros números teléfonicos son los siguientes:',
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
      message: 'Estamos ubicados en:',
      trigger: 'TGALocation',
    },
    {
      id: 'TGALocation',
      message: 'Tegucigalpa: Barrio La Granja, Edificio Farinter, atrás de la Toyota. Tegucigalpa, Honduras',
      trigger: 'SPSLocation',
    },
    {
      id: 'SPSLocation',
      message: 'San Pedro Sula: Barrio Santa Rosa 7 y 8 Calle S.E. II Anillo de Circunvalación, Edificio Farinter. Honduras ',
      trigger: 'Asking for Something else',
    },
    {
      id: 'Option Not available',
      message: 'Por los momentos no contamos con servicio a domicilio residencial, por lo que te invitamos a visitar nuestras sucursales a las siguientes direcciones:',
      trigger: 'TGALocation',
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
      message: 'Para mayor información comunicate con servicio al cliente a los números:', 
      trigger:'TGAPhones',
    },

    {
      id: 'Asking for agent',
      message: 'Con gusto un agente de ventas te atenderá, para mayor información por favor comunicate al departamento de ventas a los números:  en Tegucigalpa (504) 2225-2718, Fax (504) 2225-2732   y San Pedro Sula  (504) 2531-9400, Fax : (504) 2553-5599. O puedes escribirnos a nuestro correo de atención al cliente consultas@farinter.com.',
      trigger:'Asking for Something else',
    },
    {
      id: 'Done',
      message: '¡Que tengas un bonito día!, recuerda que estamos siempre aquí para ayudarte',
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
