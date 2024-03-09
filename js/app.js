function onToggleClick() {
    var navElements = document.querySelectorAll('.bars, .x-symbol');
    var itemElements = document.querySelectorAll('.item'); // Select all elements with class 'item'
    var togglespan = document.getElementById('togglespan'); // Get the togglespan element once

    // Toggle between 'x-symbol' and 'bars' for nav elements
    for (let index = 0; index < navElements.length; index++) {
        var element = navElements[index];

        if (element.classList.contains('x-symbol')) {
            element.classList.remove('x-symbol');
            element.classList.add('bars');
        } else {
            element.classList.remove('bars');
            element.classList.add('x-symbol');
        }
    }

    // Toggle 'active' class for item elements
    for (let index = 0; index < itemElements.length; index++) {
        var item = itemElements[index];
        item.classList.toggle('active'); // This toggles 'active' on or off
    }

    // Update the text content of 'togglespan'
    if (navElements.length > 0 && navElements[0].classList.contains('x-symbol')) {
        togglespan.textContent = 'x'; // Set text to 'x' if any nav element has 'x-symbol'
    } else {
        togglespan.textContent = ''; // Clear the text if no nav elements have 'x-symbol'
    }

    console.log("Toggled the class of the items.");
}

// Adding event listeners to all elements with class 'toggle'
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
