
class CustomQueue {
    #tail = 0;
    #head = 0;
    #count = 0;
    constructor(value) {
        this.capacity = value;
        this.storage = new Array(this.capacity).fill(0);
    }
    offer(val) {
        if (this.#count >= this.storage.length) {
            throw new Error("нет места");
        }
        this.storage[this.#head++] = val;
        this.#count++;
        this.#head = this.#head % this.capacity;
    };

    poll() {
        if (this.#count <= 0) {
            throw new Error("пусто");
        }
        const element = this.storage[this.#tail];
        this.storage[this.#tail] = 0;
        this.#tail++;
        this.#tail =  this.#tail % this.capacity;
        this.#count--;
        return element;
    };

    get toString() {
        let res = "";
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i] === 0) {
                res += ". ";
            } else {
                res += this.storage[i] + " ";
            }
        }
        return res;
    };
}

function main() {
    const cq = new CustomQueue(5);

    for (let i = 0; i < 10; i++) {
        console.log(cq.toString + " << до добавления");
        cq.offer(i);
        console.log(cq.toString + " << после добавления");
        cq.poll();
        console.log(cq.toString + " << после извлечения");
        console.log();
    }
}

main();
