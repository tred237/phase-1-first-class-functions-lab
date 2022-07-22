// const driversList = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers = drivers => drivers.slice(0,2);
// returnFirstTwoDrivers(driversList);


const returnLastTwoDrivers = drivers => drivers.slice(-2);
// returnLastTwoDrivers(driversList);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


// function createFareMultiplier(multiplier) {
//     return function (fare) {
//         return fare * multiplier;
//     }
// };
const createFareMultiplier = (multiplier) => function(fare) {return fare * multiplier};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (driverList, listFunc) => listFunc(driverList);