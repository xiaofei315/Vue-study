const arr = [1, 2, 3, 4, 5];

const array = new Proxy(arr, {
    get(target, key, value) {
        console.log(333, key, value)
        return Reflect.get(target, key)
    },
    set(target, key, value, receiver) {
        console.log(444, key, value)
        // target.splice(key, 1, value)
        Reflect.set(target, key, value)
        return true
    }
})


// console.log(array[1])
array[1] = 8
console.log(array)
