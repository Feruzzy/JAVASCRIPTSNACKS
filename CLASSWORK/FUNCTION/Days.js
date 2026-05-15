function checkDayType(day) {
    switch (day.toLowerCase()) {
        case 'saturday':
        case 'sunday':
            console.log("Weekend");
            break;
        default:
            console.log("Weekday");
    }
}
