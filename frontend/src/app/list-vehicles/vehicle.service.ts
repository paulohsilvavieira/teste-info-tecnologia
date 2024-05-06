import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle-dto';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private httpClient: HttpClient) {}

  getAllVehicles(): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>('http://localhost:3000/vehicles');
  }
}
