//Вывод всех подмножеств множества
let subSet = set => {
    let bit;
    let max_bits;
    let size = set.length;
    let subSet = [];
    for (let i = 0; i < 2 ** size; i++) {
      max_bits = Math.floor( Math.log2(i) );
      subSet[i] = [];
      for (let j = 0; j <= max_bits; j++) {
        bit = (i >> j) & 1;
        if (bit == 1) {
            subSet[i].push(set[j]);
        }
      }
    }
    return subSet;
}
//Сумма элементов массива (Если знаем заранее, что кроме чисел в массивах ничего больше нет)
let arraySum = set => {
    let sum = 0;
    for (let i = 0; i < set.length; i++) {
        sum += set[i];
    }
    return sum;
}