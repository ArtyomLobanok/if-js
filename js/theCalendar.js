let dpMin, dpMax;

dpMin = new AirDatepicker('#in_date', {
    autoClose: true,
    minDate: new Date(),
    view: 'days',
    minView: 'days',
    dateFormat: 'E, MMM d',
    onSelect({date}) {
        dpMax.update({
            minDate: date
        })
    },
})

dpMax = new AirDatepicker('#out_date', {
    autoClose: true,
    minDate: new Date(),
    view: 'days',
    minView: 'days',
    dateFormat: 'E, MMM d',
    onSelect({date}) {
        dpMin.update({
            maxDate: date
        })
    }
});