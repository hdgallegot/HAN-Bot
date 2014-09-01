console.log("hi");
sleep(3000);
console.log("hi hi");

function sleep(millisecond){
    var currentTime = new Date().getTime();
    console.log(currentTime);
    while(currentTime + millisecond >= new Date().getTime()){
        //do nothing
    }
    console.log(new Date().getTime());
}
