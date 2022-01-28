const counterAdults = document.querySelectorAll('.counterNumber1');
const btns = document.querySelectorAll('.btnActive');

let count1 = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList

        if (styles.contains('btnCounterPlus')){
            count1++;
        } else if (
            styles.contains('btnCounterMin')) {
                count1--;
        }
        if (count1 > 0) {
            btn = document.body.classList.add('btnActive');
        } else if (count1 <= 0){
            btn = document.body.classList.remove('btnActive');
        }
        counterNumber1.textContent = count1;
    })
})
