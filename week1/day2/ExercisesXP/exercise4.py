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