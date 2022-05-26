import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentComponent } from "./primeiro-componente/content/content.component";
import { SignInComponent } from "./primeiro-componente/sign-in/sign-in.component";
import { LoginPageComponent } from "./primeiro-componente/login-page/login-page.component";

const routes: Routes = [
  { path: "home", component: ContentComponent },
  { path: "sign-in", component: SignInComponent },
  { path: "login", component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
