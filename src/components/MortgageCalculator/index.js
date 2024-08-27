"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import CalcInput from './Calc/CalcInput';
import CalcResults from './Calc/CalcResult';

import "./style.scss";

const MortgageCalculator = ({ ...props }) => {
	const formRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		const data = Object.fromEntries(formData.entries());
		console.log(data);
	};

	return (
		<form
			className="mortgage-calculator d-flex flex-column flex-md-row bg-white rounded-4 w-100"
			ref={formRef}
			onSubmit={handleSubmit}
		>
			<CalcInput/>
			<CalcResults/>
		</form>
	);
};

export default MortgageCalculator;
