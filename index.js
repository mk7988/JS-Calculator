let main;
 function display(a){
    let show = (document.getElementById("show")).value +=a
 }
 function equal() {
    let show = document.getElementById("show").value;
    for (let i = 0; i<=show.length; i++){
        if (show[i]=="*"){
            main = "multi";
        }

    }
    for (let i = 0; i<=show.length; i++){
        if (show[i]=="/"){
            main = "div";
        }

    }
    for (let i = 0; i<=show.length; i++){
        if (show[i]=="+"){
            main = "add";
        }

    }
    for (let i = 0; i<=show.length; i++){
        if (show[i]=="-"){
            main = "sub";
        }

    }

    if (main=="multi"){
        const first = show.split("*")[0];
        const second = show.split("*")[1];
        const final= first*second;
        document.getElementById("show").value= final;
    }
    if (main=="div"){
        const first = show.split("/")[0];
        const second = show.split("/")[1];
        const final= first/second;
        document.getElementById("show").value= final;
    }
    if (main=="add"){
        const first = parseInt(show.split("+")[0]);
        const second = parseInt(show.split("+")[1]);
        const final= first+second;
        document.getElementById("show").value= final;
    }
    if (main=="sub"){
        const first = show.split("-")[0];
        const second = show.split("-")[1];
        const final= first-second;
        document.getElementById("show").value= final;
    }
 }
function clr() {
    let show = document.getElementById("show").value="";
}