# Challenge 1: Sorting

# Instructions:
# Write a Python program that takes a single string of words as input, where the words are separated by commas (e.g., ‘apple,banana,cherry’). The program should output these words sorted in alphabetical order, with the sorted words also separated by commas.

# Step 1: Get Input
# Use the input() function to get a string of words from the user.
# The words will be separated by commas.
words = input('Enter words separated by comma: ')

# Step 2: Split the String
words_list = words.split(',')

# Step 3: Sort the List
words_list.sort()

# Step 4: Join the Sorted List
result = ','.join(words_list)

# Step 5: Print the Result
# Print the resulting comma-separated string.
print(result)

# Expected Output:
# If the input is without,hello,bag,world, the output should be bag,hello,without,world.

# Challenge 2: Longest Word

# Instructions:
# Write a function that takes a sentence as input and returns the longest word in the sentence. If there are multiple longest words, return the first one encountered. Characters like apostrophes, commas, and periods should be considered part of the word.

# Step 1: Define the Function
# Define a function that takes a string (the sentence) as a parameter.
def longest_word(sentence):
# Step 2: Split the Sentence into Words
    words_list = sentence.split()
# Step 3: Initialize Variables
    longest_word = ''
# Step 4: Iterate Through the Words
    for word in words_list:
# Step 5: Compare Word Lengths
        if len(word) > len(longest_word):
            longest_word = word
# Step 6: Return the Longest Word
    return longest_word

# Test
sentence = input("Write a sentence: ")
print(longest_word(sentence))

# Expected Output:
# longest_word("Margaret's toy is a pretty doll.") should return "Margaret's".
# longest_word("A thing of beauty is a joy forever.") should return "forever.".
# longest_word("Forgetfulness is by all means powerless!") should return "Forgetfulness".