import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailsComponent } from "./components";

const routes: Routes = [
    {
        path: 'product/:id',
        component: ProductDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class ProductRoutingModule {}