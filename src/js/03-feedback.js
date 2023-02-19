import throttle from 'lodash.throttle'; 

// refs
const feedbackFormRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('input[name="email"]');
const messageRef = document.querySelector('textarea[name="message"]');

// add event listener 
feedbackFormRef.addEventListener('input', throttle(onFeedBackFormInput, 500));

feedbackFormRef.addEventListener('submit', onFeedBackFormSubmit);

// fill inputs if we have not submited data in local storage
if(localStorage.getItem('feedback-form-state') !== null) {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    emailRef.value = data.email;
    messageRef.value = data.message;
};

// create key in local storage and put there email and message values from forms
function onFeedBackFormInput() {
    const feedback = {
        email: emailRef.value,
        message: messageRef.value
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(feedback))
};

// output values data from forms to console, cleare inputs and remove local storage key (add some simple audit before data submiting)
function onFeedBackFormSubmit(e) {
    e.preventDefault();
    if(localStorage.getItem('feedback-form-state') === null) {
        return alert('Please, firstly fill the form');
    }
    if(emailRef.value === '') {
        return alert('Insert yor email first!');
    }
    if(messageRef.value === '') {
        return alert('leave some comment for us!')
    }
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    emailRef.value = '';
    messageRef.value = '';
    localStorage.removeItem('feedback-form-state');
};

