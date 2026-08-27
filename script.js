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


const queueFilter = document.querySelector("#queueFilter");
const chart = document.querySelector(".chart");
const callsKpi = document.querySelector(".kpi-value");


function updateDashboard() {

    const selectedQueue = queueFilter.value;

    let filteredData;

    if (selectedQueue === "All") {
        filteredData = monthlyCalls;
    } else {
        filteredData = monthlyCalls.filter(
            item => item.queue === selectedQueue
        );
    }


    // Update KPI

    const totalCalls = filteredData.reduce(
        (total, item) => total + item.calls,
        0
    );

    callsKpi.textContent = totalCalls.toLocaleString();


    // Clear old chart

    chart.innerHTML = "";


    // Find maximum value

    const maxCalls = Math.max(
        ...filteredData.map(item => item.calls)
    );


    // Create chart

    filteredData.forEach(item => {

        const bar = document.createElement("div");

        bar.className = "bar";

        const height = (item.calls / maxCalls) * 100;

        bar.style.height = height + "%";


        const valueLabel = document.createElement("div");

        valueLabel.className = "bar-value";

        valueLabel.textContent = item.calls.toLocaleString();


        const monthLabel = document.createElement("span");

        monthLabel.textContent = item.month;


        bar.appendChild(valueLabel);

        bar.appendChild(monthLabel);

        chart.appendChild(bar);

    });
}


// Run dashboard when page loads

updateDashboard();


// Run dashboard when filter changes

queueFilter.addEventListener("change", updateDashboard);
