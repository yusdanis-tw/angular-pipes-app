import { Component } from '@angular/core'

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'yusdanis'
  nombreUpper: string = 'YUSDANIS'
  nombreCompleto: string = 'YuSdaNis fEUs'
  fecha: Date = new Date();
}
