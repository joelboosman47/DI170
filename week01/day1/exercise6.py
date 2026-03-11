# You have a friend named Alice, and you want to send her a message with the following details:

name = 'Alice'
age = 30
city = 'New York'

# Tasks:
# Use f-strings to print a message saying:
# "Hello, Alice! You are 30 years old and live in New York."
print(f"Hello, {name}! You are {age} years old and live in {city}")

# Use str.format() to print the same message.
print("Hello, {}! You are {} years old and live in {}.".format(name, age, city))