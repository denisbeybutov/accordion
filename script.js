//перменные
const list = document.querySelector('#list');
const items = document.querySelectorAll('[data-id]')

const questions = [];

//функции
function initArrOfQuestions(arr){
    items.forEach(item => {
        arr.push(
            {
                id: item.dataset.id,
                question: item.querySelector('.accordion__question').textContent,
                answer: item.querySelector('.accordion__answer').textContent,
                height: item.querySelector('.accordion__question-main').clientHeight,
            }
        )
    })
    // console.log(arr);
}

function toggleQuestion(event){
    
    const currentQuestionId = event.target.parentElement.dataset.id || 
                              event.target.parentElement.parentElement.dataset.id;

    
    items.forEach(item => {
       const equalId = item.dataset.id === currentQuestionId;
       const openContains = item.classList.contains('open');
      if(!openContains && equalId) {
        open(item, currentQuestionId);
      } else if (openContains && equalId){
        close(item,currentQuestionId)
      }
    })

}

function open(item, currentQuestionId){
    const heightOfText = 50 + questions[currentQuestionId-1].height;
    item.classList.add('open');
    item.style.setProperty('--myHeight', `${heightOfText}px`);
    item.style.setProperty('--myHeightPlusFive', `${heightOfText + 5}px`);
    
    const down = item.querySelector('.accordion__down');
    down.classList.add('rotate-up')
}

function close(item, currentQuestionId){
    item.classList.remove('open')
    item.classList.add('close')
    setTimeout(()=>{item.classList.remove('close')},900)
    console.log(item.querySelector('.accordion__down'));
    const down = item.querySelector('.accordion__down');
    
}

//программа

initArrOfQuestions(questions);
list.addEventListener('click', toggleQuestion);
// list.addEventListener('click', closeQuestion);