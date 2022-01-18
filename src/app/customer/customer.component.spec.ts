import {customerService} from './customer.component'
describe('Customer service',()=>{
    //Arrange
    let custRoom: customerService;

    beforeEach(()=>{
        custRoom= new customerService()
    })

    // afterEach(()=>{
    //      custRoom=null;
    // })
  
    it('Customer count ',()=>{
    //Act
    let reservedRoom= custRoom.reserveRoom()
   //Assert
  expect(reservedRoom).toBeTruthy()
    })

    it('Register',()=>{
       //Act
         let reservedRoom= custRoom.registerCust()
        //Assert
       expect(reservedRoom).toEqual(11)
         })

         it('Unregister',()=>{
            //Act
             let reservedRoom= custRoom.unregisterCust()
            //Assert
            expect(reservedRoom).toEqual(9)
             })
})