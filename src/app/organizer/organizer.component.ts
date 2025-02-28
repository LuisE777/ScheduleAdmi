
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
  semestres:any = [
    {
      nombre:'PRIMER SEMESTRE',
      materias:[
        {
          nombre:'ADMINISTRACION GENERAL',
          docentes:[
            {
              id:1,
              name:'VILLARROEL DAZA MARIA HELEN',
              group:'01',
              days:[
                {
                  day:'Lunes', start:'09:45', end:'11:15', classRoom:'E520'
                },
                {
                  day:'Miércoles', start:'09:45', end:'11:15', classRoom:'E503'
                },
                {
                  day:'Viernes', start:'09:45', end:'11:15', classRoom:'E504'
                }
              ]
            },
            {
              id:2,
              name:'BADANI LENZ RAFAEL FERNANDO',
              group:'02',
              days:[
                {
                  day:'Lunes', start:'11:15', end:'12:45', classRoom:'E545'
                },
                {
                  day:'Miércoles', start:'11:15', end:'12:45', classRoom:'E545'
                },
                {
                  day:'Viernes', start:'11:15', end:'12:45', classRoom:'E545'
                }
              ]
            },
            {
              id:3,
              name:'VILLARROEL DAZA MARIA HELEN',
              group:'03',
              days:[
                {
                  day:'Martes', start:'09:45', end:'11:15', classRoom:'E503'
                },
                {
                  day:'Miércoles', start:'11:15', end:'12:45', classRoom:'E503'
                },
                {
                  day:'Viernes', start:'11:15', end:'12:45', classRoom:'E504'
                }
              ]
            },
            {
              id:4,
              name:'VALDEZ ZEGARRA RAFAEL A.',
              group:'20',
              days:[
                {
                  day:'Martes', start:'20:15', end:'21:45', classRoom:'E 201'
                },
                {
                  day:'Viernes', start:'06:45', end:'08:15', classRoom:'E524'
                },
                {
                  day:'Sábado', start:'06:45', end:'08:15', classRoom:'E502'
                }
              ]
            },
            {
              id:5,
              name:'SANCHEZ CASTELLON JUAN FELIX',
              group:'21',
              days:[
                {
                  day:'Lunes', start:'18:45', end:'20:15', classRoom:'E545'
                },
                {
                  day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E545'
                },
                {
                  day:'Viernes', start:'18:45', end:'20:15', classRoom:'E545'
                }
              ]
            },
            {
              id:6,
              name:'VARGAS OROSCO FREDDY',
              group:'22',
              days:[
                {
                  day:'Lunes', start:'15:45', end:'17:15', classRoom:'E 205'
                },
                {
                  day:'Miércoles', start:'15:45', end:'17:15', classRoom:'E503'
                },
                {
                  day:'Jueves', start:'15:45', end:'17:15', classRoom:'E503'
                }
              ]
            },
            {
              id:7,
              name:'TORRICO OCAMPO ENRIQUE',
              group:'23',
              days:[
                {
                  day:'Martes', start:'18:45', end:'20:15', classRoom:'E501'
                },
                {
                  day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E530'
                },
                {
                  day:'Jueves', start:'18:45', end:'20:15', classRoom:'E530'
                }
              ]
            }
          ]
        },
        {
          nombre:'CONTABILIDAD I',
          docentes:[
            {
              id:8,
              name:'PEREZ AMADOR MARIO',
              group:'01',
              days:[
                {
                  day:'Martes', start:'11:15', end:'12:45', classRoom:'E545'
                },
                {
                  day:'Jueves', start:'11:15', end:'12:45', classRoom:'E545'
                },
                {
                  day:'Viernes', start:'11:15', end:'12:45', classRoom:'E523'
                }
              ]
            },
            {
              id:9,
              name:'PEREZ AMADOR MARIO',
              group:'02',
              days:[
                {
                  day:'Martes', start:'09:45', end:'11:15', classRoom:'E523'
                },
                {
                  day:'Jueves', start:'09:45', end:'11:15', classRoom:'E544'
                },
                {
                  day:'Viernes', start:'09:45', end:'11:15', classRoom:'E523'
                }
              ]
            },
            {
              id:10,
              name:'MENDOZA CRESPO JOSE ANTONIO',
              group:'03',
              days:[
                {
                  day:'Lunes', start:'09:45', end:'11:15', classRoom:'E 109'
                },
                {
                  day:'Martes', start:'14:15', end:'15:45', classRoom:'E 106'
                },
                {
                  day:'Miércoles', start:'09:45', end:'11:15', classRoom:'E 303'
                }
              ]
            },
            {
              id:11,
              name:'VILLAZON ARANDIA RICARDO IVAN',
              group:'04',
              days:[
                {
                  day:'Lunes', start:'18:45', end:'20:15', classRoom:'E503'
                },
                {
                  day:'Martes', start:'18:45', end:'20:15', classRoom:'E 105'
                },
                {
                  day:'Jueves', start:'18:45', end:'20:15', classRoom:'E 106'
                }
              ]
            },
            {
              id:12,
              name:'MALDONADO ULUNQUE VICTOR HUGO',
              group:'20',
              days:[
                {
                  day:'Lunes', start:'18:45', end:'20:15', classRoom:'E 101'
                },
                {
                  day:'Martes', start:'18:45', end:'20:15', classRoom:'E 208'
                },
                {
                  day:'Jueves', start:'17:15', end:'18:45', classRoom:'E 102'
                }
              ]
            },
            {
              id:13,
              name:'FERRUFINO JUAREZ JOSE MARCOS',
              group:'21',
              days:[
                {
                  day:'Martes', start:'18:45', end:'20:15', classRoom:'E 206'
                },
                {
                  day:'Jueves', start:'18:45', end:'20:15', classRoom:'E 206'
                },
                {
                  day:'Sábado', start:'09:45', end:'11:15', classRoom:'E 208'
                }
              ]
            },
            {
              id:14,
              name:'MENDOZA CRESPO JOSE ANTONIO',
              group:'22',
              days:[
                {
                  day:'Lunes', start:'18:45', end:'20:15', classRoom:'E544'
                },
                {
                  day:'Martes', start:'18:45', end:'20:15', classRoom:'E 101'
                },
                {
                  day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E PB-1'
                }
              ]
            }
          ]
        },
        {
          nombre:'ALGEBRA',
          docentes:[
            {
              id:15,
              name:'QUISPE CABRERA RENE',
              group:'01',
              days:[
                {
                  day:'Lunes', start:'11:15', end:'12:45', classRoom:'E 206'
                },
                {
                  day:'Martes', start:'11:15', end:'12:45', classRoom:'E 203'
                },
                {
                  day:'Miércoles', start:'11:15', end:'12:45', classRoom:'E 203'
                },
                {
                  day:'Sábado', start:'08:15', end:'09:45', classRoom:'E 201', auxiliary:true
                }
              ]
            },
            {
              id:16,
              name:'COSSIO MC.GALEN LIMBERT PAUL',
              group:'02',
              days:[
                {
                  day:'Lunes', start:'09:45', end:'11:15', classRoom:'E 209'
                },
                {
                  day:'Martes', start:'14:15', end:'15:45', classRoom:'E 102'
                },
                {
                  day:'Miércoles', start:'15:45', end:'17:15', classRoom:'E 202'
                },
                {
                  day:'Jueves', start:'09:45', end:'11:15', classRoom:'E504', auxiliary:true
                }
              ]
            },
            {
              id:17,
              name:'IRIARTE MERCADO EDGAR ALBERTO',
              group:'04',
              days:[
                {
                  day:'Lunes', start:'08:15', end:'09:45', classRoom:'E545'
                },
                {
                  day:'Miércoles', start:'08:15', end:'09:45', classRoom:'E520'
                },
                {
                  day:'Viernes', start:'08:15', end:'09:45', classRoom:'E522'
                },
                {
                  day:'Sábado', start:'08:15', end:'09:45', classRoom:'E 102', auxiliary:true
                }
              ]
            },
            {
              id:18,
              name:'MOYA ALBARRACIN MARTIN',
              group:'05',
              days:[
                {
                  day:'Martes', start:'20:15', end:'21:45', classRoom:'E 101'
                },
                {
                  day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E520'
                },
                {
                  day:'Jueves', start:'06:45', end:'08:15', classRoom:'E502'
                },
                {
                  day:'Viernes', start:'06:45', end:'08:15', classRoom:'E 105', auxiliary:true
                }
              ]
            },
            {
              id:19,
              name:'JALDIN QUIROZ RENE',
              group:'20',
              days:[
                {
                  day:'Lunes', start:'15:45', end:'17:15', classRoom:'E 203', auxiliary:true
                },
                {
                  day:'Lunes', start:'17:15', end:'18:45', classRoom:'E504'
                },
                {
                  day:'Miércoles', start:'17:15', end:'18:45', classRoom:'E511'
                },
                {
                  day:'Jueves', start:'18:45', end:'20:15', classRoom:'E523'
                }
              ]
            },
            {
              id:20,
              name:'ALBORTA SILES RAUL JOSE',
              group:'22',
              days:[
                {
                  day:'Lunes', start:'08:15', end:'09:45', classRoom:'E518'
                },
                {
                  day:'Martes', start:'09:45', end:'11:15', classRoom:'E 302'
                },
                {
                  day:'Viernes', start:'11:15', end:'12:45', classRoom:'E506'
                }
              ]
            },
            {
              id:21,
              name:'COSSIO MC.GALEN LIMBERT PAUL',
              group:'23',
              days:[
                {
                  day:'Lunes', start:'18:45', end:'20:15', classRoom:'E504'
                },
                {
                  day:'Martes', start:'20:15', end:'21:45', classRoom:'E 209'
                },
                {
                  day:'Miércoles', start:'17:15', end:'18:45', classRoom:'E520'
                }
              ]
            },
            {
              id:22,
              name:'QUISPE CABRERA RENE',
              group:'24',
              days:[
                {
                  day:'Lunes', start:'17:15', end:'18:45', classRoom:'E 203'
                },
                {
                  day:'Martes', start:'17:15', end:'18:45', classRoom:'E 202'
                },
                {
                  day:'Miércoles', start:'17:15', end:'18:45', classRoom:'E 203'
                }
              ]
            }
          ]
        },
        {
          nombre:'METODOLOGIA DE INVESTIGACION I',
          docentes:[
            {
              id:23,
              name:'GUZMAN BROCKMANN FELIPE HANS WIGBERTO',
              group:'02',
              days:[
                {
                  day:'Lunes', start:'20:15', end:'21:45', classRoom:'E520'
                },
                {
                  day:'Martes', start:'09:45', end:'11:15', classRoom:'E520'
                },
                {
                  day:'Viernes', start:'20:15', end:'21:45', classRoom:'E522'
                }
              ]
            },
            {
              id:24,
              name:'CARRILLO FUENTES JUAN ANGEL',
              group:'22',
              days:[
                {
                  day:'Lunes', start:'17:15', end:'18:45', classRoom:'E522'
                },
                {
                  day:'Miércoles', start:'17:15', end:'18:45', classRoom:'E502'
                },
                {
                  day:'Viernes', start:'09:45', end:'11:15', classRoom:'E503'
                }
              ]
            },
            {
              id:25,
              name:'ZAMBRANA TRIVENO JOSE EMILIO',
              group:'23',
              days:[
                {
                  day:'Martes', start:'12:45', end:'14:15', classRoom:'E504'
                },
                {
                  day:'Miércoles', start:'12:45', end:'14:15', classRoom:'E504'
                },
                {
                  day:'Jueves', start:'12:45', end:'14:15', classRoom:'E504'
                }
              ]
            },
            {
              id:26,
              name:'GUERRA TORO MARIA ELENA',
              group:'24',
              days:[
                {
                  day:'Lunes', start:'06:45', end:'08:15', classRoom:'E PB-4'
                },
                {
                  day:'Miércoles', start:'06:45', end:'08:15', classRoom:'E 101'
                },
                {
                  day:'Sábado', start:'08:15', end:'09:45', classRoom:'E PB-4'
                }
              ]
            },
            {
              id:27,
              name:'ZAMBRANA TRIVENO JOSE EMILIO',
              group:'25',
              days:[
                {
                  day:'Lunes', start:'15:45', end:'17:15', classRoom:'E502'
                },
                {
                  day:'Martes', start:'15:45', end:'17:15', classRoom:'E504'
                },
                {
                  day:'Jueves', start:'15:45', end:'17:15', classRoom:'E504'
                }
              ]
            }
          ]
        },
        {
          nombre:'CALCULO',
          docentes:[
            {
              id:28,
              name:'MORALES ROJAS ARTURO JOSE L.',
              group:'01',
              days:[
                {
                  day:'Lunes', start:'11:15', end:'12:45', classRoom:'E PB-4'
                },
                {
                  day:'Jueves', start:'11:15', end:'12:45', classRoom:'E521'
                },
                {
                  day:'Martes', start:'09:45', end:'11:15', classRoom:'E501', auxiliary:true
                }
              ]
            },
            {
              id:29,
              name:'MONTAÑO ROMERO JOSE',
              group:'02',
              days:[
                {
                  day:'Martes', start:'08:15', end:'09:45', classRoom:'E502'
                },
                {
                  day:'Jueves', start:'08:15', end:'09:45', classRoom:'E502'
                },
                {
                  day:'Viernes', start:'17:15', end:'18:45', classRoom:'E PB-4', auxiliary:true
                }
              ]
            },
            {
              id:30,
              name:'COVARRUBIAS VARGAS CAUJMAN',
              group:'03',
              days:[
                {
                  day:'Martes', start:'06:45', end:'08:15', classRoom:'E 103'
                },
                {
                  day:'Jueves', start:'06:45', end:'08:15', classRoom:'E 103'
                },
                {
                  day:'Viernes', start:'11:15', end:'12:45', classRoom:'E503', auxiliary:true
                }
              ]
            },
            {
              id:31,
              name:'DUERI MENDEZ MARIA ELENA',
              group:'04',
              days:[
                {
                  day:'Lunes', start:'15:45', end:'17:15', classRoom:'E543'
                },
                {
                  day:'Viernes', start:'15:45', end:'17:15', classRoom:'E542'
                }
              ]
            },
            {
              id:32,
              name:'DIAZ MONZON EDMUNDO',
              group:'20',
              days:[
                {
                  day:'Lunes', start:'09:45', end:'11:15', classRoom:'E501'
                },
                {
                  day:'Viernes', start:'08:15', end:'09:45', classRoom:'E502'
                },
                {
                  day:'Sábado', start:'09:45', end:'11:15', classRoom:'E504', auxiliary:true
                }
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
              id:34,
              name:'COVARRUBIAS VARGAS CAUJMAN',
              group:'22',
              days:[
                {
                  day:'Miércoles', start:'06:45', end:'08:15', classRoom:'E530'
                },
                {
                  day:'Jueves', start:'09:45', end:'11:15', classRoom:'E 203'
                },
                {
                  day:'Viernes', start:'08:15', end:'09:45', classRoom:'E 204', auxiliary:true
                }
              ]
            },
            {
              id:35,
              name:'MONTAÑO RODRIGUEZ EDGAR ORLANDO',
              group:'23',
              days:[
                {
                  day:'Martes', start:'06:45', end:'08:15', classRoom:'E PB-2'
                },
                {
                  day:'Viernes', start:'06:45', end:'08:15', classRoom:'E 103'
                },
                {
                  day:'Jueves', start:'11:15', end:'12:45', classRoom:'E506', auxiliary:true
                }
              ]
            },
            {
              id:36,
              name:'VILLARROEL SOLIZ GROVER',
              group:'24',
              days:[
                {
                  day:'Lunes', start:'14:15', end:'15:45', classRoom:'E522'
                },
                {
                  day:'Viernes', start:'15:45', end:'17:15', classRoom:'E522'
                },
                {
                  day:'Jueves', start:'11:15', end:'12:45', classRoom:'E 205', auxiliary:true
                }
              ]
            },
            {
              id:37,
              name:'CRESPO FLORES RENE CARLOS',
              group:'25',
              days:[
                {
                  day:'Martes', start:'17:15', end:'18:45', classRoom:'E520'
                },
                {
                  day:'Jueves', start:'17:15', end:'18:45', classRoom:'E523'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      nombre:'SEGUNDO SEMESTRE',
      materias:[
        {
          nombre:'TEORIA Y TECNICAS DE LA ORGANIZACION',
          docentes:[
            {
              id:37,
              name:'VILLARROEL SOLIZ GROVER',
              group:'01',
              days:[
                {
                  day:'Lunes', start:'12:45', end:'14:15', classRoom:'E522'
                },
                {
                  day:'Martes', start:'15:45', end:'17:15', classRoom:'E523'
                },
                {
                  day:'Viernes', start:'12:45', end:'14:15', classRoom:'E544'
                }
              ]
            },
            {
              id:38,
              name:'DELGADILLO SALAS MAYCOL MARCOS',
              group:'20',
              days:[
                {
                  day:'Lunes', start:'17:15', end:'18:45', classRoom:'E 404'
                },
                {
                  day:'Martes', start:'08:15', end:'09:45', classRoom:'E 204'
                },
                {
                  day:'Jueves', start:'08:15', end:'09:45', classRoom:'E520'
                }
              ]
            },
            {
              id:39,
              name:'MENDOZA ARAOZ JAMIL MARCELO',
              group:'21',
              days:[
                {
                  day:'Lunes', start:'17:15', end:'18:45', classRoom:'E 201'
                },
                {
                  day:'Miércoles', start:'17:15', end:'18:45', classRoom:'E 305'
                },
                {
                  day:'Jueves', start:'17:15', end:'18:45', classRoom:'E 305'
                }
              ]
            },
            {
              id:39,
              name:'CARDENAS SARAVIA TITO IVAN',
              group:'22',
              days:[
                {
                  day:'Lunes', start:'20:15', end:'21:45', classRoom:'E 304'
                },
                {
                  day:'Martes', start:'20:15', end:'21:45', classRoom:'E 304'
                },
                {
                  day:'Miércoles', start:'20:15', end:'21:45', classRoom:'E 304'
                }
              ]
            },
            {
              id:40,
              name:'CARDENAS SARAVIA TITO IVAN',
              group:'23',
              days:[
                {
                  day:'Lunes', start:'17:15', end:'18:45', classRoom:'E 304'
                },
                {
                  day:'Martes', start:'17:15', end:'18:45', classRoom:'E 304'
                },
                {
                  day:'Miércoles', start:'17:15', end:'18:45', classRoom:'E 304'
                }
              ]
            }
          ]
        },
        {
          nombre:'ECONOMIA DE EMPRESAS I',
          docentes:[
            {
              id:41,
              name:'PANTOJA ROCHA YURI NEWTON',
              group:'01',
              days:[
                {
                  day:'Lunes', start:'06:45', end:'08:15', classRoom:'E 108'
                },
                {
                  day:'Martes', start:'06:45', end:'08:15', classRoom:'E 101'
                },
                {
                  day:'Sábado', start:'08:15', end:'09:45', classRoom:'E 104', auxiliary:true
                }
              ]
            },
            {
              id:42,
              name:'ARAUJO COSSIO ALDO ROMEL',
              group:'20',
              days:[
                {
                  day:'Lunes', start:'20:15', end:'21:45', classRoom:'E 310'
                },
                {
                  day:'Martes', start:'20:15', end:'21:45', classRoom:'E 310'
                },
                {
                  day:'Miércoles', start:'12:45', end:'14:15', classRoom:'E524', auxiliary:true
                }
              ]
            },
            {
              id:43,
              name:'DECKER MARQUEZ JOSE',
              group:'21',
              days:[
                {
                  day:'Martes', start:'20:15', end:'21:45', classRoom:'E504'
                },
                {
                  day:'Viernes', start:'06:45', end:'08:15', classRoom:'E 206'
                },
                {
                  day:'Viernes', start:'14:15', end:'15:45', classRoom:'E503', auxiliary:true
                }
              ]
            },
            {
              id:44,
              name:'ZUBIETA FLORIDO FREDDY',
              group:'22',
              days:[
                {
                  day:'Lunes', start:'20:15', end:'21:45', classRoom:'E504'
                },
                {
                  day:'Miércoles', start:'17:15', end:'18:45', classRoom:'E 110'
                },
                {
                  day:'Viernes', start:'12:45', end:'14:15', classRoom:'E521', auxiliary:true
                }
              ]
            },
            {
              id:45,
              name:'LOZADA TORRICO RUDY REMBERTO',
              group:'52',
              days:[
                {
                  day:'Lunes', start:'14:15', end:'15:45', classRoom:'E521'
                },
                {
                  day:'Martes', start:'14:15', end:'15:45', classRoom:'E520'
                },
                {
                  day:'Miércoles', start:'14:15', end:'15:45', classRoom:'E521'
                }
              ]
            }
          ]
        },
        {
          nombre:'CONTABILIDAD II',
          docentes:[
            {
              id:46,
              name:'COCA GONZALES ALBERTO',
              group:'01',
              days:[
                {
                  day:'Lunes', start:'08:15', end:'09:45', classRoom:'E520'
                },
                {
                  day:'Miércoles', start:'08:15', end:'09:45', classRoom:'E 301'
                },
                {
                  day:'Jueves', start:'09:45', end:'11:15', classRoom:'E522'
                }
              ]
            },
            {
              id:47,
              name:'TORRICO SANCHEZ FELIPE ROBERTO',
              group:'20',
              days:[
                {
                  day:'Martes', start:'18:45', end:'20:15', classRoom:'E545'
                },
                {
                  day:'Jueves', start:'18:45', end:'20:15', classRoom:'E521'
                },
                {
                  day:'Viernes', start:'18:45', end:'20:15', classRoom:'E520'
                }
              ]
            },
            {
              id:48,
              name:'LOPEZ VALENZUELA JOSE WALTER',
              group:'21',
              days:[
                {
                  day:'Martes', start:'06:45', end:'08:15', classRoom:'E 206'
                },
                {
                  day:'Jueves', start:'06:45', end:'08:15', classRoom:'E 206'
                },
                {
                  day:'Sábado', start:'06:45', end:'08:15', classRoom:'E 206'
                }
              ]
            },
            {
              id:49,
              name:'MONTAÑO VARGAS OSCAR',
              group:'22',
              days:[
                {
                  day:'Martes', start:'17:15', end:'18:45', classRoom:'E523'
                },
                {
                  day:'Miércoles', start:'17:15', end:'18:45', classRoom:'E522'
                },
                {
                  day:'Jueves', start:'17:15', end:'18:45', classRoom:'E522'
                }
              ]
            },
            {
              id:50,
              name:'MONTAÑO VARGAS OSCAR',
              group:'23',
              days:[
                {
                  day:'Martes', start:'20:15', end:'21:45', classRoom:'E521'
                },
                {
                  day:'Miércoles', start:'20:15', end:'21:45', classRoom:'E524'
                },
                {
                  day:'Jueves', start:'20:15', end:'21:45', classRoom:'E544'
                }
              ]
            },
            {
              id:51,
              name:'QUINTANA ALVAREZ JHONNY',
              group:'24',
              days:[
                {
                  day:'Lunes', start:'17:15', end:'18:45', classRoom:'E545'
                },
                {
                  day:'Martes', start:'12:45', end:'14:15', classRoom:'E545'
                },
                {
                  day:'Miércoles', start:'12:45', end:'14:15', classRoom:'E544'
                }
              ]
            }
          ]
        },
        {
          nombre:'ESTADISTICA I',
          docentes:[
            {
              id:52,
              name:'TABORGA ACHA FIDEL',
              group:'01',
              days:[
                {
                  day:'Lunes', start:'08:15', end:'09:45', classRoom:'E 206'
                },
                {
                  day:'Miércoles', start:'08:15', end:'09:45', classRoom:'E 206'
                },
                {
                  day:'Viernes', start:'11:15', end:'12:45', classRoom:'E502', auxiliary:true
                }
              ]
            },
            {
              id:53,
              name:'VALDIVIEZO MALDONADO LINO JUAN CARLOS',
              group:'02',
              days:[
                {
                  day:'Martes', start:'11:15', end:'12:45', classRoom:'E 207', auxiliary:true
                },
                {
                  day:'Jueves', start:'09:45', end:'11:15', classRoom:'E 205'
                },
                {
                  day:'Viernes', start:'09:45', end:'11:15', classRoom:'E521'
                }
              ]
            },
            {
              id:54,
              name:'SUAZNABAR CLAROS FERNANDO ALBERTO',
              group:'03',
              days:[
                {
                  day:'Lunes', start:'09:45', end:'11:15', classRoom:'E541'
                },
                {
                  day:'Jueves', start:'08:15', end:'09:45', classRoom:'E522'
                },
                {
                  day:'Lunes', start:'14:15', end:'15:45', classRoom:'E 204', auxiliary:true
                }
              ]
            },
            {
              id:55,
              name:'MONTANO QUIROGA CLAUDIA CAROLA',
              group:'20',
              days:[
                {
                  day:'Martes', start:'09:45', end:'11:15', classRoom:'E506'
                },
                {
                  day:'Jueves', start:'09:45', end:'11:15', classRoom:'E502'
                },
                {
                  day:'Miércoles', start:'15:45', end:'17:15', classRoom:'E504', auxiliary:true
                }
              ]
            },
            {
              id:56,
              name:'BUSTAMANTE MALDONADO FERNANDO',
              group:'21',
              days:[
                {
                  day:'Lunes', start:'08:15', end:'09:45', classRoom:'E504'
                },
                {
                  day:'Jueves', start:'11:15', end:'12:45', classRoom:'E522'
                },
                {
                  day:'Martes', start:'14:15', end:'15:45', classRoom:'E523', auxiliary:true
                }
              ]
            }
          ]
        },
        {
          nombre:'SOCIOLOGIA ORGANIZACIONAL',
          docentes:[
            {
              id:57,
              name:'POZO VALLEJOS MARIA ESTHER',
              group:'01',
              days:[
                {
                  day:'Lunes', start:'14:15', end:'15:45', classRoom:'E504'
                },
                {
                  day:'Miércoles', start:'11:15', end:'12:45', classRoom:'E504'
                },
                {
                  day:'Viernes', start:'14:15', end:'15:45', classRoom:'E504'
                }
              ]
            },
            {
              id:58,
              name:'ANTEZANA LA FUENTE JORGE CARLOS',
              group:'20',
              days:[
                {
                  day:'Lunes', start:'06:45', end:'08:15', classRoom:'E520'
                },
                {
                  day:'Miércoles', start:'06:45', end:'08:15', classRoom:'E520'
                },
                {
                  day:'Jueves', start:'06:45', end:'08:15', classRoom:'E 104'
                }
              ]
            },
            {
              id:59,
              name:'POZO VALLEJOS MARIA ESTHER',
              group:'21',
              days:[
                {
                  day:'Lunes', start:'15:45', end:'17:15', classRoom:'E504'
                },
                {
                  day:'Miércoles', start:'14:15', end:'15:45', classRoom:'E503'
                },
                {
                  day:'Viernes', start:'15:45', end:'17:15', classRoom:'E504'
                }
              ]
            },
            {
              id:60,
              name:'ZAMBRANA TRIVENO JOSE EMILIO',
              group:'22',
              days:[
                {
                  day:'Martes', start:'14:15', end:'15:45', classRoom:'E504'
                },
                {
                  day:'Miércoles', start:'14:15', end:'15:45', classRoom:'E504'
                },
                {
                  day:'Jueves', start:'14:15', end:'15:45', classRoom:'E504'
                }
              ]
            }
          ]
        }
      ]
    },
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
      nombre:'QUINTO SEMESTRE',
      materias:[
        {
          nombre:'INGLES I',
          docentes:[
            {
              id:113,
              name:'PARDO FERNANDEZ JULIO FRANCO', group:'08', days:[
                {
                  day:'Lunes', start:'09:45', end:'11:15', classRoom:'E 108'
                },
                {
                  day:'Martes', start:'09:45', end:'11:15', classRoom:'E 207'
                },
                {
                  day:'Miércoles', start:'08:15', end:'09:45', classRoom:'E PB-4'
                }
              ]
            },
            {
              id:114,
              name:'VALLEJO ECHEVERRIA JULIAN', group:'A1', days:[
                {
                  day:'Lunes', start:'08:15', end:'09:45', classRoom:'E 306'
                },
                {
                  day:'Martes', start:'08:15', end:'09:45', classRoom:'E 303'
                },
                {
                  day:'Jueves', start:'08:15', end:'09:45', classRoom:'E517'
                }
              ]
            }
          ]
        },
        {
          nombre:'METODOLOGIA DE INVESTIGACION II',
          docentes:[
            {
              id:115,
              name:'VALLEJO BELTRAN ENZO MAURICIO', group:'01', days:[
                {
                  day:'Martes', start:'11:15', end:'12:45', classRoom:'E506'
                },
                {
                  day:'Miércoles', start:'08:15', end:'09:45', classRoom:'E 209'
                },
                {
                  day:'Jueves', start:'11:15', end:'12:45', classRoom:'E501'
                }
              ]
            },
            {
              id:116,
              name:'SEVILLA CESPEDES CLAUDIA', group:'20', days:[
                {
                  day:'Lunes', start:'11:15', end:'12:45', classRoom:'E503'
                },
                {
                  day:'Martes', start:'08:15', end:'09:45', classRoom:'E 103'
                },
                {
                  day:'Miércoles', start:'11:15', end:'12:45', classRoom:'E 202'
                }
              ]
            },
            {
              id:117,
              name:'ZAMBRANA TRIVENO JOSE EMILIO', group:'21', days:[
                {
                  day:'Martes', start:'11:15', end:'12:45', classRoom:'E504'
                },
                {
                  day:'Miércoles', start:'11:15', end:'12:45', classRoom:'E518'
                },
                {
                  day:'Jueves', start:'11:15', end:'12:45', classRoom:'E504'
                }
              ]
            },
            {
              id:118,
              name:'MANZANO ANZALDO NELSON TITO', group:'22', days:[
                {
                  day:'Lunes', start:'17:15', end:'18:45', classRoom:'E 108'
                },
                {
                  day:'Martes', start:'15:45', end:'17:15', classRoom:'E 108'
                },
                {
                  day:'Jueves', start:'15:45', end:'17:15', classRoom:'E 107'
                }
              ]
            }
          ]
        },
        {
          nombre:'INFORMATICA II',
          docentes:[
            {
              id:119,
              name:'GUEVARA ESPINOZA JORGE', group:'01', days:[
                {
                  day:'Lunes', start:'06:45', end:'08:15', classRoom:'E 406'
                },
                {
                  day:'Martes', start:'20:15', end:'21:45', classRoom:'E 402'
                },
                {
                  day:'Jueves', start:'06:45', end:'08:15', classRoom:'E 406'
                }
              ]
            },
            {
              id:200,
              name:'RODRIGUEZ MARTINEZ EDUARDO', group:'02', days:[
                {
                  day:'Martes', start:'20:15', end:'21:45', classRoom:'E 401'
                },
                {
                  day:'Jueves', start:'18:45', end:'20:15', classRoom:'E 401'
                },
                {
                  day:'Sábado', start:'09:45', end:'11:15', classRoom:'E 402'
                }
              ]
            },
            {
              id:201,
              name:'COVARRUBIAS VARGAS CAUJMAN', group:'03', days:[
                {
                  day:'Martes', start:'12:45', end:'14:15', classRoom:'E 401'
                },
                {
                  day:'Miércoles', start:'12:45', end:'14:15', classRoom:'E548'
                },
                {
                  day:'Jueves', start:'12:45', end:'14:15', classRoom:'E 401'
                }
              ]
            },
            {
              id:202,
              name:'AVILA MAMANI HECTOR JOSE', group:'20', days:[
                {
                  day:'Lunes', start:'18:45', end:'20:15', classRoom:'E 401'
                },
                {
                  day:'Martes', start:'06:45', end:'08:15', classRoom:'E 407'
                },
                {
                  day:'Miércoles', start:'06:45', end:'08:15', classRoom:'E550'
                }
              ]
            }
          ]
        },
        {
          nombre:'LEGISLACION LABORAL',
          docentes:[
            {
              id:203,
              name:'MUÑOZ CRESPO ALBERTO DANIEL', group:'01', days:[
                {
                  day:'Martes', start:'08:15', end:'09:45', classRoom:'E 202'
                },
                {
                  day:'Jueves', start:'08:15', end:'09:45', classRoom:'E 206'
                },
                {
                  day:'Viernes', start:'08:15', end:'09:45', classRoom:'E524'
                }
              ]
            },
            {
              id:204,
              name:'MUÑOZ CRESPO ALBERTO DANIEL', group:'02', days:[
                {
                  day:'Martes', start:'11:15', end:'12:45', classRoom:'E 102'
                },
                {
                  day:'Jueves', start:'09:45', end:'11:15', classRoom:'E 109'
                },
                {
                  day:'Viernes', start:'11:15', end:'12:45', classRoom:'E 101'
                }
              ]
            },
            {
              id:205,
              name:'AMURRIO MARQUEZ MARY', group:'20', days:[
                {
                  day:'Miércoles', start:'06:45', end:'08:15', classRoom:'E502'
                },
                {
                  day:'Viernes', start:'06:45', end:'08:15', classRoom:'E 204'
                },
                {
                  day:'Sábado', start:'06:45', end:'08:15', classRoom:'E 201'
                }
              ]
            }
          ]
        },
        {
          nombre:'PSICOLOGIA ORGANIZACIONAL',
          docentes:[
            {
              id:206,
              name:'PARDO FERNANDEZ JULIO FRANCO', group:'20', days:[
                {
                  day:'Lunes', start:'17:15', end:'18:45', classRoom:'E 109'
                },
                {
                  day:'Martes', start:'06:45', end:'08:15', classRoom:'E PB-4'
                },
                {
                  day:'Miércoles', start:'17:15', end:'18:45', classRoom:'E 302'
                }
              ]
            },
            {
              id:207,
              name:'VILDOZO ZAMORANO WALTER FERNANDO', group:'21', days:[
                {
                  day:'Lunes', start:'08:15', end:'09:45', classRoom:'E 104'
                },
                {
                  day:'Viernes', start:'08:15', end:'09:45', classRoom:'E 102'
                },
                {
                  day:'Sábado', start:'08:15', end:'09:45', classRoom:'E503'
                }
              ]
            },
            {
              id:208,
              name:'VILLAZON ARANDIA RICARDO IVAN', group:'22', days:[
                {
                  day:'Martes', start:'20:15', end:'21:45', classRoom:'E546'
                },
                {
                  day:'Miércoles', start:'20:15', end:'21:45', classRoom:'E544'
                },
                {
                  day:'Jueves', start:'20:15', end:'21:45', classRoom:'E541'
                }
              ]
            },
            {
              id:209,
              name:'RODRIGUEZ HURTADO JOSE LUIS', group:'23', days:[
                {
                  day:'Martes', start:'17:15', end:'18:45', classRoom:'E 404'
                },
                {
                  day:'Miércoles', start:'17:15', end:'18:45', classRoom:'E 408'
                },
                {
                  day:'Jueves', start:'17:15', end:'18:45', classRoom:'E 404'
                }
              ]
            }
          ]
        },
        {
          nombre:'ADMINISTRACION PUBLICA',
          docentes:[
            {
              id:210,
              name:'ESPADA FLORES JUAN RAMIRO', group:'01', days:[
                {
                  day:'Martes', start:'12:45', end:'14:15', classRoom:'E523'
                },
                {
                  day:'Jueves', start:'11:15', end:'12:45', classRoom:'E524'
                },
                {
                  day:'Sábado', start:'08:15', end:'09:45', classRoom:'E520'
                }
              ]
            },
            {
              id:211,
              name:'RODRIGUEZ MARTINEZ EDUARDO', group:'02', days:[
                {
                  day:'Lunes', start:'20:15', end:'21:45', classRoom:'E524'
                },
                {
                  day:'Jueves', start:'20:15', end:'21:45', classRoom:'E521'
                },
                {
                  day:'Sábado', start:'11:15', end:'12:45', classRoom:'E504'
                }
              ]
            },
            {
              id:212,
              name:'POR DESIGNAR DOCENTE', group:'20', days:[
                {
                  day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E 209'
                },
                {
                  day:'Jueves', start:'18:45', end:'20:15', classRoom:'E520'
                },
                {
                  day:'Viernes', start:'18:45', end:'20:15', classRoom:'E 110'
                }
              ]
            },
            {
              id:213,
              name:'PANTOJA ROCHA YURI NEWTON', group:'21', days:[
                {
                  day:'Miércoles', start:'06:45', end:'08:15', classRoom:'E 204'
                },
                {
                  day:'Jueves', start:'06:45', end:'08:15', classRoom:'E 204'
                },
                {
                  day:'Viernes', start:'06:45', end:'08:15', classRoom:'E 101'
                }
              ]
            },
            {
              id:214,
              name:'AYALA MENDOZA AMILCAR', group:'22', days:[
                {
                  day:'Lunes', start:'18:45', end:'20:15', classRoom:'E 302'
                },
                {
                  day:'Martes', start:'18:45', end:'20:15', classRoom:'E 104'
                },
                {
                  day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E 307'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      nombre:'SEXTO SEMESTRE',
      materias:[
        {
          nombre:'INGLES II',
          docentes:[
            {
              id:215,
              name:'PARDO FERNANDEZ JULIO FRANCO', group:'07', days:[
                {
                  day:'Lunes', start:'08:15', end:'09:45', classRoom:'E 209'
                },
                {
                  day:'Martes', start:'08:15', end:'09:45', classRoom:'E 209'
                },
                {
                  day:'Miércoles', start:'09:45', end:'11:15', classRoom:'E 207'
                }
              ]
            },
            {
              id:216,
              name:'VALLEJO ECHEVERRIA JULIAN', group:'B1', days:[
                {
                  day:'Lunes', start:'11:15', end:'12:45', classRoom:'E 109'
                },
                {
                  day:'Martes', start:'11:15', end:'12:45', classRoom:'E 304'
                },
                {
                  day:'Jueves', start:'11:15', end:'12:45', classRoom:'E 103'
                }
              ]
            }
          ]
        },
        {
          nombre:'PRODUCCION I',
          docentes:[
            {
              id:217,
              name:'CALLA VILLEGAS EDWIN', group:'01', days:[
                {
                  day:'Lunes', start:'18:45', end:'20:15', classRoom:'E517'
                },
                {
                  day:'Viernes', start:'17:15', end:'18:45', classRoom:'E 105'
                }
              ]
            },
            {
              id:218,
              name:'CALLA VILLEGAS EDWIN', group:'02', days:[
                {
                  day:'Lunes', start:'17:15', end:'18:45', classRoom:'E506'
                },
                {
                  day:'Miércoles', start:'17:15', end:'18:45', classRoom:'E 109'
                }
              ]
            },
            {
              id:219,
              name:'ZAPATA BARRIENTOS JOSE RAMIRO', group:'03', days:[
                {
                  day:'Lunes', start:'08:15', end:'09:45', classRoom:'E502'
                },
                {
                  day:'Martes', start:'08:15', end:'09:45', classRoom:'E511'
                }
              ]
            },
            {
              id:220,
              name:'ZAPATA BARRIENTOS JOSE RAMIRO', group:'20', days:[
                {
                  day:'Lunes', start:'11:15', end:'12:45', classRoom:'E 103'
                },
                {
                  day:'Miércoles', start:'08:15', end:'09:45', classRoom:'E502'
                }
              ]
            }
          ]
        },
        {
          nombre:'FINANZAS I',
          docentes:[
            {
              id:221,
              name:'LEYTON GUTIERREZ SONIA', group:'01', days:[
                {
                  day:'Lunes', start:'11:15', end:'12:45', classRoom:'E523'
                },
                {
                  day:'Miércoles', start:'11:15', end:'12:45', classRoom:'E524'
                },
                {
                  day:'Jueves', start:'09:45', end:'11:15', classRoom:'E 304'
                }
              ]
            },
            {
              id:222,
              name:'AGREDA MONTANO GUIDO', group:'20', days:[
                {
                  day:'Lunes', start:'09:45', end:'11:15', classRoom:'E521'
                },
                {
                  day:'Martes', start:'09:45', end:'11:15', classRoom:'E521'
                },
                {
                  day:'Miércoles', start:'09:45', end:'11:15', classRoom:'E523'
                }
              ]
            },
            {
              id:223,
              name:'SUAZNABAR CLAROS FERNANDO ALBERTO', group:'21', days:[
                {
                  day:'Martes', start:'17:15', end:'18:45', classRoom:'E545'
                },
                {
                  day:'Miércoles', start:'17:15', end:'18:45', classRoom:'E545'
                },
                {
                  day:'Viernes', start:'06:45', end:'08:15', classRoom:'E520'
                }
              ]
            }
          ]
        },
        {
          nombre:'INVESTIGACION OPERATIVA',
          docentes:[
            {
              id:224, name:'VILLAGOMEZ VILLARROEL CESAR', group:'01', days:[
                {
                  day:'Miércoles', start:'17:15', end:'18:45', classRoom:'E542'
                },
                {
                  day:'Viernes', start:'17:15', end:'18:45', classRoom:'E544'
                },
                {
                  day:'Sábado', start:'08:15', end:'09:45', classRoom:'E544'
                }
              ]
            },
            {
              id:225, name:'VALDEZ ESCOBAR JORGE ALBERTO', group:'20', days:[
                {
                  day:'Lunes', start:'09:45', end:'11:15', classRoom:'E 404'
                },
                {
                  day:'Miércoles', start:'09:45', end:'11:15', classRoom:'E522'
                },
                {
                  day:'Viernes', start:'09:45', end:'11:15', classRoom:'E522'
                }
              ]
            },
            {
              id:226, name:'VALDEZ ESCOBAR JORGE ALBERTO', group:'21', days:[
                {
                  day:'Lunes', start:'11:15', end:'12:45', classRoom:'E 404'
                },
                {
                  day:'Miércoles', start:'11:15', end:'12:45', classRoom:'E 404'
                },
                {
                  day:'Viernes', start:'11:15', end:'12:45', classRoom:'E 404'
                }
              ]
            },
            {
              id:227, name:'VILLAGOMEZ VILLARROEL CESAR', group:'22', days:[
                {
                  day:'Martes', start:'20:15', end:'21:45', classRoom:'E544'
                },
                {
                  day:'Jueves', start:'20:15', end:'21:45', classRoom:'E546'
                },
                {
                  day:'Sábado', start:'11:15', end:'12:45', classRoom:'E544'
                }
              ]
            }
          ]
        },
        {
          nombre:'MERCADOTECNIA I',
          docentes:[
            {
              id:228, name:'CALLA VILLEGAS EDWIN', group:'01', days:[
                {
                  day:'Martes', start:'15:45', end:'17:15', classRoom:'E 109'
                },
                {
                  day:'Miércoles', start:'15:45', end:'17:15', classRoom:'E 109'
                },
                {
                  day:'Viernes', start:'15:45', end:'17:15', classRoom:'E 201'
                }
              ]
            },
            {
              id:229, name:'ZEGARRA SALDANA PABLO', group:'20', days:[
                {
                  day:'Lunes', start:'20:15', end:'21:45', classRoom:'E 205'
                },
                {
                  day:'Martes', start:'18:45', end:'20:15', classRoom:'E 103'
                },
                {
                  day:'Miércoles', start:'06:45', end:'08:15', classRoom:'E 205'
                }
              ]
            },
            {
              id:330, name:'NAVIA QUIROGA GUSTAVO', group:'21', days:[
                {
                  day:'Martes', start:'20:15', end:'21:45', classRoom:'E PB-4'
                },
                {
                  day:'Viernes', start:'17:15', end:'18:45', classRoom:'E502'
                },
                {
                  day:'Sábado', start:'09:45', end:'11:15', classRoom:'E503'
                }
              ]
            }
          ]
        },
        {
          nombre:'PERSONAL I',
          docentes:[
            {
              id:331, name:'BADANI LENZ RAFAEL FERNANDO', group:'01', days:[
                {
                  day:'Martes', start:'18:45', end:'20:15', classRoom:'E503'
                },
                {
                  day:'Jueves', start:'20:15', end:'21:45', classRoom:'E 203'
                },
                {
                  day:'Viernes', start:'11:15', end:'12:45', classRoom:'E 201', auxiliary:true
                }
              ]
            },
            {
              id:332, name:'GUZMAN BROCKMANN FELIPE HANS WIGBERTO', group:'02', days:[
                {
                  day:'Lunes', start:'06:45', end:'08:15', classRoom:'E504'
                },
                {
                  day:'Miércoles', start:'06:45', end:'08:15', classRoom:'E PB-4'
                },
                {
                  day:'Viernes', start:'06:45', end:'08:15', classRoom:'E PB-4'
                }
              ]
            },
            {
              id:333, name:'BADANI LENZ RAFAEL FERNANDO', group:'20', days:[
                {
                  day:'Martes', start:'12:45', end:'14:15', classRoom:'E PB-4'
                },
                {
                  day:'Jueves', start:'12:45', end:'14:15', classRoom:'E523'
                },
                {
                  day:'Viernes', start:'12:45', end:'14:15', classRoom:'E 202', auxiliary:true
                }
              ]
            },
            {
              id:334, name:'CRESPO FLORES RENE CARLOS', group:'21', days:[
                {
                  day:'Lunes', start:'15:45', end:'17:15', classRoom:'E524'
                },
                {
                  day:'Miércoles', start:'15:45', end:'17:15', classRoom:'E 201'
                },
                {
                  day:'Viernes', start:'15:45', end:'17:15', classRoom:'E521'
                }
              ]
            }
          ]
        }]},
        {
          nombre:'SÉPTIMO SEMESTRE',
          materias:[
            {
              nombre:'PRODUCCION II',
              docentes:[
                {
                  id:335, name:'ZAPATA BARRIENTOS JOSE RAMIRO', group:'01', days:[
                    {
                      day:'Lunes', start:'09:45', end:'11:15', classRoom:'E502'
                    },
                    {
                      day:'Martes', start:'09:45', end:'11:15', classRoom:'E502'
                    },
                    {
                      day:'Miércoles', start:'09:45', end:'11:15', classRoom:'E502'
                    }
                  ]
                },{
                  id:336, name:'VALDIVIEZO MALDONADO LINO JUAN CARLOS', group:'02', days:[
                    {
                      day:'Lunes', start:'06:45', end:'08:15', classRoom:'E 207'
                    },
                    {
                      day:'Martes', start:'06:45', end:'08:15', classRoom:'E 204'
                    },
                    {
                      day:'Miércoles', start:'06:45', end:'08:15', classRoom:'E 207'
                    }
                  ]
                }, {
                  id:337, name:'CALLA VILLEGAS EDWIN', group:'20', days:[
                    {
                      day:'Martes', start:'14:15', end:'15:45', classRoom:'E 109'
                    },
                    {
                      day:'Jueves', start:'14:15', end:'15:45', classRoom:'E 109'
                    },
                    {
                      day:'Viernes', start:'14:15', end:'15:45', classRoom:'E 109'
                    }
                  ]
                }
              ]
            },
            {
              nombre:'MERCADOTECNIA II',
              docentes:[

                {
                  id:338, name:'NAVIA QUIROGA GUSTAVO', group:'02', days:[
                    {
                      day:'Lunes', start:'17:15', end:'18:45', classRoom:'E502'
                    },
                    {
                      day:'Martes', start:'17:15', end:'18:45', classRoom:'E504'
                    },
                    {
                      day:'Jueves', start:'17:15', end:'18:45', classRoom:'E502'
                    }
                  ]
                },
                {
                  id:339, name:'AYMA SOTO FELIX MARCELO', group:'20', days:[
                    {
                      day:'Miércoles', start:'20:15', end:'21:45', classRoom:'E545'
                    },
                    {
                      day:'Jueves', start:'20:15', end:'21:45', classRoom:'E 408'
                    },
                    {
                      day:'Viernes', start:'18:45', end:'20:15', classRoom:'E 306'
                    }
                  ]
                }
              ]
            },
            {
              nombre:'GERENCIA OPERATIVA',
              docentes:[
                {
                  id:340, name:'VARGAS ANTEZANA ADEMAR MARCELO', group:'01', days:[
                    {
                      day:'Martes', start:'14:15', end:'15:45', classRoom:'E PB-4'
                    },
                    {
                      day:'Miércoles', start:'08:15', end:'09:45', classRoom:'E522'
                    },
                    {
                      day:'Jueves', start:'14:15', end:'15:45', classRoom:'E523'
                    }
                  ]
                },
                {
                  id:341, name:'MOSCOSO FORONDA DAVID', group:'20', days:[
                    {
                      day:'Martes', start:'17:15', end:'18:45', classRoom:'E 209'
                    },
                    {
                      day:'Miércoles', start:'17:15', end:'18:45', classRoom:'E 209'
                    },
                    {
                      day:'Jueves', start:'17:15', end:'18:45', classRoom:'E 209'
                    }
                  ]
                },
                {
                  id:342, name:'MOSCOSO FORONDA DAVID', group:'21', days:[
                    {
                      day:'Martes', start:'20:15', end:'21:45', classRoom:'E 307'
                    },
                    {
                      day:'Miércoles', start:'20:15', end:'21:45', classRoom:'E 307'
                    },
                    {
                      day:'Jueves', start:'20:15', end:'21:45', classRoom:'E 307'
                    }
                  ]
                },
                {
                  id:343, name:'MOSCOSO FORONDA DAVID', group:'22', days:[
                    {
                      day:'Martes', start:'18:45', end:'20:15', classRoom:'E 309'
                    },
                    {
                      day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E 302'
                    },
                    {
                      day:'Jueves', start:'18:45', end:'20:15', classRoom:'E 304'
                    }
                  ]
                }
              ]
            },
            {
              nombre:'MERCADOTECNIA III',
              docentes:[
                {
                  id:344, name:'ZEGARRA SALDANA PABLO', group:'20', days:[
                    {
                      day:'Lunes', start:'18:45', end:'20:15', classRoom:'E521'
                    },
                    {
                      day:'Martes', start:'20:15', end:'21:45', classRoom:'E 203'
                    },
                    {
                      day:'Miércoles', start:'12:45', end:'14:15', classRoom:'E 106'
                    }
                  ]
                },
                {
                  id:345, name:'ZAPATA BARRIENTOS JOSE RAMIRO', group:'21', days:[
                    {
                      day:'Lunes', start:'06:45', end:'08:15', classRoom:'E 307'
                    },
                    {
                      day:'Martes', start:'06:45', end:'08:15', classRoom:'E 203'
                    },
                    {
                      day:'Miércoles', start:'06:45', end:'08:15', classRoom:'E525'
                    }
                  ]
                }
              ]
            },
            {
              nombre:'MERCADOTECNIA V',
              docentes:[
                {
                  id:346, name:'ZAPATA BARRIENTOS JOSE RAMIRO', group:'01', days:[
                    {
                      day:'Lunes', start:'14:15', end:'15:45', classRoom:'E502'
                    },
                    {
                      day:'Martes', start:'11:15', end:'12:45', classRoom:'E503'
                    },
                    {
                      day:'Miércoles', start:'11:15', end:'12:45', classRoom:'E 101'
                    }
                  ]
                }
              ]
            },
            {
              nombre:'FINANZAS II',
              docentes:[
                {
                  id:347, name:'AGREDA MONTANO GUIDO', group:'20', days:[
                    {
                      day:'Lunes', start:'08:15', end:'09:45', classRoom:'E521'
                    },
                    {
                      day:'Martes', start:'08:15', end:'09:45', classRoom:'E521'
                    },
                    {
                      day:'Miércoles', start:'08:15', end:'09:45', classRoom:'E523'
                    }
                  ]
                }
              ]
            },
            {
              nombre:'ADMINISTRACION DE COOPERATIVAS',
              docentes:[
                {
                  id:348, name:'AGREDA MONTANO GUIDO', group:'20', days:[
                    {
                      day:'Lunes', start:'15:45', end:'17:15', classRoom:'E521'
                    },
                    {
                      day:'Martes', start:'15:45', end:'17:15', classRoom:'E522'
                    },
                    {
                      day:'Miércoles', start:'15:45', end:'17:15', classRoom:'E523'
                    }
                  ]
                }
              ]
            },
            {
              nombre:'PERSONAL II',
              docentes:[
                {
                  id:349, name:'MENDOZA ARAOZ JAMIL MARCELO', group:'01', days:[
                    {
                      day:'Martes', start:'18:45', end:'20:15', classRoom:'E521'
                    },
                    {
                      day:'Jueves', start:'18:45', end:'20:15', classRoom:'E 102'
                    },
                    {
                      day:'Sábado', start:'09:45', end:'11:15', classRoom:'E502'
                    }
                  ]
                },
                {
                  id:350, name:'RAMIREZ MOLINA GONZALO', group:'20', days:[
                    {
                      day:'Lunes', start:'17:15', end:'18:45', classRoom:'E 206'
                    },
                    {
                      day:'Martes', start:'17:15', end:'18:45', classRoom:'E501'
                    },
                    {
                      day:'Miércoles', start:'17:15', end:'18:45', classRoom:'E 207'
                    }
                  ]
                },
                {
                  id:351, name:'MENDOZA ARAOZ JAMIL MARCELO', group:'21', days:[
                    {
                      day:'Martes', start:'17:15', end:'18:45', classRoom:'E 110'
                    },
                    {
                      day:'Viernes', start:'17:15', end:'18:45', classRoom:'E 304'
                    },
                    {
                      day:'Sábado', start:'11:15', end:'12:45', classRoom:'E 102'
                    }
                  ]
                }
              ]
            },
            {
              nombre:'PERSONAL III',
              docentes:[
                {
                  id:352, name:'VALDEZ ZEGARRA RAFAEL A.', group:'01', days:[
                    {
                      day:'Lunes', start:'20:15', end:'21:45', classRoom:'E 202'
                    },
                    {
                      day:'Jueves', start:'18:45', end:'20:15', classRoom:'E502'
                    },
                    {
                      day:'Sábado', start:'08:15', end:'09:45', classRoom:'E522'
                    }
                  ]
                }
              ]
            }
          ]
        },{
        nombre:'OCTAVO SEMESTRE',
        materias:[
        {
          nombre:'POLITICA EMPRESARIAL',
          docentes:[
            {
              id:353, name:'CAMACHO GUZMAN FRANCO ARTURO', group:'01', days:[
                {
                  day:'Martes', start:'09:45', end:'11:15', classRoom:'E 309'
                },
                {
                  day:'Miércoles', start:'09:45', end:'11:15', classRoom:'E 309'
                },
                {
                  day:'Jueves', start:'08:15', end:'09:45', classRoom:'E 109'
                }
              ]
            },
            {
              id:354, name:'GUTIERREZ OVANDO ISELA', group:'02', days:[
                {
                  day:'Martes', start:'15:45', end:'17:15', classRoom:'E542'
                },
                {
                  day:'Miércoles', start:'11:15', end:'12:45', classRoom:'E 209'
                },
                {
                  day:'Jueves', start:'15:45', end:'17:15', classRoom:'E 306'
                }
              ]
            },
            {
              id:355, name:'RODRIGUEZ HURTADO JOSE LUIS', group:'20', days:[
                {
                  day:'Martes', start:'09:45', end:'11:15', classRoom:'E 204'
                },
                {
                  day:'Miércoles', start:'09:45', end:'11:15', classRoom:'E 305'
                },
                {
                  day:'Jueves', start:'09:45', end:'11:15', classRoom:'E 204'
                }
              ]
            }
          ]
        },
        {
          nombre:'PREPARACION Y EVALUACION DE PROYECTOS',
          docentes:[
            {
              id:356, name:'OLIVERA TAPIA JUAN CARLOS', group:'01', days:[
                {
                  day:'Lunes', start:'08:15', end:'09:45', classRoom:'E 204'
                },
                {
                  day:'Martes', start:'08:15', end:'09:45', classRoom:'E523'
                },
                {
                  day:'Miércoles', start:'08:15', end:'09:45', classRoom:'E513'
                }
              ]
            },
            {
              id:357, name:'CHAVEZ MARCELA MABEL', group:'20', days:[
                {
                  day:'Lunes', start:'18:45', end:'20:15', classRoom:'E 203'
                },
                {
                  day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E 207'
                },
                {
                  day:'Sábado', start:'08:15', end:'09:45', classRoom:'E 203'
                }
              ]
            },
            {
              id:358, name:'CHAVEZ MARCELA MABEL', group:'21', days:[
                {
                  day:'Lunes', start:'20:15', end:'21:45', classRoom:'E 203'
                },
                {
                  day:'Miércoles', start:'20:15', end:'21:45', classRoom:'E 202'
                },
                {
                  day:'Sábado', start:'09:45', end:'11:15', classRoom:'E 202'
                }
              ]
            }
          ]
        },
        {
          nombre:'TALLER I',
          docentes:[
            {
              id: 359, name: 'VILDOZO ZAMORANO WALTER FERNANDO', group: '01', days: [
                {
                  day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 106'
                },
                {
                  day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 209'
                },
                {
                  day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 109'
                }
              ]
            },
            {
              id: 360,
              name: "RODRIGUEZ HURTADO JOSE LUIS",
              group: "03",
              days: [
                { day: "Martes", start: "08:15", end: "09:45", classRoom: "E 304" },
                { day: "Miércoles", start: "08:15", end: "09:45", classRoom: "E 110" },
                { day: "Jueves", start: "08:15", end: "09:45", classRoom: "E 103" }
              ]
            },
            {
              id: 361,
              name: "LOPEZ GUMUCIO RICARDO",
              group: "22",
              days: [
                { day: "Martes", start: "06:45", end: "08:15", classRoom: "ADM1" },
                { day: "Miércoles", start: "06:45", end: "08:15", classRoom: "ADM1" },
                { day: "Jueves", start: "06:45", end: "08:15", classRoom: "ADM1" }
              ]
            },
            {
              id: 362,
              name: "VALDIVIEZO MALDONADO LINO JUAN CARLOS",
              group: "23",
              days: [
                { day: "Martes", start: "09:45", end: "11:15", classRoom: "ADM1" },
                { day: "Jueves", start: "11:15", end: "12:45", classRoom: "ADM1" },
                { day: "Viernes", start: "11:15", end: "12:45", classRoom: "ADM1" }
              ]
            }
          ]
        },
        {
          nombre:'MERCADOTECNIA VI',
          docentes:[
            {
              id:363, name:'LOZADA TORRICO RUDY REMBERTO', group:'01', days:[
                {
                  day:'Lunes', start:'18:45', end:'20:15', classRoom:'E501'
                },
                {
                  day:'Martes', start:'20:15', end:'21:45', classRoom:'E 303'
                },
                {
                  day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E 201'
                }
              ]
            },
            {
              id:364, name:'MEDRANO CLAURE DANNY OSCAR', group:'02', days:[
                {
                  day:'Lunes', start:'09:45', end:'11:15', classRoom:'E 203'
                },
                {
                  day:'Miércoles', start:'09:45', end:'11:15', classRoom:'E 203'
                },
                {
                  day:'Viernes', start:'09:45', end:'11:15', classRoom:'E 208'
                }
              ]
            }
          ]
        },
        {
          nombre:'MERCADOTECNIA VII',
          docentes:[
            {
              id:365, name:'MENDOZA ARAOZ JAMIL MARCELO', group:'01', days:[
                {
                  day:'Lunes', start:'20:15', end:'21:45', classRoom:'E 101'
                },
                {
                  day:'Miércoles', start:'20:15', end:'21:45', classRoom:'E 103'
                },
                {
                  day:'Jueves', start:'20:15', end:'21:45', classRoom:'E 103'
                }
              ]
            }
          ]
        },
        {
          nombre:'FINANZAS IV',
          docentes:[
            {
              id:366, name:'VALLEJO RUIZ JAVIER', group:'01', days:[
                {
                  day:'Lunes', start:'20:15', end:'21:45', classRoom:'E503'
                },
                {
                  day:'Martes', start:'18:45', end:'20:15', classRoom:'E 110'
                },
                {
                  day:'Sábado', start:'09:45', end:'11:15', classRoom:'E 207'
                }
              ]
            },
            {
              id:367, name:'RODRIGUEZ MARTINEZ EDUARDO', group:'20', days:[
                {
                  day:'Martes', start:'18:45', end:'20:15', classRoom:'E 203'
                },
                {
                  day:'Miércoles', start:'20:15', end:'21:45', classRoom:'E523'
                },
                {
                  day:'Viernes', start:'18:45', end:'20:15', classRoom:'E522'
                }
              ]
            }
          ]
        },
        {
          nombre:'FINANZAS V',
          docentes:[
            {
              id:368, name:'RODRIGUEZ MARTINEZ EDUARDO', group:'01', days:[
                {
                  day:'Lunes', start:'18:45', end:'20:15', classRoom:'E522'
                },
                {
                  day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E524'
                },
                {
                  day:'Viernes', start:'20:15', end:'21:45', classRoom:'E521'
                }
              ]
            }
          ]
        },
        {
          nombre:'PERSONAL IV',
          docentes:[
            {
              id:369, name:'GUZMAN BROCKMANN FELIPE HANS WIGBERTO', group:'20', days:[
                {
                  day:'Lunes', start:'18:45', end:'20:15', classRoom:'E 202'
                },
                {
                  day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E 504'
                },
                {
                  day:'Viernes', start:'18:45', end:'20:15', classRoom:'E 205'
                }
              ]
            }
          ]
        },
        {
          nombre:'PERSONAL V',
          docentes:[
            {
              id:370, name:'RAMIREZ MOLINA GONZALO', group:'20', days:[
                {
                  day:'Lunes', start:'18:45', end:'20:15', classRoom:'E 109'
                },
                {
                  day:'Martes', start:'15:45', end:'17:15', classRoom:'E 208'
                },
                {
                  day:'Miércoles', start:'15:45', end:'17:15', classRoom:'E 208'
                }
              ]
            }
          ]
        }]
    },
    {
      nombre:'NOVENO SEMESTRE',
      materias:[
        {
          nombre:'ADMINISTRACION DE PROYECTOS',
          docentes:[
            {
              id: 371,
              name:'SEJAS CHOQUE JUAN CARLOS',
              group:'01',
              days:[
                {
                  day:'Martes', start:'08:15', end:'09:45', classRoom:'E520'
                },
                {
                  day:'Miércoles', start:'08:15', end:'09:45', classRoom:'E504'
                },
                {
                  day:'Jueves', start:'08:15', end:'09:45', classRoom:'E PB-4'
                }
              ]
            },
            {
              id: 372,
              name:'FERRUFINO GARCIA ALEXANDER',
              group:'02',
              days:[
                {
                  day:'Lunes', start:'11:15', end:'12:45', classRoom:'E 110'
                },
                {
                  day:'Miércoles', start:'11:15', end:'12:45', classRoom:'E 302'
                },
                {
                  day:'Viernes', start:'11:15', end:'12:45', classRoom:'E 110'
                }
              ]
            },
            {
              id: 373,
              name:'PARDO FERNANDEZ JULIO FRANCO',
              group:'20',
              days:[
                {
                  day:'Lunes', start:'06:45', end:'08:15', classRoom:'E 205'
                },
                {
                  day:'Martes', start:'17:15', end:'18:45', classRoom:'E 109'
                },
                {
                  day:'Miércoles', start:'06:45', end:'08:15', classRoom:'E 203'
                }
              ]
            }
          ]
        },
        {
          nombre:'LEGISLACION EMPRESARIAL',
          docentes:[
            {
              id: 374,
              name:'JIMENEZ PINTO EDWIN',
              group:'01',
              days:[
                {
                  day:'Martes', start:'17:15', end:'18:45', classRoom:'E543'
                },
                {
                  day:'Miércoles', start:'17:15', end:'18:45', classRoom:'E 206'
                },
                {
                  day:'Viernes', start:'17:15', end:'18:45', classRoom:'E 109'
                }
              ]
            },
            {
              id: 375,
              name:'JIMENEZ PINTO EDWIN',
              group:'02',
              days:[
                {
                  day:'Martes', start:'20:15', end:'21:45', classRoom:'E541'
                },
                {
                  day:'Miércoles', start:'20:15', end:'21:45', classRoom:'E504'
                },
                {
                  day:'Sábado', start:'11:15', end:'12:45', classRoom:'E520'
                }
              ]
            },
            {
              id: 376,
              name:'AYALA MENDOZA AMILCAR',
              group:'03',
              days:[
                {
                  day:'Miércoles', start:'20:15', end:'21:45', classRoom:'E 203'
                },
                {
                  day:'Jueves', start:'18:45', end:'20:15', classRoom:'E PB-4'
                },
                {
                  day:'Viernes', start:'18:45', end:'20:15', classRoom:'E PB-4'
                }
              ]
            },
            {
              id: 377,
              name:'QUIROZ GOMEZ CARMEN RITA',
              group:'04',
              days:[
                {
                  day:'Martes', start:'11:15', end:'12:45', classRoom:'E512'
                },
                {
                  day:'Miércoles', start:'08:15', end:'09:45', classRoom:'E521'
                },
                {
                  day:'Jueves', start:'11:15', end:'12:45', classRoom:'E514'
                }
              ]
            }
          ]
        },
        {
          nombre:'TALLER II',
          docentes:[
            {
              id: 378,
              name:"TORRES ARANDIA WILLIAM",
              group:"F1",
              days:[
                { day:"Martes", start:"14:15", end:"15:45", classRoom:"ADM1" },
                { day:"Miércoles", start:"14:15", end:"15:45", classRoom:"ADM1" },
                { day:"Jueves", start:"14:15", end:"15:45", classRoom:"ADM1" }
              ]
            },
            {
              id: 379,
              name:"RAMIREZ MOLINA GONZALO",
              group:"F3",
              days:[
                { day:"Lunes", start:"15:45", end:"17:15", classRoom:"ADM1" },
                { day:"Martes", start:"09:45", end:"11:15", classRoom:"ADM1" },
                { day:"Miércoles", start:"09:45", end:"11:15", classRoom:"ADM1" }
              ]
            },
            {
              id: 380,
              name:"VALDIVIEZO MALDONADO LINO JUAN CARLOS",
              group:"F4",
              days:[
                { day:"Martes", start:"08:15", end:"09:45", classRoom:"ADM1" },
                { day:"Jueves", start:"08:15", end:"09:45", classRoom:"ADM1" },
                { day:"Viernes", start:"08:15", end:"09:45", classRoom:"ADM1" }
              ]
            },
            {
              id: 381,
              name:"VARGAS OROSCO FREDDY",
              group:"F5",
              days:[
                { day:"Lunes", start:"09:45", end:"11:15", classRoom:"ADM1" },
                { day:"Miércoles", start:"09:45", end:"11:15", classRoom:"ADM1" },
                { day:"Viernes", start:"09:45", end:"11:15", classRoom:"ADM1" }
              ]
            },
            {
              id: 382,
              name:"AYMA SOTO FELIX MARCELO",
              group:"M1",
              days:[
                { day:"Lunes", start:"18:45", end:"20:15", classRoom:"ADM1" },
                { day:"Martes", start:"18:45", end:"20:15", classRoom:"ADM1" },
                { day:"Viernes", start:"20:15", end:"21:45", classRoom:"ADM1" }
              ]
            },
            {
              id: 383,
              name:"VILLAZON ARANDIA RICARDO IVAN",
              group:"M2",
              days:[
                { day:"Lunes", start:"17:15", end:"18:45", classRoom:"ADM1" },
                { day:"Martes", start:"17:15", end:"18:45", classRoom:"ADM1" },
                { day:"Miércoles", start:"17:15", end:"18:45", classRoom:"ADM1" }
              ]
            },
            {
              id: 384,
              name:"POZO VALLEJOS MARIA ESTHER",
              group:"M3",
              days:[
                { day:"Lunes", start:"12:45", end:"14:15", classRoom:"ADM1" },
                { day:"Miércoles", start:"12:45", end:"14:15", classRoom:"ADM1" },
                { day:"Viernes", start:"12:45", end:"14:15", classRoom:"ADM1" }
              ]
            },
            {
              id: 385,
              name:"MOSCOSO FORONDA DAVID",
              group:"M4",
              days:[
                { day:"Martes", start:"15:45", end:"17:15", classRoom:"ADM1" },
                { day:"Miércoles", start:"15:45", end:"17:15", classRoom:"ADM1" },
                { day:"Jueves", start:"15:45", end:"17:15", classRoom:"ADM1" }
              ]
            },
            {
              id: 386,
              name:"CARDENAS SARAVIA TITO IVAN",
              group:"M5",
              days:[
                { day:"Lunes", start:"15:45", end:"17:15", classRoom:"ADM1" },
                { day:"Martes", start:"15:45", end:"17:15", classRoom:"ADM1" },
                { day:"Miércoles", start:"15:45", end:"17:15", classRoom:"ADM1" }
              ]
            },
            {
              id: 387,
              name:"RAMIREZ MOLINA GONZALO",
              group:"M7",
              days:[
                { day:"Lunes", start:"20:15", end:"21:45", classRoom:"ADM1" },
                { day:"Martes", start:"20:15", end:"21:45", classRoom:"ADM1" },
                { day:"Miércoles", start:"20:15", end:"21:45", classRoom:"ADM1" }
              ]
            },
            {
              id: 388,
              name:"VILLAZON DEL CARPIO OSMAN ERICK",
              group:"M8",
              days:[
                { day:"Miércoles", start:"09:45", end:"11:15", classRoom:"ADM1" },
                { day:"Jueves", start:"12:45", end:"14:15", classRoom:"ADM1" },
                { day:"Viernes", start:"12:45", end:"14:15", classRoom:"ADM1" }
              ]
            },
            {
              id: 389,
              name:"VALDEZ ZEGARRA RAFAEL A.",
              group:"R1",
              days:[
                { day:"Martes", start:"18:45", end:"20:15", classRoom:"E 202" },
                { day:"Miércoles", start:"18:45", end:"20:15", classRoom:"E 525" },
                { day:"Viernes", start:"18:45", end:"20:15", classRoom:"E 202" }
              ]
            },
            {
              id: 390,
              name:"BURGOS MEDINA CARLOS ALBERTO",
              group:"R4",
              days:[
                { day:"Lunes", start:"20:15", end:"21:45", classRoom:"E 308" },
                { day:"Martes", start:"20:15", end:"21:45", classRoom:"E 308" },
                { day:"Miércoles", start:"12:45", end:"14:15", classRoom:"E 102" }
              ]
            },
            {
              id: 391,
              name:"ZEGARRA SALDANA PABLO",
              group:"R5",
              days:[
                { day:"Lunes", start:"17:15", end:"18:45", classRoom:"ADM1" },
                { day:"Martes", start:"17:15", end:"18:45", classRoom:"ADM1" },
                { day:"Miércoles", start:"14:15", end:"15:45", classRoom:"ADM1" }
              ]
            }

          ]
        },
        {
          nombre:'MERCADOTECNIA IV',
          docentes:[
            {
              id: 392,
              name:'NAVIA QUIROGA GUSTAVO',
              group:'01',
              days:[
                {
                  day:'Miércoles', start:'11:15', end:'12:45', classRoom:'E502'
                },
                {
                  day:'Viernes', start:'18:45', end:'20:15', classRoom:'E502'
                },
                {
                  day:'Sábado', start:'08:15', end:'09:45', classRoom:'E501'
                }
              ]
            },
            {
              id: 393,
              name:'NAVIA QUIROGA GUSTAVO',
              group:'20',
              days:[
                {
                  day:'Lunes', start:'18:45', end:'20:15', classRoom:'E502'
                },
                {
                  day:'Miércoles', start:'20:15', end:'21:45', classRoom:'E502'
                },
                {
                  day:'Viernes', start:'20:15', end:'21:45', classRoom:'E504'
                }
              ]
            },
            {
              id: 394,
              name:'IRIARTE DE LA FUENTE MARCELA',
              group:'21',
              days:[
                {
                  day:'Lunes', start:'11:15', end:'12:45', classRoom:'E502'
                },
                {
                  day:'Martes', start:'11:15', end:'12:45', classRoom:'E502'
                },
                {
                  day:'Jueves', start:'11:15', end:'12:45', classRoom:'E502'
                }
              ]
            }
          ]
        },
        {
          nombre:'FINANZAS VI',
          docentes:[
            {
              id: 395,
              name:'VALLEJO RUIZ JAVIER',
              group:'20',
              days:[
                {
                  day:'Lunes', start:'18:45', end:'20:15', classRoom:'E548'
                },
                {
                  day:'Miércoles', start:'18:45', end:'20:15', classRoom:'E 106'
                },
                {
                  day:'Sábado', start:'06:45', end:'08:15', classRoom:'E520'
                }
              ]
            }
          ]
        },
        {
          nombre:'PERSONAL VI',
          docentes:[
            {
              id: 396,
              name:'BADANI LENZ RAFAEL FERNANDO',
              group:'20',
              days:[
                {
                  day:'Martes', start:'20:15', end:'21:45', classRoom:'E 109'
                },
                {
                  day:'Miércoles', start:'20:15', end:'21:45', classRoom:'E 109'
                },
                {
                  day:'Sábado', start:'08:15', end:'09:45', classRoom:'E521'
                }
              ]
            }
          ]
        },
        {
          nombre:'PRACTICA EMPRESARIAL',
          docentes:[
            {
              id: 397,
              name:'VILDOZO ZAMORANO WALTER FERNANDO',
              group:'20',
              days:[
                {
                  day:'Lunes', start:'12:45', end:'14:15', classRoom:'E 105'
                },
                {
                  day:'Viernes', start:'11:15', end:'12:45', classRoom:'E 102'
                },
                {
                  day:'Sábado', start:'11:15', end:'12:45', classRoom:'E 109'
                }
              ]
            },
            {
              name:"GUZMAN BROCKMANN FELIPE HANS WIGBERTO",
              group:21,
              days:[
                { day:"Martes", start:"18:45", end:"20:15", classRoom:"E 502" },
                { day:"Jueves", start:"17:15", end:"18:45", classRoom:"E 503" },
                { day:"Sábado", start:"08:15", end:"09:45", classRoom:"E 205" }
              ]
            },
            {
              id: 398,
              name:"CHAVEZ MARCELA MABEL",
              group:22,
              days:[
                { day:"Lunes", start:"17:15", end:"18:45", classRoom:"E 301" },
                { day:"Viernes", start:"20:15", end:"21:45", classRoom:"E 202" },
                { day:"Sábado", start:"11:15", end:"12:45", classRoom:"E 203" }
              ]
            },
            {
              id: 399,
              name:"MALDONADO ROJAS RAMIRO",
              group:23,
              days:[
                { day:"Lunes", start:"06:45", end:"08:15", classRoom:"E 109" },
                { day:"Miércoles", start:"08:15", end:"09:45", classRoom:"E 107" },
                { day:"Jueves", start:"06:45", end:"08:15", classRoom:"E 301" }
              ]
            },
            {
              id: 400,
              name:"CHAVEZ MARCELA MABEL",
              group:24,
              days:[
                { day:"Miércoles", start:"17:15", end:"18:45", classRoom:"E 201" },
                { day:"Jueves", start:"20:15", end:"21:45", classRoom:"E 206" },
                { day:"Viernes", start:"18:45", end:"20:15", classRoom:"E 207" }
              ]
            }

          ]
        }
      ]
    }
  ]
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
