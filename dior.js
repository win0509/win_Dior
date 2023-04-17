// 스크롤 내리면 배경색상 추가
const header = document.querySelector('header');
const headerHeight = header.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
if (window.scrollY > headerHeight){
    header.setAttribute("style", "background: #FFF2F1; transition: .3s;");
}else {
    header.setAttribute("style", "background: transparent;");
 }
});
  

//탑버튼
const topBtn = document.querySelector('.top-btn');

window.addEventListener('scroll' , function(){
    const scrY = window.scrollY;
    console.log(scrY)
    if(scrY > 1707){
        topBtn.style.display='block';
    }else{
        topBtn.style.display='none';
    }
});
topBtn.addEventListener('click', function(){
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  });


//   탭메뉴
//   const subBtn = document.querySelectorAll('.sub-button');
//   const subNavs = document.querySelectorAll('.sub-navs');

//   function Tabs(i){

//     subBtn.forEach((btn) => {
//         btn.classList.remove('active');
//     });
//     subNavs.forEach((navs) => {
//         subNavs.style.display = 'none';
//     });
//         subBtn[i].classList.add('active');

//   }
//   subBtn.forEach((btn, idx) => {
//     btn.addEventListener('click', () => {
//      Tabs(idx)
//     });
//    });
