import { Component } from '@angular/core'
import { interval } from 'rxjs'

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Yusdanis'
  genero: string = 'masculino'
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Juana']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  }

  cambiarCliente() {
    this.nombre = 'Melisa'
    this.genero = 'femenino'
  }

  borrarCliente() {
    this.clientes.pop()
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Yusdanis',
    edad: 37,
    dirreccion: 'Quito, Ecuador',
  }

  // Json Pipe
  herores = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ]

  // Async Pipe
  miObservable = interval(1000)
  valorPrimesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500)
  })
}
