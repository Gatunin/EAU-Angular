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

    constructor() { }

    ngOnInit() {
        this.name = 'Gao';
        this.password = '1543';
        
        setTimeout(() => {
            this.mostrarInfo = true;
        }, 3000);
    }

    existUser() : boolean {
        if (this.name != 'Gato')
            return false;
        else
            return true;
    }
}