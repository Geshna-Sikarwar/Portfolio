function sendMail(){
    var params={
       name:document.getElementById("name").value,
       email:document.getElementById("email").value,
       detail:document.getElementById("detail").value,
       message:document.getElementById("message").value,
    };
    const serviceID="service_ccebqsl";
const templateID="template_yc0d1te";

emailjs
.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("detail").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("message sent successfully");
    }
)
.catch((err) => console.log(err));

}
