// Write an asynchronous function that accepts a message string and a delay 
// time in milliseconds. The function should log the message to the console 
// after the specified delay time.

async function letter(message, delayTime){
await new Promise(resolve => setTimeout(resolve, delayTime));
console.log(message)

}

letter("I will be back soon",3000)

// You have an array of user IDs and a function getUserData(id) 
// that returns a Promise with user data when given a user ID. Write an 
// asynchronous function that fetches and logs the data for each user ID one by 
// one, in sequence.
 async function details(userIds){
    for(i = 0; i < userIds.length; i++);
    let userDetails = data(userIds[i])
    console.log(userDetails)

}

let userIds = [7,2,1,9,5,6]
details(userIds)

// You have an asynchronous function performTask() that returns a Promise. 
// The Promise resolves if the task is successful and rejects if there's an error. 
// Write a function that calls performTask() and logs a custom success message if 
// the task is successful, and a custom error message if there's an error.

function performTask(){
    let Promise = new Promise((resolve, reject)=>{
        if(performTask){
            resolve("It was a success")
        }else{
            reject("There is an error")
        }
    })
}
console.log(Promise)
