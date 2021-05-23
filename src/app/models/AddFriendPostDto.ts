export class AddFriendPostDto{

    friendId:string
    myId:string

constructor(friendId:string,myId:string)
{
this.friendId=friendId;
this.myId=myId;
}

}