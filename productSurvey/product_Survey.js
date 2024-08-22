function submitFeedback() {
    let username = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let job = document.getElementById("job").value;
    let designation = document.getElementById("designation").value;
    let product = document.getElementById("productType").value;
    let feedback = document.getElementById("feedbackText").value;

    if(username === "" || age === "" || email === "" || job === "" || designation === "" || feedback === "") {
        alert("Please fill in all the required fields before submitting your feedback.")
    }else {
    alert("Thank you for your valuable feedback.");

    document.getElementById("userName").innerHTML = username;
    document.getElementById("userAge").innerHTML = age;
    document.getElementById("userEmail").innerHTML = email;
    document.getElementById("userJob").innerHTML = job;
    document.getElementById("userDesignation").innerHTML = designation;
    document.getElementById("userProductChoice").innerHTML = product;
    document.getElementById("userFeedback").innerHTML = feedback;

    document.getElementById("userInfo").style.display = 'block';
    }
}

//const submitButton = document.getElementById("submitButton");
//submitButton.onclick = submitFeedback;
document.addEventListener('keydown', function(event) {
    if(event.key === 'Enter'){
        submitFeedback();
    }
});

