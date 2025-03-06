import Colors from "./colors.js";

class Main {
    constructor(){
        this.navIcon = document.querySelector('.menu-sm-icon');
        this.menu = document.querySelector('.menu-sm');
        this.closeNavBtn = document.querySelector('.close-nav');
        this.isMenuOpen=false;

        this.colors=new Colors();
        this.#eventListeners();
    }
    #eventListeners(){
        this.navIcon.onclick=(e)=>{this.toggleNav()};
        this.closeNavBtn.onclick=()=>{
            this.toggleNav();
        }
        this.menu.onclick=(e)=>{
            if(e.target.classList.contains('menu-link')){
                this.toggleNav();
            }
        }
    }
    toggleNav(){
        if(this.isMenuOpen){
            this.menu.setAttribute('style','visibility:hidden; left:100%; opacity:0;')
            this.isMenuOpen=false;
        }else{
            this.menu.setAttribute('style','visibility:visible; left:0%; opacity:1;')
            this.isMenuOpen=true;
        }
    }
    render(){
        this.colors.render()
    }
}

const main = new Main();
main.render();