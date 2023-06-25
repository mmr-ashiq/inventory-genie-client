import { Chart } from 'chart.js';
import React, { useEffect, useRef } from 'react';
import { BarChart } from './BarChart';
import { Pie2 } from './Pie2';
import { Pie3 } from './Pie3';
import { YearlySellReportChart } from './YearlySellReportChart';

const Dashboard = () => {
	const chartRef = useRef(null);
	let chartInstance = null;

	useEffect(() => {
		const chartCanvas = chartRef.current.getContext('2d');
		const data = {
			labels: [],
			datasets: [
				{
					data: [12, 19, 3, 5, 2, 3],
					backgroundColor: [
						'#FF6384',
						'#36A2EB',
						'#FFCE56',
						'#00FF00',
						'#800080',
						'#FFA500',
					],
				},
			],
		};

		if (chartInstance) {
			// Destroy the existing chart instance if it exists
			chartInstance.destroy();
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
		chartInstance = new Chart(chartCanvas, {
			type: 'doughnut',
			data: data,
			options: {
				cutoutPercentage: 50,
			},
		});

		// Clean up by destroying the chart when the component unmounts
		return () => {
			if (chartInstance) {
				chartInstance.destroy();
			}
		};
	}, []);

	return (
		<>
			<div className="container flex flex-col ml-10 md:flex-row md:justify-evenly">
				<div className="py-4 pl-4 pr-2">
					<div className="border border-gray-300 rounded">
						<h2 className="px-4 py-2 font-semibold text-center bg-slate-200">
							Top Items (last 30 days)
						</h2>
						<div className="p-6">
							<canvas ref={chartRef} />
						</div>
					</div>
				</div>
				<div className="py-4 pl-2 pr-4">
					<div className="border border-gray-300 rounded">
						<h2 className="px-4 py-2 font-semibold text-center bg-slate-200">
							Top Customer (last 30 days)
						</h2>
						<div className="p-6">
							<Pie2 />
						</div>
					</div>
				</div>
				<div className="py-4 pl-2 pr-4">
					<div className="border border-gray-300 rounded">
						<h2 className="px-4 py-2 font-semibold text-center bg-slate-200">
							Top Receivables
						</h2>
						<div className="p-6">
							<Pie3 />
						</div>
					</div>
				</div>
			</div>

			<div className="container flex flex-wrap justify-center gap-4 mx-auto mt-10">
				<div className="w-full sm:w-auto sm:max-w-md">
					<div className="border border-gray-300 rounded">
						<h2 className="px-4 py-2 font-semibold text-center bg-slate-200">
							Yearly Sell Report
						</h2>
						<div className="p-6">
							<YearlySellReportChart />
						</div>
					</div>
				</div>
				<div className="w-full sm:w-auto sm:max-w-md">
					<div className="border border-gray-300 rounded">
						<h2 className="px-4 py-2 font-semibold text-center bg-slate-200">
							Expense vs Income
						</h2>
						<div className="p-6">
							<BarChart />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
