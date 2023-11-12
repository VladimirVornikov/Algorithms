class MyArray {
    constructor() {
        this.storage = Array(2);
        this.index = 0;
    }
    oldAppend = (item) => {
        const count = this.storage.length;
        const temp = Array(count + 1);

        for (let i = 0; i < count; i++) {
            temp[i] = this.storage[i];
        }

    this.storage = temp;
    this.storage[count] = item;
    }

    append = (item) => {
        if (this.index === this.storage.length) {
        const count = this.storage.length;
        const temp = Array(2 * count);
        for (let i = 0; i < count; i++) {
            temp[i] = this.storage[i];
        }
        this.storage = temp;
        }
        this.storage[this.index++] = item;
    }

    print = () => {
        let result = '';
        for (let i = 0; i < this.index; i++) {
        result += `${this.storage[i]} `;
    }
    return result;
    }

    findIndex = (elem) => {
        for (let i = 0; i < this.index; i++) {
            if (this.storage[i] === elem) {
                return i; 
            }
        }
        return -1; 
    }

    removeIndex = (index) => {
        for (let i = index; i < this.index - 1; i++) {
            this.storage[i] = this.storage[i + 1];
        }

        this.index--;
        this.storage[this.index] = undefined;
    }
}

const main = () => {
    let myArray = new MyArray();
    myArray.append(3);
    myArray.append(4);
    myArray.append(10);
    myArray.append(1);
    myArray.append(5);
    console.log(myArray);
    console.log(myArray.removeIndex(1));
    console.log(myArray.print());
    console.log(myArray.findIndex(10));
    console.log(myArray);
};

main();
