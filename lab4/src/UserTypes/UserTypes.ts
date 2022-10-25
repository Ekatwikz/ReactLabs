export type UserInfo = {
	firstName: string,
	lastName: string,
	email: string
}

export type Address = {
	street: string,
	city: string,
	zipCode: string
}

export type UserAddresses = {
	delivery: Address,
	invoice: Address
}

export type PartialAddress = {
	street?: string,
	city?: string,
	zipCode?: string
}

export type PartialUserAddress = {
	delivery?: PartialAddress,
	invoice?: PartialAddress
}