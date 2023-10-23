import path from "path";
const fs = require('fs');

import getRandomElements from "./getRandomElements";
import Table, { Item, TableData } from "./table";
import getArrayOfUniqueValues from "./utils/getArrayOfUniqueValues";

/*
    Здесь вы можете как угодно эксперементировать с написанным вами кодом;

    ARRAY_OF_UNIQUE_VALUES - массив уникальных значений из N элементов,
    возможно, будет полезно :)

*/

//********************************************************************* 

const N = 100;
const ARRAY_OF_UNIQUE_VALUES = getArrayOfUniqueValues(N);

// Улучшил скрипт
console.time("Random");
const result = getRandomElements(ARRAY_OF_UNIQUE_VALUES, 5);
console.log(result);
console.timeEnd("Random");


//********************************************************************* 

try {
    const data = fs.readFileSync(path.join(__dirname, 'data.json'), {encoding: 'utf8'} );
    const jsonData = JSON.parse(data);
    const arrayData: TableData<Item> = jsonData.array;
    const table = new Table(arrayData);
    table.print();
    table.findBySecondParam(2015);
    table.findByFirstParam('GTA');
} catch {
    console.error('Error, file not found!');
}