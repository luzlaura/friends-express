import {FriendsService} from "@modules/friends/service/friends.service";
import {FriendsRepository} from "@modules/friends/repository/friends.repository";
import {CreateFriendDTO, FriendDTO} from "@modules/friends/dto";
import {AddressRepository} from "@modules/addresses/repository/address.repository";

export class FriendsServiceImpl implements FriendsService {
    private addressesRepository: any;
    constructor(
        private readonly repository: FriendsRepository,
        private readonly addressRepository: AddressRepository
    ) {
    }


    async createFriend(friend: CreateFriendDTO): Promise<FriendDTO> {
        const newFriend = await this.repository.create(friend);

        if (friend.addresses && friend.addresses.length > 0) {
            const addresses = await Promise.all(
                friend.addresses.map(address =>
                    this.addressesRepository.createAddress({ ...address, friendId: newFriend.id })
                )
            );
            newFriend.addresses = addresses;
        }

        return newFriend;
    }


    deleteFriend(id: string): Promise<void> {
        return this.repository.delete(id)
    }

    getFriends(): Promise<FriendDTO[]> {
        return this.repository.getAll();
    }

}