# Ask the user for their age using the input() function and store it in a variable age.
age = input("What is your age? ")

# Convert the inputted age into an integer and calculate the number of years until they turn 100.
age_int = int(age)
years_until_100 = 100 - age_int

# Display a message: "You will turn 100 in X years", where X is the number of years calculated.
print(f"You will turn 100 in {years_until_100} years")