function validateHTMLform() {
    let form = document.forms["StudenSignupForm"];

    if (form.textnames.value.trim() === "") {
        alert("Enter Your First Name!");
        form.textnames.focus();
        return false;
    }

    if (form.lastnames.value.trim() === "") {
        alert("Enter Your Last Name!");
        form.lastnames.focus();
        return false;
    }

    if (form.fathername.value.trim() === "") {
        alert("Enter Your Father's Name!");
        form.fathername.focus();
        return false;
    }

    if (form.paddress.value.trim() === "") {
        alert("Enter Your Postal Address!");
        form.paddress.focus();
        return false;
    }

    if (form.personaladdress.value.trim() === "") {
        alert("Enter Your Personal Address!");
        form.personaladdress.focus();
        return false;
    }

    // Gender selection validation
    if (!form.sex[0].checked && !form.sex[1].checked) {
        alert("Choose Your Gender: Male or Female");
        return false;
    }

    if (form.City.value === "-1") {
        alert("Enter Your City!");
        form.City.focus();
        return false;
    }

    if (form.Course.value === "-1") {
        alert("Enter Your Course!");
        return false;
    }

    if (form.District.value === "-1") {
        alert("Select Your District!");
        return false;
    }

    if (form.State.value === "-1") {
        alert("Select Your State!");
        return false;
    }

    if (
        form.pincode.value.trim() === "" ||
        isNaN(form.pincode.value) ||
        form.pincode.value.length !== 6
    ) {
        alert("Enter your pincode in format ######.");
        form.pincode.focus();
        return false;
    }

    // Email validation
    let email = form.emailid.value.trim();
    let atpos = email.indexOf("@");
    let dotpos = email.lastIndexOf(".");
    if (email === "" || atpos < 1 || dotpos - atpos < 2) {
        alert("Enter a valid email ID!");
        form.emailid.focus();
        return false;
    }

    if (form.dob.value.trim() === "") {
        alert("Enter your DOB!");
        form.dob.focus();
        return false;
    }

    if (
        form.mobileno.value.trim() === "" ||
        isNaN(form.mobileno.value) ||
        form.mobileno.value.length !== 10
    ) {
        alert("Enter your Mobile No. in the format ##########.");
        form.mobileno.focus();
        return false;
    }

    return true;
}
