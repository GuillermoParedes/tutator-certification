const Rxjs = require('rxjs');
const Operators = require('rxjs/operators')
const { pipe } = Rxjs;
const { concatMap, tap, map, reduce } = Operators


const myName = 'Guillermo David';

const isVowelRegEx = (value) =>
{
  if (value.length == 1)
  {
    return /[aeiou]/.test(value);
  }
}


const objSeparateString = {
    vowals: [],
    consonants: []
}

const separateName$ = Rxjs.of(myName.split('')).pipe(
    tap(resTap => console.log('resTap', resTap)),
    map(res => {
        console.log('res', res);
        return res;
    }),
    concatMap(groups => {
        // console.log('groups', groups);
        return groups;
    }),
    reduce((accumulate, current) => {
        if (isVowelRegEx(current)) {    
            accumulate.vowals = [...accumulate.vowals, [current]]
        } else {

            accumulate.consonants = [...accumulate.consonants, [current]]
        }
        return accumulate;
    }, objSeparateString)
)



separateName$.subscribe(response => {
    console.log('response', response);


    
});





