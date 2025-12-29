# Exercise 2 : List of integers
# Instructions
# Given a list of 10 integers to analyze. For example:

list1 = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
#     [44, 91, 8, 24, -6, 0, 56, 8, 100, 2] 
#     [3, 21, 76, 53, 9, -82, -3, 49, 1, 76] 
#     [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]
import math

# 1. Store the list of numbers in a variable.

# 2. Print the following information:
# a. The list of numbers – printed in a single line
a = ' '.join(str(x) for x in list1) 
print(a)
# b. The list of numbers – sorted in descending order (largest to smallest)
list1.sort(reverse=True)
print("Sorted desc:", list1)
# c. The sum of all the numbers
sum_of_list1 = sum(list1)
print("Sum:", sum_of_list1)

# 3. A list containing the first and the last numbers.
list2 = [list1[0], list1[-1]]
print (list2)

# 4. A list of all the numbers greater than 50.
list3 = [i for i in list1 if i > 50]
print(list3)

# 5. A list of all the numbers smaller than 10.
list4 = [i for i in list1 if i < 10]
print(list4)

# 6. A list of all the numbers squared – eg. for [1, 2, 3] you would print “1 4 9”.
list5 = [i**2 for i in list1]
print(list5)

# 7. The numbers without any duplicates – also print how many numbers are in the new list.
list1.extend([3, 5, 7])
list6 = list(set(list1))
print(list6)
print("len: ", len(list6))

# 8. The average of all the numbers.
average = math.floor(sum(list1) / len(list1))
print("Average:", average)

# 9. The largest number.
print('Max:', max(list1))

# 10.The smallest number.
print('Min:', min(list1))