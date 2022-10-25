type UserInfo = {
	firstName: string,
	lastName: string,
	email: string
}

type Address = {
	street: string,
	zipCode: string,
	city: string,
}

type UserAddress = {
	delivery: Address,
	invoice: Address
}

type PartialAddress = {
	street?: string,
	zipCode?: string,
	city?: string,
}

type PartialUserAddress = {
	delivery?: PartialAddress,
	invoice?: PartialAddress
}

export type { UserInfo, Address, UserAddress, PartialAddress, PartialUserAddress };