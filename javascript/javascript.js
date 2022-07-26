class NavListMobile{
        constructor(MobileMenu, buttonEvent, Navlink){
            this.MobileMenu = document.querySelector(MobileMenu)
            this.buttonEvent = document.querySelector(buttonEvent)
            this.Navlink = document.querySelectorAll(Navlink)

            this.HandleClick = this.HandleClick.bind(this);
        }
        animateLink(){
            this.Navlink.forEach((link, index) =>{
                console.log(index);
                link.style.animation
                ?(link.style.animation = "")
                :(link.style.animation = `navlist 0.5s ease forwards ${index / 7+0.3}s`);
            });
        }
        HandleClick(){
            this.animateLink();
            this.MobileMenu.classList.toggle('active')
        }           
        addEventListener(){
            this.buttonEvent.addEventListener("click", this.HandleClick)
        }
        init(){
            if(this.buttonEvent){
                this.addEventListener();
            }
            return this
        }
    }
const MobileMenu = new NavListMobile(
    ".nav",
    ".btn-abrir-mobile",
    ".menu li",
);

MobileMenu.init()
