
class CustomQueue {
    #tail = 0;
    #head = 0;
    #count = 0;
    constructor(value) {
    const capacity = value;
    const storage = new Array(capacity).fill(0);

    this.offer = function (val) {
        if (this.#count >= storage.length) {
            throw new Error("нет места");
        }
        storage[this.#head++] = val;
        this.#count++;
        this.#head = this.#head % capacity;
    };

    this.poll = function () {
        if (this.#count <= 0) {
            throw new Error("пусто");
        }
        const element = storage[this.#tail];
        storage[this.#tail] = 0;
        this.#tail++;
        this.#tail %= capacity;
        this.#count--;
        return element;
    };
    
    this.toString = function () {
        let res = "";
        for (let i = 0; i < storage.length; i++) {
            if (storage[i] === 0) {
                res += ". ";
            } else {
                res += storage[i] + " ";
            }
        }
        return res;
        };
    }
}

function main() {
    const cq = new CustomQueue(5);

    for (let i = 0; i < 10; i++) {
        console.log(cq.toString() + " << до добавления");
        cq.offer(i);
        console.log(cq.toString() + " << после добавления");
        cq.poll();
        console.log(cq.toString() + " << после извлечения");
        console.log();
    }
}


main();
