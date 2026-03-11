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

#Example to test
stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()

# 🌟 Exercise 4 : Afternoon at the Zoo
# Goal:
# Create a Zoo class to manage animals. The class should allow adding animals, displaying them, selling them, and organizing them into alphabetical groups.

# Key Python Topics:

# Classes and objects
# Object instantiation
# Methods
# Lists
# Dictionaries (for grouping)
# String manipulation

# Instructions
# Step 1: Define the Zoo Class
# 1. Create a class called Zoo.
# 2. Implement the __init__() method:
# It takes a string parameter zoo_name, representing the name of the zoo.
# Initialize an empty list called animals to keep track of animal names.
# 3. Add a method add_animal(new_animal):
# This method adds a new animal to the animals list.
# Do not add the animal if it is already in the list.
# 4. Add a method get_animals():
# This method prints all animals currently in the zoo.
# 5. Add a method sell_animal(animal_sold):
# This method checks if a specified animal exists on the animals list and if so, remove from it.
# 6. Add a method sort_animals():
# This method sorts the animals alphabetically.
# It also groups them by the first letter of their name.
# The result should be a dictionary where:
# Each key is a letter.
# Each value is a list of animals that start with that letter.
# Example output:
# {
#    'B': ['Baboon', 'Bear'],
#    'C': ['Cat', 'Cougar'],
#    'G': ['Giraffe'],
#    'L': ['Lion'],
#    'Z': ['Zebra']
# }
# 7. Add a method get_groups():
# This method prints the grouped animals as created by sort_animals().
# Example output:
# B: ['Baboon', 'Bear']
# C: ['Cat', 'Cougar']
# G: ['Giraffe']
# ...

# Step 2: Create a Zoo Object
# Create an instance of the Zoo class and pass a name for the zoo.

# Step 3: Call the Zoo Methods
# Use the methods of your Zoo object to test adding, selling, displaying, sorting, and grouping animals.
# Example (No Internal Logic Provided)
# class Zoo:
#     def __init__(self, zoo_name):
#         pass

#     def add_animal(self, new_animal):
#         pass

#     def get_animals(self):
#         pass

#     def sell_animal(self, animal_sold):
#         pass

#     def sort_animals(self):
#         pass

#     def get_groups(self):
#         pass

# # Step 2: Create a Zoo instance
# brooklyn_safari = Zoo("Brooklyn Safari")

# # Step 3: Use the Zoo methods
# brooklyn_safari.add_animal("Giraffe")
# brooklyn_safari.add_animal("Bear")
# brooklyn_safari.add_animal("Baboon")
# brooklyn_safari.get_animals()
# brooklyn_safari.sell_animal("Bear")
# brooklyn_safari.get_animals()
# brooklyn_safari.sort_animals()
# brooklyn_safari.get_groups()


# Bonus: Modify the add_animal() method to get *args so you dont need to repeat the method each time for a new animal, you can pass multiple animals names separated by a comma.

#1. define the class
class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

    #This method adds a new animal to the animals list.
    #Do not add the animal if it is already in the list.
    def add_animal(self, *args):
        for new_animal in args:
            if new_animal not in self.animals:
                self.animals.append(new_animal)

    #Print all animals currently in zoo
    def get_animals(self):
        print(f'''You have the following animals in your zoo:
              {self.animals}''')
    
    #checks if a specified animal exists on the animals list and if so, remove from it.
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
    
    #Sort the animals alphabetically.
    #Group them by the first letter of their name.
    #The result should be a dictionary where:
    #Each key is a letter, each value is a list of animals that start with that letter.
    def sort_animals(self):
        self.animals.sort()
        animal_dict = {}
        for animal in self.animals:
            key = animal[0].upper()
            if key not in animal_dict:
                animal_dict[key] = []
            animal_dict[key].append(animal)
        self.grouped_animals = animal_dict  # Store the dictionary as an attribute

    #Print the grouped animals as created by sort_animals().
    def get_groups(self):
        if hasattr(self, 'grouped_animals'):
            for key, value in sorted(self.grouped_animals.items()):
                print(f'{key}: {value}')
        else: print('Animals not sorted yet. Call sort_animals() first.')

#2. Create a Zoo instance
brooklyn_safari = Zoo("Brooklyn Safari")

#3. Use the Zoo methods
brooklyn_safari.add_animal("Giraffe", "Bear", 'Baboon', 'Ape', 'Ape', 'Fish', 'Cocoon', 'Kangeroo', 'Cat')
brooklyn_safari.get_animals()
brooklyn_safari.sell_animal("Bear")
brooklyn_safari.get_animals()
brooklyn_safari.sort_animals()
brooklyn_safari.get_groups()