const userName = document.getElementById('user-name');
const userJob = document.getElementById('user-field');
const userTestimony = document.getElementById('paragraph');
const userImg = document.getElementById('user');
const buttons = document.querySelectorAll('button');

const myTestimonials = {
    
    firstTestimonial: {
        image:["./images/image-tanya.jpg"],
        testimonial:["“ I’ve been interested in coding for a while but never taken the jump, until now.   I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”"],
        name:"Tanya Sinclair",
        job:"UX Engineer"
    },
    
    secondTestimonial: {
        image: ["./images/image-john.jpg"],
        testimonial:[ "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”"],
        name:"John Tarkpor",
        job: "Junior Front-end Developer"
    }
    
};


let state = false;

function changeContent(){
    if(state){
        userName.textContent = myTestimonials.firstTestimonial.name;
        userJob.textContent = myTestimonials.firstTestimonial.job;
        userTestimony.textContent = myTestimonials.firstTestimonial.testimonial;
        userImg.src = myTestimonials.firstTestimonial.image;
    }
    else{
        userName.textContent = myTestimonials.secondTestimonial.name;
        userJob.textContent = myTestimonials.secondTestimonial.job;
        userTestimony.textContent = myTestimonials.secondTestimonial.testimonial;
        userImg.src = myTestimonials.secondTestimonial.image;

        
    }
    state = !state;
    
    
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.classList.contains('next')){
            changeContent();
        }
        else if(button.classList.contains('prev')){
            changeContent();
        }
        
    });
});

