class Event {
    constructor(main) {
        this.main = main;
        
        this.main.navIcon.onclick=(e)=>{this.main.toggleNav()};
        this.main.closeNavBtn.onclick=()=>{
            this.main.toggleNav();
        }
        this.main.menu.onclick=(e)=>{
            if(e.target.classList.contains('menu-link')){
                this.main.toggleNav();
            }
        }
    }
}
