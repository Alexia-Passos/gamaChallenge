import React, {Component} from 'react'
import qs from 'qs'

//components 
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

class App extends Component{
	constructor(props){
		super(props);
		this.state = { 
			stepOne: false,
			stepTwo: false,
			stepThree: false,
			sendExams: false,
      examsTitle: '',
			sendQuestion: false,
			sentQuestion: '',
			sendQuestionNumber: '',
			examId: undefined,
			questionId: undefined,
			sendAlternatives: false,
			alternativeA: '',
			alternativeB: '',
			alternativeC: '',
			alternativeChecked: false,
			checkboxA: false,
			checkboxB: false,
			checkboxC: false,

		}

	}
	handleExamSubmit = (event) => {
		event.preventDefault()
		const dataExam = { "title": this.state.examsTitle }
		const requestOptions = {
			method: 'POST',
			headers: {"Content-Type": "application/x-www-form-urlencoded"},
			body: qs.stringify(dataExam),
			redirect: 'follow'
		};

		fetch("http://localhost:3002/exams", requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result)
				console.log(result.id)
				return (
					this.setState({
						sendExams: true,
						examId: result.id
					})
				)
			})
			.catch(error => console.log('error', error));
	}

	handleQuestionSubmit = (event) => {
		event.preventDefault()
		const dataQuestion = {
      "examId": this.state.examId,
      "description": this.state.sentQuestion,
      "orderNumber": this.state.sendQuestionNumber
    }
		console.log(dataQuestion)
		const requestOptions = {
			method: 'POST',
			headers: {"Content-Type": "application/x-www-form-urlencoded"},
			body: qs.stringify(dataQuestion),
			redirect: 'follow'
		};

		fetch("http://localhost:3002/questions", requestOptions)
			.then(response => response.json())
			.then(result => {
				this.setState({
					sendQuestion: true,
					questionId: result.id
				})
				console.log(result)
			})
			.catch(error => console.log('error', error));
	} 

	handleAlternativeSubmit = (event) => {
		event.preventDefault()
		const dataAlternatives = [
			{
				"id": 1,
				"questionId": this.state.questionId,
				"description": this.state.alternativeA,
				"isCorrect": this.state.checkboxA
			},
			{
				"id": 2,
				"questionId": this.state.questionId,
				"description": this.state.alternativeB,
				"isCorrect": this.state.checkboxB
			},
			{
				"id": 3,
				"questionId": this.state.questionId,
				"description": this.state.alternativeC,
				"isCorrect": this.state.checkboxC
			}
		]
		console.log(dataAlternatives)
		const requestOptions = {
			method: 'POST',
			headers: {"Content-Type": "application/x-www-form-urlencoded"},
			body: qs.stringify(dataAlternatives),
			redirect: 'follow'
		};

		fetch("http://localhost:3002/alternatives", requestOptions)
			.then(response => response.json())
			.then(result => {
				this.setState({
					sendAlternatives: true,
				})
				console.log(result)
			})
			.catch(error => console.log('error', error));
	}

	setValue = (myValue, target) => {
		switch(target){
			case'checkboxA':
				this.setState({
					checkboxA: !this.state.checkboxA, checkboxB: this.state.checkboxA, checkboxC: this.state.checkboxA,
				})
				break;
			case'checkboxB':
				this.setState({
					checkboxA: this.state.checkboxB, checkboxB: !this.state.checkboxB, checkboxC: this.state.checkboxB,
				})
				break;
			case'checkboxC':
				this.setState({
					checkboxA: this.state.checkboxC, checkboxB: this.state.checkboxC, checkboxC: !this.state.checkboxC,
				})
				break;
			default:
				this.setState({
						[target]: myValue.target.value
				})
				break;
		}
	}
	render(){
		return (
			<div id='mainContainer'>
				<h1 className='mainTittles'>Gama Challenge</h1>
				<div className='mainStructure'>
					<StepOne stepContent={this.state}  handleSubmit={this.handleExamSubmit} setValue={this.setValue}/> 
					<StepTwo stepContent={this.state}  handleSubmit={this.handleQuestionSubmit} setValue={this.setValue}/>
					<StepThree stepContent={this.state}  handleSubmit={this.handleAlternativeSubmit} setValue={this.setValue}/>
				</div>
			</div>
		);
	}
	
}

export default App



