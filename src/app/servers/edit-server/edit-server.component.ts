import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observable } from "rxjs";

import { ServersService } from "../servers.service";
import { canComponentDeactivate } from "./can-deactivate-guard.service";
import { canDeactivateGuard } from "./can-deactivate-guard.service";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit, canComponentDeactivate {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit = false;
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private aRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    console.log(this.aRoute.snapshot.queryParams);
    console.log(this.aRoute.snapshot.fragment);
    this.aRoute.queryParams.subscribe((queryParam: Params) => {
      this.allowEdit = queryParam["allowEdit"] === "1" ? true : false;
    });
    this.aRoute.fragment.subscribe;

    const id = +this.aRoute.snapshot.params["id"];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    // this.aRoute.params((params : Params)=>{
    //   this.server.id = params['id'];
    // })
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });

    this.changesSaved = true;
    this.route.navigate(["../"], { relativeTo: this.aRoute });
  }

canDeactivate(): boolean | Observable<boolean> | Promise<boolean>{
    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved)
       {
      return confirm("Do you want to discard the changes?");
        }
         else {
      return true;
    }
  }

}
