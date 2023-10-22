/**
 * Функция возвращает numOfItems случайных, не повторяющихся
 * элементов из массива array.
 * 
 * Примечание: если array.length < numOfItems возвращаем 
 * array.length случайных элементов.
 * 
 * @param array - входной массив
 * @param numOfItems - кол-во элементов которое вернет ф-я
 * @returns массив случайных неповторяющихся элементов
 */
function getRandomElements(array: string[], numOfItems: number): string[] {
    const copiedArray = [...array];
    const arrayLength = copiedArray.length < numOfItems ? copiedArray.length : numOfItems;
    const set = new Set<string>();
    while (set.size !== arrayLength) {
        const id = getRandomInt(arrayLength);
        if (!set.has(copiedArray[id])) {
            set.add(copiedArray[getRandomInt(arrayLength)]);
            copiedArray.splice(id, 1);
        }
    }
    return [...set];
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

export default getRandomElements;