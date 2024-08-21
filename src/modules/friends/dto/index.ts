import {IsEmail, IsNotEmpty, IsOptional, IsString} from 'class-validator'
import {CreateAddressDTO} from "@modules/addresses/dto";

export class CreateFriendDTO {
    @IsString()
    @IsNotEmpty()
    name!: string

    @IsEmail()
    @IsNotEmpty()
    email!: string

    @IsString()
    @IsOptional()
    phone?:string

    addresses?:CreateAddressDTO[]
}

export class FriendDTO {
    constructor (friend: FriendDTO) {
        this.id = friend.id
        this.name = friend.name
        this.email = friend.email
        this.addresses = friend.addresses
    }

    id: string
    name: string
    email: string
    addresses?: CreateAddressDTO[]
}