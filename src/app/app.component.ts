import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfoWindow } from '@agm/core/services/google-maps-types' // option

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  public lat = 0;
  public lng = 0;

  public origin: any;
  public destination: any;
  
  public travelMode: string = 'WALKING'
  
  public ramdon = 0;

  title = 'AGM - Angular Google Maps';

  public renderOptions = {
    suppressMarkers: true,
}

public caminar(){
  console.log('Caminar')
  this.travelMode = 'WALKING'
}
public conducir(){
  console.log('Conducir')
  this.travelMode = 'DRIVING'
}

public infoWindow: InfoWindow = undefined

public markerOptions = {
    origin: {
        icon: 'https://www.shareicon.net/data/128x128/2015/06/05/49479_user_40x40.png',
        draggable: true,
        label: '',

    },
    destination: {
        infoWindow: 'Inmueble',
        icon: 'https://www.shareicon.net/data/32x32/2015/10/22/659953_building_512x512.png',
        label: '',
        opacity: 1,
    },
}
  //lat: number = 0;
  //lng: number = 0;
  zoom: number = 15;
  
  constructor(){
  }
  
  markerDragEnd(m: marker, $event: any) {
    console.log('dragEnd', m, $event);
    this.lng = +$event.coords.lng;
    this.lat = +$event.coords.lat;
    //this.origin = { lat: this.lat, lng: this.lng };
  }
  
  ngOnInit (){
    this.getDirection();
  }

  getDirection() {

    if (navigator){
      navigator.geolocation.getCurrentPosition( pos => {
        
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;

        this.origin = { lat: this.lat, lng: this.lng };

        this.destination = { 
          lat: (this.lat+( (Math.floor(Math.random()*2)+1)==1?this.getRamdon():this.getRamdon()*-1 )), 
          lng: (this.lng+( (Math.floor(Math.random()*2)+1)==1?this.getRamdon():this.getRamdon()*-1 ))
        };

        console.log(this.destination)
      });
    }else{
      console.log('No hay localización');
    }

  }

  getRamdon (){

    return parseInt((+Math.random()*10000).toString(), 10)/2000000
  }

}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
