const readLineSync = require('readline-sync');
console.log('Quiz organised for KG Students')
console.log('Welcome to the Quiz')

const quiz = [{
  question: '2 + 2',
  answer:['2',
          '1',
          '3',
          '4'],
  correct : '4'
},
{
    question: '1 + 0',
    answer:['2',
            '1',
            '3',
            '4'],
    correct: '1'
},
{
    question: '1 + 2',
    answer:['1',
            '2',
            '3',
            '4'],
    correct: '3' 
},
  {
    question: '4 + 0',
    answer:['1',
            '2',
             '3',
             '4'],
    correct: '4'
  }
]
let count = 0;

function logic(quiz){
  console.log(`\nQuestion. ${quiz.question} \nOptions : ${quiz.answer}`);
  const userinput = readLineSync.question('Enter your answer- ');
  if(quiz.correct === userinput){
    console.log('Correct xD \n');
    count ++ ;
  }
  else{
    console.log('Wrong...Use your fingers\n');
  }
}

quiz.forEach(logic);
console.log(`Your score ${count} out ${quiz.length}.`)

if(count>3){
  console.log('You are among the Toppers');
}else{
  console.log('Better try next Time');
}
