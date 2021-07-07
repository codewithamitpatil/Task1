
var frame        = $('#frame');

// for transaction list

    const  AllTransaction=  async()=>
        {

            const data = await FetchAllUserTransactionDetails();
            const temp = data["data"];
        
            var str = '';
            var cnt = 1; 
            
            temp.forEach(item => {
                    
                    str  +=`
                    <tr>
                    <td>${cnt}</td>
                    <td>${item.senderName}</td>
                    <td >${item.reciverName}</td>
                    <td >${item.amount}</td>
                    <td >${item.createdAt}   </td>
                    </tr>
                        `;
                cnt++;
                }); 

                frame.html(str);
        
        }

    AllTransaction();


