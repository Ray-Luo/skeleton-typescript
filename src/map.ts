/// <reference path="../typings/leaflet-draw/leaflet-draw.d.ts"/>
import * as L from 'leaflet';
//var draw = require('leaflet-draw');

export class Map {

    drawnItems: any;



    attached() {   
        let map = L.map('mapid', { drawControl: true }).setView([39.116080, -94.594960], 13);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        this.drawnItems = new L.FeatureGroup();
        map.addLayer(this.drawnItems); 

        let drawControl = new L.Control.Draw({
            draw: {
                polygon: true,
                polyline: true,
                rectangle: true,
                circle: true,
                marker: true,
            },
            edit: {
                featureGroup: this.drawnItems
            }
        });

        map.addControl(drawControl);
        
    }

}
