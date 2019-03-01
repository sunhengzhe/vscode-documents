const name = 'Hello world';

const castToPercentage = function (arr) {
  if (!Array.isArray(arr)) {
    throw new Error('the parameter must be an array!')
  }

  const total = arr.reduce((a, b) => a + b, 0)
  const percentages = arr.map(item => item / total * 100)
  const integers = percentages.map(item => item | 0)

  if (total <= 0) {
    return integers
  }

  const decimals = percentages.map((item, index) => ({
    item: item - integers[index],
    index
  }))
  const decimalsSortDesc = decimals.sort((a, b) => b.item - a.item)
  const remainingNum = 100 - integers.reduce((a, b) => a + b, 0)

  for (let i = 0; i < remainingNum; i++) {
    integers[decimalsSortDesc[i].index] += 1
  }

  return integers
}

castToPercentage([3, 13]);