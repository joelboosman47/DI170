# Ask the user for a number between 1 and 100
number = int(input("Give me a number between 1 and 100: "))

# If the number is a divisible by three, print Fizz
# If the number is a divisible by five, print Buzz.
# If the number is a divisible by both three and five, print FizzBuzz instead.

while number < 1 or number > 100: #this was my own addition, to make it more fool-proof ;)
    print("""You didn't follow my instructions!
          Try again""")
    number = int(input("Give me a number between 1 and 100"))

if number % 3 == 0 and number % 5 == 0:
    print("FizzBuzz")
elif number % 3 == 0:
    print("Fizz")
elif number % 5 == 0:
    print("Buzz")
else: # not requested, but I like to have an else statement so that you see some output if all conditions are false.
    print("Ok")


