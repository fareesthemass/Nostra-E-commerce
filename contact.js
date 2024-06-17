//offer close
var offerclosebtn = document.getElementById('offer-close')
var offerbar =document.querySelector('.offer_bar')
offerclosebtn.addEventListener('click',function(){
offerbar.style.display='none'
})


//side navbar
var menutoggle = document.querySelector('.navbar-menu-toggle')
var sidenavbar = document.querySelector('.side__navbar')
var sidenavbarcancel = document.getElementById('sidenavbar__cancel')
menutoggle.addEventListener('click',function(){
  sidenavbar.style.left=0
})

sidenavbarcancel.addEventListener('click',function(){
  sidenavbar.style.left = '-50%'
})