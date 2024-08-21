import {AddressDTO, CreateAddressDTO} from "@modules/addresses/dto";


export interface AddressRepository {
    create(address: CreateAddressDTO): Promise<AddressDTO>;
    getAll(): Promise<AddressDTO[]>;
    delete(id: string): Promise<void>;
}