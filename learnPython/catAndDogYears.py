""" Write a program that will calculate cat’s and dog’s years based on human years:
I have a cat and a dog. I got them at the same time as kitten/puppy. That was humanYears years ago. Print their respective ages now as [humanYears,catYears,dogYears]

NOTES:
humanYears >= 1 humanYears are whole numbers only
Cat Years 15 cat years for first year +9 cat years for second year +4 cat years for each year after that
Dog Years 15 dog years for first year +9 dog years for second year +5 dog years for each year after that
"""
humanYears = 3
catYears = 0 
dogYears = 0

if humanYears == 1:
    catYears = 15
elif humanYears == 2:
    catYears = 24
else:
    catYears = 24 + ((humanYears - 2)*4)

if humanYears == 1:
    dogYears = 15
elif humanYears == 2:
    dogYears = 24
else:
    dogYears = 24 + ((humanYears - 2)*5)

output = [humanYears, catYears, dogYears]
print(output)
