function onToggleClick() {
    var navElemments = document.getElementsByClassName('item');

    
    for (let index = 0; index < navElemments.length; index++) {

        if(navElemments[index].classList.contains('active')) {
            navElemments[index].classList.remove('active');
        } else {
            navElemments[index].classList.add('active');
        }
        
        console.log("Changed item to active.")
    }
}

const toggleIcon = document.querySelectorAll('.toggle');
for (let index = 0; index < toggleIcon.length; index++) {
   toggleIcon[index].addEventListener('click', onToggleClick);
}


// For simple pop-in transition

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show1');
        } else {
            entry.target.classList.remove('show1');
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden1');

hiddenElements.forEach((el) => observer.observe(el));


// translate from left

const observer2 = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
        } else {
            entry.target.classList.remove('show2');
        }
    })
});

const hiddenElements2 = document.querySelectorAll('.hidden2');

hiddenElements2.forEach((el) => observer2.observe(el));

// translate from right

const observer3 = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show3');
        } else {
            entry.target.classList.remove('show3');
        }
    })
});

const hiddenElements3 = document.querySelectorAll('.hidden3');

hiddenElements3.forEach((el) => observer3.observe(el));