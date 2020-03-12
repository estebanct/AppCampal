import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.page.html',
  styleUrls: ['./programa.page.scss'],
})
export class ProgramaPage implements OnInit {

  // @ViewChild('IonSegment', {static: false}) programa: IonSegment;

    programa: Observable<any>;
    dia = '';

  constructor( private dataService: DataService) { }

  ngOnInit() {
    // this.programa.value = 'sabado';
    this.programa = this.dataService.getPrograma();
  }

  segmentChanged( event ) {

    const valorSegmento = event.detail.value;

    if ( valorSegmento === '' ) {
      this.dia = '';
      return;
    }

    this.dia = valorSegmento;

    console.log(valorSegmento);

  }

}
