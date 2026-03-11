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

# 🌟 Exercise 8: Pizza Toppings
# Key Python Topics:

# Loops
# Lists
# String formatting

# Instructions:

# Write a loop that asks the user to enter pizza toppings one by one.
# Stop the loop when the user types 'quit'.
# For each topping entered, print:
# "Adding [topping] to your pizza."
# After exiting the loop, print all the toppings and the total cost of the pizza.
# The base price is $10, and each topping adds $2.50.
price = 10.0 #basic price of pizza (in float, since we will add a float for each topping)
chosen_toppings = []
user_input = input("Enter a pizza topping: ")
chosen_toppings.append(user_input) #add the input to the list
price += 2.50 #add 2.50 to the price float
while True: #keep asking for input. If the user enters 'quit', stop the loop.
    user_input = input("Enter another pizza topping (enter 'quit' to stop): ")
    if user_input == 'quit': break
    chosen_toppings.append(user_input) #add the input to the list
    price += 2.50 #add 2.50 to the price like before
#after the loop has ended, print the list of inputs and the price value (on a next line)
print(f'''Your chosen toppings are: {chosen_toppings}. 
Your pizza costs: {price}.''')

# 🌟 Exercise 9: Cinemax Tickets
# Key Python Topics:

# Conditionals
# Lists
# Loops

# Instructions:

# Ask for the age of each person in a family who wants to buy a movie ticket.
# Calculate the total cost based on the following rules:
# Free for people under 3.
# $10 for people aged 3 to 12.
# $15 for anyone over 12.
# Print the total ticket cost.
cost_tickets = 0
family_ages = input("Please enter the ages of each person who wants to buy a ticket (comma separated): ").split(',')
family_ages = [int(age) for age in family_ages]
for age in family_ages:
    if age < 3: continue
    if 3 <= age <= 12:
        cost_tickets += 10
    else:
        cost_tickets += 15
print(f"Your tickets cost total: ${cost_tickets}.") 
# Bonus:

# Imagine a group of teenagers wants to see a restricted movie (only for ages 16–21).
# Write a program to:
# Ask for each person’s age.
# Remove anyone who isn’t allowed to watch.
# Print the final list of attendees.
teenager_ages = input("Please enter your ages (comma separated): ").split(',')
teenager_ages = [int(age) for age in teenager_ages if 16 <= int(age) <= 21]
print(f"Final list of attendees: {teenager_ages}")