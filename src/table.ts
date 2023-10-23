export type strNum = string | number;

export interface Item {
    game: string,
    year: number,
}

export type TableData<T> = Array<{
    [key in keyof T]: strNum;
}>;

class Table<T extends Item>  {
    private headers: (keyof T)[];
    private data: TableData<T>;

    constructor(data: TableData<T>) {
        this.headers = Object.keys(data[0]) as (keyof T)[];
        this.data = data;
    }

    // set setNewItem(newItem: T) {
    //     this.data.push(newItem);
    // }

    getMaxLength(): number {
        let max = -1;
        for(let i = 0; i < this.data.length; i += 1) {
            const values: TableData<strNum> = Object.values(this.data[i]);
            for (let j = 0; j < values.length; j += 1) {
                const valueLength = values[j].toString().length;
                if(valueLength > max) {
                    max = valueLength;
                }
            }
        }
        return max + 1;
    }

    findByFirstParam(str: string): void {
        const item = this.data.find((item) => item[this.headers[0]] == str);
        if(item) {
            console.log("Item was found:");
            for(let i = 0; i < this.headers.length; i += 1) {
                console.log(`${this.headers[i].toString().toUpperCase()}:${this.data[i][this.headers[i]]}`);
            }
        } else {
            console.log("Item not found!");
        }
    }

    findBySecondParam(num: number): void {
        const item = this.data.find((item) => item[this.headers[1]] == num);
        if(item) {
            console.log("Item was found:");
            for(let i = 0; i < this.headers.length; i += 1) {
                console.log(`${this.headers[i].toString().toUpperCase()}:${this.data[i][this.headers[i]]}`);
            }
        } else {
            console.log("Item not found!");
        }
    }

    printHeader(): string {
        const length = this.getMaxLength();
        let result = '';
        let rest = '';
        for(let i = 0; i < this.headers.length; i += 1) {
            rest = `${' '.padEnd(length - this.headers[i].toString().length)}`;
            result += `|${this.headers[i].toString().toUpperCase()}${rest}`;
        }
        return result;
    }

    print(): void {
        const length = this.getMaxLength();
        this.printHeader();
        console.log(this.printHeader());
        for(let i = 0; i < this.data.length; i += 1) {
            let item = '';
            let rest = '';
            const rec = this.data[i];
            for(let j = 0; j < this.headers.length; j += 1) {
                rest = `${' '.padEnd(length - rec[this.headers[j]].toString().length)}`;
                item += `|${rec[this.headers[j]]}${rest}`;
            }
            console.log(item);
        }
        console.log('\n');
    }

}

export default Table;