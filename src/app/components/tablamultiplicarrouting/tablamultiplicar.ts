import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-tablamultiplicar',
    standalone: false,
    templateUrl: './tablamultiplicar.html',
    styleUrl: './tablamultiplicar.css',
})
export class Tablamultiplicar implements OnInit {
    public numero: number;
    public resultados: Array<number>;

    constructor(private _objeto: ActivatedRoute) {
        this.resultados = [];
        this.numero = 0;
    }
    generarTabla(): void {
        let aux = [];
        for (let i = 1; i <= 10; i++) {
            aux.push(this.numero * i);
        }
        this.resultados = aux;
    }
    ngOnInit(): void {
        this._objeto.params.subscribe((parametros: Params) => {
            this.numero = parseInt(parametros['numero']);
            this.generarTabla();
        });
    }
}
