class StickyHeader {
    constructor(){
        this.siteHeader = document.querySelector(".site-header")
        this.pageSections = document.querySelectorAll(".page-section")
        this.largeHero = document.querySelector(".large-hero")
        this.headerObserver()
        this.scrollSpyObserver()
    }


    headerObserver(){

        let observer = new IntersectionObserver((entries, observer)=>{

            entries.forEach(entry => {
                if(!entry.isIntersecting){
                    document.querySelector(".site-header").classList.add("site-header--dark")
                }else {
                    document.querySelector(".site-header").classList.remove("site-header--dark")
                }
            })
            
            
        }, {threshold: 0.7, rootMargin: "0px", root: null})

        observer.observe(document.querySelector(".large-hero"))
    }

    scrollSpyObserver(){

    const observerScrollSpy = new IntersectionObserver((entries)=> {
        entries.forEach((entry => {
            if (entry.isIntersecting){
                let matchingLink = entry.target.getAttribute("data-matching-link")
                document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(el => {el.classList.remove("is-current-link")})
                document.querySelector(matchingLink).classList.add("is-current-link")
            
            }else{
                document.querySelector("#our-beginning-link").classList.remove("is-current-link")
                
            }

        }))
        }, {threshold: 0, rootMargin: "-45% 0%"});

        this.pageSections.forEach((pageSection)=>{
            observerScrollSpy.observe(pageSection)
        })
        
    }


}

export default StickyHeader