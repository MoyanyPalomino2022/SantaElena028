var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("imagenS");
  var dots = document.getElementsByClassName("demoB");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }/*
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }*/
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-red";
}





/*segundo*/
var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(m) {
  showDivs2(slideIndex2 += m);
}

function currentDiv2(m) {
  showDivs2(slideIndex2 = m);
}

function showDivs2(m) {
  var e;
  var y = document.getElementsByClassName("imagenS2");
  var dots2 = document.getElementsByClassName("demoB2");
  if (m > y.length) {slideIndex2 = 1}    
  if (m < 1) {slideIndex2 = y.length}
  for (e = 0; e < y.length; e++) {
    y[e].style.display = "none";  
  }/*
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }*/
  y[slideIndex2-1].style.display = "block";  
  dots2[slideIndex2-1].className += "w3-red2";
}

/*Tercero*/

var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(a) {
  showDivs3(slideIndex3 += a);
}

function currentDiv3(a) {
  showDivs3(slideIndex3 = a);
}

function showDivs3(a) {
  var g;
  var v = document.getElementsByClassName("imagenS3");
  var dots3 = document.getElementsByClassName("demoB3");
  if (a > v.length) {slideIndex3 = 1}    
  if (a < 1) {slideIndex3 = v.length}
  for (g = 0; g < v.length; g++) {
    v[g].style.display = "none";  
  }/*
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }*/
  v[slideIndex3-1].style.display = "block";  
  dots3[slideIndex3-1].className += "w3-red3";
}

/*Cuarto*/

var slideIndex4 = 1;
showDivs4(slideIndex4);

function plusDivs4(l) {
  showDivs4(slideIndex4 += l);
}

function currentDiv4(l) {
  showDivs4(slideIndex4 = l);
}

function showDivs4(l) {
  var t;
  var u = document.getElementsByClassName("imagenS4");
  var dots4 = document.getElementsByClassName("demoB4");
  if (l > u.length) {slideIndex4 = 1}    
  if (l < 1) {slideIndex4 = u.length}
  for (t = 0; t < u.length; t++) {
    u[t].style.display = "none";  
  }/*
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }*/
  u[slideIndex4-1].style.display = "block";  
  dots4[slideIndex4-1].className += "w3-red5";
}


/*Quinto*/

var slideIndex5 = 1;
showDivs5(slideIndex5);

function plusDivs5(k) {
  showDivs5(slideIndex5 += k);
}

function currentDiv5(k) {
  showDivs5(slideIndex5 = k);
}

function showDivs5(k) {
  var s;
  var w = document.getElementsByClassName("imagenS5");
  var dots5 = document.getElementsByClassName("demoB5");
  if (k > w.length) {slideIndex5 = 1}    
  if (k < 1) {slideIndex5 = w.length}
  for (s = 0; s < w.length; s++) {
    w[s].style.display = "none";  
  }/*
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }*/
  w[slideIndex5-1].style.display = "block";  
  dots5[slideIndex5-1].className += "w3-red5";
}