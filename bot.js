function runbot(seconds = 0.5) {

 // ======= Automatically generate cookies =============
 setInterval(function(){document.getElementById("bigCookie").click()}, seconds*1000);
 // ====================================================
 
 
 // ==== Update number of cookies available to spend ========================
 var cookie_element = document.getElementById("cookies");
 setInterval(function(){ cookie_element = document.getElementById("cookies") }, 100);
 var cookie_text = cookie_element.innerText;
 setInterval(function(){ cookie_text = cookie_element.innerText; }, 100);
 var cookie_num = cookie_text.substring(0, cookie_text.indexOf(" ")); 
 setInterval(function(){cookie_num = cookie_text.substring(0, cookie_text.indexOf(" "))}, 100);
 var cookies = parseInt(cookie_num.split("").filter(e => e !== ",").join(""));
 setInterval(function(){cookies = parseInt(cookie_num.split("").filter(e => e !== ",").join(""))}, 100);
 // =========================================================================
 
 
 // ======= Choose the most expensive (efficient) product available, then buy ===============
 var products = document.getElementById("products").childNodes;
 setInterval(function() { products = document.getElementById("products").childNodes; }, 1000);
 var bestproduct = products[1];
 setInterval(function(){
  for(var i = 1; i < products.length; i++) {
   var current_product = products[i];
   if (cookies >= parseInt(current_product.childNodes[2].childNodes[3].innerText)) {
     bestproduct = current_product;
   }
   bestproduct.click();
 }}, 300);
}
// ===========================================================================================


//  :D :D :D :D == Start the bot == :D :D :D :D 
runbot();
