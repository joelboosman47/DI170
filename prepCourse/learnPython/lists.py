# 🌟 Exercise 1 : Lists
# Instructions
# Write Python code to complete the following tasks.

# Given a list [1, 2, 3, 4], print out all the values in the list one by one.
list1 = [1, 2, 3, 4]
for i in list1:
    print(i)

# Given a list [1, 2, 3, 4], print out all the values in the list multiplied by 20.
for i in list1:
    print(i * 20)

# Given a list ["Elie", "Tim", "Matt"], return a new list with only the first letter of each name: ["E", "T", "M"].
list2 = ["Elie", "Tim", "Matt"]
list3 = []
for i in list2:
    list3.append(i[0])
print(list3)

# Given a list [1, 2, 3, 4, 5, 6], return a new list with all the even values: [2, 4, 6].
list4 = [1, 2, 3, 4, 5, 6]
list5 = []
for i in list4:
    if i % 2 == 0: list5.append(i)
print(list5)

# Given two lists [1, 2, 3, 4] and [3, 4, 5, 6], return a new list that contains only the values present in both lists: [3, 4].
# list1 = [1, 2, 3, 4]
list6 = [3, 4, 5, 6]
list7 = []
for i in list1:
    if list6.__contains__(i):
        list7.append(i)
print(list7)

# Given a list of words ["Elie", "Tim", "Matt"], return a new list with each word reversed and in lowercase: ["eile", "mit", "ttam"].
list8 = []
for i in list2:
    list8.append(i.lower()[::-1])
print(list8)

# Given two strings "first" and "third", return a new list of the letters that are present in both strings: ["i", "r", "t"].
my_string = 'third'
list8 = []
for i in "first":
    if my_string.find(i) != -1:
        list8.append(i)
print(list8)

# For all numbers between 1 and 100, return a list of the numbers that are divisible by 12: [12, 24, 36, 48, 60, 72, 84, 96].
list9 = []
for i in range(1,101):
    if i % 12 == 0: list9.append(i)
print(list9)

# Given the string "amazing", return a list with all the vowels removed: ["m", "z", "n", "g"].
list10 = []
for char in "amazing":
    if char != 'a' and char != 'i': list10.append(char)
print(list10)

# Generate a list with the following value: [[0, 1, 2], [0, 1, 2], [0, 1, 2]].
list11 = [[0, 1, 2], [0, 1, 2], [0, 1, 2]]
print(list11)

# Generate a list with the following structure:
# [
#   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
# ]
list12 = []
for i in range(10):
    list12.append([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
print('[')
print(*list12, sep='\n')
print(']')