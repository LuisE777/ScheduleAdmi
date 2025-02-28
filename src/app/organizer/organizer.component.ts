
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
              id:1, name:'VILLAGOMEZ VILLARROEL CESAR', group:'01', days:[
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
              id:2, name:'VALDEZ ESCOBAR JORGE ALBERTO', group:'20', days:[
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
              id:3, name:'VALDEZ ESCOBAR JORGE ALBERTO', group:'21', days:[
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
              id:4, name:'VILLAGOMEZ VILLARROEL CESAR', group:'22', days:[
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
              id:1, name:'CALLA VILLEGAS EDWIN', group:'01', days:[
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
              id:2, name:'ZEGARRA SALDANA PABLO', group:'20', days:[
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
              id:3, name:'NAVIA QUIROGA GUSTAVO', group:'21', days:[
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
              id:2, name:'BADANI LENZ RAFAEL FERNANDO', group:'01', days:[
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
              id:4, name:'GUZMAN BROCKMANN FELIPE HANS WIGBERTO', group:'02', days:[
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
              id:5, name:'BADANI LENZ RAFAEL FERNANDO', group:'20', days:[
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
              id:6, name:'CRESPO FLORES RENE CARLOS', group:'21', days:[
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
                  id:1, name:'ZAPATA BARRIENTOS JOSE RAMIRO', group:'01', days:[
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
                  id:1, name:'VALDIVIEZO MALDONADO LINO JUAN CARLOS', group:'02', days:[
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
                  id:1, name:'CALLA VILLEGAS EDWIN', group:'20', days:[
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
                  id:2, name:'NAVIA QUIROGA GUSTAVO', group:'02', days:[
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
                  id:3, name:'AYMA SOTO FELIX MARCELO', group:'20', days:[
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
                  id:1, name:'VARGAS ANTEZANA ADEMAR MARCELO', group:'01', days:[
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
                  id:2, name:'MOSCOSO FORONDA DAVID', group:'20', days:[
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
                  id:3, name:'MOSCOSO FORONDA DAVID', group:'21', days:[
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
                  id:4, name:'MOSCOSO FORONDA DAVID', group:'22', days:[
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
                  id:1, name:'ZEGARRA SALDANA PABLO', group:'20', days:[
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
                  id:1, name:'ZAPATA BARRIENTOS JOSE RAMIRO', group:'21', days:[
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
                  id:2, name:'ZAPATA BARRIENTOS JOSE RAMIRO', group:'01', days:[
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
                  id:1, name:'AGREDA MONTANO GUIDO', group:'20', days:[
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
                  id:1, name:'AGREDA MONTANO GUIDO', group:'20', days:[
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
                  id:1, name:'MENDOZA ARAOZ JAMIL MARCELO', group:'01', days:[
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
                  id:2, name:'RAMIREZ MOLINA GONZALO', group:'20', days:[
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
                  id:3, name:'MENDOZA ARAOZ JAMIL MARCELO', group:'21', days:[
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
                  id:1, name:'VALDEZ ZEGARRA RAFAEL A.', group:'01', days:[
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
              id:1, name:'CAMACHO GUZMAN FRANCO ARTURO', group:'01', days:[
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
              id:2, name:'GUTIERREZ OVANDO ISELA', group:'02', days:[
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
              id:3, name:'RODRIGUEZ HURTADO JOSE LUIS', group:'20', days:[
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
              id:1, name:'OLIVERA TAPIA JUAN CARLOS', group:'01', days:[
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
              id:2, name:'CHAVEZ MARCELA MABEL', group:'20', days:[
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
              id:3, name:'CHAVEZ MARCELA MABEL', group:'21', days:[
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
              id: 1, name: 'VILDOZO ZAMORANO WALTER FERNANDO', group: '01', days: [
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
              name: "RODRIGUEZ HURTADO JOSE LUIS",
              group: "03",
              days: [
                { day: "Martes", start: "08:15", end: "09:45", classRoom: "E 304" },
                { day: "Miércoles", start: "08:15", end: "09:45", classRoom: "E 110" },
                { day: "Jueves", start: "08:15", end: "09:45", classRoom: "E 103" }
              ]
            },
            {
              name: "LOPEZ GUMUCIO RICARDO",
              group: "22",
              days: [
                { day: "Martes", start: "06:45", end: "08:15", classRoom: "ADM1" },
                { day: "Miércoles", start: "06:45", end: "08:15", classRoom: "ADM1" },
                { day: "Jueves", start: "06:45", end: "08:15", classRoom: "ADM1" }
              ]
            },
            {
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
              id:1, name:'LOZADA TORRICO RUDY REMBERTO', group:'01', days:[
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
              id:2, name:'MEDRANO CLAURE DANNY OSCAR', group:'02', days:[
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
              id:1, name:'MENDOZA ARAOZ JAMIL MARCELO', group:'01', days:[
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
              id:1, name:'VALLEJO RUIZ JAVIER', group:'01', days:[
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
              id:2, name:'RODRIGUEZ MARTINEZ EDUARDO', group:'20', days:[
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
              id:1, name:'RODRIGUEZ MARTINEZ EDUARDO', group:'01', days:[
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
              id:1, name:'GUZMAN BROCKMANN FELIPE HANS WIGBERTO', group:'20', days:[
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
              id:1, name:'RAMIREZ MOLINA GONZALO', group:'20', days:[
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
              name:"TORRES ARANDIA WILLIAM",
              group:"F1",
              days:[
                { day:"Martes", start:"14:15", end:"15:45", classRoom:"ADM1" },
                { day:"Miércoles", start:"14:15", end:"15:45", classRoom:"ADM1" },
                { day:"Jueves", start:"14:15", end:"15:45", classRoom:"ADM1" }
              ]
            },
            {
              name:"RAMIREZ MOLINA GONZALO",
              group:"F3",
              days:[
                { day:"Lunes", start:"15:45", end:"17:15", classRoom:"ADM1" },
                { day:"Martes", start:"09:45", end:"11:15", classRoom:"ADM1" },
                { day:"Miércoles", start:"09:45", end:"11:15", classRoom:"ADM1" }
              ]
            },
            {
              name:"VALDIVIEZO MALDONADO LINO JUAN CARLOS",
              group:"F4",
              days:[
                { day:"Martes", start:"08:15", end:"09:45", classRoom:"ADM1" },
                { day:"Jueves", start:"08:15", end:"09:45", classRoom:"ADM1" },
                { day:"Viernes", start:"08:15", end:"09:45", classRoom:"ADM1" }
              ]
            },
            {
              name:"VARGAS OROSCO FREDDY",
              group:"F5",
              days:[
                { day:"Lunes", start:"09:45", end:"11:15", classRoom:"ADM1" },
                { day:"Miércoles", start:"09:45", end:"11:15", classRoom:"ADM1" },
                { day:"Viernes", start:"09:45", end:"11:15", classRoom:"ADM1" }
              ]
            },
            {
              name:"AYMA SOTO FELIX MARCELO",
              group:"M1",
              days:[
                { day:"Lunes", start:"18:45", end:"20:15", classRoom:"ADM1" },
                { day:"Martes", start:"18:45", end:"20:15", classRoom:"ADM1" },
                { day:"Viernes", start:"20:15", end:"21:45", classRoom:"ADM1" }
              ]
            },
            {
              name:"VILLAZON ARANDIA RICARDO IVAN",
              group:"M2",
              days:[
                { day:"Lunes", start:"17:15", end:"18:45", classRoom:"ADM1" },
                { day:"Martes", start:"17:15", end:"18:45", classRoom:"ADM1" },
                { day:"Miércoles", start:"17:15", end:"18:45", classRoom:"ADM1" }
              ]
            },
            {
              name:"POZO VALLEJOS MARIA ESTHER",
              group:"M3",
              days:[
                { day:"Lunes", start:"12:45", end:"14:15", classRoom:"ADM1" },
                { day:"Miércoles", start:"12:45", end:"14:15", classRoom:"ADM1" },
                { day:"Viernes", start:"12:45", end:"14:15", classRoom:"ADM1" }
              ]
            },
            {
              name:"MOSCOSO FORONDA DAVID",
              group:"M4",
              days:[
                { day:"Martes", start:"15:45", end:"17:15", classRoom:"ADM1" },
                { day:"Miércoles", start:"15:45", end:"17:15", classRoom:"ADM1" },
                { day:"Jueves", start:"15:45", end:"17:15", classRoom:"ADM1" }
              ]
            },
            {
              name:"CARDENAS SARAVIA TITO IVAN",
              group:"M5",
              days:[
                { day:"Lunes", start:"15:45", end:"17:15", classRoom:"ADM1" },
                { day:"Martes", start:"15:45", end:"17:15", classRoom:"ADM1" },
                { day:"Miércoles", start:"15:45", end:"17:15", classRoom:"ADM1" }
              ]
            },
            {
              name:"RAMIREZ MOLINA GONZALO",
              group:"M7",
              days:[
                { day:"Lunes", start:"20:15", end:"21:45", classRoom:"ADM1" },
                { day:"Martes", start:"20:15", end:"21:45", classRoom:"ADM1" },
                { day:"Miércoles", start:"20:15", end:"21:45", classRoom:"ADM1" }
              ]
            },
            {
              name:"VILLAZON DEL CARPIO OSMAN ERICK",
              group:"M8",
              days:[
                { day:"Miércoles", start:"09:45", end:"11:15", classRoom:"ADM1" },
                { day:"Jueves", start:"12:45", end:"14:15", classRoom:"ADM1" },
                { day:"Viernes", start:"12:45", end:"14:15", classRoom:"ADM1" }
              ]
            },
            {
              name:"VALDEZ ZEGARRA RAFAEL A.",
              group:"R1",
              days:[
                { day:"Martes", start:"18:45", end:"20:15", classRoom:"E 202" },
                { day:"Miércoles", start:"18:45", end:"20:15", classRoom:"E 525" },
                { day:"Viernes", start:"18:45", end:"20:15", classRoom:"E 202" }
              ]
            },
            {
              name:"BURGOS MEDINA CARLOS ALBERTO",
              group:"R4",
              days:[
                { day:"Lunes", start:"20:15", end:"21:45", classRoom:"E 308" },
                { day:"Martes", start:"20:15", end:"21:45", classRoom:"E 308" },
                { day:"Miércoles", start:"12:45", end:"14:15", classRoom:"E 102" }
              ]
            },
            {
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
              name:"CHAVEZ MARCELA MABEL",
              group:22,
              days:[
                { day:"Lunes", start:"17:15", end:"18:45", classRoom:"E 301" },
                { day:"Viernes", start:"20:15", end:"21:45", classRoom:"E 202" },
                { day:"Sábado", start:"11:15", end:"12:45", classRoom:"E 203" }
              ]
            },
            {
              name:"MALDONADO ROJAS RAMIRO",
              group:23,
              days:[
                { day:"Lunes", start:"06:45", end:"08:15", classRoom:"E 109" },
                { day:"Miércoles", start:"08:15", end:"09:45", classRoom:"E 107" },
                { day:"Jueves", start:"06:45", end:"08:15", classRoom:"E 301" }
              ]
            },
            {
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
    doc.text('HORARIO - SIAT', 70, 15)
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
    doc.save('HORARIO SIAT.pdf');
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
