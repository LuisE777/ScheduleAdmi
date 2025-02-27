
import autoTable from 'jspdf-autotable';
import { Component, ElementRef, ViewChild } from '@angular/core';
import 'jspdf-autotable';
import { jsPDF } from 'jspdf';
import Swal from 'sweetalert2';


import html2canvas from 'html2canvas';
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent {
  @ViewChild('contenido', { static: false }) contenido!: ElementRef;
  colors: any[] = [
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
  inUse: any[] = [];
  semestres: any = [
    {
      nombre: 'PRIMER SEMESTRE',
      materias: [
        {
          nombre: 'ADMINISTRACIÓN GENERAL',
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
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E201' },
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
                { day: 'Lunes', start: '15:45', end: '17:15', classRoom: 'E205' },
                { day: 'Miércoles', start: '15:45', end: '17:15', classRoom: 'E503' },
                { day: 'Jueves', start: '15:45', end: '17:15', classRoom: 'E503' }
              ]
            },
            {
              id: 7,
              name: 'TORRICO OCAMPO ENRIQUE',
              group: '23',
              days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E501' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E530' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E530' }
              ]
            }
          ]
        },
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
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E109' },
                { day: 'Martes', start: '14:15', end: '15:45', classRoom: 'E106' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E303' }
              ]
            },
            {
              id: 11,
              name: 'VILLAZON ARANDIA RICARDO IVAN',
              group: '04',
              days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E503' },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E105' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E106' }
              ]
            }
          ]
        },
        {
          nombre: 'ALGEBRA',
          docentes: [
            {
              id: 12,
              name: 'QUISPE CABRERA RENE',
              group: '01',
              days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E206' },
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E203' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E203' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E201', auxiliary: true }
              ]
            },
            {
              id: 13,
              name: 'COSSIO MC.GALEN LIMBERT PAUL',
              group: '02',
              days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E209' },
                { day: 'Martes', start: '14:15', end: '15:45', classRoom: 'E102' },
                { day: 'Miércoles', start: '15:45', end: '17:15', classRoom: 'E202' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E504', auxiliary: true }
              ]
            },
            {
              id: 14,
              name: 'IRIARTE MERCADO EDGAR ALBERTO',
              group: '04',
              days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E545' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E520' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E522' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E102', auxiliary: true }
              ]
            },
            {
              id: 15,
              name: 'MOYA ALBARRACIN MARTIN',
              group: '05',
              days: [
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E101' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E520' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E502' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E105', auxiliary: true }
              ]
            },
            {
              id: 16,
              name: 'JALDIN QUIROZ RENE',
              group: '20',
              days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E504' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E511' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E523' }
              ]
            },
            {
              id: 17,
              name: 'ALBORTA SILES RAUL JOSE',
              group: '22',
              days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E518' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E302' },
                { day: 'Viernes', start: '11:15', end: '12:45', classRoom: 'E506' }
              ]
            },
            {
              id: 18,
              name: 'COSSIO MC.GALEN LIMBERT PAUL',
              group: '23',
              days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E504' },
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E209' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E520' }
              ]
            }
          ]
        },
        {
          nombre: 'METODOLOGIA DE INVESTIGACION I',
          docentes: [
            {
              id: 19,
              name: 'GUZMAN BROCKMANN FELIPE HANS WIGBERTO',
              group: '02',
              days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E520' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E520' },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E522' }
              ]
            },
            {
              id: 20,
              name: 'CARRILLO FUENTES JUAN ANGEL',
              group: '22',
              days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E522' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E502' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E503' }
              ]
            },
            {
              id: 21,
              name: 'ZAMBRANA TRIVENO JOSE EMILIO',
              group: '23',
              days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E504' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E504' },
                { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E504' }
              ]
            },
            {
              id: 22,
              name: 'GUERRA TORO MARIA ELENA',
              group: '24',
              days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'EPB-4' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E101' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'EPB-4' }
              ]
            },
            {
              id: 23,
              name: 'ZAMBRANA TRIVENO JOSE EMILIO',
              group: '25',
              days: [
                { day: 'Lunes', start: '15:45', end: '17:15', classRoom: 'E502' },
                { day: 'Martes', start: '15:45', end: '17:15', classRoom: 'E504' },
                { day: 'Jueves', start: '15:45', end: '17:15', classRoom: 'E504' }
              ]
            }
          ]
        },
        {
          nombre: 'CALCULO',
          docentes: [
            {
              id: 24,
              name: 'MORALES ROJAS ARTURO JOSE L.',
              group: '01',
              days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'EPB-4' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E521' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E501', auxiliary: true }
              ]
            },
            {
              id: 25,
              name: 'MONTANO ROMERO JOSE',
              group: '02',
              days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E502' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E502' },
                { day: 'Viernes', start: '17:15', end: '18:45', classRoom: 'EPB-4', auxiliary: true }
              ]
            },
            {
              id: 26,
              name: 'COVARRUBIAS VARGAS CAUJMAN',
              group: '03',
              days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E103' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E103' },
                { day: 'Viernes', start: '11:15', end: '12:45', classRoom: 'E503', auxiliary: true }
              ]
            },
            {
              id: 27,
              name: 'DUERI MENDEZ MARIA ELENA',
              group: '04',
              days: [
                { day: 'Lunes', start: '15:45', end: '17:15', classRoom: 'E543' },
                { day: 'Viernes', start: '15:45', end: '17:15', classRoom: 'E542' }
              ]
            },
            {
              id: 28,
              name: 'DIAZ MONZON EDMUNDO',
              group: '20',
              days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E501' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E502' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E504', auxiliary: true }
              ]
            }
          ]
        }
      ]
    }
  ];


  days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  hours = ['06:45', '08:15', '09:45', '11:15', '12:45', '14:15', '15:45', '16:30', '17:15', '18:45', '20:15', '21:45'];



  selectedSubjects: any[] = [];

  toggleSubject(subject: any, event: any, subjectName: any) {
    if (event.target.checked) {
      let color = this.colors[0];
      this.inUse.push(color);
      let index = this.colors.findIndex((colorArr) => { return colorArr == color });
      this.colors.splice(index, 1);
      if (subject.days.length > 0) {
        subject.color = color;
        for (let day of subject.days) {
          this.selectedSubjects.push({ idGroup: subject.id, ...day, name: subject.name, group: subject.group, color: color, subjectName: subjectName });
          console.log(this.selectedSubjects)
        }
      }
      this.selectedSubjects.push(subject);
    } else {
      this.colors.push(subject.color)
      this.selectedSubjects = this.selectedSubjects.filter(s => s.idGroup !== subject.id);
    }
  }

  getSubjectsForCell(day: string, hour: string) {
    if (this.selectedSubjects.length > 0) console.log('materias', this.selectedSubjects);
    return this.selectedSubjects.filter(subject => subject.day === day && subject.start === hour);
  }
  async loadImage(src: string): Promise<string> {
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
      orientation: 'p',
      unit: 'mm',
      format: [210, 297]

    });

    doc.setFont("times", "bold");
    doc.text('HORARIO - SIAT',70,15)
    const imgData = await this.loadImage('assets/img/dragon.png');
    doc.addImage(imgData, 'PNG',120, 5, 18, 18)

    const columns = ['Hora','Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const data = [['06:45'], ['08:15'], ['09:45'], ['11:15'], ['12:45'], ['14:15'], ['15:45'], ['16:30'], ['17:15'], ['18:45'], ['20:15'], ['21:45']];;

    doc.autoTable({
      headStyles: {
        fillColor: "#1864f9",
      },
      startY: 25,
      head: [columns],
      body: data,
    });
    doc.save('HORARIO SIAT.pdf');
  }
  async generateImage(){
    Swal.fire({
      title: 'Generando imagen...',
      html: 'Por favor, espera un momento.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    await new Promise(resolve => setTimeout(resolve, 100));
    const element = this.contenido.nativeElement;
    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'HORARIO-SIAT.png';
      Swal.fire({
        icon: 'success',
        title: '¡Completado!',
        text: '',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#3085d6'
      });
      link.click();
    });
  }
}
