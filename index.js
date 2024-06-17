//offer close
var offerclosebtn = document.getElementById('offer-close')
var offerbar =document.querySelector('.offer_bar')
offerclosebtn.addEventListener('click',function(){
offerbar.style.display='none'
})

//slider
var siderightslider = document.getElementById('slider-right-activate')
var sideleftslider = document.getElementById('slider-left-activate')
var slider__image = document.querySelector('.slider__imgs')
var sidemargin = 0
console.log(sideleftslider)
siderightslider.addEventListener('click',function(){

    sidemargin=sidemargin+100
  if (sidemargin>200){
    sidemargin=0
    slider__image.style.marginLeft=0
  }
  else{
    slider__image.style.marginLeft='-'+sidemargin+'vw'
  }

})

sideleftslider.addEventListener('click',function(){
    


    if(sidemargin==0)
    {
       
        sidemargin=200
        slider__image.style.marginLeft="-"+sidemargin+"vw";
    }
    else{

        sidemargin=sidemargin-100
    slider__image.style.marginLeft="-"+sidemargin+"vw";
    }
    
    
}
)
//like button
var likebtn = document.querySelectorAll(".likebtn")
likebtn.forEach((btn)=>{
  btn.addEventListener('click',function(event){
    if(event.target.src.indexOf('blackheart.png')>0){
      event.target.src = 'images/redheart.png'
    }
   else{
      event.target.src = 'images/blackheart.png'
    }
  })
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

//scroll intoview new arrival

var newarrivalstitle = document.querySelector('.new__arrivals__title')
function arrival(event){
event.preventDefault()
  newarrivalstitle.scrollIntoView({behavior:"smooth"})
}

//scroll into view most wanted

var mostwanted__title = document.querySelector('.mostwanted__title')

function wanted(event){
  event.preventDefault()
    mostwanted__title.scrollIntoView({behavior:"smooth"})
  }
  