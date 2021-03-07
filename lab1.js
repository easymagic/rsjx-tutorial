// print('Testing...');

let $obs = Rx.Observable.create(observe=>{

      observe.next('one');

      observe.next('two');

      observe.next('three');


});


$obs.subscribe(result=>{


    print(result);


});


let { scan , map } = Rx.operators;


let $timer = (interval) => {

    let c = 0;

    return Rx.Observable.create(observe=>{

        setInterval(()=>{
            ++c;
            observe.next(c);

        },interval * 1000);
           
    
    });

};

var $timerStart = $timer(2);

var $transform = $timerStart.pipe(map(vl=>{
    return {
        interval: vl
    }
}),map(vl=>JSON.stringify(vl)));


$transform.subscribe(result=>{

    print(`Transformed to ${result} from JSON to string.`);
    
});


// var $sum = $timerStart.pipe(scan((acc,vl)=>acc+vl));



// $sum.subscribe(result=>{

//    print(`Sum every two seconds ${result}`);

// });