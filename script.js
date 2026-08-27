const monthlyCalls = [
    { month: "Jan", calls: 125000 },
    { month: "Feb", calls: 131000 },
    { month: "Mar", calls: 138000 },
    { month: "Apr", calls: 142000 },
    { month: "May", calls: 148000 },
    { month: "Jun", calls: 180000 }
];

const latestCalls = monthlyCalls[monthlyCalls.length - 1].calls;

const callsKpi = document.querySelector(".kpi-value");

callsKpi.textContent = latestCalls.toLocaleString();

const chart = document.querySelector(".chart");

const maxCalls = Math.max(...monthlyCalls.map(item => item.calls));

monthlyCalls.forEach(item => {

    const bar = document.createElement("div");
    bar.className = "bar";

    const height = (item.calls / maxCalls) * 100;
    bar.style.height = height + "%";

    const label = document.createElement("span");
    label.textContent = item.month;

    bar.appendChild(label);
    chart.appendChild(bar);
});
