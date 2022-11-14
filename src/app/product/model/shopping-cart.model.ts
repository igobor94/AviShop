export interface IShoppingCart {
    id: number,
    idProduct: number,
    title: string,
    quantity?: number
    price?: number,
    stock?: number,
    brand?: string,
    category?: string,
    thumbnail?: string,
}