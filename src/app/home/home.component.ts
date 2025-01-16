import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocationComponent } from "../housing-location/housing-location.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form action="submit">
        <input type="text" placeholder="filter by city" />
        <input class="primary" type="submit" value="search" />
      </form>
    </section>
    <section class="results">
      <app-housing-location />
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {}
