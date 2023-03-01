let rating = 0;

function unselectButton() {
    for (let i = 1; i <= 5; i++) {
        btn = document.getElementById("btn"+i);
        if (btn.classList.contains('clickedRatingButton')) {
            btn.classList.remove('clickedRatingButton');
            return;
        }
    }
}

function selectedButton1() {
    unselectButton();
    button = document.getElementById("btn1");
    button.classList.add('clickedRatingButton');
}

function selectedButton2() {
    unselectButton();
    button = document.getElementById("btn2");
    button.classList.add('clickedRatingButton');
}

function selectedButton3() {
    unselectButton();
    button = document.getElementById("btn3");
    button.classList.add('clickedRatingButton');
}

function selectedButton4() {
    unselectButton();
    button = document.getElementById("btn4");
    button.classList.add('clickedRatingButton');
}

function selectedButton5() {
    unselectButton();
    button = document.getElementById("btn5");
    button.classList.add('clickedRatingButton');
}

function submit() {
    for (let i = 1; i <= 5; i++) {
        btn = document.getElementById('btn'+i);
        if (btn.classList.contains('clickedRatingButton')) {
            rating = document.getElementById('ratingText')
            rating.innerHTML = 'You selected ' + i + ' out of 5';
            card = document.getElementById('card');
            thankYouCard = document.getElementById('thankYouCard');
            card.style.display = 'none';
            thankYouCard.style.display = 'flex';
            return;
        }
    }
    alert('Please select a rating.')
}