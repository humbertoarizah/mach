const pairs = (array, sum) => {
    const result = []
    const noIndex = []
    for(let i = 0; i < array.length; i++) {
        if(!noIndex.includes(i)) {
            const value1 = array[i]
            const counterValue = sum - value1
            for(let j = i + 1; j < array.length; j++) {
                const value2 = array[j]
                if(counterValue === value2) {
                    result.push(`${value2},${value1}`)
                    noIndex.push(j)
                    j = array.length
                }
            }
        }
    }
    return result
}
// Test cases
console.log(pairs([1,9,5,0,20,-4,12,16,7], 12))
console.log(pairs([1,2,3,4,5,6,7,8,9,10], 8))
console.log(pairs([1,2,3,4,5,6,7,8,9,10], 10))