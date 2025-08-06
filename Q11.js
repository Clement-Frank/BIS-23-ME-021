//Literal object

let Object = {
  orderid: "ORD-2025-00456",
  customer: {
    id: "CUST-1001",
    name: "joe doe",
    email:"joe.doe@gmail.com"
  },
  address:{
    street: "45 independence",
    city: "Lilongwe",
    country:"Malawi",
    postalcode:265,
  },
   items:{
    productid: "P-002",
    name: "Wireless Mouse",
    quantity:2,
    price:7500,
  }

}
  
//class object
 class Object{
    constructor(orderid, customer, address,items, payment, delivery, discountCodes, ){
        this.orderid= orderid;
        this.customer= customer;
        this.address= address;
        this.items= items;
        this.payment= payment;
        this.delivery= delivery;
        this.discountCodes= discountCodes;
    }
 }

 //Functional constructor
 function Object(orderid, customer, address){
     this.orderid= orderid;
        this.customer= customer;
        this.address= address;
 }
 
//Add a new object bought
  let object1 = new object();
   item.productid= "P-0003",
   item.name= "power supply",
    item.quantity= 3,

// update the transaction
let object1 = {transactionid: "TXN-900123"};
obj.transactionid = TXN-"900123";




//JSON
let json = JSON.stringify(post);
let object = JSON.parse(json);