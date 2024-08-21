export interface Address {
    id: string;
    street: string;
    city: string;
    zipCode: string;
    number: number;
}

export interface Friend {
    id: string;
    name: string;
    email: string;
    phone: string;
    addresses: Address[];
}
