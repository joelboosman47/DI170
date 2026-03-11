# Exercise 1: Formula
# Instructions
# Write a program that calculates and prints a value according to this given formula:
# Q = Square root of [(2 * C * D)/H]
# Following are the fixed values of C and H:
# C is 50.
# H is 30.
# Ask the user for a comma-separated string of numbers, use each number from the user as D in the formula and return all the results
# For example, if the user inputs: 100,150,180
# The output should be:
# 18,22,24

import math
result = []
c = 50
h = 30

inputUser = input("Please give a comma-separated string of numbers: ").split(',')

for d in inputUser:
    result.append(math.floor(math.sqrt((2 * c * int(d))/h)))

print(result)