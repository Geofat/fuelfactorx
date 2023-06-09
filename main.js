function submitForm() {
    var fullName = document.getElementById("full-name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var package = document.getElementById("quantity").value;

    // Send the form data to the specified email address (replace with your own)
    var mailtoLink =
      "mailto:Geofat2015@myself.com" +
      "?subject=New Order" +
      "&body=Full Name: " + fullName +
      "%0D%0APhone Number: " + phone +
      "%0D%0AEmail: " + email +
      "%0D%0ADelivery Address: " + address +
      "%0D%0APackage: " + package;

    window.location.href = mailtoLink;

    alert("Order submitted successfully!");

    return false; // Prevent form submission
  }