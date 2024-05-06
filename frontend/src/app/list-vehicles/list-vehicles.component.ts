import { Component, Input, OnInit, importProvidersFrom } from '@angular/core';
import { VehicleService } from './vehicle.service';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { Vehicle } from './vehicle-dto';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list-vehicles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-vehicles.component.html',
})
export class ListVehiclesComponent implements OnInit {
  vehicles: Vehicle[] = [];
  constructor(private vehiclesService: VehicleService) {}
  ngOnInit(): void {
    this.vehiclesService.getAllVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
    });
  }
}
