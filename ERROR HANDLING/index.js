// try {
//     console.log("I'm inside TRY block... START...")
//     console.log(x); // error...
//     console.log("I'm inside TRY block... END...")
// }
// catch(error) {
//     console.log("I'm inside CATCH block...")
//     console.log("Your error is : ", error);
// }
// finally {
//     console.log("I'm running...");
// }

// // console.log(x); // error...

// custom error...
try{
    console.log(x);

}
catch(err) {
    throw new Error("DECLARATION MISSED...");
}