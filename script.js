const qrcode = document.querySelector('#qrcode');
const checking = document.querySelector('#checking');
const inputField = document.querySelector('#inputField');
const values = ['1','2','3','4','5','6','7','8','9','0',
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
            'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];



for(let i=0; i<8;i++){

    const value = values[Math.floor(Math.random() * (values.length))];
    qrcode.innerHTML += value;
    
}

const generateQrCode = ()=>{
    
    checking.innerHTML = 'Loading...';
    
    setTimeout(()=>{
        if(inputField.value){
            if(qrcode.innerHTML === inputField.value){
                checking.innerHTML = 'gajab hai bhai gajab :)';
            }else{
                checking.innerHTML = 'Kuch bhi...';
            } 
        }
        else{
            checking.innerHTML = "kuch to input de yaar...";
        }
    },5000);
    
}

document.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        
        checking.innerHTML = 'Loading...';
    
    setTimeout(()=>{
        if(inputField.value){
            if(qrcode.innerHTML === inputField.value){
                checking.innerHTML = 'gajab hai bhai gajab :)';
            }else{
                checking.innerHTML = 'Kuch bhi...';
            } 
        }
        else{
            checking.innerHTML = "kuch to input de yaar...";
        }
    },5000);
    }
});



