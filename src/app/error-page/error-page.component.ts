import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";

@Component({
  selector: "app-error-page",
  templateUrl: "./error-page.component.html",
  styleUrls: ["./error-page.component.css"],
})
export class ErrorPageComponent implements OnInit {
  errormessage: String;

  constructor(private aRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.errormessage = this.aRoute.snapshot.data["message"];
    this.aRoute.data.subscribe(
      (data: Data) => (this.errormessage = data["message"])
    );
  }
}
