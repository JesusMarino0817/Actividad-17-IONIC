import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../api/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  peliculas = []; /* [
    {
      titulo: "Sherek 2 Visita a muy muy lejano",
      anio: 2001,
      director: "Andrew Adamson",
      imagen: "https://es.web.img3.acsta.net/pictures/14/03/06/10/13/369709.jpg"
    
    },
    {
      titulo: "Pacific Rim",
      anio: 2013,
      director: "Guillermo del Toro",
      imagen: "https://www.hacerselacritica.com/wp-content/uploads/2013/07/pacific_rim_poster11.jpg"
    
    }
  ];
*/
  constructor(private peliculasService: PeliculasService) {}

  ngOnInit() {
    this.peliculasService.peliculas.subscribe(peliculas => {
      this.peliculas = peliculas;
    });
    //this.peliculasService.getPeliculas();
  }

}
