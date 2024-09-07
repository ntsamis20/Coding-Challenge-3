//Task 1 Create AverageSales function
function calculateAverageSales(sales){ 
    if (sales.length === 0)
        return 0;
}
let overallSales = 0
for (let i = 0; i < sales.length; i++){
    overallSales += sales[i];
}
let AverageSales = overallSales / sales.length;
return AverageSales;
const salesInfo = [3000, 4500, 6300, 7500, 8500, 10000];
console.log(calculateAverageSales(salesInfo));
// Task 2 Create Performace Rating Function
function determinePerformanceRating(AverageSales) {
    if (AverageSales > 10000) {
        return "Excellent";
    } else if (AverageSales >= 7000 && AverageSales <= 10000){
        return "Good";
    } else if (AverageSales >= 4000 && AverageSales < 7000) {
        return "Satisfactory";
    } else {
        return "Needs Improvement";
    }
}
const meanSales = 8500;
console.log(determinePerformanceRating(meanSales));
//Task 3 Create Function to Identify Performers
function findTopAndBottomPerformers(employees) {
    if (employees.length === 0) {
        return {topPerformer: null, bottomPerformer: null }
    }
}
const result = employees.reduce((acc, employee) => {
    if (employee.overallSales > acc.topPerformer.overallSales) {
        acc.topPerformer = employee;
    }
    if (employee.overallSales < acc.bottomPerformer.overallSales) {
        acc.bottomPerformer = employee;
    }
    return acc;
    {
        topPerformer: employees[0],
        bottomPerformer; employees[0]
    };
    return result;
} )
//Task 4 Create performance report using a Function
function generatePerformanceReport(employees) ;{
    const reportInfo = employees.map(employee => {
        const meanSales = calculateAverageSales(employee.sales);
        const performanceRating = determinePerformanceRating(meanSales);
        return {
            name: employee.name,
            meanSales: meanSales,
            performanceRating: performanceRating
        };
    });
}
const report = {
    summary: reportInfo,
    topPerformer: topBottomPerformers.topPerformer,
    bottomPerformer: topBottomPerformers.bottomPerformer
};
return report
//Task 5 Apply Data Sets
const salesData = [
    {name: 'Alice', sales: [12000, 15000, 13000]},
    { name: 'Bob', sales: [7000, 6000, 7500]},
    {name: 'Charlie', sales: [3000, 4000, 3500]},
    {name: 'Diana', sales: [9000, 8500, 9200]},
]