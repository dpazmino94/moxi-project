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
	images: Array<any>;
	nombre: string;
	precio: string;
	order: number;
}

export class GeneralCartModel {
	products: Array<ItemCartModel>;
	total: number;
}

export class ItemCartModel {
	productId: string;
	productName: string;
	productImage: string;
	productQuantity: number;
	productPrice: number;
}

export class ClientModel {
	clientName: string;
	clientLastname: string;
	clientPhoneNumber: string;
	clientMail: string;
	clientCity: string;
	clientAddress1: string;
	clientAddress2: string;
}

export class RequestModel {
	clientData: ClientModel;
	productsDescription: string;
	total: string;
}
