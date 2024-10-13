# NodeJs_Assignment-
## Introduction
This function is designed to calculate the total target for a given period, excluding Fridays, which are considered non-working days. The function provides a detailed breakdown of working days per month and calculates a proportionate monthly target based on the total annual target.

## Function Description
### Function Name: `calculateTotalTarget`
This function calculates the total target for a specified date range, excluding Fridays from the working days. The total target is distributed across the number of actual working days, and the result includes the number of working days per month, the days worked excluding Fridays, and the proportionate target for each month.

### Parameters:
- `startDate`: (String) The start date of the period in the format `YYYY-MM-DD`.
- `endDate`: (String) The end date of the period in the format `YYYY-MM-DD`.
- `totalAnnualTarget`: (Number) The total target value for the year, which is proportionally divided based on working days.

### Returns:
The function returns an object containing the following keys:
1. **daysExcludingFridays**: An array of working days in each month, excluding Fridays.
2. **daysWorkedExcludingFridays**: An array of actual days worked in each month, excluding Fridays.
3. **monthlyTargets**: An array of monthly targets proportionate to the total target, based on working days excluding Fridays.
4. **totalTarget**: The total annual target provided as input, rounded to two decimal places.

### Example Usage
```javascript
const result = calculateTotalTarget('2024-01-01', '2024-03-31', 5220);
console.log(result);
