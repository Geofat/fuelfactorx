function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "Geofat2015@gmail.com",
        Password : "Geofat2015@,.",
        To : 'fatojay69@gmail.com',
        From : document.getElementByID("email").value,
        Subject : "New Order Arrival",
        Body : "Name" + document.getElementById("name").value
          + "<br>  Email: " + document.getElementById("email").value
          + "<br>  Phone number: " + document.getElementById("phone").value
          + "<br>  Delivery address: " + document.getElementById("address").value
          + "<br>  Quantity1: " + document.getElementById("quantity1").value
          + "<br>  Quantity2: " + document.getElementById("quantity2").value
          + "<br>  Quantity3: " + document.getElementById("quantity3").value
          + "<br>  Quantity4: " + document.getElementById("quantity4").value
    }).then(
      message => alert("Order Succesful")
    );
}