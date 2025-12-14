description = "strings are..."

description2 = description.upper()
description3 = description2.replace('ARE', 'IS')

print(description3[0:7])


# In the python shell, Create a variable called my_age, use python to know how old you will be in 123879 years
my_age = 34

my_age += 123879-2025
print(f'My age in 123879 is {my_age}')

name = input("What is your name? ")

if len(name) < 5:
    print("You have a short name")
else:
    print("You have a normal length name")