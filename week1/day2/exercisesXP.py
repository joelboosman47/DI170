# Exercise 1: Hello World
# Instructions
# Print the following output using one line of code:

# Hello world
# Hello world
# Hello world
# Hello world

print('Hello world\n'*4)

# Exercise 2: Some Math
# Instructions
# Write code that calculates the result of:

# (99^3)*8 (meaning 99 to the power of 3, times 8).

result = (99**3)*8
print(result)

# Exercise 3: What is the output?
# Instructions
# Predict the output of the following code snippets:
# Coment what is your guess, then run the code and compare

# Example:

# >>> 15 < 8 #False
# >>> 5 < 3 #False
# >>> 3 == 3 #True
# >>> 3 == "3" #False
# >>> "3" > 3 #TypeError"
# >>> "Hello" == "hello" #False

# 🌟 Exercise 4: Your computer brand
# Instructions
# Create a variable called computer_brand which value is the brand name of your computer.
# Using the computer_brand variable, print a sentence that states the following:
# "I have a <computer_brand> computer."

computer_brand = 'ASUS'
first_letter = computer_brand[0]

if first_letter == 'A' or first_letter == 'a':
    print(f"I have an {computer_brand} computer.")
else: print(f"I have a {computer_brand} computer.")

# 🌟 Exercise 5: Your information
# Instructions
# Create a variable called name, and set it’s value to your name.
# Create a variable called age, and set it’s value to your age.
# Create a variable called shoe_size, and set it’s value to your shoe size.
# Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2, and 3.
# Have your code print the info message.
# Run your code.

name = 'Joël Boosman'
age = 34
shoe_size = 45
info = f'''My name is {name} and I am {age} years old.
People think I have big feet, because my shoe size is {shoe_size}'''

print(info)

# 🌟 Exercise 6: A & B
# Instructions
# Create two variables, a and b.
# Each variable’s value should be a number.
# If a is bigger than b, have your code print "Hello World".

a = 1
b = 3

if a > b:
    print("Hello World")

# Exercise 7: Odd or Even
# Instructions
# Write code that asks the user for a number and determines whether this number is odd or even.

number = int(input("Give me a number: "))
if number % 2 == 0:
    print("Your number is even!")
else: print("Your number is odd!")

# 🌟 Exercise 8: What’s your name?
# Instructions
# Write code that asks the user for their name and determines whether or not you have the same name. Print out a funny message based on the outcome.

my_name = 'Joël'
your_name = input('What is your name? ')

if my_name == your_name:
    print("WOW, I have finally met my identical twin!! 🤩")
else: print("Hello stranger. Nice to meet you! 🥸")

# 🌟 Exercise 9: Tall enough to ride a roller coaster
# Instructions
# Write code that will ask the user for their height in centimeters.
# If they are over 145 cm, print a message that states they are tall enough to ride.
# If they are not tall enough, print a message that says they need to grow some more to ride.
height_user = int(input("To determine if you can ride this roller coaster, we need to know your height?\nIf you could please be so kind to tell us (in \'cm\')? "))

if height_user > 145:
    print("You\'re tall enough to ride.\nHave fun!")
else: print("Sorry, you need to grow some more te ride.\nMake sure to always finish your plate and you can take this ride in no-time!")