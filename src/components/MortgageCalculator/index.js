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

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		const data = Object.fromEntries(formData.entries());
		console.log("data:", data);

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
	}


	return (
		<form
			className="mortgage-calculator d-flex flex-column flex-md-row bg-white rounded-4 w-100"
			ref={formRef}
			onSubmit={handleSubmit}
		>
			<CalcInput handleReset={handleReset}/>
			<CalcResults mortgagePayments={mortgagePayments} repaymentAmount={repaymentAmount} interest={interest}/>
		</form>
	);
};

export default MortgageCalculator;
