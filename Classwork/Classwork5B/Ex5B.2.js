/*
* 2. Given the list of the following readers:
[
	{ book: "Catcher in the Rye", readStatus: true, percent: 40},
	{ book: "Animal Farm", readStatus: true, percent: 20},
	{ book: "Solaris", readStatus: false, percent: 90 },
	{ book: "The Fall", readStatus: true, percent: 50 },
	{ book: "White Nights", readStatus: false, percent: 60 } ,
	{ book: "After Dark", readStatus: true, percent: 70 }
];
Output the books sorted by the percent in descending order which readStatus is true.

 */

let list = [
    { book: "Catcher in the Rye", readStatus: true, percent: 40},
    { book: "Animal Farm", readStatus: true, percent: 20},
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 } ,
    { book: "After Dark", readStatus: true, percent: 70 }
];

function filterBooks(list) {
    let len = list.length;
    let newArr = [];
    for(let i = 0; i < len; i++) {
        if (list[i].readStatus) {
            newArr.push(list[i]);
        }
    }
    return newArr;
}

function swap(list, j, i) {
    let temp = list[j].percent;
    list[j].percent = list[i].percent;
    list[i].percent = temp;
}

function sortByPercent(filteredList) {
    let list = filteredList;
    let len = list.length;
    for(let i = 0; i < len-1; i++) {
        for(let j = i+1; j < len; j++) {
            if (list[i].percent < list[j].percent) {
                swap(list, j, i);
            }
        }
    }
    return list;
}

console.log(sortByPercent(filterBooks(list)));
