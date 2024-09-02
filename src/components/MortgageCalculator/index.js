"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import CalcInput from './Calc/CalcInput';
import CalcResults from './Calc/CalcResult';

import loanMonthlyPayment from '@/app/logic/loanMonthlyPayment';
import calculateInterest from '@/app/logic/calculateInterest'

import "./style.scss";

const MortgageCalculator = ({ ...props }) => {
	const formRef = useRef(null);

	const [mortgagePayments, setMortgagePayments] = useState(null)
	const [repaymentAmount, setRepaymentAmount] = useState(null)
	const [interest, setInterest] = useState(null)

	const [errorList, setErrorList] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		const data = Object.fromEntries(formData.entries());
		// console.log("data:", data);

		// create a list of errors if there are any
		const tempErrorList = [];

		Object.entries(data).forEach((entry) => {
			const [key, value] = entry

			if(!value){ tempErrorList.push(key); return;}
			if(key != "operation" && isNaN(Number(value))){ tempErrorList.push(key); return; }
		});
		
		if(!("operation" in data)){tempErrorList.push("operation")}
		if(tempErrorList.length>0){
			setErrorList(tempErrorList); return;
		}else{
			setErrorList([])
		}

		// happy path
		if(data.operation == "Repayment"){
			setMortgagePayments(+loanMonthlyPayment(+data.MortgageAmount, +data.InterestRate, +data.MortgageTerm))
			setRepaymentAmount(+calculateInterest(+data.MortgageAmount, +data.InterestRate, +data.MortgageTerm) + +data.MortgageAmount)
			setInterest(null)
		}

		if(data.operation == "Interest Only"){
			setMortgagePayments(null)
			setRepaymentAmount(null)
			setInterest(+calculateInterest(+data.MortgageAmount, +data.InterestRate, +data.MortgageTerm))
		}

	};

	const handleReset = () => {
		formRef.current.reset();
		setMortgagePayments(null)
		setRepaymentAmount(null)
		setInterest(null)
		setErrorList([])
	}


	return (
		<form
			className="mortgage-calculator d-flex flex-column flex-lg-row bg-white w-100"
			ref={formRef}
			onSubmit={handleSubmit}
			noValidate
		>
			<CalcInput handleReset={handleReset} errorList={errorList}/>
			<CalcResults mortgagePayments={mortgagePayments} repaymentAmount={repaymentAmount} interest={interest}/>
		</form>
	);
};

export default MortgageCalculator;
