let position = ["A2", "A3", "A4", "A5", "A6", "A7", "A8", "B8", "C8", "D8", "E8", "F8", "G8", "H8", "H7", "H6", "H5", "H4", "H3", "H2", "H1", "G1", "F1", "E1", "D1", "C1", "B1", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "B8"]
let blueleft = 8;
let redleft = 8;
let routgame = ["J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8"];
let boutgame = ["Z8", "Z7", "Z6", "Z5", "Z4", "Z3", "Z2", "Z1"];
let enemychoice = ["rock", "paper", "scissors"];
function moveblue() {
    for (var i = 0; i < position.length; i++) {
        let bleader = document.getElementById(position[i]);
        let bposition = bleader.innerHTML;
        if (bposition.includes("bteamleader")) {
            if (i == 0) {
                let bnextstepsc = document.getElementById(position[i + 27]);
                let eatred = bnextstepsc.innerHTML;
                if (eatred.includes("rteam")) {
                    redleft -= 1;
                    let died = document.getElementById(routgame[(routgame.length) - redleft - 1]);
                    died.innerHTML = '<div class="rteam"></div>';
                }
                let blastsc = document.getElementById(position[i + 27 + blueleft]);
                let btargetsc = document.getElementById(position[i]);
                bnextstepsc.innerHTML = '<div class="bteamleader">P1</div>';
                btargetsc.innerHTML = '<div class="bteam"></div>';
                blastsc.innerHTML = "";
                if (eatred.includes("rteamleader")) {
                    alert("you win")
                    location.reload();
                }
                break
            } else {
                let bnextstep = document.getElementById(position[i - 1]);
                let eatred = bnextstep.innerHTML;
                if (eatred.includes("rteam")) {
                    redleft -= 1;
                    let died = document.getElementById(routgame[(routgame.length) - redleft - 1]);
                    died.innerHTML = '<div class="rteam"></div>';
                }
                let blast = document.getElementById(position[i + blueleft - 1]);
                bleader.innerHTML = '<div class="bteam"></div>';
                bnextstep.innerHTML = '<div class="bteamleader">P1</div>';
                blast.innerHTML = "";
                if (eatred.includes("rteamleader")) {
                    alert("you win");
                    location.reload();                    
}
                break
            }
        }
    }
}
function movered() {
    for (var i = 0; i < position.length; i++) {
        let rleader = document.getElementById(position[i]);
        let rposition = rleader.innerHTML;
        if (rposition.includes("rteamleader")) {
            if (i == 0) {
                let rnextstepsc = document.getElementById(position[i + 27]);
                let eatblue = rnextstepsc.innerHTML;
                if (eatblue.includes("bteam")) {
                    blueleft -= 1;
                    let died = document.getElementById(boutgame[(boutgame.length) - blueleft - 1]);
                    died.innerHTML = '<div class="bteam"></div>';


                }
                let rlastsc = document.getElementById(position[i + 27 + redleft]);
                let rtargetsc = document.getElementById(position[i]);
                rnextstepsc.innerHTML = '<div class="rteamleader">bot</div>';
                rtargetsc.innerHTML = '<div class="rteam"></div>';
                rlastsc.innerHTML = "";
                if (eatblue.includes("bteamleader")) {
                    alert("you lose กากจังอะ ฮาโหลลลลลลลล")
                    location.reload();
                }
                break
            } else {
                let rnextstep = document.getElementById(position[i - 1]);
                let eatblue = rnextstep.innerHTML;
                if (eatblue.includes("bteam")) {
                    blueleft -= 1;
                    let died = document.getElementById(boutgame[(boutgame.length) - blueleft - 1]);
                    died.innerHTML = '<div class="bteam"></div>';


                }
                let rlast = document.getElementById(position[i + redleft - 1]);
                rleader.innerHTML = '<div class="rteam"></div>';
                rnextstep.innerHTML = '<div class="rteamleader">bot</div>';
                rlast.innerHTML = "";
                if (eatblue.includes("bteamleader")) {
                    alert("you lose กากจังอะ ฮาโหลลลลลลลล")
                    location.reload();
                }
                break
            }
        }
    }
}

function rock() {
    let ran = Math.floor(Math.random() * enemychoice.length);
    let botchoose = document.getElementById("enemychoice")
    let mychoose = document.getElementById("mychoice")
    mychoose.innerHTML = "<div>rock</div>"
    if (enemychoice[ran] == "rock") {
        botchoose.innerHTML = "<div>rock  (DRAW)</div>"
    } else if (enemychoice[ran] == "paper") {
        botchoose.innerHTML = "<div>paper  (YOU LOSE)</div>"
        movered();
    } else {
        botchoose.innerHTML = "<div>scissors  (YOU WIN)</div>"
        moveblue();
    }
    // while (true){
    //     moveblue();
    //     if (redleft==0){
    //         break;
    //     }
    // }
}
function paper() {
    let ran = Math.floor(Math.random() * enemychoice.length);
    let botchoose = document.getElementById("enemychoice")
    let mychoose = document.getElementById("mychoice")
    mychoose.innerHTML = "<div>paper</div>"
    if (enemychoice[ran] == "rock") {
        botchoose.innerHTML = "<div>rock  (YOU WIN)</div>"
        moveblue();
    } else if (enemychoice[ran] == "paper") {
        botchoose.innerHTML = "<div>paper  (DRAW)</div>"
    } else {
        botchoose.innerHTML = "<div>scissors  (YOU LOSE)</div>"
        movered();
    }

}
function scissors() {
    let ran = Math.floor(Math.random() * enemychoice.length);
    let botchoose = document.getElementById("enemychoice")
    let mychoose = document.getElementById("mychoice")
    mychoose.innerHTML = "<div>scissors</div>"
    if (enemychoice[ran] == "scissors") {
        botchoose.innerHTML = "<div>scissors  (DRAW)</div>"
    } else if (enemychoice[ran] == "paper") {
        botchoose.innerHTML = "<div>paper  (YOU WIN)</div>"
        moveblue();
    } else {
        botchoose.innerHTML = "<div>rock  (YOU LOSE)</div>"
        movered();
    }
}    