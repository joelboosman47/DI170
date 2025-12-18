# 🌟 Exercise 1: Favorite Numbers
# Key Python Topics:

# Sets
# Adding/removing items in a set
# Set concatenation (using union)

# Instructions:

# Create a set called my_fav_numbers and populate it with your favorite numbers.
# Add two new numbers to the set.
# Remove the last number you added to the set.
# Create another set called friend_fav_numbers and populate it with your friend’s favorite numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to create a new set called our_fav_numbers.
# Note: Sets are unordered collections, so ensure no duplicate numbers are added.
my_fav_numbers = {2, 4, 7, 8, 10}
my_fav_numbers.add(5) #adding 1 numbers to the set
my_fav_numbers.add(13) #adding anothet number to the set
my_fav_numbers.remove(13) #remove the last number
friend_fav_numbers = {4, 7, 12, 45}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers) #concatenate sets into new set
print(our_fav_numbers)

# 🌟 Exercise 2: Tuple
# Key Python Topics:

# Tuples (immutability)

# Instructions:

# Given a tuple of integers, try to add more integers to the tuple.
# Hint: Tuples are immutable, meaning they cannot be changed after creation. Think about why you can’t add more integers to a tuple.
my_tuple = (1, 2 , 3)
#my_tuple.add(4) if executed, this would cause an error since it is not possible to change a tuple. Also, this method doesn't exist for a tuple.

# 🌟 Exercise 3: List Manipulation
# Key Python Topics:

# Lists
# List methods: append, remove, insert, count, clear

# Instructions:

# You have a list: basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# Remove "Banana" from the list.
# Remove "Blueberries" from the list.
# Add "Kiwi" to the end of the list.
# Add "Apples" to the beginning of the list.
# Count how many times "Apples" appear in the list.
# Empty the list.
# Print the final state of the list.
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana") #remove the (first) occurence of "Banana" from the list
basket.remove("Blueberries") #same for "Blueberries"
basket.append("Kiwi") #Add "Kiwi" to the end of the list.
basket.insert(0, "Apples") #Add "Apples" to the beginning of the list.
apples_count = basket.count("Apples") #count nr. of Apples in the list
basket.clear() #clears the list
print(basket) #prints an empty list: '[]'

# 🌟 Exercise 4: Floats
# Key Python Topics:

# Lists
# Floats and integers
# Range generation

# Instructions:

# Recap: What is a float? What’s the difference between a float and an integer?
    # Answer: a float is a floating-point decimal, i.e. a number with a point, like 2.5
# Create a list containing the following sequence of mixed types: floats and integers:
# 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5.
# Avoid hard-coding each number manually.
# Think: Can you generate this sequence using a loop or another method?
mixed_digits = [] #create a list without values
for n in range(1, 6): #loop over a range from 1-5 (inclusive)
    #only add the int iterator to the list from 2 forward 
    if n != 1:
        mixed_digits.append(n)
    #once you reach number 5, finish
    if n == 5: 
        break
    x = float(n) + 0.5 #turn the iterator in a float and add 0.5 to the list
    mixed_digits.append(x)
print(mixed_digits)

# 🌟 Exercise 5: For Loop
# Key Python Topics:

# Loops (for)
# Range and indexing

# Instructions:

# Write a for loop to print all numbers from 1 to 20, inclusive.
# Write another for loop that prints every number from 1 to 20 where the index is even.
for i in range(1, 21): print(i)
for i in range(2, 21, 2): print(i)

# 🌟 Exercise 6: While Loop
# Key Python Topics:

# Loops (while)
# Conditionals

# Instructions:

# Use an input to ask the user to enter their name.
user_name = input('Please enter your name: ')
# Using a while True loop, check if the user gave a proper name (not digits and at least 3 letters long)
# hint: check for the method isdigit()
# if the input is incorrect, keep asking for the correct input until it is correct
# if the input is correct print “thank you” and break the loop
while True:
    #if only digits are entered or the name is less then 3 chars long, ask input again.
    if user_name.isdigit() or len(user_name) < 3:
        user_name = input('Please enter a correct name: ')
    #otherwise print "Thank you" and stop the loop
    else:
        print("Thank you")
        break

# 🌟 Exercise 7: Favorite Fruits
# Key Python Topics:

# Input/output
# Strings and lists
# Conditionals

# Instructions:

# Ask the user to input their favorite fruits (they can input several fruits, separated by spaces).
# Store these fruits in a list.
# Ask the user to input the name of any fruit.
# If the fruit is in their list of favorite fruits, print:
# "You chose one of your favorite fruits! Enjoy!"
# If not, print:
# "You chose a new fruit. I hope you enjoy it!"
user_input = input("Please enter your favorite fruits (separated by a space): ")
favorite_fruit = user_input.split() #store input in list, separating entries by space
user_input2 = input("Please enter the name of any fruit: ")
if favorite_fruit.__contains__(user_input2): #check if newly entered name appears in the above list and print a message if True and a different message if False
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")

