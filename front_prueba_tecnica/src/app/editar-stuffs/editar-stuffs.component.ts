import { Component, OnInit } from '@angular/core';
import { StuffModel } from '../shared/stuffs.model';
import { StuffService } from '../shared/stuff.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-stuffs',
  templateUrl: './editar-stuffs.component.html',
  styleUrls: ['./editar-stuffs.component.css'],
})
export class EditarStuffsComponent implements OnInit {
  id = '';
  stuff = new StuffModel('', '', '', '');
  states = ['New', 'Used', 'Broken'];

  constructor(
    private stuffService: StuffService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log('editar');
      this.stuffService.obtenerStuffs(this.id).subscribe((data) => {
        this.stuff = data[0];
      });
    } else {
      console.log('crear');
    }
  }

  onSubmit() {
    console.log('onSubmit');

    if (this.stuff.id) {
      this.stuffService.actualizarStuff(this.stuff).subscribe((data) => {
        alert(data);
        this.router.navigate(['/stuffs']);
      });
    } else {
      console.log('crear');
      this.stuffService.agregarStuff(this.stuff).subscribe((data) => {
        alert(data);
        this.router.navigate(['/stuffs']);
      });
    }
  }
}
