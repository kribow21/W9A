var userAge = 18;
var is_subscribed = false;


if (userAge < 18 && is_subscribed == true){
    console.log("The user is younger than 18 and is subscribed");
}
else if (userAge < 18 && (is_subscribed == false)){
    console.log("The user is younger than 18 and is not subscribed");
}
else if (userAge >= 18 && is_subscribed == true){
    console.log("The user is 18 or older and is subscribed")
}
else if (userAge >= 18 && (is_subscribed == false)){
    console.log("The user is 18 or older and is not subscribed");
}
else{
    console.log("Thanks for visiting my website");
}

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
