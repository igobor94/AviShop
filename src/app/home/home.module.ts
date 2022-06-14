import { NgModule } from "@angular/core";
import { ProductModule } from "../product";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [
        HomeRoutingModule,
        ProductModule,
    ],
    declarations: [HomeComponent],
    exports: []
})

export class HomeModule {}