def parse(val):
  romans = {'D': 500, 'C': 100, 'L': 50, 'X' : 10, 'V': 5, 'I': 1, 'M': 1000}

  total = 0
  i = 0
  for i in range(len(val)):
    if i + 1 < len(val) and romans[val[i]] < romans[val[i + 1]]:
      total -= romans[val[i]]
    else:
      total += romans[val[i]]
    i += 1
  return total
