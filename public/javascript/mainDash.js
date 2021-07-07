
var temp_contain = $('.temp-contain');

// for main dashboard

const MainDash = async() => {

    const data = await FetchMainDashBoardDetails();
    
    var str =` 
            
      <div class="box">
      <h1>  Customers </h1>
      <span>
      <i class="material-icons">
      group_add
      </i> 
      <p>${data.totalUsers}</p> 
      </span> 
      </div>

      <div class="box">
      <h1>  Amount </h1>
      <span> 
      <i class="material-icons">
      attach_money
      </i>
      <p> ${data.totalAmount}</p> 
      </span> 
      </div>

      <div class="box hide">
      <h1>  Transactions </h1>
      <span>  
      <p> ${data.totalTransactions}</p>
      </span> 
      </div>

            `;
    
    temp_contain.html(str);
    
 }

 MainDash();