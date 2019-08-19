//for (let i = 0; i < obj.hits.length; i++)
var more = 16;
var num = 1;
var numtwenty = 20;
var fromSelect;
var paginationCont;
var pagin1;
var pagin2;
var pagin3;
var pagin4;
var pagin5;
var categoryString = "fashion, nature, backgrounds, science, education, people, feelings, religion, health, places, animals, industry, food, computer, sports, transportation, travel, buildings, business, music"
var insidecont;
var headingCont;
console.log(categoryString[1])
let catArray = categoryString.split(", ")



window.onload = function () {

    let xhr = new XMLHttpRequest();

    let container = document.getElementById("container")
    let input = document.createElement("input");
    input.type = "text";
    input.id = "inputy"

    headingCont = document.createElement("div");
    container.appendChild(headingCont);

    paginationCont = document.createElement("div");
    container.appendChild(paginationCont);
    paginationCont.id = "paginationCont"

    pagin1 = document.createElement("button");
    paginationCont.appendChild(pagin1);
    pagin1.innerText = "Page 1";
    pagin1.onclick = function () {
        pressNext(1)
    }

    pagin2 = document.createElement("button");
    paginationCont.appendChild(pagin2);
    pagin2.innerText = "Page 2";
    pagin1.onclick = function () {
        pressNext(2)
    }

    pagin3 = document.createElement("button");
    paginationCont.appendChild(pagin3);
    pagin3.innerText = "Page 3";
    pagin1.onclick = function () {
        pressNext(3)
    }

    pagin4 = document.createElement("button");
    paginationCont.appendChild(pagin4);
    pagin4.innerText = "Page 4";
    pagin1.onclick = function () {
        pressNext(4)
    }

    pagin5 = document.createElement("button");
    paginationCont.appendChild(pagin5);
    pagin5.innerText = "Page 5";
    pagin1.onclick = function () {
        pressNext(5)
    }
    //getElement must always be insdie the onload but createlement can be inside or outside
    document.getElementById("listen").addEventListener("click", right);
    document.getElementById("listenback").addEventListener("click", left)

    let label = document.createElement("label");
    headingCont.appendChild(label)
    label.innerText = "Search Here"
    headingCont.appendChild(input);

    let toselect = document.createElement("select");
    toselect.id = "selectId"
    headingCont.appendChild(toselect)

    headingCont.style.marginBottom = "15px";

    for (let i = 0; i < catArray.length; i++) {
        let opt = document.createElement("option");
        opt.value = catArray[i];

        opt.innerText = catArray[i];

        toselect.appendChild(opt);
    }

    let buttonSearch = document.createElement("button")
    headingCont.appendChild(buttonSearch);
    buttonSearch.innerText = "search";

    insidecont = document.createElement("div");
    container.appendChild(insidecont);

    //function HERE!!
    buttonSearch.onclick = function () {
        clickSearch();

    }

    // }
    function clickSearch() {
        insidecont.innerText = "";
        let selectedOpt = document.getElementById("selectId");
        let qCategory = selectedOpt.value;
        console.log(qCategory)
        let selectThis = document.getElementById("inputy").value

        console.log("clicked");
        xhr.open("GET", "https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q=" + selectThis + "&image_type=photo&category=" + qCategory + "&pretty=true&per_page=" + more + "&page=" + num, true) //
        xhr.send();
        xhr.onload = function () {

            //if(xhr.status==200&&xhr.readyState==4){ 
            let jsonObj = xhr.responseText;
            let obj = JSON.parse(jsonObj)
            console.log(obj);
            console.log(obj.hits);

            console.log(selectThis)

            for (let i = 0; i < obj.hits.length; i++) {

                let imgy = document.createElement("img");
                imgy.src = obj.hits[i].largeImageURL

                insidecont.appendChild(imgy);


            }


        }
    }

    function right() {
        num++;
        clickSearch();
        console.log(num);
    }

    function left() {
        num--;
        clickSearch();

    }
}