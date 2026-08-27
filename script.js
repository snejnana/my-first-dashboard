const monthlyCalls = [
    { month: "Jan", calls: 125000 },
    { month: "Feb", calls: 131000 },
    { month: "Mar", calls: 138000 },
    { month: "Apr", calls: 142000 },
    { month: "May", calls: 148000 },
    { month: "Jun", calls: 180000 }
];


// Update Calls Today KPI

const latestCalls = monthlyCalls[monthlyCalls.length - 1].calls;

const callsKpi = document.querySelector(".kpi-value");

callsKpi.textContent = latestCalls.toLocaleString();


// Create chart

const chart = document.querySelector(".chart");

const maxCalls = Math.max(
    ...monthlyCalls.map(item => item.calls)
);


monthlyCalls.forEach(item => {

    const bar = document.createElement("div");

    bar.className = "bar";

    const height = (item.calls / maxCalls) * 100;

    bar.style.height = height + "%";


    // Value above the bar

    const valueLabel = document.createElement("div");

    valueLabel.className = "bar-value";

    valueLabel.textContent = item.calls.toLocaleString();


    // Month below the bar

    const monthLabel = document.createElement("span");

    monthLabel.textContent = item.month;


    bar.appendChild(valueLabel);

    bar.appendChild(monthLabel);

    chart.appendChild(bar);

});
