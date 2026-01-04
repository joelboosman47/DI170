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

# 🌟 Exercise 2 : Dogs
# Goal: Create a Dog class, instantiate objects, call methods, and compare dog sizes.

# Key Python Topics:

# Classes and objects
# Object instantiation
# Methods
# Attributes
# Conditional statements (if)

# Instructions:
# Create a Dog class with methods for barking and jumping. Instantiate dog objects, call their methods, and compare their sizes.

# Step 1: Create the Dog Class
# Create a class called Dog.
# In the __init__ method, take name and height as parameters and create corresponding attributes.
# Create a bark() method that prints “<dog_name> goes woof!”.
# Create a jump() method that prints “<dog_name> jumps <x> cm high!”, where x is height * 2.

# Step 2: Create Dog Objects
# Create davids_dog and sarahs_dog objects with their respective names and heights.

# Step 3: Print Dog Details and Call Methods
# Print the name and height of each dog.
# Call the bark() and jump() methods for each dog.

# Step 4: Compare Dog Sizes

# 1. create the Dog class with attirbutes 
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    #Create a bark() method that prints “<dog_name> goes woof!”.
    def bark(self):
        print(f'{self.name} goes woof!')

    #Create a jump() method that prints “<dog_name> jumps <x> cm high!”, where x is height * 2.
    def jump(self):
        print(f'{self.name} jumps {self.height * 2} cm high!')

#2. create Dog instances
davids_dog = Dog("Good Boy", 12)
sarahs_dog = Dog("Good Girl", 10)

#3.
#Print the name and height of each dog.
print(davids_dog.name, davids_dog.height)
print(sarahs_dog.name, sarahs_dog.height)

#Call the bark() and jump() methods for each dog.
davids_dog.bark()
davids_dog.jump()
sarahs_dog.bark()
sarahs_dog.jump()

#4. Compare Dog Sizes
print(f'{davids_dog.name} has a height of {davids_dog.height} cm')
print(f'{sarahs_dog.name} has a height of {sarahs_dog.height} cm')

# 🌟 Exercise 3 : Who’s the song producer?
# Goal: Create a Song class to represent song lyrics and print them.

# Key Python Topics:
# Classes and objects
# Object instantiation
# Methods
# Lists

# Instructions:
# Create a Song class with a method to print song lyrics line by line.

# Step 1: Create the Song Class
# Create a class called Song.
# In the __init__ method, take lyrics (a list) as a parameter and create a corresponding attribute.
# Create a sing_me_a_song() method that prints each element of the lyrics list on a new line.

# Example:
# stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
# stairway.sing_me_a_song()
# Output: There’s a lady who’s sureall that glitters is goldand she’s buying a stairway to heaven

#1. create the Song class
class Song:
   #In the __init__ method, take lyrics (a list) as a parameter and create a corresponding attribute.
    def __init__(self, lyrics): 
        self.lyrics = lyrics
    
    #Create a sing_me_a_song() method that prints each element of the lyrics list on a new line.
    def sing_me_a_song(self):
       for line in self.lyrics:
           print(line)

stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()
