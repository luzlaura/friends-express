import {CreateFriendDTO, FriendDTO} from "@modules/friends/dto";
import {AddressDTO, CreateAddressDTO} from "@modules/addresses/dto";

export interface AddressesService {
    getAddresses(): Promise<AddressDTO[]>;
    createAddress(address: CreateAddressDTO): Promise<AddressDTO>;
    deleteAddress(id: string): Promise<void>;
}