import { PrismaClient } from "@prisma/client";
import {AddressDTO, CreateAddressDTO} from "@modules/addresses/dto";
import {AddressRepository} from "@modules/addresses/repository/address.repository";


export class AddressRepositoryImpl implements AddressRepository {

    constructor(private readonly db: PrismaClient) {}

    async create(data: CreateAddressDTO): Promise <AddressDTO> {
        const address = await this.db.address.create({
            data
        })
        return new AddressDTO(address)
    }

    async getAll(): Promise<AddressDTO[]> {
        const addresses = await this.db.address.findMany();
        return addresses.map(address => new AddressDTO(address))
    }

    async delete (id: string): Promise<void> {
        await this.db.address.delete({
            where: {
                id
            }
        })
    }
}
