function delete_row1(){
    var elem = document.getElementById('row1');
        elem.remove();

}
function delete_row2(){
    var elem = document.getElementById('row2');
        elem.remove();

}
function delete_row3(){
    var elem = document.getElementById('row3');
        elem.remove();

}
function delete_all(){
    var elem1 = document.getElementById('row1');
        elem1.remove();
        var elem2 = document.getElementById('row2');
        elem2.remove();
        var elem3 = document.getElementById('row3');
        elem3.remove();

}

var check = function() {
    var passw = document.getElementById('password').value
    var confirm = document.getElementById('confirm_password').value

    if (passw == confirm) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'passwords match';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = "passwords don't match";
    }
    if (confirm.length < 8 && passw.length < 8){
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = "your password needs to at least 8 characters long";
    }
  }
var amount = 1
function updatecart(){
    document.getElementById('cart').innerHTML= 'My Cart('+ amount +')'
    amount ++

}
function updateallprices(){
    updateprice(1)
    updateprice(2)
    updateprice(3)
}
function updateprice(id){
    var price = document.getElementById('price' + id).innerHTML
    var quantity = document.getElementById('quantity' + id).value
    var total = document.getElementById('total' + id)
    var p = parseInt(price)
    var q=parseInt(quantity)
    if (isNaN(q)){
        var q = 0
    }
    total.innerHTML = q * p
    updatetotalprice()

}
function updatetotalprice(){
    var price1 = document.getElementById('total1')
    var price2 = document.getElementById('total2')
    var price3 = document.getElementById('total3')
    var total = document.getElementById('totalprice')
    try {
        var x = parseInt(price1.innerHTML)
    }
    catch (error) {
        var x = 0
    }
    try {
        var y = parseInt(price2.innerHTML)
    }
    catch (error) {
        var y = 0
    }
    try {
        var z = parseInt(price3.innerHTML)
    }
    catch (error) {
        var z = 0
    }
    if (isNaN(x)){
        x = 0
    }
    if (isNaN(y)){
        y = 0
    }
    if (isNaN(z)){
        z = 0
    }
    total.innerHTML = x + y + z
}

function deletefromcart(id){
    var element = document.getElementById('cartrow'+ id)
    element.remove()
    updatetotalprice()
}
function validate(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = theEvent.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9\b]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  function validatephone(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = theEvent.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /['']|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  function favswitch(){
      
  var element = document.querySelector("link[rel='icon']");
  const darkModeListener = (event) => {
  if (event.matches) {
    console.log("dark");
    element.setAttribute("href","images/favicon-darkmode.png");
    
  } else {
    console.log("light");
    element.setAttribute("href","images/favicon-lightmode.png");
  }
  };
  
  // Update favicon on Mode change 
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', darkModeListener);
  
  // Check Mode on load
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches) {
    element.setAttribute("href","images/favicon-darkmode.png");
  } else {
    element.setAttribute("href","images/favicon-lightmode.png");
  }
  updateallprices()
}
