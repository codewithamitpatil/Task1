

const url ='https://amitgujarpatil.herokuapp.com';

// for all users

const FetchAllUserDetails =async() => {

    const response =await fetch(`${url}/User/allUsers`);
    const data = await response.json();
    return data;
   
}

// for single user


const CreateUser = async(userObj) => {

    const data = await
    $.ajax({
        type: "POST",
        url: `${url}/User/create`,
        data:userObj,
        dataType:"json",
        success: function(response){
             return response;
        },
        error:function(err)
        {
            return err;
        }
      });

      return data;

}



const FetchSingleUserDetails =async(uid) => {

 const response =await fetch(`${url}/User/singleUser/${uid}`);
 const data = await response.json();
 return data;

}

const FetchSingleUserTransactionDetails = async(uid) => {

    const response =await fetch(`${url}/Transaction/getSingleUserTransactions/${uid}`);
    const data = await response.json();
    return data;
   
}
   
// for all transactions

const FetchAllUserTransactionDetails = async() => {

    const response =await fetch(`${url}/Transaction/allTransactions`);
    const data = await response.json();
    return data;
   
}


// for main dashboard

const FetchMainDashBoardDetails = async() => {

    const response =await fetch(`${url}/Dash/mainDash`);
    const data = await response.json();
    return data;
    
}


// to make transaction

const CreateTransaction = async(transactionObj) => {

    const data = await
    $.ajax({
        type: "POST",
        url: `${url}/Transaction/create`,
        data:transactionObj,
        dataType:"json",
        success: function(response){
             return response;
        },
        error:function(err)
        {
            return err;
        }
      });

      return data;

}

