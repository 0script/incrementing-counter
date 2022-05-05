const counters=document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText='0';

    const updateCounter=()=>{

        /* Taking in the value of data-target */
        const target= +counter.getAttribute('data-target');
        

        /* C is 0 int (casting) */
        const c= +counter.innerText;

        const increment=target/200;

        if(c<target){

            counter.innerText=`${Math.ceil(c+increment)}`;
            setTimeout(updateCounter,1);
            console.log(counter.innerText);
        }
    }

    updateCounter();
});

