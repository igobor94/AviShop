import { IProduct } from "src/app/product/model/products.model";

export interface IData {
    limit: number,
    skip: number,
    total: number,
    products: IProduct[]
}