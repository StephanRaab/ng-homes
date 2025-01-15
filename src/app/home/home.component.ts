import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <form action="submit">
        <input type="text" placeholder="filter by city" />
        <input class="primary" type="submit" value="search" />
      </form>
    </section>
    <section class="results"></section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {}
