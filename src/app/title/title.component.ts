import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-title',
    templateUrl: 'title.component.html',
    styleUrls: ['title.component.css']
})

export class TitleComponent implements OnInit {
    public name: string;
    public password: string;
    public mostrarInfo: boolean = false;
    public rols: string[];

    constructor() { }

    ngOnInit() {
        this.name = 'Gato';
        this.password = '1543byo';
        this.rols = [
            'Master',
            'Jugador'
        ]
    }

    existUser() : boolean {
        if (this.name != 'Gato')
            return false;
        else
            return true;
    }

    mostrarInformacion() {
        this.mostrarInfo = !this.mostrarInfo
    }
}