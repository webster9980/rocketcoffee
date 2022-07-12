const BtnMobile = document.getElementById('btn-abrir');

function NavToggle(){
    const NavBar = document.getElementById('nav-bar');
    NavBar.classList.toggle('active');
}

console.log(BtnMobile)

if(BtnMobile != null){
    BtnMobile.addEventListener('click', NavToggle);
}else{
    console.log("ERROR 404");
}
