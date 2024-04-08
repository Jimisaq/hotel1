window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var hotelname = document.querySelector('.header .hotelname');
    var logo = document.querySelector('.header img');
    var topnav=this.document.querySelector('.topnav');
    if (window.pageYOffset > 300) {
        header.classList.add('scrolledheader');
        hotelname.classList.add('scrolledh1');
        logo.classList.add('scrolledimg');
        topnav.classList.add('scrolledtopnav');

    } else {
        header.classList.remove('scrolledheader');
        hotelname.classList.remove('scrolledh1');
        logo.classList.remove('scrolledimg');
        topnav.classList.remove('scrolledtopnav');

    }
});

let currentImageIndex=0;
const images=document.querySelectorAll('.imgcontainer .imageitem');
document.getElementById('prev').addEventListener('click',function(){
    images[currentImageIndex].style.display='none';
    currentImageIndex=currentImageIndex>0?currentImageIndex-1:images.length-1;
    images[currentImageIndex].style.display='flex';
})
document.getElementById('next').addEventListener('click',function(){
images[currentImageIndex].style.display='none';
currentImageIndex=currentImageIndex<images.length-1?currentImageIndex+1:0;
images[currentImageIndex].style.display="flex";
})

//hotel name overlay
const sevare=document.querySelector('.sevare');
document.querySelector('.imgcontainer').addEventListener('mouseenter',function(){
    sevare.style.opacity=1;
    sevare.style.transition='opacity 1s';
})
document.querySelector('.imgcontainer').addEventListener('mouseleave',function(){
    sevare.style.opacity=0;
    sevare.style.transition='opacity 1s';
})

//conference rooms
//  let currentSelection = 0;
//  var container = document.querySelector('.conference');
//  const confs = document.querySelectorAll('.conferenceimg .conf');
//  document.querySelector('.conferenceimg').addEventListener('click',function(){
//     confs[currentSelection].style.display='none';
//     currentSelection=currentSelection<confs.length-1?currentSelection+1:0;
//     confs[currentSelection].style.display='flex';
//     confs[currentSelection].style.transition='all 2s';
//     confs[currentSelection].style.transform='scaleX(1.5)';
    
    
// })

let currentSelection = 0;
const confs = document.querySelectorAll('.conferenceimg .conf');

function changeImage() {
    confs[currentSelection].style.display = 'none';
    currentSelection = currentSelection < confs.length - 1 ? currentSelection + 1 : 0;
    confs[currentSelection].style.display = 'flex';
    confs[currentSelection].style.transition = 'all 2s';
    confs[currentSelection].style.transform = 'scaleX(1.5)';
    confs[currentSelection].style.filter = 'brightness(1)';

    setTimeout(changeImage, 3000);
}

// Change image after 3 seconds
changeImage();