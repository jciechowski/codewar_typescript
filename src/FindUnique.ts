class FindUnique {
    static findUniq(arr: Array<number>): number {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== arr[i + 1]) {
                if(arr[i+1] !== arr[i+2])
                    return arr[i + 1];
                return arr[i];
            }
        }
    }
}