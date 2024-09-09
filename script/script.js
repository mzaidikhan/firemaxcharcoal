// Initlize the tooltip
// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const form = document.querySelector("form");
const cancelbtn=document.getElementById("cancel");
const fullName=document.getElementById("fullname");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const enguiry=document.getElementById("enguiry");



function sendMail()
{
    const bodyMessage=`<html> <body>
    <h3>
    Hi Admin, </h3>
 <p>
You have received a web enquiry: </p>
     <table>
  
            <tr>
              <td>Full Name</td>
              <td>${fullName.value}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>${email.value}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>${phone.value}</td>
            </tr>
            <tr>
              <td>Message</td>
              <td>${enguiry.value}</td>
            </tr>
        
          </table>
          <h3>
          <p>Kind Regards,</p>
          <p>Web Administrator</p>
          </h3>
          </body>
          </html>`
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mzaidi.khan@gmail.com",
        Password : "021A41C27BFF25541B8F188A363DF8F7007D",
        To : 'mzaidi.khan@gmail.com',
        From : "mzaidi.khan@gmail.com",
        Subject : "This is the subject",
        Body : bodyMessage,

    }).then(()=>{
        alert("You enquiry has been sent. We will get back to you as soon as possible");
        cancelbtn.click();
        return true;
    })
    .catch(err => {
        alert('Unable to send you enquiry! Please try again.');
        return false;
      });
}


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    sendMail();
})

cancelbtn.addEventListener("click",(e)=>{
    //form.children('input').val('');
     $('#form')[0].reset();
})