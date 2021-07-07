

var msg = $('#msg');

var senderno  = $('#senderno');
var reciverno = $('#reciverno');
var amount    = $('#amount');
var trabtn    = $('#trabtn');

const MakeTransaction = async() =>{

 const TransactionObj ={
        senderNo  :senderno.val(),
        reciverNo :reciverno.val(),
        amount    :amount.val()
 };

 const data = await CreateTransaction(TransactionObj).catch(e =>{
    return e['responseJSON'];
 });

 if(data.status !== 200 && data.status !== "200")
 {   

 
 var str =`
         <h4  class="red">
             ${data.message}
         </h4>
         `;
   
 msg.html(str);

 
    // to empty fields 
    // senderno.val('');
    // reciverno.val('');
    // amount.val('');

 }else{

     var str =`
             <h4  class="green" style="color: #3880ffba;">
                 ${data.message}
             </h4>
             `;

     msg.html(str);
   
    // to empty fields 
    senderno.val('');
    reciverno.val('');
    amount.val('');



 }




}

trabtn.click(()=>{
    MakeTransaction();
});
