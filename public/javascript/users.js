
// to get url parameter


var userDetails = $('#userDetails');
var temp_dash  = $('#temp_dash');
var bigframe   = $('#bigframe');
var smallframe   = $('#smallscreen');



async function userProfile(){

    const uid = $('#uid').val();

    const data = await FetchSingleUserDetails(uid);

    var str = `
            <div class="rightcol" style="text-align:left" >
            <span> ${ data['data'].name }</span>
            <span> ${ data['data'].email }</span>
            <span>${ data['data'].amount }</span>
            <span>${ data['data'].contact } </span>
            <span>${ data['data'].address }</span>
            </div>
             `;
    userDetails.replaceWith(str);

  if(data.TotalDebit == null)
  {
    data.TotalDebit=00;
  }
if( data.TotalCredit == null)
{
    data.TotalCredit=0;
}
    str =`

        <div class="box">
        <h1>  Credit </h1>
        <span> 
        <i class="material-icons">
        attach_money
        </i>
        <p > ${ data.TotalCredit }</p>
        </span> 
        </div>

        <div class="box">
        <h1>  Debit </h1>
        <span> 
        <i class="material-icons">
        attach_money
        </i> 
        <p> ${ data.TotalDebit }</p> 
        </span> 
        </div>

    `;
    temp_dash.html(str);
    
    
//     str = `
    
//     
   
//     `;

//     smallframe.append(str);
}
 



async function userTranasctionDetails()
{
 
    const uid = $('#uid').val();

    const data = await FetchSingleUserTransactionDetails(uid);

    
    const temp = data['data'];
    
    var str = '';
    var cnt = 1;
     temp.forEach(item=> {
         
    
       
        str +=`
        <table class="table table-hover">
        <thead>
        <tr>
        <th scope="col">Sr</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th >Phone </th>
        <th scope="col">Amount</th>
        <th scope="col" class="status">Status</th>
        <th scope="col" class="date">Date</th>
        </tr>
        </thead>
        <tbody id="smallframe">
       
`;
 
         if(item.SenderId == uid)
         {
            
            str += ` <tr>
            <td>${cnt}</td>
            <td>${item['reciverName']}</td>
            <td>${item['reciverEmail']}</td>
            <td >${item['reciverPhone']}</td>
            <td >${item['amount']}</td>
            <td >
             <input type="submit" value="Debit" class=" btndebit"        
            />  
    
    
            </td>
            <td >
            ${item['createdAt']}
            </td>
    
            </tr>
            `;
    
         }else{

                 str += ` <tr>
            <td>${cnt}</td>
            <td>${item['senderName']}</td>
            <td>${item['senderEmail']}</td>
            <td >${item['senderPhone']}</td>
            <td >${item['amount']}</td>
            <td >
             <input type="submit" value="Credit" class=" btn"        
            />  
    
    
            </td>
            <td >
            ${item['createdAt']}
            </td>
    
            </tr>
            `;
         }
        
         str += `
         </tbody>
         </table>
         
          `;

  
  cnt++;

        });

    smallframe.html(str);

   str = '';

  cnt =1;

   temp.forEach(item=> {
         
    if(item.SenderId == uid)
    {

 
   

   str += ` <tr>
   <td>${cnt}</td>
   <td>${item['reciverName']}</td>
   <td >${item['reciverPhone']}</td>
   <td >${item['amount']}</td>
   <td >
    <input type="submit" value="Debit" class=" btndebit"        
   />  


   </td>
   <td >
   ${item['createdAt']}
   </td>

   </tr>
   `;

   
    }else{

        str += ` <tr>
        <td>${cnt}</td>
        <td>${item['senderName']}</td>
        <td >${item['senderPhone']}</td>
        <td >${item['amount']}</td>
        <td >
         <input type="submit" value="Credit" class=" btn"        
        />  


        </td>
        <td >
        ${item['createdAt']}
        </td>

        </tr>
        `;
        
    }


   });


   bigframe.html(str);
}

userTranasctionDetails();

userProfile();








