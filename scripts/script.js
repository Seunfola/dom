window.addEventListener('load',function(){
    let button = document.getElementById('btn');
    let inputValues = document.querySelector('input');
    button.addEventListener('click', function(){
        alert('submitted')
        if(inputValues ==''){
            console.log('done')
        }
        else{
            console.log('retry')
        }
    })
})

event.preventDefault();