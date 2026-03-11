from random import randint

# Exercise 1: Concatenate lists
# Instructions
# Write code that concatenates two lists together without using the + sign.

list1 = ['a', 'b', 'c', 'd']
list2 = [1, 2, 3, 4]
print(list1)

# Exercise 2: Range of numbers
# Instructions
# Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.
for i in range(1500, 2500):
    print(f'Multiple of 5: {i * 5}\nMultiple of 7: {i * 7}')

# Exercise 3: Check the index
# Instructions
# Using this variable
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
# Ask a user for their name, if their name is in the names list print out the index of the first occurence of the name.
# Example: if input is 'Cortana' we should be printing the index 1
your_name = input('What is your name: ')
count_name = names.count(your_name)
if count_name > 0:
    print(names.index(your_name))

# Exercise 4: Greatest Number
# Instructions
# Ask the user for 3 numbers and print the greatest number.

# Test Data
# Input the 1st number: 25
# Input the 2nd number: 78
# Input the 3rd number: 87

# The greatest number is: 87
first_no = int(input('Input the 1st number: '))
second_no = int(input('Input the 2nd number: '))
third_no = int(input('Input the 3rd number: '))
comp = [first_no, second_no, third_no]
comp.sort()
print('The greatest number is: ', comp[-1])

# Exercise 5: The Alphabet
# Instructions
# Create a string of all the letters in the alphabet
# Loop over each letter and print a message that contains the letter and whether its a vowel or a consonant.
alphabet = 'abcdefghijklmnopqrstuvwxyz'
for i in alphabet:
    if i in ['a', 'e', 'u', 'i', 'o']:
        print(i, 'is a vowel.')
    else: print(i, 'is a consonant')

# Exercise 6: Words and letters
# Instructions
# Ask a user for 3 words, store them in a list named words.
# Ask the user for a single character, store it in a variable called letter.
# Loop through the words list and print the index of the first appearence of the letter variable in each word of the list.
# If the letter doesn’t exist in one of the words, print a friendly message with the word and the letter.
words = []
words.append(input('First word: '))
words.append(input('Second word: '))
words.append(input('Third word: '))

letter = input('Give me a letter: ')
for word in words:
    if letter.lower() in word.lower():
        print(f'{letter} is {word.lower().find(letter.lower())} in {word}')
    else: print(f'{letter} doesn\'t appear in {word}')

# Exercise 7: Min, Max, Sum
# Instructions
# Create a list of numbers from one to one million and then use min() and max() to make sure your list actually starts at one and ends at one million. Use the sum() function to see how quickly Python can add a million numbers.
r = list(range(1, 1000001))
print(min(r))
print(max(r))
print(sum(r))

# Exercise 8 : List and Tuple
# Instructions
# Write a program which accepts a sequence of comma-separated numbers. Generate a list and a tuple which contain every number.

# Suppose the following input is supplied to the program: 34,67,55,33,12,98

# Then, the output should be:

# ['34', '67', '55', '33', '12', '98']
# ('34', '67', '55', '33', '12', '98')
user_numbers = input('Enter a comma-separated list of numbers: ').split(",")
print(user_numbers)
user_numbers_tup = tuple(user_numbers)
print(user_numbers_tup)

# Exercise 9 : Random number
# Instructions
# Ask the user to input a number from 1 to 9 (including).
# Get a random number between 1 and 9. Hint: random module.
# If the user guesses the correct number print a message that says Winner.
# If the user guesses the wrong number print a message that says better luck next time.
# Bonus: use a loop that allows the user to keep guessing until they want to quit.
# Bonus 2: on exiting the loop tally up and display total games won and lost.
user_guess = (input("Enter a number between 1-9: "))
games_won = 0
games_lost = 0

while user_guess != 'quit':
    random_num = randint(1, 9)
    if int(user_guess) == random_num:
        print('Winner!')
        games_won += 1
    else: 
        print('Better luck next time.')
        games_lost += 1
    user_guess = (input("Enter another number between 1-9 (type 'quit' to quit): "))
print(f'Games won: {games_won}\nGames lost: {games_lost}')