function fibonacci(n) {
  const result = [0, 1]

  for (let i = 2; i <= n ;i += 1) {
    result[i] = result[i - 1] + result[i - 2]
  }

  return result
}

const result = fibonacci(10)
console.log(result)
