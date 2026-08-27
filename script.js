const monthlyCalls = [
    { month: "Jan", queue: "Technical", calls: 45000 },
    { month: "Jan", queue: "Sales", calls: 40000 },
    { month: "Jan", queue: "Returns", calls: 40000 },

    { month: "Feb", queue: "Technical", calls: 48000 },
    { month: "Feb", queue: "Sales", calls: 42000 },
    { month: "Feb", queue: "Returns", calls: 41000 },

    { month: "Mar", queue: "Technical", calls: 50000 },
    { month: "Mar", queue: "Sales", calls: 45000 },
    { month: "Mar", queue: "Returns", calls: 43000 },

    { month: "Apr", queue: "Technical", calls: 52000 },
    { month: "Apr", queue: "Sales", calls: 47000 },
    { month: "Apr", queue: "Returns", calls: 44000 },

    { month: "May", queue: "Technical", calls: 55000 },
    { month: "May", queue: "Sales", calls: 49000 },
    { month: "May", queue: "Returns", calls: 44000 },

    { month: "Jun", queue: "Technical", calls: 60000 },
    { month: "Jun", queue: "Sales", calls: 55000 },
    { month: "Jun", queue: "Returns", calls: 65000 }
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
