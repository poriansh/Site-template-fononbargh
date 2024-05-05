let questionbox = document.querySelectorAll('.Frequently-question-box-title')
questionbox.forEach(function(item){
    
    item.addEventListener('click',function(){
       
        let iditem = this.getAttribute('data-id')
        document.getElementById(iditem).classList.toggle('Frequently-question-box-caption--active')
        
        

    })
})