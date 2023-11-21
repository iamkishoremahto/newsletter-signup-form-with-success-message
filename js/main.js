const emailFieldHandler = async (emailField) =>{
    return new Promise((resolve, reject) =>{
        emailField = document.getElementById('emailField');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const emailResult =  emailRegex.test(emailField.value);
        if(emailResult || !emailResult){
            resolve(emailResult);
        }
        else{
            reject(new Error('Something went wrong'))
        }
    })

}
const isvalidEmailHandler = async() =>{
    const emailField = document.getElementById('emailField');



emailField.addEventListener('input', async()=>{
    const emailStatus = await emailFieldHandler();
    const emailValidationField = document.getElementById('emailValidationErr');
    const subscribeBtn = document.getElementById('subscribeBtn');
    if(!emailStatus || emailField === ''){
        
        emailValidationField.style.display = 'block';
        emailField.classList.remove('notErrorEmailField');
        emailField.classList.add('errorEmailField');
      
    }
    else{
        emailValidationField.style.display = 'none';
        emailField.classList.add('notErrorEmailField');
        emailField.classList.remove('errorEmailField');
      
    }
});

}

const subscribeBtnHandler = async() =>{
    const subscribeBtn = document.getElementById('subscribeBtn');

    subscribeBtn.addEventListener('click',async() =>{
        const emailField = document.getElementById('emailField');
        const emailValidationField = document.getElementById('emailValidationErr');
         const emailStatus = await emailFieldHandler()
         if(emailField.value === '' || !emailStatus){
            
            emailValidationField.style.display = 'block';
            emailField.classList.remove('notErrorEmailField');
            emailField.classList.add('errorEmailField');
          
        }
        else{
            emailValidationField.style.display = 'none';
            emailField.classList.add('notErrorEmailField');
            emailField.classList.remove('errorEmailField');
          
        }
        if(emailField.value !== '' && emailStatus){
            
        const mainContainer = document.querySelector('.main_container');
        mainContainer.style.display = 'none';
        console.log(mainContainer);
        const thanksContainer = document.querySelector('.thankYouMainWrapper');
        
        thanksContainer.style.display = 'flex';
        const emailValue = document.getElementById('emailId')
        emailValue.innerHTML = emailField.value;
        }
    
    });
}



const dismissBtnHandler = async() =>{
    const dismissBtn = document.getElementById('dismissBtn');

    dismissBtn.addEventListener('click', () =>{
        const emailField = document.getElementById('emailField');
        emailField.value = '';
        const thanksContainer = document.querySelector('.thankYouMainWrapper');
        const mainContainer = document.querySelector('.main_container');
        mainContainer.style.display = 'flex';
        thanksContainer.style.display = 'none';

})
}



isvalidEmailHandler();
subscribeBtnHandler();
dismissBtnHandler();
if(window.innerHeight<=800){
    const banner_image = document.getElementById('banner_image');
    banner_image.src = 'images/illustration-sign-up-mobile.svg';
}