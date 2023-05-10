import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StuffModel } from './stuffs.model';

@Injectable({
  providedIn: 'root',
})
export class StuffService {
  BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  obtenerStuff() {
    return this.http.get<StuffModel[]>(this.BASE_URL + '/stuffs');
  }

  obtenerStuffs(id: string) {
    return this.http.get<StuffModel[]>(`${this.BASE_URL}/stuffs/${id}`);
  }

  agregarStuff(stuff: StuffModel) {
    return this.http.post<string>(`${this.BASE_URL}/stuffs/agregar`, stuff);
  }

  actualizarStuff(stuff: StuffModel) {
    return this.http.put<string>(
      `${this.BASE_URL}/stuffs/editar/${stuff.id}`,
      stuff
    );
  }

  eliminarStuff(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/stuffs/borrar/${id}`);
  }
}
