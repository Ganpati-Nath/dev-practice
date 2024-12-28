let name = "FarName";
function outerFunction() {
    let name = "Name";

    function innerFunction() {

        // closure...
        let name = "closeName";
        console.log(name);
    }
    innerFunction();
}
outerFunction();