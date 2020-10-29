var textRequest = new XMLHttpRequest();
textRequest.open("GET", "htmlcolours2020.txt", true);
textRequest.send(null);
textRequest.onreadystatechange = function() {
  if ( textRequest.readyState === 4 && textRequest.status === 200 ) {
    const textTo = textRequest.responseText;
    const loTxt = textTo.toLocaleLowerCase();
    const colours = loTxt.split(/\r?\n|\r/);
    const coloursCapz = textTo.split(/\r?\n|\r/);
    colourCount(colours, coloursCapz); 
  }
}

function colourCount(colours, coloursCapz){
  var fInput = document.getElementById("fInput");
  fInput.addEventListener("input", letters);

  function letters(letterpressed){ 
    // console.log(letterpressed.data);
    var check = colours.includes(fInput.value);
    if( check == false){
      // console.log('false');
    }
    else{
      // console.log('true');
      var colourName = fInput.value;
      document.getElementById("body").style.backgroundColor=colourName;
      var clearInput = fInput.value = '';
      updateDetails(coloursCapz);
      return clearInput;
    }
    var resetBtn = document.getElementById("restart");
    resetBtn.addEventListener("click", reset);

    function reset(){
      document.getElementById("body").style.backgroundColor="#f0f0f0";
      output.style.display="none";
    }

    function updateDetails(){    
      document.getElementById("output").style.display="block";
      var list = document.getElementById("details").getElementsByTagName("li");
      var cPos = colours.indexOf(colourName);
      list[0].innerHTML = coloursCapz[cPos];     
      list[1].innerHTML = colours[cPos + 1]; 
      // list[2].innerHTML =colour.theory;     
    }
  }
}


function hint(){
  document.getElementById("hint").style.display="block";
  document.querySelector(".closeBtn").style.cursor="pointer"; 
}
function hideHint(){
  document.getElementById("hint").style.display="none";
}