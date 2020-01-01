export class OnlineStoreProductModel {
	productId: string;
	productImage: string;
	productTitle: string;
	productDescription: string;
	productHowToUse: string;
	productPrice: string;
	productOrder: number;
}

export class ProductItemModel {
	description: string;
	howToUse: string;
	images: Array<string>;
	nombre: string;
	precio: string;
	order: number;
}