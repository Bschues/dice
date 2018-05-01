function dice1(faces) {
    let randomnumber = Math.floor(Math.random() * faces) + 1;
    //console.log(randomnumber);
    return randomnumber;
}

function dice2(faces) {
    let randomnumber2 = Math.floor(Math.random() * faces) + 1;
    //console.log(randomnumber2);

    return randomnumber2;
}
//Created two funtions that generate a random number

function rollresults() {

    let count = [];
    for (i = 1; i <= 1000; i++) {
        let sum = dice1(6) + dice2(6);
        if (count[sum] == undefined) {
            count[sum] = 1
        } else {
            count[sum] += 1;
        }
    }
    for (i = 2; i < count.length; i++) {
        //count[];
        let box = document.getElementById("div");
        let p = document.createElement("p");
        let stuff = document.createTextNode(i.toString() + " : " + count[i])
        p.appendChild(stuff);
        box.appendChild(p);
        document.getElementById("p")
        p.style.backgroundColor = "honeydew";
        p.style.width = count[i] + "px";
        box.style.border = 2 + "px";
        box.style.border = "dotted";
        box.style.borderColor = "honeydew";
        }



    console.log(count);

}
rollresults();
