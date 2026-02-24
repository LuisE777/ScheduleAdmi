
import autoTable from 'jspdf-autotable';
import { Component, ElementRef, ViewChild } from '@angular/core';
import 'jspdf-autotable';
import { jsPDF } from 'jspdf';
import Swal from 'sweetalert2';


import html2canvas from 'html2canvas';
declare module 'jspdf' {
  interface jsPDF {
    autoTable:(options:any) => jsPDF;
  }
}

@Component({
  selector:'app-organizer',
  templateUrl:'./organizer.component.html',
  styleUrls:['./organizer.component.css']
})
export class OrganizerComponent {
  @ViewChild('contenido', { static:false }) contenido!:ElementRef;
  test!:any;
  colors:any[] = [
    "#9fc0ff",
    "#babcfa",
    "#b5f9c1",
    "#f8c4f9",
    "#c7fae7",
    "#ab9aea",
    "#d5b7f5",
    "#efc7fa",
    "#b1f7f5",
    "#fcd0d9",
    "#feeebd",
    "#fcfebd",
    "#defebd",
    "#c5febd",
    "#bdfedc",
    "#bdfef4",
    "#bdf8fe",
    "#eabdfe",
    "#bdeffe",
  ];
  inUse:any[] = [];
  semestres: any = [
    // ============================================
    // PRIMER SEMESTRE (Nivel A)
    // ============================================
    {
      nombre: 'PRIMER SEMESTRE',
      materias: [
        // ADMINISTRACION GENERAL (1301001)
        {
          nombre: 'ADMINISTRACION GENERAL',
          docentes: [
            {
              id: 1,
              name: 'VILLARROEL DAZA MARIA HELEN',
              group: '01',
              days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E520' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E503' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E504' }
              ]
            },
            {
              id: 2,
              name: 'BADANI LENZ RAFAEL FERNANDO',
              group: '02',
              days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E545' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E545' },
                { day: 'Viernes', start: '11:15', end: '12:45', classRoom: 'E545' }
              ]
            },
            {
              id: 3,
              name: 'VILLARROEL DAZA MARIA HELEN',
              group: '03',
              days: [
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E503' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E503' },
                { day: 'Viernes', start: '11:15', end: '12:45', classRoom: 'E504' }
              ]
            },
            {
              id: 4,
              name: 'VALDEZ ZEGARRA RAFAEL A.',
              group: '20',
              days: [
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 201' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E524' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E502' }
              ]
            },
            {
              id: 5,
              name: 'SANCHEZ CASTELLON JUAN FELIX',
              group: '21',
              days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E545' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E545' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E545' }
              ]
            },
            {
              id: 6,
              name: 'VARGAS OROSCO FREDDY',
              group: '22',
              days: [
                { day: 'Lunes', start: '15:45', end: '17:15', classRoom: 'E 205' },
                { day: 'Miércoles', start: '15:45', end: '17:15', classRoom: 'E503' },
                { day: 'Jueves', start: '15:45', end: '17:15', classRoom: 'E503' }
              ]
            },
            {
              id: 7,
              name: 'TORRICO OCAMPO ENRIQUE',
              group: '23',
              days: [
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 309' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 103' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 309' }
              ]
            }
          ]
        },

        // CONTABILIDAD I (1301002)
        {
          nombre: 'CONTABILIDAD I',
          docentes: [
            {
              id: 8,
              name: 'PEREZ AMADOR MARIO',
              group: '01',
              days: [
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E545' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E545' },
                { day: 'Viernes', start: '11:15', end: '12:45', classRoom: 'E523' }
              ]
            },
            {
              id: 9,
              name: 'PEREZ AMADOR MARIO',
              group: '02',
              days: [
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E523' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E544' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E523' }
              ]
            },
            {
              id: 10,
              name: 'MENDOZA CRESPO JOSE ANTONIO',
              group: '03',
              days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 109' },
                { day: 'Martes', start: '14:15', end: '15:45', classRoom: 'E 106' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 303' }
              ]
            },
            {
              id: 11,
              name: 'VILLAZON ARANDIA RICARDO IVAN',
              group: '04',
              days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E503' },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 105' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 106' }
              ]
            },
            // Para agregar a CONTABILIDAD I (1301002) - PRIMER SEMESTRE
            {
              id: 4001, // Usa el siguiente ID disponible después del 196
              name: 'MALDONADO ULUNQUE VICTOR HUGO',
              group: '20',
              days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 101' },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 208' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 102' }
              ]
            },
            {
              id: 4002,
              name: 'FERRUFINO JUAREZ JOSE MARCOS',
              group: '21',
              days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 206' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 206' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 208' }
              ]
            },
            {
              id: 4003,
              name: 'MENDOZA CRESPO JOSE ANTONIO',
              group: '22',
              days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E544' },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 101' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E PB-1' }
              ]
            }



          ]
        },
        // Para agregar a PRIMER SEMESTRE - ÁLGEBRA (1301003)
        // Para agregar a PRIMER SEMESTRE - ÁLGEBRA (1301003)
        {
          nombre: 'ALGEBRA',
          docentes: [
            {
              id: 4004,
              name: 'QUISPE CABRERA RENE',
              group: '01',
              days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 206' },
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 203' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 203' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 201', auxiliary: true }
              ]
            },
            {
              id: 4005,
              name: 'COSSIO MC.GALEN LIMBERT PAUL',
              group: '02',
              days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 209' },
                { day: 'Martes', start: '14:15', end: '15:45', classRoom: 'E 102' },
                { day: 'Miércoles', start: '15:45', end: '17:15', classRoom: 'E 202' },
                { day: 'Jueves', start: '14:15', end: '15:45', classRoom: 'E503', auxiliary: true }
              ]
            },
            {
              id: 4006,
              name: 'IRIARTE MERCADO EDGAR ALBERTO',
              group: '04',
              days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E545' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E520' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E522' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 102', auxiliary: true }
              ]
            },
            {
              id: 4007,
              name: 'MOYA ALBARRACIN MARTIN',
              group: '05',
              days: [
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 101' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E520' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E502' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 105', auxiliary: true }
              ]
            },
            {
              id: 4008,
              name: 'JALDIN QUIROZ RENE',
              group: '20',
              days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E504' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E511' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E523' },
                { day: 'Lunes', start: '15:45', end: '17:15', classRoom: 'E 203', auxiliary: true }
              ]
            },
            {
              id: 4009,
              name: 'ALBORTA SILES RAUL JOSE',
              group: '22',
              days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E518' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 302' },
                { day: 'Viernes', start: '11:15', end: '12:45', classRoom: 'E506' }
                // Este grupo no tiene auxiliar en los datos proporcionados
              ]
            },
            {
              id: 4010,
              name: 'COSSIO MC.GALEN LIMBERT PAUL',
              group: '23',
              days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E504' },
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 209' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E520' }
                // Este grupo no tiene auxiliar en los datos proporcionados
              ]
            },
            {
              id: 4011,
              name: 'QUISPE CABRERA RENE',
              group: '24',
              days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 203' },
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 202' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 203' }
                // Este grupo no tiene auxiliar en los datos proporcionados
              ]
            }
          ]
        },
        {
          nombre: 'METODOLOGIA DE INVESTIGACION I',
          docentes: [
            {
              id: 20,
              name: 'GUZMAN BROCKMANN FELIPE HANS WIGBERTO',
              group: '02',
              days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E520' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E520' },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E522' }
              ]
            },
            {
              id: 21,
              name: 'CARRILLO FUENTES JUAN ANGEL',
              group: '22',
              days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E522' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E502' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E503' }
              ]
            },
            {
              id: 22,
              name: 'ZAMBRANA TRIVENO JOSE EMILIO',
              group: '23',
              days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E504' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E504' },
                { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E504' }
              ]
            },
            {
              id: 23,
              name: 'GUERRA TORO MARIA ELENA',
              group: '24',
              days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E PB-4' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E PB-1' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E PB-4' }
              ]
            },
            {
              id: 24,
              name: 'ZAMBRANA TRIVENO JOSE EMILIO',
              group: '25',
              days: [
                { day: 'Lunes', start: '15:45', end: '17:15', classRoom: 'E502' },
                { day: 'Martes', start: '15:45', end: '17:15', classRoom: 'E504' },
                { day: 'Jueves', start: '15:45', end: '17:15', classRoom: 'E504' }
              ]
            }
          ]
        },{
          nombre: 'CALCULO',
          docentes: [
            {
              id: 25,
              name: 'POR DESIGNAR DOCENTE',
              group: '01',
              days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E PB-4' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 304' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 208', auxiliary: true }
              ]
            },
            {
              id: 26,
              name: 'MONTAÑO ROMERO JOSE',
              group: '02',
              days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E502' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E502' },
                { day: 'Viernes', start: '17:15', end: '18:45', classRoom: 'E PB-4', auxiliary: true }
              ]
            },
            {
              id: 27,
              name: 'COVARRUBIAS VARGAS CAUJMAN',
              group: '03',
              days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 103' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 103' },
                { day: 'Viernes', start: '11:15', end: '12:45', classRoom: 'E503', auxiliary: true }
              ]
            },
            {
              id: 28,
              name: 'DUERI MENDEZ MARIA ELENA',
              group: '04',
              days: [
                { day: 'Martes', start: '15:45', end: '17:15', classRoom: 'E543' },
                { day: 'Viernes', start: '15:45', end: '17:15', classRoom: 'E542' }
                // Esta grupo no tiene auxiliar en los datos
              ]
            },
            {
              id: 29,
              name: 'POR DESIGNAR DOCENTE',
              group: '20',
              days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E501' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E502' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E504', auxiliary: true }
              ]
            },
            {
              id:33,
              name:'MONTANO MONTANO JOSE',
              group:'21',
              days:[
                {
                  day:'Martes', start:'17:15', end:'18:45', classRoom:'E513', auxiliary:true
                },
                {
                  day:'Miércoles', start:'06:45', end:'08:15', classRoom:'E503'
                },
                {
                  day:'Viernes', start:'17:15', end:'18:45', classRoom:'E504'
                }
              ]
            },
            {
              id: 31,
              name: 'COVARRUBIAS VARGAS CAUJMAN',
              group: '22',
              days: [
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E530' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 203' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 204', auxiliary: true }
              ]
            },
            {
              id: 32,
              name: 'MONTAÑO RODRIGUEZ EDGAR ORLANDO',
              group: '23',
              days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E PB-2' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E PB-1' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E506', auxiliary: true }
              ]
            },
            {
              id: 33,
              name: 'VILLARROEL SOLIZ GROVER',
              group: '24',
              days: [
                { day: 'Lunes', start: '14:15', end: '15:45', classRoom: 'E522' },
                { day: 'Viernes', start: '15:45', end: '17:15', classRoom: 'E522' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 205', auxiliary: true }
              ]
            },
            {
              id: 34,
              name: 'CRESPO FLORES RENE CARLOS',
              group: '25',
              days: [
                { day: 'Martes', start: '14:15', end: '15:45', classRoom: 'E524' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E523' }
                // Este grupo no tiene auxiliar en los datos
              ]
            }
          ]
        }



      ]
    },

    {
      nombre: 'SEGUNDO SEMESTRE',
      materias: [
        // TEORIA Y TECNICAS DE LA ORGANIZACION (1301006)
{
  nombre: 'TEORIA Y TECNICAS DE LA ORGANIZACION',
  docentes: [
    {
      id: 35,
      name: 'VILLARROEL SOLIZ GROVER',
      group: '01',
      days: [
        { day: 'Lunes', start: '12:45', end: '14:15', classRoom: 'E522' },
        { day: 'Martes', start: '15:45', end: '17:15', classRoom: 'E523' },
        { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E544' }
      ]
    },
    {
      id: 36,
      name: 'DELGADILLO SALAS MAYCOL MARCOS',
      group: '20',
      days: [
        { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 404' },
        { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 204' },
        { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 404' }
      ]
    },
    {
      id: 37,
      name: 'MENDOZA ARAOZ JAMIL MARCELO',
      group: '21',
      days: [
        { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 201' },
        { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 305' },
        { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 305' }
      ]
    },
    {
      id: 38,
      name: 'CARDENAS SARAVIA TITO IVAN',
      group: '22',
      days: [
        { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 304' },
        { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 304' },
        { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 304' }
      ]
    },
    {
      id: 39,
      name: 'CARDENAS SARAVIA TITO IVAN',
      group: '23',
      days: [
        { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 304' },
        { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 304' },
        { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 304' }
      ]
    }
  ]
},

// ECONOMIA DE EMPRESAS I (1301007)
{
  nombre: 'ECONOMIA DE EMPRESAS I',
  docentes: [
    {
      id: 40,
      name: 'PANTOJA ROCHA YURI NEWTON',
      group: '01',
      days: [
        { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 206' },
        { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 206' },
        { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 310', auxiliary: true }
      ]
    },
    {
      id: 41,
      name: 'ARAUJO COSSIO ALDO ROMEL',
      group: '20',
      days: [
        { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 305' },
        { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 204' },
        { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E524', auxiliary: true }
      ]
    },
    {
      id: 42,
      name: 'DECKER MARQUEZ JOSE',
      group: '21',
      days: [
        { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E504' },
        { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 206' },
        { day: 'Viernes', start: '14:15', end: '15:45', classRoom: 'E503', auxiliary: true }
      ]
    },
    {
      id: 43,
      name: 'ZUBIETA FLORIDO FREDDY',
      group: '22',
      days: [
        { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E504' },
        { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 110' },
        { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E521', auxiliary: true }
      ]
    },
    {
      id: 44,
      name: 'LOZADA TORRICO RUDY REMBERTO',
      group: '52',
      days: [
        { day: 'Lunes', start: '14:15', end: '15:45', classRoom: 'E521' },
        { day: 'Martes', start: '14:15', end: '15:45', classRoom: 'E520' },
        { day: 'Miércoles', start: '14:15', end: '15:45', classRoom: 'E521' }
      ]
    }
  ]
},

// CONTABILIDAD II (1301008)
{
  nombre: 'CONTABILIDAD II',
  docentes: [
    {
      id: 45,
      name: 'COCA GONZALES ALBERTO',
      group: '01',
      days: [
        { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E520' },
        { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 301' },
        { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E522' }
      ]
    },
    {
      id: 46,
      name: 'TORRICO SANCHEZ FELIPE ROBERTO',
      group: '20',
      days: [
        { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E545' },
        { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E521' },
        { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E520' }
      ]
    },
    {
      id: 47,
      name: 'LOPEZ VALENZUELA JOSE WALTER',
      group: '21',
      days: [
        { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 103' },
        { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E509' },
        { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E514' }
      ]
    },
    {
      id: 48,
      name: 'MONTAÑO VARGAS OSCAR',
      group: '22',
      days: [
        { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E523' },
        { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E522' },
        { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E522' }
      ]
    },
    {
      id: 49,
      name: 'MONTAÑO VARGAS OSCAR',
      group: '23',
      days: [
        { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E521' },
        { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E524' },
        { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E544' }
      ]
    },
    {
      id: 50,
      name: 'QUINTANA ALVAREZ JHONNY',
      group: '24',
      days: [
        { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E517' },
        { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 107' },
        { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 108' }
      ]
    }
  ]
},

// ESTADISTICA I (1301009)
{
  nombre: 'ESTADISTICA I',
  docentes: [
    {
      id: 51,
      name: 'TABORGA ACHA FIDEL',
      group: '01',
      days: [
        { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 206' },
        { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 206' },
        { day: 'Viernes', start: '11:15', end: '12:45', classRoom: 'E502', auxiliary: true }
      ]
    },
    {
      id: 52,
      name: 'VALDIVIEZO MALDONADO LINO JUAN CARLOS',
      group: '02',
      days: [
        { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 205' },
        { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E521' },
        { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 102', auxiliary: true }
      ]
    },
    {
      id: 53,
      name: 'SUAZNABAR CLAROS FERNANDO ALBERTO',
      group: '03',
      days: [
        { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E541' },
        { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E522' },
        { day: 'Lunes', start: '14:15', end: '15:45', classRoom: 'E 204', auxiliary: true }
      ]
    },
    {
      id: 54,
      name: 'MONTANO QUIROGA CLAUDIA CAROLA',
      group: '20',
      days: [
        { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E506' },
        { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E502' },
        { day: 'Miércoles', start: '15:45', end: '17:15', classRoom: 'E504', auxiliary: true }
      ]
    },
    {
      id: 55,
      name: 'BUSTAMANTE MALDONADO FERNANDO',
      group: '21',
      days: [
        { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 110' },
        { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 102' },
        { day: 'Martes', start: '14:15', end: '15:45', classRoom: 'E523', auxiliary: true }
      ]
    }
  ]
},

// SOCIOLOGIA ORGANIZACIONAL (1301012)
{
  nombre: 'SOCIOLOGIA ORGANIZACIONAL',
  docentes: [
    {
      id: 56,
      name: 'POZO VALLEJOS MARIA ESTHER',
      group: '01',
      days: [
        { day: 'Lunes', start: '14:15', end: '15:45', classRoom: 'E504' },
        { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E504' },
        { day: 'Viernes', start: '14:15', end: '15:45', classRoom: 'E504' }
      ]
    },
    {
      id: 57,
      name: 'ANTEZANA LA FUENTE JORGE CARLOS',
      group: '20',
      days: [
        { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E520' },
        { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E520' },
        { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 104' }
      ]
    },
    {
      id: 58,
      name: 'POZO VALLEJOS MARIA ESTHER',
      group: '21',
      days: [
        { day: 'Lunes', start: '15:45', end: '17:15', classRoom: 'E504' },
        { day: 'Miércoles', start: '14:15', end: '15:45', classRoom: 'E503' },
        { day: 'Viernes', start: '15:45', end: '17:15', classRoom: 'E504' }
      ]
    },
    {
      id: 59,
      name: 'ZAMBRANA TRIVENO JOSE EMILIO',
      group: '22',
      days: [
        { day: 'Martes', start: '14:15', end: '15:45', classRoom: 'E504' },
        { day: 'Miércoles', start: '14:15', end: '15:45', classRoom: 'E504' },
        { day: 'Jueves', start: '14:15', end: '15:45', classRoom: 'E504' }
      ]
    }
  ]
}


      ]
    }
    ,

    {
      nombre:'TERCER SEMESTRE',
      materias:[
        {
          nombre:'SISTEMAS ADMINISTRATIVOS',
          docentes:[
            {
              id:61,
              name:'ROCHA CHAVEZ LILIAN MARCELA',
              group:'01',
              days:[
                {
                  day:'Martes', start:'12:45', end:'14:15', classRoom:'E 202'
                },
                {
                  day:'Miércoles', start:'12:45', end:'14:15', classRoom:'E 303'
                },
                {
                  day:'Jueves', start:'12:45', end:'14:15', classRoom:'E 206'
                }
              ]
            },
            {
              id:62,
              name:'LOPEZ GUMUCIO RICARDO',
              group:'02',
              days:[
                {
                  day:'Lunes', start:'06:45', end:'08:15', classRoom:'E503'
                },
                {
                  day:'Miércoles', start:'09:45', end:'11:15', classRoom:'E 201'
                },
                {
                  day:'Jueves', start:'09:45', end:'11:15', classRoom:'E 201'
                }
              ]
            },
            {
              id:63,
              name:'GUZMAN DURAN GONZALO',
              group:'03',
              days:[
                {
                  day:'Lunes', start:'09:45', end:'11:15', classRoom:'E 207'
                },
                {
                  day:'Martes', start:'09:45', end:'11:15', classRoom:'E PB-4'
                },
                {
                  day:'Miércoles', start:'09:45', end:'11:15', classRoom:'E 205'
                }
              ]
            },
            {
              id:64,
              name:'BADANI LENZ RAFAEL FERNANDO',
              group:'04',
              days:[
                {
                  day:'Lunes', start:'18:45', end:'20:15', classRoom:'E 205'
                },
                {
                  day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E522'
                },
                {
                  day:'Jueves', start:'18:45', end:'20:15', classRoom:'E 205'
                }
              ]
            }
          ]
        },
        {
          nombre:'ECONOMIA DE EMPRESAS II',
          docentes:[
            {
              id:65,
              name:'DECKER MARQUEZ JOSE',
              group:'01',
              days:[
                {
                  day:'Lunes', start:'20:15', end:'21:45', classRoom:'E 102'
                },
                {
                  day:'Martes', start:'18:45', end:'20:15', classRoom:'E520'
                },
                {
                  day:'Viernes', start:'20:15', end:'21:45', classRoom:'E 101', auxiliary:true
                }
              ]
            },
            {
              id:66,
              name:'VILLAZON DEL CARPIO OSMAN ERICK',
              group:'20',
              days:[
                {
                  day:'Lunes', start:'12:45', end:'14:15', classRoom:'E 209', auxiliary:true
                },
                {
                  day:'Jueves', start:'08:15', end:'09:45', classRoom:'E503'
                },
                {
                  day:'Viernes', start:'08:15', end:'09:45', classRoom:'E520'
                }
              ]
            },
            {
              id:67,
              name:'ROJAS VALVERDE GRISELDA ROSIO',
              group:'21',
              days:[
                {
                  day:'Lunes', start:'20:15', end:'21:45', classRoom:'E 208'
                },
                {
                  day:'Miércoles', start:'20:15', end:'21:45', classRoom:'E 209'
                },
                {
                  day:'Viernes', start:'14:15', end:'15:45', classRoom:'E 208', auxiliary:true
                }
              ]
            },
            {
              id:68,
              name:'ROJAS VALVERDE GRISELDA ROSIO',
              group:'22',
              days:[
                {
                  day:'Martes', start:'20:15', end:'21:45', classRoom:'E 110'
                },
                {
                  day:'Jueves', start:'20:15', end:'21:45', classRoom:'E 109'
                },
                {
                  day:'Jueves', start:'18:45', end:'20:15', classRoom:'E 202', auxiliary:true
                }
              ]
            },
            {
              id:69,
              name:'ZUBIETA FLORIDO FREDDY',
              group:'23',
              days:[
                {
                  day:'Lunes', start:'15:45', end:'17:15', classRoom:'E 105'
                },
                {
                  day:'Martes', start:'15:45', end:'17:15', classRoom:'E 106'
                },
                {
                  day:'Miércoles', start:'15:45', end:'17:15', classRoom:'E 105'
                }
              ]
            }
          ]
        },
        {
          nombre:'TEORIA DE COSTOS',
          docentes:[
            {
              id:70,
              name:'LEDEZMA BELTRAN GUSTAVO',
              group:'01',
              days:[
                {
                  day:'Lunes', start:'12:45', end:'14:15', classRoom:'E 107'
                },
                {
                  day:'Miércoles', start:'12:45', end:'14:15', classRoom:'E520'
                },
                {
                  day:'Jueves', start:'12:45', end:'14:15', classRoom:'E 105'
                },
                {
                  day:'Viernes', start:'12:45', end:'14:15', classRoom:'E 105', auxiliary:true
                }
              ]
            },
            {
              id:71,
              name:'CAMACHO PRADO OMAR ALEJANDRO',
              group:'20',
              days:[
                {
                  day:'Lunes', start:'17:15', end:'18:45', classRoom:'E 302'
                },
                {
                  day:'Martes', start:'06:45', end:'08:15', classRoom:'E 201'
                },
                {
                  day:'Jueves', start:'06:45', end:'08:15', classRoom:'E523'
                },
                {
                  day:'Viernes', start:'15:45', end:'17:15', classRoom:'E520', auxiliary:true
                }
              ]
            },
            {
              id:72,
              name:'LEDEZMA BELTRAN GUSTAVO',
              group:'21',
              days:[
                {
                  day:'Lunes', start:'14:15', end:'15:45', classRoom:'E 209', auxiliary:true
                },
                {
                  day:'Lunes', start:'17:15', end:'18:45', classRoom:'E544'
                },
                {
                  day:'Martes', start:'18:45', end:'20:15', classRoom:'E523'
                },
                {
                  day:'Jueves', start:'18:45', end:'20:15', classRoom:'E522'
                }
              ]
            },
            {
              id:73,
              name:'CAMACHO PRADO OMAR ALEJANDRO',
              group:'22',
              days:[
                {
                  day:'Martes', start:'08:15', end:'09:45', classRoom:'E 206'
                },
                {
                  day:'Miércoles', start:'11:15', end:'12:45', classRoom:'E 206'
                },
                {
                  day:'Jueves', start:'09:45', end:'11:15', classRoom:'E 206'
                },
                {
                  day:'Jueves', start:'11:15', end:'12:45', classRoom:'E 206', auxiliary:true
                }
              ]
            },
            {
              id:74,
              name:'MORALES GUZMAN CESAR',
              group:'23',
              days:[
                {
                  day:'Miércoles', start:'12:45', end:'14:15', classRoom:'E 205'
                },
                {
                  day:'Jueves', start:'12:45', end:'14:15', classRoom:'E 205'
                },
                {
                  day:'Viernes', start:'12:45', end:'14:15', classRoom:'E 205'
                }
              ]
            }
          ]
        },
        {
          nombre:'ESTADISTICA II',
          docentes:[
            {
              id:75,
              name:'MANSILLA HEREDIA ALFREDO EDUARDO',
              group:'01',
              days:[
                {
                  day:'Jueves', start:'08:15', end:'09:45', classRoom:'E 101'
                },
                {
                  day:'Sábado', start:'11:15', end:'12:45', classRoom:'E 208'
                },
                {
                  day:'Jueves', start:'12:45', end:'14:15', classRoom:'E520', auxiliary:true
                }
              ]
            },
            {
              id:76,
              name:'MONTANO MONTANO JOSE',
              group:'02',
              days:[
                {
                  day:'Martes', start:'15:45', end:'17:15', classRoom:'E 105', auxiliary:true
                },
                {
                  day:'Miércoles', start:'15:45', end:'17:15', classRoom:'E545'
                },
                {
                  day:'Viernes', start:'15:45', end:'17:15', classRoom:'E545'
                }
              ]
            },
            {
              id:77,
              name:'URQUIDI BELLIDO SONIA',
              group:'07',
              days:[
                {
                  day:'Martes', start:'11:15', end:'12:45', classRoom:'E PB-4'
                },
                {
                  day:'Miércoles', start:'09:45', end:'11:15', classRoom:'E 401'
                },
                {
                  day:'Jueves', start:'09:45', end:'11:15', classRoom:'E PB-1'
                }
              ]
            },
            {
              id:78,
              name:'JALDIN QUIROZ RENE',
              group:'20',
              days:[
                {
                  day:'Martes', start:'06:45', end:'08:15', classRoom:'E522'
                },
                {
                  day:'Jueves', start:'06:45', end:'08:15', classRoom:'E522'
                },
                {
                  day:'Viernes', start:'12:45', end:'14:15', classRoom:'E503', auxiliary:true
                }
              ]
            },
            {
              id:79,
              name:'CONDORI ARIAS HERMOGENES',
              group:'21',
              days:[
                {
                  day:'Miércoles', start:'17:15', end:'18:45', classRoom:'E504'
                },
                {
                  day:'Viernes', start:'17:15', end:'18:45', classRoom:'E521'
                },
                {
                  day:'Jueves', start:'17:15', end:'18:45', classRoom:'E 202', auxiliary:true
                }
              ]
            },
            {
              id:80,
              name:'JALDIN QUIROZ RENE',
              group:'22',
              days:[
                {
                  day:'Martes', start:'18:45', end:'20:15', classRoom:'E PB-2'
                },
                {
                  day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E 107'
                },
                {
                  day:'Jueves', start:'17:15', end:'18:45', classRoom:'E 110', auxiliary:true
                }
              ]
            },
            {
              id:81,
              name:'URQUIDI BELLIDO SONIA',
              group:'27',
              days:[
                {
                  day:'Martes', start:'06:45', end:'08:15', classRoom:'E524'
                },
                {
                  day:'Jueves', start:'06:45', end:'08:15', classRoom:'E PB-1'
                },
                {
                  day:'Viernes', start:'06:45', end:'08:15', classRoom:'E 406'
                }
              ]
            }
          ]
        },
        {
          nombre:'MACROECONOMIA',
          docentes:[
            {
              id:82,
              name:'TORRES ARANDIA WILLIAM',
              group:'01',
              days:[
                {
                  day:'Martes', start:'12:45', end:'14:15', classRoom:'E544'
                },
                {
                  day:'Miércoles', start:'12:45', end:'14:15', classRoom:'E521'
                },
                {
                  day:'Jueves', start:'12:45', end:'14:15', classRoom:'E545'
                }
              ]
            },
            {
              id:83,
              name:'ROMERO PADILLA CESAR',
              group:'02',
              days:[
                {
                  day:'Lunes', start:'17:15', end:'18:45', classRoom:'E 202'
                },
                {
                  day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E502'
                },
                {
                  day:'Jueves', start:'18:45', end:'20:15', classRoom:'E 203'
                }
              ]
            },
            {
              id:84,
              name:'VILLAZON DEL CARPIO OSMAN ERICK',
              group:'20',
              days:[
                {
                  day:'Miércoles', start:'11:15', end:'12:45', classRoom:'E546'
                },
                {
                  day:'Jueves', start:'11:15', end:'12:45', classRoom:'E546'
                },
                {
                  day:'Viernes', start:'11:15', end:'12:45', classRoom:'E544'
                }
              ]
            },
            {
              id:85,
              name:'CONDORI ARIAS HERMOGENES',
              group:'21',
              days:[
                {
                  day:'Martes', start:'17:15', end:'18:45', classRoom:'E502'
                },
                {
                  day:'Jueves', start:'17:15', end:'18:45', classRoom:'E 206'
                },
                {
                  day:'Viernes', start:'18:45', end:'20:15', classRoom:'E 206'
                }
              ]
            },
            {
              id:86,
              name:'POR DESIGNAR DOCENTE',
              group:'22',
              days:[
                {
                  day:'Lunes', start:'09:45', end:'11:15', classRoom:'E504'
                },
                {
                  day:'Miércoles', start:'08:15', end:'09:45', classRoom:'E 204'
                },
                {
                  day:'Viernes', start:'09:45', end:'11:15', classRoom:'E 201'
                }
              ]
            },
            {
              id:87,
              name:'ESCALERA MELGAR ALBERTO',
              group:'23',
              days:[
                {
                  day:'Martes', start:'18:45', end:'20:15', classRoom:'E 102'
                },
                {
                  day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E 204'
                },
                {
                  day:'Jueves', start:'18:45', end:'20:15', classRoom:'E PB-1'
                }
              ]
            },
            {
              id:88,
              name:'ZUBIETA FLORIDO FREDDY',
              group:'27',
              days:[
                {
                  day:'Lunes', start:'18:45', end:'20:15', classRoom:'E 309'
                },
                {
                  day:'Martes', start:'17:15', end:'18:45', classRoom:'E 205'
                },
                {
                  day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E501'
                }
              ]
            }
          ]
        }]
      },{
        nombre:'CUARTO SEMESTRE',
        materias:[
        {
          nombre:'PROCEDIMIENTOS ADMINISTRATIVOS',
          docentes:[
            {
              id:89,
              name:'LOPEZ GUMUCIO RICARDO',
              group:'01',
              days:[
                {
                  day:'Lunes', start:'09:45', end:'11:15', classRoom:'E524'
                },
                {
                  day:'Martes', start:'09:45', end:'11:15', classRoom:'E504'
                },
                {
                  day:'Miércoles', start:'08:15', end:'09:45', classRoom:'E 202'
                }
              ]
            },
            {
              id:90,
              name:'GUZMAN DURAN GONZALO',
              group:'02',
              days:[
                {
                  day:'Lunes', start:'12:45', end:'14:15', classRoom:'E502'
                },
                {
                  day:'Martes', start:'12:45', end:'14:15', classRoom:'E521'
                },
                {
                  day:'Miércoles', start:'08:15', end:'09:45', classRoom:'E 208'
                }
              ]
            },
            {
              id:91,
              name:'CARDENAS SARAVIA TITO IVAN',
              group:'21',
              days:[
                {
                  day:'Lunes', start:'18:45', end:'20:15', classRoom:'E 304'
                },
                {
                  day:'Martes', start:'18:45', end:'20:15', classRoom:'E 304'
                },
                {
                  day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E 304'
                }
              ]
            }
          ]
        },
        {
          nombre:'PRESUPUESTOS',
          docentes:[
            {
              id:92,
              name:'MARTINEZ ALPIRI ANAHI MONICA',
              group:'01',
              days:[
                {
                  day:'Martes', start:'08:15', end:'09:45', classRoom:'E544'
                },
                {
                  day:'Miércoles', start:'09:45', end:'11:15', classRoom:'E544'
                },
                {
                  day:'Jueves', start:'08:15', end:'09:45', classRoom:'E541'
                }
              ]
            },
            {
              id:93,
              name:'CACERES MONTERO JAIME',
              group:'02',
              days:[
                {
                  day:'Lunes', start:'08:15', end:'09:45', classRoom:'E541'
                },
                {
                  day:'Martes', start:'08:15', end:'09:45', classRoom:'E508'
                },
                {
                  day:'Miércoles', start:'08:15', end:'09:45', classRoom:'E541'
                }
              ]
            },
            {
              id:94,
              name:'TORRICO LARA ALEX',
              group:'20',
              days:[
                {
                  day:'Lunes', start:'06:45', end:'08:15', classRoom:'E545'
                },
                {
                  day:'Miércoles', start:'06:45', end:'08:15', classRoom:'E 102'
                },
                {
                  day:'Viernes', start:'06:45', end:'08:15', classRoom:'E 109'
                }
              ]
            },
            {
              id:95,
              name:'CACERES MONTERO JAIME',
              group:'21',
              days:[
                {
                  day:'Lunes', start:'18:45', end:'20:15', classRoom:'E 206'
                },
                {
                  day:'Martes', start:'18:45', end:'20:15', classRoom:'E 204'
                },
                {
                  day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E PB-4'
                }
              ]
            }
          ]
        },
        {
          nombre:'INFORMATICA I',
          docentes:[
            {
              id:96,
              name:'MONTANO QUIROGA VICTOR HUGO', group:'01', days:[
                {
                  day:'Lunes', start:'08:15', end:'09:45', classRoom:'E 401'
                },
                {
                  day:'Martes', start:'08:15', end:'09:45', classRoom:'E 406'
                },
                {
                  day:'Miércoles', start:'08:15', end:'09:45', classRoom:'E 406'
                }
              ]
            },
            {
              id:97,
              name:'VELARDE POMA JUAN CARLOS', group:'02', days:[
                {
                  day:'Martes', start:'06:45', end:'08:15', classRoom:'E548'
                },
                {
                  day:'Miércoles', start:'06:45', end:'08:15', classRoom:'E548'
                },
                {
                  day:'Jueves', start:'06:45', end:'08:15', classRoom:'E548'
                }
              ]
            },
            {
              id:98,
              name:'SANDOVAL ARNEZ JUAN ALBERTO', group:'20', days:[
                {
                  day:'Lunes', start:'20:15', end:'21:45', classRoom:'E547'
                },
                {
                  day:'Jueves', start:'06:45', end:'08:15', classRoom:'E547'
                },
                {
                  day:'Sábado', start:'08:15', end:'09:45', classRoom:'E 401'
                }
              ]
            },
            {
              id:99,
              name:'TORRICO OCAMPO ENRIQUE', group:'21', days:[
                {
                  day:'Lunes', start:'12:45', end:'14:15', classRoom:'E 402'
                },
                {
                  day:'Miércoles', start:'12:45', end:'14:15', classRoom:'E 402'
                },
                {
                  day:'Jueves', start:'12:45', end:'14:15', classRoom:'E 402'
                }
              ]
            },
            {
              id:100,
              name:'CAMACHO DEL CASTILLO INDIRA', group:'22', days:[
                {
                  day:'Martes', start:'11:15', end:'12:45', classRoom:'E 406'
                },
                {
                  day:'Miércoles', start:'11:15', end:'12:45', classRoom:'E 401'
                },
                {
                  day:'Jueves', start:'11:15', end:'12:45', classRoom:'E 406'
                }
              ]
            },
            {
              id:101,
              name:'JORDAN SANCHEZ JUAN CARLOS', group:'23', days:[
                {
                  day:'Lunes', start:'20:15', end:'21:45', classRoom:'E 407'
                },
                {
                  day:'Jueves', start:'20:15', end:'21:45', classRoom:'E 402'
                },
                {
                  day:'Sábado', start:'08:15', end:'09:45', classRoom:'E 406'
                }
              ]
            }
          ]
        },
        {
          nombre:'COSTOS PARA LA TOMA DE DECISIONES',
          docentes:[
            {
              id:102,
              name:'RIVERA MICHEL HENRY', group:'01', days:[
                {
                  day:'Miércoles', start:'12:45', end:'14:15', classRoom:'E PB-2'
                },
                {
                  day:'Jueves', start:'12:45', end:'14:15', classRoom:'E PB-2'
                },
                {
                  day:'Viernes', start:'15:45', end:'17:15', classRoom:'E 104', auxiliary:true
                }
              ]
            },
            {
              id:103,
              name:'CHOQUEPALPA RIOZ ORLANDO DANIEL', group:'02', days:[
                {
                  day:'Jueves', start:'08:15', end:'09:45', classRoom:'E504'
                },
                {
                  day:'Viernes', start:'08:15', end:'09:45', classRoom:'E 109'
                },
                {
                  day:'Jueves', start:'14:15', end:'15:45', classRoom:'E PB-4', auxiliary:true
                }
              ]
            },
            {
              id:104,
              name:'RIVERA MICHEL HENRY', group:'03', days:[
                {
                  day:'Lunes', start:'15:45', end:'17:15', classRoom:'E503', auxiliary:true
                },
                {
                  day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E544'
                },
                {
                  day:'Jueves', start:'18:45', end:'20:15', classRoom:'E516'
                }
              ]
            },
            {
              id:105,
              name:'RIVERA MICHEL HENRY', group:'20', days:[
                {
                  day:'Martes', start:'17:15', end:'18:45', classRoom:'E 408'
                },
                {
                  day:'Miércoles', start:'17:15', end:'18:45', classRoom:'E544'
                },
                {
                  day:'Jueves', start:'12:45', end:'14:15', classRoom:'E544', auxiliary:true
                }
              ]
            },
            {
              id:106,
              name:'CHOQUEPALPA RIOZ ORLANDO DANIEL', group:'02', days:[
                {
                  day:'Jueves', start:'06:45', end:'08:15', classRoom:'E109'
                },
                {
                  day:'Viernes', start:'06:45', end:'08:15', classRoom:'E 502'
                },
                {
                  day:'Viernes', start:'17:15', end:'18:45', classRoom:'E 203', auxiliary:true
                }
              ]
            },
            {
              id:107,
              name:'RIVERA MICHEL HENRY', group:'22', days:[
                {
                  day:'Martes', start:'18:45', end:'20:15', classRoom:'E530'
                },
                {
                  day:'Jueves', start:'17:15', end:'18:45', classRoom:'E546'
                },
                {
                  day:'Sábado', start:'11:15', end:'12:45', classRoom:'E 205', auxiliary:true
                }
              ]
            }
          ]
        },
        {
          nombre:'ANALISIS DE ESTADOS FINANCIEROS',
          docentes:[
            {
              id:108,
              name:'PRADEL SERRANO RUTH ISABEL', group:'01', days:[
                {
                  day:'Lunes', start:'18:45', end:'20:15', classRoom:'E520'
                },
                {
                  day:'Miércoles', start:'06:45', end:'08:15', classRoom:'E521'
                },
                {
                  day:'Viernes', start:'06:45', end:'08:15', classRoom:'E521'
                }
              ]
            },
            {
              id:109,
              name:'COCA GONZALES ALBERTO', group:'02', days:[
                {
                  day:'Martes', start:'06:45', end:'08:15', classRoom:'E 209'
                },
                {
                  day:'Miércoles', start:'06:45', end:'08:15', classRoom:'E523'
                },
                {
                  day:'Jueves', start:'06:45', end:'08:15', classRoom:'E 101'
                }
              ]
            },
            {
              id:110,
              name:'MONTAÑO VARGAS OSCAR', group:'03', days:[
                {
                  day:'Martes', start:'18:45', end:'20:15', classRoom:'E 109'
                },
                {
                  day:'Miércoles', start:'06:45', end:'08:15', classRoom:'E 404'
                },
                {
                  day:'Jueves', start:'18:45', end:'20:15', classRoom:'E 204'
                }
              ]
            },
            {
              id:111,
              name:'LOPEZ LOPEZ JAIME', group:'20', days:[
                {
                  day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E503'
                },
                {
                  day:'Viernes', start:'18:45', end:'20:15', classRoom:'E521'
                },
                {
                  day:'Sábado', start:'09:45', end:'11:15', classRoom:'E522'
                }
              ]
            },
            {
              id:112,
              name:'MONTAÑO VARGAS OSCAR', group:'21', days:[
                {
                  day:'Martes', start:'06:45', end:'08:15', classRoom:'E520'
                },
                {
                  day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E 206'
                },
                {
                  day:'Jueves', start:'06:45', end:'08:15', classRoom:'E520'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      nombre: 'QUINTO SEMESTRE',
      materias: [
        // INGLES I (1301010)
{
  nombre: 'INGLES I',
  docentes: [
    {
      id: 112,
      name: 'PARDO FERNANDEZ JULIO FRANCO',
      group: '08',
      days: [
        { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 108' },
        { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 207' },
        { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E PB-4' }
      ]
    },
    {
      id: 113,
      name: 'VALLEJO ECHEVERRIA JULIAN',
      group: 'A1',
      days: [
        { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 306' },
        { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 303' },
        { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E517' }
      ]
    }
  ]
},

// METODOLOGIA DE INVESTIGACION II (1301023)
{
  nombre: 'METODOLOGIA DE INVESTIGACION II',
  docentes: [
    {
      id: 114,
      name: 'VALLEJO BELTRAN ENZO MAURICIO',
      group: '01',
      days: [
        { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E506' },
        { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 209' },
        { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E501' }
      ]
    },
    {
      id: 115,
      name: 'SEVILLA CESPEDES CLAUDIA',
      group: '20',
      days: [
        { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 303' },
        { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 103' },
        { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 202' }
      ]
    },
    {
      id: 116,
      name: 'ZAMBRANA TRIVENO JOSE EMILIO',
      group: '21',
      days: [
        { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E504' },
        { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E518' },
        { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E504' }
      ]
    },
    {
      id: 117,
      name: 'MANZANO ANZALDO NELSON TITO',
      group: '22',
      days: [
        { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 108' },
        { day: 'Martes', start: '15:45', end: '17:15', classRoom: 'E 108' },
        { day: 'Jueves', start: '15:45', end: '17:15', classRoom: 'E 107' }
      ]
    }
  ]
},

// INFORMATICA II (1301024)
{
  nombre: 'INFORMATICA II',
  docentes: [
    {
      id: 118,
      name: 'GUEVARA ESPINOZA JORGE',
      group: '01',
      days: [
        { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 406' },
        { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 402' },
        { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 406' }
      ]
    },
    {
      id: 119,
      name: 'RODRIGUEZ MARTINEZ EDUARDO',
      group: '02',
      days: [
        { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 401' },
        { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 401' },
        { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 402' }
      ]
    },
    {
      id: 120,
      name: 'COVARRUBIAS VARGAS CAUJMAN',
      group: '03',
      days: [
        { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 401' },
        { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 401' },
        { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E 401' }
      ]
    },
    {
      id: 121,
      name: 'AVILA MAMANI HECTOR JOSE',
      group: '20',
      days: [
        { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 401' },
        { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 407' },
        { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E550' }
      ]
    }
  ]
},

// LEGISLACION LABORAL (1301025)
{
  nombre: 'LEGISLACION LABORAL',
  docentes: [
    {
      id: 122,
      name: 'MUÑOZ CRESPO ALBERTO DANIEL',
      group: '01',
      days: [
        { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 202' },
        { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 206' },
        { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E524' }
      ]
    },
    {
      id: 123,
      name: 'MUÑOZ CRESPO ALBERTO DANIEL',
      group: '02',
      days: [
        { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 102' },
        { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 109' },
        { day: 'Viernes', start: '11:15', end: '12:45', classRoom: 'E 101' }
      ]
    },
    {
      id: 124,
      name: 'AMURRIO MARQUEZ MARY',
      group: '20',
      days: [
        { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E502' },
        { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 204' },
        { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 201' }
      ]
    }
  ]
},

// PSICOLOGIA ORGANIZACIONAL (1301026)
{
  nombre: 'PSICOLOGIA ORGANIZACIONAL',
  docentes: [
    {
      id: 125,
      name: 'PARDO FERNANDEZ JULIO FRANCO',
      group: '20',
      days: [
        { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 109' },
        { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E PB-4' },
        { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 302' }
      ]
    },
    {
      id: 126,
      name: 'VILDOZO ZAMORANO WALTER FERNANDO',
      group: '21',
      days: [
        { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 104' },
        { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 102' },
        { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E503' }
      ]
    },
    {
      id: 127,
      name: 'VILLAZON ARANDIA RICARDO IVAN',
      group: '22',
      days: [
        { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E544' },
        { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E544' },
        { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E541' }
      ]
    },
    {
      id: 128,
      name: 'RODRIGUEZ HURTADO JOSE LUIS',
      group: '23',
      days: [
        { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 408' },
        { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 408' },
        { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 404' }
      ]
    }
  ]
},

// ADMINISTRACION PUBLICA (1301027)
{
  nombre: 'ADMINISTRACION PUBLICA',
  docentes: [
    {
      id: 129,
      name: 'ESPADA FLORES JUAN RAMIRO',
      group: '01',
      days: [
        { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E523' },
        { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E524' },
        { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E520' }
      ]
    },
    {
      id: 130,
      name: 'RODRIGUEZ MARTINEZ EDUARDO',
      group: '02',
      days: [
        { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E524' },
        { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E521' },
        { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E504' }
      ]
    },
    {
      id: 131,
      name: 'POR DESIGNAR DOCENTE',
      group: '20',
      days: [
        { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 209' },
        { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E524' },
        { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 110' }
      ]
    },
    {
      id: 132,
      name: 'PANTOJA ROCHA YURI NEWTON',
      group: '21',
      days: [
        { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 207' },
        { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 207' },
        { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 207' }
      ]
    },
    {
      id: 133,
      name: 'AYALA MENDOZA AMILCAR',
      group: '22',
      days: [
        { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 302' },
        { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 104' },
        { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 102' }
      ]
    }
  ]
}


      ]
    }
    ,

    {
      nombre: 'SEXTO SEMESTRE',
      materias: [
        // INGLES II (1301011)
{
  nombre: 'INGLES II',
  docentes: [
    {
      id: 134,
      name: 'PARDO FERNANDEZ JULIO FRANCO',
      group: '07',
      days: [
        { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 209' },
        { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 209' },
        { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 207' }
      ]
    },
    {
      id: 135,
      name: 'VALLEJO ECHEVERRIA JULIAN',
      group: 'B1',
      days: [
        { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 109' },
        { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 304' },
        { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 103' }
      ]
    }
  ]
},

// PRODUCCION I (1301028)
{
  nombre: 'PRODUCCION I',
  docentes: [
    {
      id: 136,
      name: 'CALLA VILLEGAS EDWIN',
      group: '01',
      days: [
        { day: 'Lunes', start: '15:45', end: '17:15', classRoom: 'E 106' },
        { day: 'Jueves', start: '15:45', end: '17:15', classRoom: 'E 106' }
      ]
    },
    {
      id: 137,
      name: 'CALLA VILLEGAS EDWIN',
      group: '02',
      days: [
        { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E506' },
        { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 109' }
      ]
    },
    {
      id: 138,
      name: 'ZAPATA BARRIENTOS JOSE RAMIRO',
      group: '03',
      days: [
        { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E502' },
        { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E511' }
      ]
    },
    {
      id: 139,
      name: 'ZAPATA BARRIENTOS JOSE RAMIRO',
      group: '20',
      days: [
        { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 103' },
        { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E502' }
      ]
    }
  ]
},

// FINANZAS I (1301029)
{
  nombre: 'FINANZAS I',
  docentes: [
    {
      id: 140,
      name: 'LEYTON GUTIERREZ SONIA',
      group: '01',
      days: [
        { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E523' },
        { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E524' },
        { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 304' }
      ]
    },
    {
      id: 141,
      name: 'AGREDA MONTANO GUIDO',
      group: '20',
      days: [
        { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E521' },
        { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E521' },
        { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E523' }
      ]
    },
    {
      id: 142,
      name: 'SUAZNABAR CLAROS FERNANDO ALBERTO',
      group: '21',
      days: [
        { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E545' },
        { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E545' },
        { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E520' }
      ]
    }
  ]
},

// INVESTIGACION OPERATIVA (1301030)
{
  nombre: 'INVESTIGACION OPERATIVA',
  docentes: [
    {
      id: 143,
      name: 'VILLAGOMEZ VILLARROEL CESAR',
      group: '01',
      days: [
        { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E542' },
        { day: 'Viernes', start: '17:15', end: '18:45', classRoom: 'E544' },
        { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E544' }
      ]
    },
    {
      id: 144,
      name: 'VALDEZ ESCOBAR JORGE',
      group: '20',
      days: [
        { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 404' },
        { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E522' },
        { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E522' }
      ]
    },
    {
      id: 145,
      name: 'VALDEZ ESCOBAR JORGE',
      group: '21',
      days: [
        { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 404' },
        { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 404' },
        { day: 'Viernes', start: '11:15', end: '12:45', classRoom: 'E 404' }
      ]
    },
    {
      id: 146,
      name: 'VILLAGOMEZ VILLARROEL CESAR',
      group: '22',
      days: [
        { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E544' },
        { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E546' },
        { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E544' }
      ]
    }
  ]
},

// MERCADOTECNIA I (1301031)
{
  nombre: 'MERCADOTECNIA I',
  docentes: [
    {
      id: 147,
      name: 'CALLA VILLEGAS EDWIN',
      group: '01',
      days: [
        { day: 'Martes', start: '15:45', end: '17:15', classRoom: 'E 109' },
        { day: 'Miércoles', start: '15:45', end: '17:15', classRoom: 'E 109' },
        { day: 'Viernes', start: '15:45', end: '17:15', classRoom: 'E 201' }
      ]
    },
    {
      id: 148,
      name: 'ZEGARRA SALDANA PABLO',
      group: '20',
      days: [
        { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 205' },
        { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 103' },
        { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 205' }
      ]
    },
    {
      id: 149,
      name: 'NAVIA QUIROGA GUSTAVO',
      group: '21',
      days: [
        { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E PB-4' },
        { day: 'Viernes', start: '17:15', end: '18:45', classRoom: 'E502' },
        { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E503' }
      ]
    }
  ]
},

// PERSONAL I (1301032)
{
  nombre: 'PERSONAL I',
  docentes: [
    {
      id: 150,
      name: 'BADANI LENZ RAFAEL FERNANDO',
      group: '01',
      days: [
        { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E503' },
        { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 203' },
        { day: 'Viernes', start: '11:15', end: '12:45', classRoom: 'E 201', auxiliary: true }
      ]
    },
    {
      id: 151,
      name: 'GUZMAN BROCKMANN FELIPE HANS WIGBERTO',
      group: '02',
      days: [
        { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E504' },
        { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E PB-4' },
        { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E PB-4' }
      ]
    },
    {
      id: 152,
      name: 'BADANI LENZ RAFAEL FERNANDO',
      group: '20',
      days: [
        { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E PB-4' },
        { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E523' },
        { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 202', auxiliary: true }
      ]
    },
    {
      id: 153,
      name: 'CRESPO FLORES RENE CARLOS',
      group: '21',
      days: [
        { day: 'Lunes', start: '14:15', end: '15:45', classRoom: 'E520' },
        { day: 'Miércoles', start: '15:45', end: '17:15', classRoom: 'E 201' },
        { day: 'Viernes', start: '15:45', end: '17:15', classRoom: 'E521' }
      ]
    }
  ]
}


      ]
    }
    ,

    {
      nombre: 'SEPTIMO SEMESTRE',
      materias: [
        // PRODUCCION II (1301033)
{
  nombre: 'PRODUCCION II',
  docentes: [
    {
      id: 154,
      name: 'ZAPATA BARRIENTOS JOSE RAMIRO',
      group: '01',
      days: [
        { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E502' },
        { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E502' },
        { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E502' }
      ]
    },
    {
      id: 155,
      name: 'VALDIVIEZO MALDONADO LINO JUAN CARLOS',
      group: '02',
      days: [
        { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 207' },
        { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 204' },
        { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 207' }
      ]
    },
    {
      id: 156,
      name: 'CALLA VILLEGAS EDWIN',
      group: '20',
      days: [
        { day: 'Martes', start: '14:15', end: '15:45', classRoom: 'E 109' },
        { day: 'Jueves', start: '14:15', end: '15:45', classRoom: 'E 109' },
        { day: 'Viernes', start: '14:15', end: '15:45', classRoom: 'E 109' }
      ]
    }
  ]
},

// MERCADOTECNIA II (1301034)
{
  nombre: 'MERCADOTECNIA II',
  docentes: [
    {
      id: 157,
      name: 'NAVIA QUIROGA GUSTAVO',
      group: '02',
      days: [
        { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E502' },
        { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E504' },
        { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E502' }
      ]
    },
    {
      id: 158,
      name: 'AYMA SOTO FELIX MARCELO',
      group: '20',
      days: [
        { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 301' },
        { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E504' },
        { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 302' }
      ]
    }
  ]
},

// GERENCIA OPERATIVA (1301035)
{
  nombre: 'GERENCIA OPERATIVA',
  docentes: [
    {
      id: 159,
      name: 'VARGAS ANTEZANA ADEMAR MARCELO',
      group: '01',
      days: [
        { day: 'Martes', start: '15:45', end: '17:15', classRoom: 'E PB-4' },
        { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E522' },
        { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E PB-1' }
      ]
    },
    {
      id: 160,
      name: 'MOSCOSO FORONDA DAVID',
      group: '20',
      days: [
        { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 209' },
        { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 209' },
        { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 209' }
      ]
    },
    {
      id: 161,
      name: 'MOSCOSO FORONDA DAVID',
      group: '21',
      days: [
        { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 307' },
        { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 307' },
        { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 307' }
      ]
    },
    {
      id: 162,
      name: 'MOSCOSO FORONDA DAVID',
      group: '22',
      days: [
        { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 309' },
        { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 302' },
        { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 304' }
      ]
    }
  ]
},

// MERCADOTECNIA III (1301036)
{
  nombre: 'MERCADOTECNIA III',
  docentes: [
    {
      id: 163,
      name: 'ZEGARRA SALDANA PABLO',
      group: '20',
      days: [
        { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E521' },
        { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 203' },
        { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 106' }
      ]
    },
    {
      id: 164,
      name: 'ZAPATA BARRIENTOS JOSE RAMIRO',
      group: '21',
      days: [
        { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 307' },
        { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 203' },
        { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E525' }
      ]
    }
  ]
},

// MERCADOTECNIA V (1301038)
{
  nombre: 'MERCADOTECNIA V',
  docentes: [
    {
      id: 165,
      name: 'ZAPATA BARRIENTOS JOSE RAMIRO',
      group: '01',
      days: [
        { day: 'Lunes', start: '14:15', end: '15:45', classRoom: 'E502' },
        { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E503' },
        { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 101' }
      ]
    }
  ]
},

// FINANZAS II (1301039)
{
  nombre: 'FINANZAS II',
  docentes: [
    {
      id: 166,
      name: 'AGREDA MONTANO GUIDO',
      group: '20',
      days: [
        { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E521' },
        { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E521' },
        { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E523' }
      ]
    }
  ]
},

// ADMINISTRACION DE COOPERATIVAS (1301040)
{
  nombre: 'ADMINISTRACION DE COOPERATIVAS',
  docentes: [
    {
      id: 167,
      name: 'AGREDA MONTANO GUIDO',
      group: '20',
      days: [
        { day: 'Lunes', start: '15:45', end: '17:15', classRoom: 'E521' },
        { day: 'Martes', start: '15:45', end: '17:15', classRoom: 'E522' },
        { day: 'Miércoles', start: '15:45', end: '17:15', classRoom: 'E523' }
      ]
    }
  ]
},

// PERSONAL II (1301041)
{
  nombre: 'PERSONAL II',
  docentes: [
    {
      id: 168,
      name: 'MENDOZA ARAOZ JAMIL MARCELO',
      group: '01',
      days: [
        { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E501' },
        { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 102' },
        { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E502' }
      ]
    },
    {
      id: 169,
      name: 'RAMIREZ MOLINA GONZALO',
      group: '20',
      days: [
        { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 206' },
        { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E501' },
        { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 207' }
      ]
    },
    {
      id: 170,
      name: 'MENDOZA ARAOZ JAMIL MARCELO',
      group: '21',
      days: [
        { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 110' },
        { day: 'Viernes', start: '17:15', end: '18:45', classRoom: 'E 304' },
        { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 102' }
      ]
    }
  ]
},

// PERSONAL III (1301042)
{
  nombre: 'PERSONAL III',
  docentes: [
    {
      id: 171,
      name: 'VALDEZ ZEGARRA RAFAEL A.',
      group: '01',
      days: [
        { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 202' },
        { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E502' },
        { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E522' }
      ]
    }
  ]
}
      ]
    }
    ,

    {
      nombre: 'OCTAVO SEMESTRE',
      materias: [
        // POLITICA EMPRESARIAL (1301043)
{
  nombre: 'POLITICA EMPRESARIAL',
  docentes: [
    {
      id: 172,
      name: 'CAMACHO GUZMAN FRANCO ARTURO',
      group: '01',
      days: [
        { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 309' },
        { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 309' },
        { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 309' }
      ]
    },
    {
      id: 173,
      name: 'GUTIERREZ OVANDO ISELA',
      group: '02',
      days: [
        { day: 'Martes', start: '15:45', end: '17:15', classRoom: 'E542' },
        { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 209' },
        { day: 'Jueves', start: '15:45', end: '17:15', classRoom: 'E 306' }
      ]
    },
    {
      id: 174,
      name: 'RODRIGUEZ HURTADO JOSE LUIS',
      group: '20',
      days: [
        { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 204' },
        { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 305' },
        { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 204' }
      ]
    }
  ]
},

// PREPARACION Y EVALUACION DE PROYECTOS (1301044)
{
  nombre: 'PREPARACION Y EVALUACION DE PROYECTOS',
  docentes: [
    {
      id: 175,
      name: 'OLIVERA TAPIA JUAN CARLOS',
      group: '01',
      days: [
        { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 204' },
        { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E513' },
        { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E503' }
      ]
    },
    {
      id: 176,
      name: 'CHAVEZ MARCELA MABEL',
      group: '20',
      days: [
        { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 203' },
        { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 207' },
        { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 203' }
      ]
    },
    {
      id: 177,
      name: 'CHAVEZ MARCELA MABEL',
      group: '21',
      days: [
        { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 203' },
        { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 202' },
        { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 202' }
      ]
    }
  ]
},

// TALLER I (1301045)
{
  nombre: 'TALLER I',
  docentes: [
    {
      id: 178,
      name: 'VILDOZO ZAMORANO WALTER FERNANDO',
      group: '01',
      days: [
        { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E511' },
        { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 209' },
        { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E512' }
      ]
    },
    {
      id: 179,
      name: 'RODRIGUEZ HURTADO JOSE LUIS',
      group: '03',
      days: [
        { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 101' },
        { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 309' },
        { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E 101' }
      ]
    },
    {
      id: 180,
      name: 'LOPEZ GUMUCIO RICARDO',
      group: '22',
      days: [
        { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'ADM1' },
        { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'ADM1' },
        { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'ADM1' }
      ]
    },
    {
      id: 181,
      name: 'VALDIVIEZO MALDONADO LINO JUAN CARLOS',
      group: '23',
      days: [
        { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'ADM1' },
        { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'ADM1' },
        { day: 'Viernes', start: '11:15', end: '12:45', classRoom: 'ADM1' }
      ]
    }
  ]
},

// MERCADOTECNIA VI (1301046)
{
  nombre: 'MERCADOTECNIA VI',
  docentes: [
    {
      id: 182,
      name: 'LOZADA TORRICO RUDY REMBERTO',
      group: '01',
      days: [
        { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E501' },
        { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 303' },
        { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 201' }
      ]
    },
    {
      id: 183,
      name: 'MEDRANO CLAURE DANNY OSCAR',
      group: '02',
      days: [
        { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 203' },
        { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 203' },
        { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 208' }
      ]
    }
  ]
},

// MERCADOTECNIA VII (1301047)
{
  nombre: 'MERCADOTECNIA VII',
  docentes: [
    {
      id: 184,
      name: 'MENDOZA ARAOZ JAMIL MARCELO',
      group: '01',
      days: [
        { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 101' },
        { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 103' },
        { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 103' }
      ]
    }
  ]
},

// FINANZAS IV (1301048)
{
  nombre: 'FINANZAS IV',
  docentes: [
    {
      id: 185,
      name: 'VALLEJO RUIZ JAVIER',
      group: '01',
      days: [
        { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E503' },
        { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 110' },
        { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 207' }
      ]
    },
    {
      id: 186,
      name: 'RODRIGUEZ MARTINEZ EDUARDO',
      group: '20',
      days: [
        { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 203' },
        { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E523' },
        { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E522' }
      ]
    }
  ]
},

// FINANZAS V (1301049)
{
  nombre: 'FINANZAS V',
  docentes: [
    {
      id: 187,
      name: 'RODRIGUEZ MARTINEZ EDUARDO',
      group: '01',
      days: [
        { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E522' },
        { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E524' },
        { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E521' }
      ]
    }
  ]
},

// PERSONAL IV (1301050)
{
  nombre: 'PERSONAL IV',
  docentes: [
    {
      id: 188,
      name: 'GUZMAN BROCKMANN FELIPE HANS WIGBERTO',
      group: '20',
      days: [
        { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 202' },
        { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E504' },
        { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 205' }
      ]
    }
  ]
},

// PERSONAL V (1301051)
{
  nombre: 'PERSONAL V',
  docentes: [
    {
      id: 189,
      name: 'RAMIREZ MOLINA GONZALO',
      group: '20',
      days: [
        { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 109' },
        { day: 'Martes', start: '15:45', end: '17:15', classRoom: 'E 208' },
        { day: 'Miércoles', start: '15:45', end: '17:15', classRoom: 'E 208' }
      ]
    }
  ]
}
      ]
    }
    ,

    {
      nombre: 'NOVENO SEMESTRE',
      materias: [
        // ADMINISTRACION DE PROYECTOS (1301052)
{
  nombre: 'ADMINISTRACION DE PROYECTOS',
  docentes: [
    {
      id: 190,
      name: 'SEJAS CHOQUE JUAN CARLOS',
      group: '01',
      days: [
        { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E520' },
        { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E504' },
        { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E547' }
      ]
    },
    {
      id: 191,
      name: 'FERRUFINO GARCIA ALEXANDER',
      group: '02',
      days: [
        { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 110' },
        { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 302' },
        { day: 'Viernes', start: '11:15', end: '12:45', classRoom: 'E 110' }
      ]
    },
    {
      id: 192,
      name: 'PARDO FERNANDEZ JULIO FRANCO',
      group: '20',
      days: [
        { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 205' },
        { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 109' },
        { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 203' }
      ]
    }
  ]
},

// LEGISLACION EMPRESARIAL (1301053)
{
  nombre: 'LEGISLACION EMPRESARIAL',
  docentes: [
    {
      id: 193,
      name: 'JIMENEZ PINTO EDWIN',
      group: '01',
      days: [
        { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E543' },
        { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 206' },
        { day: 'Viernes', start: '17:15', end: '18:45', classRoom: 'E 109' }
      ]
    },
    {
      id: 194,
      name: 'JIMENEZ PINTO EDWIN',
      group: '02',
      days: [
        { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E541' },
        { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E504' },
        { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E520' }
      ]
    },
    {
      id: 195,
      name: 'AYALA MENDOZA AMILCAR',
      group: '03',
      days: [
        { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E PB-2' },
        { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E PB-2' },
        { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E PB-2' }
      ]
    },
    {
      id: 196,
      name: 'QUIROZ GOMEZ CARMEN RITA',
      group: '04',
      days: [
        { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E512' },
        { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E521' },
        { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E512' }
      ]
    }
  ]
},

// TALLER II (1301054)
{
  nombre: 'TALLER II',
  docentes: [
    {
      id: 197,
      name: 'TORRES ARANDIA WILLIAM',
      group: 'F1',
      days: [
        { day: 'Martes', start: '14:15', end: '15:45', classRoom: 'ADM1' },
        { day: 'Miércoles', start: '14:15', end: '15:45', classRoom: 'ADM1' },
        { day: 'Jueves', start: '14:15', end: '15:45', classRoom: 'ADM1' }
      ]
    },
    {
      id: 198,
      name: 'RAMIREZ MOLINA GONZALO',
      group: 'F3',
      days: [
        { day: 'Lunes', start: '15:45', end: '17:15', classRoom: 'ADM1' },
        { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'ADM1' },
        { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'ADM1' }
      ]
    },
    {
      id: 199,
      name: 'VALDIVIEZO MALDONADO LINO JUAN CARLOS',
      group: 'F4',
      days: [
        { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'ADM1' },
        { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'ADM1' },
        { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'ADM1' }
      ]
    },
    {
      id: 200,
      name: 'VARGAS OROSCO FREDDY',
      group: 'F5',
      days: [
        { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'ADM1' },
        { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'ADM1' },
        { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'ADM1' }
      ]
    },
    {
      id: 201,
      name: 'AYMA SOTO FELIX MARCELO',
      group: 'M1',
      days: [
        { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'ADM1' },
        { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'ADM1' },
        { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'ADM1' }
      ]
    },
    {
      id: 202,
      name: 'VILLAZON ARANDIA RICARDO IVAN',
      group: 'M2',
      days: [
        { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'ADM1' },
        { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'ADM1' },
        { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'ADM1' }
      ]
    },
    {
      id: 203,
      name: 'POZO VALLEJOS MARIA ESTHER',
      group: 'M3',
      days: [
        { day: 'Lunes', start: '12:45', end: '14:15', classRoom: 'ADM1' },
        { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'ADM1' },
        { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'ADM1' }
      ]
    },
    {
      id: 204,
      name: 'MOSCOSO FORONDA DAVID',
      group: 'M4',
      days: [
        { day: 'Martes', start: '15:45', end: '17:15', classRoom: 'ADM1' },
        { day: 'Miércoles', start: '15:45', end: '17:15', classRoom: 'ADM1' },
        { day: 'Jueves', start: '15:45', end: '17:15', classRoom: 'ADM1' }
      ]
    },
    {
      id: 205,
      name: 'CARDENAS SARAVIA TITO IVAN',
      group: 'M5',
      days: [
        { day: 'Lunes', start: '15:45', end: '17:15', classRoom: 'ADM1' },
        { day: 'Martes', start: '15:45', end: '17:15', classRoom: 'ADM1' },
        { day: 'Miércoles', start: '15:45', end: '17:15', classRoom: 'ADM1' }
      ]
    },
    {
      id: 206,
      name: 'RAMIREZ MOLINA GONZALO',
      group: 'M7',
      days: [
        { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'ADM1' },
        { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'ADM1' },
        { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'ADM1' }
      ]
    },
    {
      id: 207,
      name: 'VILLAZON DEL CARPIO OSMAN ERICK',
      group: 'M8',
      days: [
        { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'ADM1' },
        { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'ADM1' },
        { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'ADM1' }
      ]
    },
    {
      id: 208,
      name: 'VALDEZ ZEGARRA RAFAEL A.',
      group: 'R1',
      days: [
        { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 202' },
        { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E525' },
        { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 202' }
      ]
    },
    {
      id: 209,
      name: 'BURGOS MEDINA CARLOS ALBERTO',
      group: 'R4',
      days: [
        { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 105' },
        { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E514' },
        { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 302' }
      ]
    },
    {
      id: 210,
      name: 'ZEGARRA SALDANA PABLO',
      group: 'R5',
      days: [
        { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'ADM1' },
        { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'ADM1' },
        { day: 'Miércoles', start: '14:15', end: '15:45', classRoom: 'ADM1' }
      ]
    }
  ]
},

// MERCADOTECNIA IV (1301055)
{
  nombre: 'MERCADOTECNIA IV',
  docentes: [
    {
      id: 211,
      name: 'NAVIA QUIROGA GUSTAVO',
      group: '01',
      days: [
        { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E502' },
        { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E502' },
        { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E501' }
      ]
    },
    {
      id: 212,
      name: 'NAVIA QUIROGA GUSTAVO',
      group: '20',
      days: [
        { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E502' },
        { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E502' },
        { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E504' }
      ]
    },
    {
      id: 213,
      name: 'IRIARTE DE LA FUENTE MARCELA',
      group: '21',
      days: [
        { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E502' },
        { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E502' },
        { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E502' }
      ]
    }
  ]
},

// FINANZAS VI (1301056)
{
  nombre: 'FINANZAS VI',
  docentes: [
    {
      id: 214,
      name: 'VALLEJO RUIZ JAVIER',
      group: '20',
      days: [
        { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E548' },
        { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 106' },
        { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E520' }
      ]
    }
  ]
},

// PERSONAL VI (1301057)
{
  nombre: 'PERSONAL VI',
  docentes: [
    {
      id: 215,
      name: 'BADANI LENZ RAFAEL FERNANDO',
      group: '20',
      days: [
        { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 109' },
        { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 109' },
        { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E521' }
      ]
    }
  ]
},

// PRACTICA EMPRESARIAL (1301058)
{
  nombre: 'PRACTICA EMPRESARIAL',
  docentes: [
    {
      id: 216,
      name: 'VILDOZO ZAMORANO WALTER FERNANDO',
      group: '20',
      days: [
        { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 301' },
        { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 105' },
        { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 109' }
      ]
    },
    {
      id: 217,
      name: 'GUZMAN BROCKMANN FELIPE HANS WIGBERTO',
      group: '21',
      days: [
        { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E502' },
        { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E503' },
        { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 205' }
      ]
    },
    {
      id: 218,
      name: 'CHAVEZ MARCELA MABEL',
      group: '22',
      days: [
        { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 301' },
        { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 202' },
        { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 203' }
      ]
    },
    {
      id: 219,
      name: 'MALDONADO ROJAS RAMIRO',
      group: '23',
      days: [
        { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 109' },
        { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 107' },
        { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 301' }
      ]
    },
    {
      id: 220,
      name: 'CHAVEZ MARCELA MABEL',
      group: '24',
      days: [
        { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 201' },
        { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 206' },
        { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 207' }
      ]
    }
  ]
}
      ]
    }

  ];
  days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  hours = ['06:45', '08:15', '09:45', '11:15', '12:45', '14:15', '15:45', '16:30', '17:15', '18:45', '20:15', '21:45'];



  selectedSubjects:any[] = [];

  toggleSubject(subject:any, event:any, subjectName:any) {
    if (event.target.checked) {
      let color = this.colors[0];
      this.inUse.push(color);
      let index = this.colors.findIndex((colorArr) => { return colorArr == color });
      this.colors.splice(index, 1);
      if (subject.days.length > 0) {
        subject.color = color;
        for (let day of subject.days) {
          this.selectedSubjects.push({ idGroup:subject.id, ...day, name:subject.name, group:subject.group, color:color, subjectName:subjectName });
          console.log(this.selectedSubjects)
        }
      }
      this.selectedSubjects.push(subject);
    } else {
      this.colors.push(subject.color)
      this.selectedSubjects = this.selectedSubjects.filter(s => s.idGroup !== subject.id);
    }
  }

  getSubjectsForCell(day:string, hour:string) {
    if (this.selectedSubjects.length > 0) console.log('materias', this.selectedSubjects);
    return this.selectedSubjects.filter(subject => subject.day === day && subject.start === hour);
  }
  async loadImage(src:string):Promise<string> {
    const img = new Image();
    img.src = src;
    img.crossOrigin = "anonymous";
    await new Promise(resolve => img.onload = resolve);
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(img, 0, 0);
    return canvas.toDataURL("image/png");
  }
  async generatePDF() {
    const doc = new jsPDF({
      orientation:'p',
      unit:'mm',
      format:[210, 297]

    });

    doc.setFont("times", "bold");
    doc.text('HORARIO', 70, 15)
    const imgData = await this.loadImage('assets/img/dragon.png');
    doc.addImage(imgData, 'PNG', 120, 5, 18, 18)

    const columns = ['Hora', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const data = [['06:45'], ['08:15'], ['09:45'], ['11:15'], ['12:45'], ['14:15'], ['15:45'], ['16:30'], ['17:15'], ['18:45'], ['20:15'], ['21:45']];;

    doc.autoTable({
      headStyles:{
        fillColor:"#1864f9",
      },
      startY:25,
      head:[columns],
      body:data,
    });
    doc.save('HORARIO.pdf');
  }
  async generateImage() {
    Swal.fire({
      title:'Generando imagen...',
      html:'Por favor, espera un momento.',
      allowOutsideClick:false,
      didOpen:() => {
        Swal.showLoading();
      }
    });
    await new Promise(resolve => setTimeout(resolve, 100));
    const element = this.contenido.nativeElement;
    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'HORARIO.png';
      Swal.fire({
        icon:'success',
        title:'¡Completado!',
        text:'',
        confirmButtonText:'Ok',
        confirmButtonColor:'#3085d6'
      });
      link.click();
    });
  }
}
