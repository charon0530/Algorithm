//[a,b,c] 에서 c 즉, 인덱스 2번을 기준으로 할 때임
//참고로 이거나 그냥 minHeap이나 비슷함
class MinHeap {
    constructor() {
        this.data = [];
    }

    peak() {
        return this.data[0];
    }

    push(value) {
        this.data.push(value);

        let i = this.data.length - 1;
        while (i > 0) {
            const parentIndex = Math.ceil(i / 2 - 1);
            if (this.data[i][2] < this.data[parentIndex][2]) {
                // HERE
                this.swap(i, parentIndex);
                i = parentIndex;
            } else {
                break;
            }
        }
    }

    pop() {
        // 1 or no remaining items is a special case
        if (this.data.length < 2) {
            return this.data.pop();
        }

        const min = this.data[0];
        this.data[0] = this.data.pop();

        let i = 0;
        while (true) {
            const [leftIndex, rightIndex] = [i * 2 + 1, i * 2 + 2];
            let leftValue = Infinity;
            if (this.data[leftIndex]) {
                leftValue = this.data[leftIndex][2]; // HERE
            }
            let rightValue = Infinity;
            if (this.data[rightIndex]) {
                rightValue = this.data[rightIndex][2]; // HERE
            }

            // If both children are larger than the candidate, we're done.
            if (leftValue > this.data[i][2] && rightValue > this.data[i][2]) {
                // HERE
                break;
            }

            // Otherwise pick the index of the smallest value
            const smallestIndex =
                leftValue < rightValue ? leftIndex : rightIndex;

            this.swap(i, smallestIndex);
            i = smallestIndex;
        }

        return min;
    }

    swap(i1, i2) {
        const val1 = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = val1;
    }
    getLength() {
        return this.data.length;
    }
}
