class Main {
    constructor(){
        this.navIcon = document.querySelector('.menu-sm-icon');
        this.menu = document.querySelector('.menu-sm');
        this.closeNavBtn = document.querySelector('.close-nav');
        this.isMenuOpen=false;
        this.event = new Event(this);
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
}


const main = new Main();
