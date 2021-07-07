

var msg       = $('#msg');
var Uamount   = $('#amount');
var Uname     = $('#name');
var Uemail    = $('#email');
var Uaddress  = $('#address');
var phone     = $('#phone');
var adduserbtn = $('#addbtn'); 

const AddUser = async() =>{
    
    const userObj = {
        name   : Uname.val(),
        email  : Uemail.val(),
        address: Uaddress.val(),
        contact: phone.val(),
        amount : Uamount.val()
    };
  
    const data = await CreateUser(userObj).catch(e =>{
        return e['responseJSON'];
    });
   
    if(data.status !== 200 && data.status !== "200")
    {   
        console.log(data);
    
    var str =`
            <h4  class="red">
                ${data.message}
            </h4>
            `;
      
    msg.html(str);

    }else{

        var str =`
                <h4  class="green" style="color: rgb(4, 95, 95);">
                    ${data.message}
                </h4>
                `;
  
        msg.html(str);
       
    // to empty fields
        Uname.val('');
        Uemail.val('');
        Uaddress.val('');
        phone.val('');
        Uamount.val('');


    }




   
   }
   
  

   adduserbtn.click(()=>{
    AddUser();

   });