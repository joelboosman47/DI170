# Declare a variable called first and assign it to the value "Hello World".
first = 'Hello World'

# Write a comment that says "This is a comment."
# This is a comment

# Log a message to the terminal that says "I AM A COMPUTER!"
print('I AM A COMPUTER!')

# Write an if statement that checks if 1 is less than 2 and if 4 is greater than 2. If it is, show the message "Math is fun."
if 1 < 2 and 4 > 2:
    print('Math is fun.')

# Assign a variable called nope to an absence of value.
nope = None

# Use the language’s “and” boolean operator to combine the language’s “true” value with its “false” value.
if True and False:
    print('This will not print.')

# Calculate the length of the string "What's my length?"
string = "What is my length?"
len = 0
for i in string:
    len = len + 1
print(len)

# Convert the string "i am shouting" to uppercase.
string = "i am shouting"
string = "I AM SHOUTING"

# Convert the string "1000"to the number 1000.
string1000 = "1000"
int(string1000)
print(string1000)

# Combine the number 4 with the string "real" to produce "4real".
print(f'{4}real')

# Record the output of the expression 3 * "cool".
# coolcoolcool
print(3 * "cool")

# Record the output of the expression 1 / 0.
#This will cause 'division my 0' error

# Determine the type of [].
a = [] #is anyway an empty list
type(a)

# Ask the user for their name, and store it in a variable called name.
name = input('What is your name? ')

# Ask the user for a number. If the number is negative, show a message that says "That number is less than 0!" If the number is positive, show a message that says "That number is greater than 0!" Otherwise, show a message that says "You picked 0!.
number = input('Pick a number: ')
if int(number) < 0:
    print('That number is less than 0!')
elif int(number) > 0:
    print('That number is greater than 0!')
else: print('You picked 0!')

# Find the index of "l" in "apple".
print('apple'[1])

# Check whether "y" is in "xylophone".
for i in "xylophone":
    if i == 'y':
        print("the letter y does appear")
        break
    else: "Nope!"

#Check whether a string called my_string is all in lowercase.
my_string = 'je moeder is ffing lelijk'
print(my_string.islower())