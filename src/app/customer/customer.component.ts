export class customerService{
    hotelRoomCap=30;
    custCount=10    
    registerCust(){
    return ++this.custCount
    }

    unregisterCust(){
        return --this.custCount
    }

    reserveRoom():boolean{
        let reservedRoom=true;
        if(this.hotelRoomCap< this.custCount){
            this.custCount++;
            reservedRoom=false
        }
        return reservedRoom
    }
}