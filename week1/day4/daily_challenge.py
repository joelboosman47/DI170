# Challenge 1: Multiples of a Number

# Key Python Topics:
# input() function
# Loops (for or while)
# Lists and appending items
# Basic arithmetic (multiplication)

# Instructions:
# 1. Ask the user for two inputs:
# A number (integer).
# A length (integer).
# 2. Create a program that generates a list of multiples of the given number.
# 3. The list should stop when it reaches the length specified by the user.

# Example 1:
# Input:
# number: 7
# length: 5
# Output:
# [7, 14, 21, 28, 35]

# Example 2:
# Input:
# number: 12
# length: 10
# Output:
# [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

# Example 3:
# Input:
# number: 17
# length: 6
# Output:
# [17, 34, 51, 68, 85, 102]

user_number = int(input("Number: ")) #as the user to enter a number and save it as an int
user_length = int(input("Length: ")) #idem for a length number
list_numbers = [] #create an empty list that will contain the output
current_index = 0 #this will be the number that will be added to the list for each iteration
for i in range(user_length): #loop the nr. of times that the user entered (in user_lenght)
    #each time add the user_number to the index and add the new index to the list. The index will after each iteration be the next multiple of the user_number. 
    current_index += user_number 
    list_numbers.append(current_index)
print(list_numbers) #print the result

# Challenge 2: Remove Consecutive Duplicate Letters

# Key Python Topics:
# input() function
# Strings and string manipulation
# Loops (for or while)
# Conditional statements (if)

# Instructions:
# 1. Ask the user for a string.
# 2. Write a program that processes the string to remove consecutive duplicate letters.
# The new string should only contain unique consecutive letters.
# For example, “ppoeemm” should become “poem” (removes consecutive duplicates like ‘pp’, ‘ee’, and ‘mm’).
# 3. The program should print the modified string.

# Example 1:
# Input:
# user’s word: "ppoeemm"
# Output:
# "poem"

# Example 2:
# Input:
# user’s word: "wiiiinnnnd"
# Output:
# "wind"

# Example 3:
# Input:
# user’s word: "ttiiitllleeee"
# Output:
# "title"

# Example 4:
# Input:
# user’s word: "cccccaaarrrbbonnnnn"
# Output:
# "carbon"

# Notes:
# The final string will not include any consecutive duplicates, but non-consecutive duplicates are allowed.
# Example: In "recursive", the two ‘r’s and two ‘e’s are allowed because they are not consecutive.
user_text = input("Please enter a word: ") #save the users input
previous_letter = '' #when iterating over the letters of the user_text, here we keep track of the previous letter so we won't save the current letter if it is the same.
result = '' #here we will save the letters for the result
for letter in user_text: #iterate over each letter of the user input (user_text)
    #if the current letter is the same as the previous letter, we ignore it.
    if letter == previous_letter:
        continue
    previous_letter = letter #we save the letter to compare in the next iteration
    result += letter #we add the letters to the result to get one long word (without consecutive double letters)
print(result)