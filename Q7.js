let GreetUser = "Tumbuka";

if (GreetUser=== "chichewa") {
    console.log("Muli bwanji?");
}

else if (GreetUser === "Yao"){
     console.log("Muli uli");
}
else if (GreetUser === "Tumbuka"){
    console.log("Muli wuli");
} 


switch (GreetUser) {
case "chichewa": console.log("Muli bwanji?");
  break;
case "yao": console.log("Muli uli"); 
  break;
case "Tumbuka": console.log("Muli wuli");
  break;
}
