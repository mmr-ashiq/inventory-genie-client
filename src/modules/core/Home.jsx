import styled from 'styled-components';

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { BarChart } from '../../components/Dashboard/BarChart';
import { YearlySellReportChart } from '../../components/Dashboard/YearlySellReportChart';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
	labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	datasets: [
		{
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				'rgba(255, 205, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(54, 162, 235, 0.2)',
			],
			borderColor: ['black', 'black', 'black', 'black', 'black'],
			borderWidth: 1,
		},
	],
};

export const Home = () => {
	return (
		<>
			<Container>
				<h1>Home Page</h1>

				<ChartContainer>
					<Pie data={data} />
				</ChartContainer>
				<ChartContainer>
					<BarChart />
				</ChartContainer>

				<ChartContainer>
					<YearlySellReportChart />
				</ChartContainer>
			</Container>
		</>
	);
};

const Container = styled.div`
	min-height: 100vh;
`;

const ChartContainer = styled.div`
	max-width: 400px;
`;
