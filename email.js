var btn = document.getElementById("btn")
btn.addEventListener('click', function (e) {
    e.preventDefault()
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var quantity1 = document.getElementById("quantity1").value;
    var quantity2 = document.getElementById("quantity2").value;
    var quantity3 = document.getElementById("quantity3").value;
    var quantity4 = document.getElementById("quantity1").value;
    var body = 'name: ' + name + '<br/> email: ' + email + '<br/> number: ' + number + '<br/> address:' + address +
        '<br/> quantity1: ' + quantity1 + '<br/> quantity2: ' + quantity2 + '<br/> quantity3: ' + quantity3 + '<br/> quantity4: ' + quantity4;

    Email.send({
        SecureToken: "9b2585f4-a547-42c0-b116-fa6177f21888",
        To: 'fatojay69@gmail.com',
        From: "Geofat2015@gmail.com",
        Subject: "NEW ORDER ARRIVAL",
        Body: "body"
    }).then(
        message => alert()
    );

})

// function sendEmail() {
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "Geofat2015@gmail.com",
//         Password: "Geofat2015@,.",
//         To: "fatojay69@gmail.com",
//         From: document.getElementByID("email").value,
//         Subject: "New Order Arrival",
//         Body: "Name" + document.getElementById("name").value
//             + "<br>  Email: " + document.getElementById("email").value
//             + "<br>  Phone number: " + document.getElementById("phone").value
//             + "<br>  Delivery address: " + document.getElementById("address").value
//             + "<br>  Quantity1: " + document.getElementById("quantity1").value
//             + "<br>  Quantity2: " + document.getElementById("quantity2").value
//             + "<br>  Quantity3: " + document.getElementById("quantity3").value
//             + "<br>  Quantity4: " + document.getElementById("quantity4").value
//     }).then(
//         message => alert("Order Successful")
//     );
