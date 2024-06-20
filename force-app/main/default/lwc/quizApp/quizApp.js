import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
  conditonVal = false;
  selected = {} //for storing answers
  isSubmitted = false;
  correctAnswers = 0
  get allNotSelected(){
    return !(Object.keys(this.selected).length === this.myQuestions.length)
  }
  get isScoredFull(){
    return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ? 
             'slds-text-color_success' : 'slds-text-color_error'}`
  }
  myQuestions = [{
                  id:'Question1',
                  question: "which one of the following is not a template loop",
                  answers:{
                            a:"for:each",
                            b:'iterator',
                            c:'map loop'
                          },
                  correctAnswer: "c"
                  },
                  {
                    id:'Question2',
                  question: "which one is invalid in LWC component folder",
                  answers:{
                            a:".svg",
                            b:'.apex',
                            c:'.js'
                          },
                  correctAnswer: "b"
                  },
                  {
                    id:'Question3',
                  question: "which of the following is not a directive",
                  answers:{
                            a:'for:each',
                            b:'if:true',
                            c:'@track'
                          },
                  correctAnswer: "c"
                  }];
   changeHandler(event){
    console.log('name', event.target.name);
    console.log('value', event.target.value);
    const {name, value} = event.target;
    this.selected = {...this.selected, [name]:value}
    console.log(JSON.stringify(this.selected));
   }
   submitHandler(event){
    event.preventDefault()
    let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer)
    this.correctAnswers = correct.length;
    this.isSubmitted = true;
    console.log('this.correctAnswers',this.correctAnswers);

   }
   resetHandler(){
    this.isSubmitted = false;
    this.selected = {};
    this.correctAnswers=0;
   }
   
}