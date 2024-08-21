import { Request, Response, Router } from "express";
import {AddressRepositoryImpl} from "@modules/addresses/repository/address.repository.impl";
import {AddressesServiceImpl} from "@modules/addresses/service/addresses.service.impl";
import HttpStatus from "http-status";
import {db} from "@utils";
import {BodyValidation} from "@utils/validation";
import {CreateAddressDTO} from "@modules/addresses/dto";



export const addressRouter = Router()

const service = new AddressesServiceImpl(new AddressRepositoryImpl(db))

addressRouter.get('/', async (req: Request, res: Response) => {
    const addresses = await service.getAddresses();

    return res.status(HttpStatus.OK).json(addresses)
})

addressRouter.post('/', BodyValidation(CreateAddressDTO), async (req: Request, res: Response) => {
    const data = req.body
    const address = await service.createAddress(data);

    return res.status(HttpStatus.CREATED).json(address)
})

addressRouter.delete('/:id', async (req: Request, res: Response) => {
    const {id} = req.params
    await service.deleteAddress(id);

    return res.status(HttpStatus.OK).json()
})
