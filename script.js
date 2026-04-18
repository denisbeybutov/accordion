const list = document.querySelector('#list');
const answers = document.querySelectorAll('[data-answer-id]');

list.addEventListener('click', openAndCloseQuestion)

function openAndCloseQuestion(event){
    const qusetionId = event.target.parentElement.dataset.id || event.target.dataset.id;
    const arrowDown = event.target.parentElement.querySelector('.accordion__down');
    const arrowUp = event.target.parentElement.querySelector('.accordion__up');
    answers.forEach(answer => {
        if(answer.dataset.answerId === qusetionId) {
            answer.classList.toggle('animation');
            arrowDown.classList.toggle('hidden');
            arrowUp.classList.toggle('hidden');
        }
    })
}

