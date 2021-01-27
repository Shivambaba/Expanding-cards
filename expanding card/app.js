const panels = document.querySelectorAll('.panel')

panels.forEach((panel) =>{
    panel.addEventListener('click',()=>{
        removeclass();
        panel.classList.toggle('active');

    })

})

function removeclass(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}
    