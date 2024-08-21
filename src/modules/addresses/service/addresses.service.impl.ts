import {AddressesService} from "@modules/addresses/service/addresses.service";
import {AddressDTO, CreateAddressDTO} from "@modules/addresses/dto";
import {AddressRepository} from "@modules/addresses/repository/address.repository";


export class AddressesServiceImpl implements AddressesService{

    constructor(private readonly repository: AddressRepository) {
    }
    createAddress(address: CreateAddressDTO): Promise<AddressDTO> {
        return this.repository.create(address)
    }

    deleteAddress(id: string): Promise<void> {
        return this.repository.delete(id)
    }

    getAddresses(): Promise<AddressDTO[]> {
        return this.repository.getAll();
    }

}