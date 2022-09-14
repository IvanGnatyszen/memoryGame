var cards = document.querySelectorAll('.card'); 
let cards_img = ['./img/cat.jpg' , './img/cow.jpg' , './img/dog.jpg' , './img/lion.jpg'];
let dynamic_img = document.querySelectorAll('.dynamic_img');
let game_time = 0;
let start_time = new Date();

cards_img = cards_img.concat(cards_img).sort(() => Math.random() - 0.5);

[...dynamic_img].forEach((img , index) => {
    img.src = cards_img[index]
});
[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
    var flipped_cards = document.querySelectorAll('.is-flipped')

    if(flipped_cards.length === 2){
        setTimeout(() => {
            let text1 = flipped_cards[0].querySelector('.card__face--back').innerHTML;
            let text2 = flipped_cards[1].querySelector('.card__face--back').innerHTML;
            if(text1 === text2){
                [...flipped_cards].forEach((fl_card) => {
                    fl_card.classList.add('hidden');
                })
                if(document.querySelectorAll(".card:not(.hidden)").length == 0){
                    const seconds = (new Date().getTime() - start_time.getTime()) / 1000;
                    alert("You won! Your game time is: " + seconds);
                }
            }
            [...flipped_cards].forEach((fl_card) => {
                fl_card.classList.toggle('is-flipped');
            })
        }, 1000);
    }
  });
});
