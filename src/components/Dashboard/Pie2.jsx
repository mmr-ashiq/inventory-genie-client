import { Chart } from 'chart.js';
import { useEffect, useRef } from 'react';

export const Pie2 = () => {
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
			// Destroy the existing chart instance
			chartInstance.destroy();
		}

		// Create a new chart instance
		chartInstance = new Chart(chartCanvas, {
			type: 'doughnut', // Set chart type to 'doughnut'
			data: data,
			options: {
				cutoutPercentage: 50,
			},
		});
	}, []);
	return (
		<>
			<canvas ref={chartRef} />
		</>
	);
};
