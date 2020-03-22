const filterButtons = document.querySelector(".filter-buttons ul:nth-child(1)").children;
const items = document.querySelector(".portfolio-items").children;

console.log(filterButtons);

for (const button of filterButtons) {
    button.addEventListener("click", function () {
        for (const removeElement of filterButtons) {
            removeElement.classList.remove("active");
        }
        // add active
        this.classList.add("active");

        const target = this.getAttribute("data-target");
        for (const item of items) {
            // console.log(this);
            item.style.display = "none";
            
            if (target == "all") {
                item.style.display = "block"
            } else if (target == item.getAttribute("data-id")) {
                item.style.display = "block";
            }

        }
    })
}


const lightbox=document.querySelector(".lightbox");


lightbox.querySelector(".close-lightbox").addEventListener("click",function(){
    lightbox.style.display="none";
})
for(const item of items){
    item.querySelector(".fa").addEventListener("click", function(){
        console.log(this);
        const imgUrl= item.querySelector("img").getAttribute("src");
        console.log(imgUrl);
        lightbox.querySelector("img").setAttribute("src", imgUrl);
        
        lightbox.style.display="flex";
    })
    
}


