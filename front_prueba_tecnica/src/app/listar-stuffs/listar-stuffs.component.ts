import { Component, OnInit } from '@angular/core';
import { StuffModel } from '../shared/stuffs.model';
import { Observable } from 'rxjs';
import { StuffService } from '../shared/stuff.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listar-stuffs',
  templateUrl: './listar-stuffs.component.html',
  styleUrls: ['./listar-stuffs.component.css'],
})
export class ListarStuffsComponent implements OnInit {
  searchTerm: string = '';
  stuffs: Observable<StuffModel[]> | undefined;

  constructor(private stuffService: StuffService) {}

  ngOnInit() {
    this.stuffs = this.stuffService.obtenerStuff();
  }

  buscarStuff() {
    if (this.searchTerm.length > 0) {
      this.stuffs = this.stuffService.obtenerStuff().pipe(
        map((stuffs) => stuffs.filter((stuff) => stuff.name.includes(this.searchTerm)))
      );
    } else {
      this.stuffs = this.stuffService.obtenerStuff();
    }
  }

  eliminarStuff(id: string) {
    this.stuffService.eliminarStuff(id).subscribe((data) => {
      console.log(data);
    });

    this.stuffs = this.stuffService.obtenerStuff();
  }
}
