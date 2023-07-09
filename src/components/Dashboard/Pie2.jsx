import { Chart } from 'chart.js';
import { useEffect, useState, useRef } from 'react';
import { topCustomerApi } from './../../apis/customer.apis';

export const Pie2 = () => {
  const [customersData, setCustomerData] = useState([]);
  const chartRef = useRef(null);
  let chartInstance = null;
  let _customersData = [];

  async function getTopCustomer() {
    const {
      data: {
        data: { customers },
      },
    } = await topCustomerApi();
    if (customers.length) {
      console.log('customers = ', customers);
      for (let i = 0; i < customers.length; i++) {
        const element = customers[i]?.quantity;
        console.log('element ', element);
        _customersData.push(element);
      }
      setCustomerData(_customersData);
    }
    console.log('hjkl - ', customersData);
  }

  useEffect(() => {
    getTopCustomer();
    const chartCanvas = chartRef.current.getContext('2d');
    const data = {
      labels: [],
      datasets: [
        {
          data: customersData || [5, 10, 15],
          //   data: [12, 19, 3, 5, 2, 3, 15, 16, 200],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#00FF00', '#800080', '#FFA500'],
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
