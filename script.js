//перменные
const list = document.querySelector('#list');
const items = document.querySelectorAll('[data-id]')

const questions = [];

//функции
//инициализация массива
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

}
//изменение вопроса
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
//открытие вопроса
function open(item, currentQuestionId){
    //открываем ответ
    const heightOfText = 50 + questions[currentQuestionId-1].height;
    item.classList.add('open');
    item.style.setProperty('--myHeight', `${heightOfText}px`);
    item.style.setProperty('--myHeightPlusFive', `${heightOfText + 5}px`);
    //открываем стрелку
    const down = item.querySelector('.accordion__down');
    down.classList.add('rotate-up')
}
//закрытие вопроса
function close(item, currentQuestionId){
    //скрываем ответ
    item.classList.remove('open')
    item.classList.add('close')
    setTimeout(()=>{item.classList.remove('close')},900)
    //скрываем стрелку
    const down = item.querySelector('.accordion__down');
    down.classList.remove('rotate-up')
    down.classList.add('rotate-down')
    setTimeout(()=>{down.classList.remove('rotate-down')},900)
}



//программа

initArrOfQuestions(questions);
list.addEventListener('click', toggleQuestion);