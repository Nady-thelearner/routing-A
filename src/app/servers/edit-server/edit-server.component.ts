import { Component, OnInit } from "@angular/core";
import { ɵangular_packages_forms_forms_bd } from "@angular/forms";
import { ActivatedRoute, Params } from "@angular/router";

import { ServersService } from "../servers.service";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit = false;

  constructor(private serversService: ServersService,
    private aRoute : ActivatedRoute) {}

  ngOnInit() {
    console.log(this.aRoute.snapshot.queryParams);
    console.log(this.aRoute.snapshot.fragment);
    this.aRoute.queryParams.subscribe(
    (queryParam : Params) =>{
      this.allowEdit = queryParam['allowEdit'] === '1' ? true : false;
    }
    );
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
  }
}
