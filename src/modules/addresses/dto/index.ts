import {IsNotEmpty, IsString} from 'class-validator'

export class CreateAddressDTO {
    @IsString()
    @IsNotEmpty()
    street!: string

    @IsNotEmpty()
    number!: number

    @IsString()
    @IsNotEmpty()
    city!:string

    @IsString()
    @IsNotEmpty()
    zipCode!:string

    @IsString()
    @IsNotEmpty()
    friendId!: string
}

export class AddressDTO {
    constructor (address: AddressDTO) {
        this.id = address.id
        this.street = address.street
        this.number = address.number
        this.city = address.city
        this.zipCode = address.zipCode
        this.friendId = address.friendId
    }

    id: string
    street: string
    number: number
    city: string
    zipCode: string
    friendId: string

}