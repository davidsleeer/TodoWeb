window.addEventListener("load", 
function () {
    
    /*let myAddButton = document.createElement("button")
    myAddButton
    */
    


        
        
        });

         function inputadd () {
            var myList = document.getElementById("myList");
            var temp1 = document.getElementById("comei").value;

            

      //myList.innerHTML += "<li>hello</li>"
          if (temp1) {
          
              let myNewListItem = document.createElement("li");
              myNewListItem.className = "textoutput";
              myNewListItem.innerHTML = temp1;
              let myNewButton = document.createElement("button");
              myNewButton.className = "textbutton";
              myNewButton.addEventListener("click", function () {
                  myList.removeChild(myNewListItem);
              });
              myNewListItem.appendChild(myNewButton);
              myList.appendChild(myNewListItem);
                  
              }



}
window.addEventListener("load", 
function () {
    
    /*let myAddButton = document.createElement("button")
    myAddButton
    */
    


        
        
        });




function inputadding () {

    //document.getElementById("tery").innerHTML += "<div><input type='text'> </div>";
    
   
  
    var temp = document.getElementById("comein").value;
    if (temp) {
        var idc = document.getElementById("tery")
        let myTextOut = document.createElement("div");
        myTextOut.className = "textoutput";
        myTextOut.innerHTML = temp;
        
        let myDelButton = document.createElement("button");
        myDelButton.className = "textbutton";
        myDelButton.addEventListener("click", function () {
            idc.removeChild(myTextOut);
        });
        myTextOut.appendChild(myDelButton);
        idc.appendChild(myTextOut);
    
        
    }
    
   
  
    
}