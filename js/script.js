// <!-- emailjs to mail contact form data -->
   

$("#contact-form").submit(function (event) {
    emailjs.init("vSI_5gI8wAfHJlnqh");
    emailjs.sendForm('service_3wro82d', 'template_g7mfjou', '#contact-form')
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);       
            document.getElementById("contact-form").reset();
            alert("Form Submitted Successfully");
        }, function (error) {
            console.log('FAILED...', error);
            alert("Form Submission Failed! Try Again");
        });
    event.preventDefault();
});



// <!-- emailjs to mail contact form data -->