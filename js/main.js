import Colors from "./colors.js";

class Main {
    constructor(){
        this.navIcon = document.querySelector('.menu-sm-icon');
        this.menu = document.querySelector('.menu-sm');
        this.isMenuOpen=false;

        this.colors=new Colors();
        this.#eventListeners();
    }
    #eventListeners(){
        this.navIcon.onclick=(e)=>{this.toggleNav()};
        this.menu.onclick=(e)=>{
            if(e.target.classList.contains('menu-link')){
                this.toggleNav();
            }
        }
    }
    toggleNav(){
        if(this.isMenuOpen){
            this.navIcon.innerHTML=`<i class="fa-solid fa-bars"></i>`
            this.menu.setAttribute('style','visibility:hidden; left:100%; opacity:0;')
            this.isMenuOpen=false;
        }else{
            this.navIcon.innerHTML=`<i class="fa-solid fa-xmark" style="color:white; filter:drop-shadow( 2px 2px 0px #333); font-size:2rem;" ></i>`
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