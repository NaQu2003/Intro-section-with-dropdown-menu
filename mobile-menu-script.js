const menuIcon = document.querySelector('.menu-icon');
const menuItems = document.querySelectorAll('.menu-item')
const menuBar = document.querySelector('.menu-bar')
const loginBoxMobile = document.querySelector('.login-box-mobile')
const subMenuList = document.querySelector('.sub-menu-list')
const subMenuListCompany = document.querySelector('.sub-menu-list-company')
const arrowDowns = document.querySelectorAll('.arrow-down')
const overLay = document.querySelector('.overlay')
menuIcon.addEventListener('click',()=>{
    if(menuIcon.classList.contains('active')){
        menuIcon.classList.remove('active')
        for(let i =0;i<menuItems.length;i++){
            menuItems[i].style.display = "";
           
           
        } 
        menuBar.style.backgroundColor = "transparent"
        loginBoxMobile.style.display = "";
        overLay.style.display = "none"
    }else{
        menuIcon.classList.add('active')
            for(let i =0;i<menuItems.length;i++){
                menuItems[i].style.display = "flex";
               
        } 
        menuBar.style.backgroundColor = "white"
        loginBoxMobile.style.display = "flex";
        overLay.style.display = "block"
    }
  
    })




menuItems[0].addEventListener('click',()=>{
    if(subMenuList.classList.contains('hidden')){
        subMenuList.classList.remove('hidden');
        arrowDowns[0].src = "images/icon-arrow-up.svg"
       
    }else{
        subMenuList.classList.add("hidden");
        arrowDowns[0].src = "images/icon-arrow-down.svg"    
    }
})
menuItems[1].addEventListener('click',()=>{
    if(subMenuListCompany.classList.contains('hidden')){
        subMenuListCompany.classList.remove('hidden');
        arrowDowns[1].src = "images/icon-arrow-up.svg"
       
    }else{
        subMenuListCompany.classList.add("hidden");
        arrowDowns[1].src = "images/icon-arrow-down.svg"  
    }
})

