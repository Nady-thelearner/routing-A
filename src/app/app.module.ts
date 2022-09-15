import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersService } from "./servers/servers.service";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { appRoutingModel } from "./app-routing.module";
import { AuthService } from "./auth-service";
import { authGuard } from "./auth-guard.service";
import { canDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from './error-page/error-page.component';


// const appRout: Routes = [
//   { path: "", component: HomeComponent },
//   { path: "users", component: UsersComponent },
//   { path: "users/:id", component: UserComponent },
//   { path: "servers", component: ServersComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
  ],
  imports: [BrowserModule, FormsModule, appRoutingModel],
  providers: [ServersService , AuthService , authGuard , canDeactivateGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
