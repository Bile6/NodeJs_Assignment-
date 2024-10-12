// Function to calculate the total target excluding Fridays
function calculateTotalTarget(startDate, endDate, totalAnnualTarget) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let totalWorkingDays = 0;
  const monthlyData = [];

  // function to check if the given date is a Friday
  const isFriday = (date) => date.getDay() === 5;

  // function to get the total days in a month
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  // Loop through each month between startDate and endDate
  for (let current = new Date(start); current <= end;) {
    const year = current.getFullYear();
    const month = current.getMonth();
    const daysInMonth = getDaysInMonth(year, month);

    let workingDaysInMonth = 0;
    let workedDaysInMonth = 0;

    // all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day);

      // Only count days within the start and end date range
      if (currentDate >= start && currentDate <= end && !isFriday(currentDate)) {
        workingDaysInMonth++;
        workedDaysInMonth++;
      }
    }

    totalWorkingDays += workedDaysInMonth;

    // Push data for this month
    monthlyData.push({
      month: `${year}-${month + 1}`,
      totalWorkingDaysInMonth: workingDaysInMonth,
      workedDaysInMonth: workedDaysInMonth,
    });

    // Move to the next month
    current.setMonth(current.getMonth() + 1);
  }

  // Calculate monthly targets based on working days
  const monthlyTargets = monthlyData.map((month) => {
    const proportion = month.workedDaysInMonth / totalWorkingDays;
    return (proportion * totalAnnualTarget).toFixed(2);
  });

  // Return the final result
  return {
    daysExcludingFridays: monthlyData.map((m) => m.totalWorkingDaysInMonth),
    daysWorkedExcludingFridays: monthlyData.map((m) => m.workedDaysInMonth),
    monthlyTargets: monthlyTargets,
    totalTarget: totalAnnualTarget.toFixed(2),
  };
}

// Example usage
const result = calculateTotalTarget('2024-01-01', '2024-03-31', 5220);
console.log(result);
