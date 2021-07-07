

var frame = $('#frame');

// for manage all users table

const AllUsersDetails = async() => {

  const data = await FetchAllUserDetails();
  const temp = data['data'];

  var str = '';

  var cnt = 1;

  temp.forEach(item => {
    
    str += `
    <tr>
    <td>${cnt}</td>
    <td>${item.name}</td>
    <td class="hide">${item.email}</td>
    <td class="hide">${item.contact}</td>
    <td class="hide">${item.amount}</td>
    <td >
    <a href="./user/${item.uid}" 
    style="text-decoration: none;
    padding: 0px;margin: 0px;
    ">   
    <input type="submit" value="View" class="btn"        
    />  
    </a>
    </td>

    </tr>

    `;

    cnt++;

  });


  frame.html(str);


}

AllUsersDetails();