# # Daily challenge GOLD : Happy birthday

# Instructions
# Ask the user for their birthdate (specify the format, for example: DD/MM/YYYY).
# Display a little cake as seen below:
#        ___iiiii___
#       |:H:a:p:p:y:|
#     __|___________|__
#    |^^^^^^^^^^^^^^^^^|
#    |:B:i:r:t:h:d:a:y:|
#    |                 |
#    ~~~~~~~~~~~~~~~~~~~

# The number of candles on the cake should be the last number of the users age, if they are 53, then add 3 candles.

from datetime import date

# Current date is December 30, 2025
today = date(2025, 12, 30)

# Ask for birthdate
birthdate_str = input("Enter your birthdate (DD/MM/YYYY): ")

# Parse the birthdate
day, month, year = map(int, birthdate_str.split('/'))
birth_date = date(year, month, day)

# Calculate age
age = today.year - birth_date.year - ((today.month, today.day) < (birth_date.month, birth_date.day))

# Get the last digit of the age
last_digit = age % 10

# Create the cake with the appropriate number of candles
cake = [
    f"        ___{'i' * last_digit}___",
    "       |:H:a:p:p:y:|",
    "     __|___________|__",
    "    |^^^^^^^^^^^^^^^^^|",
    "    |:B:i:r:t:h:d:a:y:|",
    "    |                 |",
    "    ~~~~~~~~~~~~~~~~~~~"
]

# Display the cake
print('You are', age)

for line in cake:
    print(line)