words = list(input("Type your words: ").split(' '))
i = -1
reversed = []
for n in range(len(words)):
    reversed.append(words[i])
    i -= 1
print(' '.join(reversed))