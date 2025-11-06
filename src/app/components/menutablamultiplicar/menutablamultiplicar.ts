import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menutablamultiplicar',
    standalone: false,
    templateUrl: './menutablamultiplicar.html',
    styleUrl: './menutablamultiplicar.css',
})
export class Menutablamultiplicar implements OnInit {
    public aleatorios: Array<number>;
    constructor() {
        this.aleatorios = [];
    }
    ngOnInit(): void {
        let aleatorio: number;
        for (let i = 1; i <= 6; i++) {
            aleatorio = Math.floor(Math.random() * 50 + 1)
            this.aleatorios.push(aleatorio);
        }
    }
}
