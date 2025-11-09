let question = document.querySelector(".h1").querySelector('h1')
let buttons = document.querySelectorAll('.button')
let start_menu = document.querySelector(".stats_div")
let start_button = document.getElementById("start_btn")
let stats = document.getElementById("stats")
let quiz = document.querySelector(".all_in")

let right_count = document.getElementById("right_ans")
let accuracy_count = document.getElementById("accuracy")

function count_stats(right){
    right_count.innerHTML = right
    accuracy_count.innerHTML = right / (questions.length-1) * 100
}
start_button.addEventListener("click", ()=>{
    start_menu.style.display = 'none'
    quiz.style.display = 'flex'
})

class Question{
    constructor(question,ans1,ans2,ans3,right){
        this.question = question
        this.answers =[
            ans1,
            ans2,
            ans3,
            right
        ]
        this.right = right
    }
    display(){
        question.innerHTML = this.question
        for(let i = 0; i < buttons.length; ++i){
            buttons[i].innerHTML = this.answers[i]
        }
    }
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {  // Цикл проходиться по всіх елементах з кінця до початку
    let j = Math.floor(Math.random() * (i + 1));  // Вибираємо індекс рандомного елемента
    [array[i], array[j]] = [array[j], array[i]] // Міняємо місцями з поточним елементом.
  } 
}
shuffle(buttons)
let counter = 1
let right = 0
let questions =[
    'none',
    new Question("1. (9*9)+8",   '88','90','60',"89"),
    new Question("2. 40+(60/30)",'67','59','45',"42"),
    new Question("3. (9*0)-0",   '99','9',"8",'0'),
    new Question("4. 9+1000",  '1007','91','991',"1009"),
    new Question("5. 5000-600+(24*2)",'4484','4000','5000',"4448"),
    new Question("6. 80+(15+6)",'100','1001','11',"101"),
    new Question("7. (10*5)+5",'52','45456','60',"55"),
    new Question("8. (75/75)+99",'0','59','101',"100"),
    new Question("9. (9*9)-0",'5','99','9',"81"),
    new Question("10. 9+(1*1)",'7','9','90',"10"),
    new Question("11. (500-60)+(40+20)",'850','570','0',"500"),
    new Question("12. (3/1)*2",'1','4','3',"6"),
]
let current = questions[counter]
shuffle(current.answers)
current.display()






for(let i = 0; i < buttons.length; ++i){
    buttons[i].addEventListener("mouseover",()=>{
    anime({
            targets:buttons[i],
            scale:1.1,
            background:'#bfbfbf',
            easing:'linear',
            duration:200,
            delay:0
        })
    })
    buttons[i].addEventListener("mouseout",()=>{
    anime({
            targets:buttons[i],
            scale:1,
            background:'#ffffff',
            easing:'linear',
            duration:200,
            delay:0
        })
    })

    buttons[i].addEventListener('click',()=>{
        if (buttons[i].innerHTML == current.right){
            anime({
                targets:buttons[i],
                scale:1.1,
                background:'#01cb26',
                easing:'linear',
                duration:200,
                delay:0
            }).finished.then(()=>{
                anime({
                    targets:buttons[i],
                    scale:1,
                    background:'#FFFFFF',
                    easing:'linear',
                    duration:200,
                    delay:0
                }).finished.then(()=>{
                    if (counter == questions.length-1){
                        right += 1
                        quiz.style.display = 'none'
                        start_menu.style.display = 'block'
                        stats.style.display = 'block'
                        count_stats(right)
                        counter = 0
                        current = questions[counter]
                    }else{
                    right += 1
                    counter += 1
                    current = questions[counter]
                    shuffle(current.answers)
                    current.display()
                    }
                })
            })
        } else{
           anime({
                targets:buttons[i],
                scale:1.1,
                background:'#cb2626',
                easing:'linear',
                duration:200,
                delay:0
            }).finished.then(()=>{
                anime({
                targets:buttons[i],
                scale:1,
                background:'#FFFFFF',
                easing:'linear',
                duration:200,
                delay:0
            }).finished.then(()=>{
                if (counter == questions.length-1){
                        quiz.style.display = 'none'
                        start_menu.style.display = 'block'
                        stats.style.display = 'block'
                        count_stats(right)
                        counter = 0
                        current = questions[counter]
                    }else{
                    counter += 1
                    current = questions[counter]
                    shuffle(current.answers)
                    current.display()

                    }
                })
            })
        }
    })
}
