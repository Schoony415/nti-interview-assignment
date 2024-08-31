"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import CalcInput from './Calc/CalcInput';
import CalcResults from './Calc/CalcResult';

import "./style.scss";

const MortgageCalculator = ({ ...props }) => {
	const formRef = useRef(null);

	// const [mortgageAmount, setMortgageAmount] = useState(0)
	// const [mortgageTerm, setMortgageTerm] = useState(0)
	// const [interestRate, setInterestRate] = useState(0)
	// const [mortgageType, setMortgageType] = useState(undefined)
	
	// const [monthlyRepayment, setMonthlyRepayment] = useState(0)
	// const [totalLoan, setTotalLoan] = useState(0)
	// const [interest, setInterest] = useState(0)


	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("handlesubmit")
		console.log(e)
		const formData = new FormData(formRef.current);
		const data = Object.fromEntries(formData.entries());
		console.log(data);
	};

	return (
		<div
			className="mortgage-calculator d-flex flex-column flex-md-row bg-white rounded-4 w-100"
			ref={formRef}
			onSubmit={handleSubmit}
		>
			<CalcInput handleSubmit={handleSubmit}/>
			<CalcResults/>
		</div>
	);
};

export default MortgageCalculator;
