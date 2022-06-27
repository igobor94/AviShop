import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailsComponent, ProductListComponent } from "./components";

const routes: Routes = [
    { path: '', component: ProductListComponent },
    {
        path: 'product/:id',
        component: ProductDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductRoutingModule {}