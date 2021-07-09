//Setting arrays up and variables for loop;
var userAge = [30,16,18,21,14];
var is_subscribed = [false,false, true, true, false];
var counter = 0;
var length = userAge.length;

//establishing while loop;

while (counter < length){

    if (userAge[counter] < 18 && is_subscribed[counter] == true){
        console.log("The user is younger than 18 and is subscribed");
    }
    else if (userAge [counter]< 18 && (is_subscribed [counter] == false)){
        console.log("The user is younger than 18 and is not subscribed");
    }
    else if (userAge [counter] >= 18 && is_subscribed [counter] == true){
        console.log("The user is 18 or older and is subscribed")
    }
    else if (userAge [counter] >= 18 && (is_subscribed [counter] == false)){
        console.log("The user is 18 or older and is not subscribed");
    }
    else{
        console.log("Thanks for visiting my website");
    }
    counter = counter + 1;
}



//variables from first assignment A;
// var userAge = 18;
// var is_subscribed = false;


// My extra practice attempt at nesting
// if(userAge < 18){
//     if (is_subscribed == true){
//         console.log("The user is younger than 18 and is subscribed");
//     }
//     else if (is_subscribed == false){
//         console.log("The user is younger than 18 and is not subscribed");
//     }
// }
// else if (userAge >= 18){
//     if (is_subscribed == true){
//         console.log("The user is 18 or older and is subscribed");
//     }
//     else if (is_subscribed == false){
//         console.log("The user is 18 or older and is not subscribed");
//     }
// }
// else{
//     console.log("Thanks for visiting my website");
// }
