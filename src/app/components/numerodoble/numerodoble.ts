import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-numerodoble',
    standalone: false,
    templateUrl: './numerodoble.html',
    styleUrl: './numerodoble.css',
})
export class Numerodoble implements OnInit {
    public numero!: number;
    public doble: number;

    constructor(
        private _objeto: ActivatedRoute,
        private _router: Router,
    ) {
        this.doble = 0;
    }
    ngOnInit(): void {
        this._objeto.params.subscribe((parametros: Params) => {
            //DENTRO DE params ES DONDE RECIBIMOS PARAMETROS POR SU :name
            //LA SINTAXIS PARA RECUPERARLOS ES params['PARAMETER NAME']
            //EN ESTE CASO, EL PARAMETRO ES OPCIONAL
            if (parametros['numero'] !== null) {
                //EL PARAMETRO SIEMPRE SON STRING
                this.numero = parseInt(parametros['numero']);
                this.doble = this.numero * 2;
            }
        });
    }

    goToHome(): void {
        this._router.navigate(['/']);
    }

    redirect(num: number): void {
        this._router.navigate(['/numerodoble', num]);
    }
}
