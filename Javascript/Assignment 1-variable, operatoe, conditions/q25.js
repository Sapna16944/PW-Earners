// 25. Movie Ticket System 

let age=34;
let numberOfTickets=5;
let ticketPrice;

if(age<=0){
  console.log("Invalid age");
}
else if(age<12){
  ticketPrice=100*numberOfTickets;
}
else if(age<=59){
  ticketPrice=200*numberOfTickets
}
else{
  ticketPrice=120*numberOfTickets;
}

console.log(ticketPrice);