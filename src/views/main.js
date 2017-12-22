import React, { Component } from 'react';
import './views.css';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            showAnswer: false,
            questions: [
                {
                    question: 'What is your name?', 
                    answer: 'bob' 
                },
                {
                    question: 'What is your dogs name?', 
                    answer: 'Anubis' 
                },
                {
                    question: "What dose '1 > 0 equal ?", 
                    answer: 'true' 
                }
            ],
            questionIndex: 0 
        }
        this.rightAnswer = this.rightAnswer.bind(this);
        this.changeQuestion = this.changeQuestion.bind(this);
}

rightAnswer(){
    this.setState({
        showAnswer: true
    })
}
changeQuestion(){
    let newNumber = this.state.questionIndex + 1;
    if(newNumber >= this.state.questions.length ){
        newNumber = 0;
    }

    this.setState({
        questionIndex: newNumber,
        showAnswer: false
    })
}
render(){
    return(
    <div className="main-container">
        {  !this.state.showAnswer?
        <div className="card">
            <h1 className="word">{this.state.questions[this.state.questionIndex].question}</h1>
            <div onClick={this.rightAnswer} className="btn">Click Me</div>
        </div>
        :
        <div className="card">
            <h3>{this.state.questions[this.state.questionIndex].answer}</h3>
            <div onClick={this.changeQuestion} className="btn">Next</div>
        </div>}
    </div>);
    }
}
export default Main;