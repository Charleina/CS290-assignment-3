/*
 * Add your JavaScript to this file to complete the assignment.
 */

document.getElementById("create-twit-button").addEventListener('click', function() {
    document.getElementById("modal-backdrop").style.display = "unset";
    document.getElementById("create-twit-modal").style.display = "unset";
});

var cancelButton = function() {
    document.getElementById("modal-backdrop").style.display = "none";
    document.getElementById("create-twit-modal").style.display = "none";
}

var cancel = document.getElementsByClassName("modal-cancel-button");
for(var i = 0; i < cancel.length; i++){
    cancel[i].addEventListener('click', cancelButton );
    }

var xbutton = document.getElementsByClassName("modal-close-button");
for(var i = 0; i < xbutton.length; i++){
    xbutton[i].addEventListener('click', cancelButton );
    }

var acceptButton = function() {
    var textinput = document.getElementById("twit-text-input");
    var author = document.getElementById("twit-attribution-input");
    console.log(textinput.value);
    console.log(author.value);
    if(textinput.value == "" || author.value == ""){
        window.alert("Both the twit text and Author have to be filled in.");
    }
    else{
        var article = document.createElement("article");
        article.classList.add("twit");
        var mainclass = document.querySelector(".twit-container");
        mainclass.appendChild(article);/*added a new twit container here at end of last twit container*/
        
        /*adding the icon to new twit container*/
        var div1 = document.createElement("div");
        div1.classList.add("twit-icon");
        
        var bullhorn = document.createElement("i");
        bullhorn.classList.add("fas");
        bullhorn.classList.add("fa-bullhorn");
        div1.appendChild(bullhorn);
        
        
        var div2 = document.createElement("div");
        div2.classList.add("twit-content");
        
        var p1 = document.createElement("p");
        p1.classList.add("twit-text");
        p1.append(textinput.value);
        
        var p2 = document.createElement("p");
        p2.classList.add("twit-author");
        
        var authorlink = document.createElement("a");
        authorlink.href = "#";
        authorlink.append(author.value);
        p2.appendChild(authorlink);
        
        div2.appendChild(p1);
        div2.appendChild(p2);
        article.appendChild(div1);
        article.appendChild(div2);
        
        document.getElementById("modal-backdrop").style.display = "none";
        document.getElementById("create-twit-modal").style.display = "none";
        
        /*reset*/
        author.value = "";
        textinput.value = "";
    }
}

var accept = document.getElementsByClassName("modal-accept-button");
accept[0].addEventListener("click", acceptButton);


/*for the search bar*/
var nav = document.querySelector("#navbar-search-input");
nav.addEventListener("keyup", function() {
    
    var input = document.getElementById("navbar-search-input");
    console.log(input.value);

    input = input.value.toLowerCase();
    
    var content = document.getElementsByClassName("twit-content");
    
    for(var i = 0; i < content.length; i++){
        var twitText = content[i].getElementsByClassName('twit-text');
        
        var txtvalue = twitText[0].value;
        if(txtvalue.toLowerCase().indexOf(input) > -1){
            content[i].style.display = "";
        }
        else
            content[i].style.display = "none";
        
        var authorText = content[i].getElementsByClassName('twit-author');
    
        txtvalue = authorText[0].value;
        if(txtvalue.toLowerCase().indexOf(input) > -1){
            content[i].style.display = "";
        }
        else
            content[i].style.display = "none";
    }
});


