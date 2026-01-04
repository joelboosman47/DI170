# 🌟 Exercise 1: Cats
# Key Python Topics:

# Classes and objects
# Object instantiation
# Attributes
# Functions

# Instructions:

# Use the provided Cat class to create three cat objects. Then, create a function to find the oldest cat and print its details.

# Step 1: Create Cat Objects
# Use the Cat class to create three cat objects with different names and ages.

# Step 2: Create a Function to Find the Oldest Cat
# Create a function that takes the three cat objects as input.
# Inside the function, compare the ages of the cats to find the oldest one.
# Return the oldest cat object.

# Step 3: Print the Oldest Cat’s Details
# Call the function to get the oldest cat.
# Print a formatted string: “The oldest cat is <cat_name>, and is <cat_age> years old.”
# Replace <cat_name> and <cat_age> with the oldest cat’s name and age.

# Example:

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# # Step 1: Create cat objects
# # cat1 = create the object

# # Step 2: Create a function to find the oldest cat
# def find_oldest_cat(cat1, cat2, cat3):
#     # ... code to find and return the oldest cat ...

# # Step 3: Print the oldest cat's details

# 1. 
# Cat class
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Create 3 Cat instances
cat1 = Cat("Cat1", 2)
cat2 = Cat("Cat2", 3)
cat3 = Cat("Cat3", 5)

# 2.
def find_oldest_cat(cat1, cat2, cat3):
    # Use max() with key to find the cat with the highest age
    oldest_cat = max([cat1, cat2, cat3], key=lambda cat: cat.age)
    return oldest_cat

# 3. Print the oldest cat's details
oldest = find_oldest_cat(cat1, cat2, cat3)
print(f'The oldest cat is {oldest.name}, and is {oldest.age} years old.')

