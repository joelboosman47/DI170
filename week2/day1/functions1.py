# Exercise 1
def calculations(a, b):
    addit = a + b
    subs = a - b
    return (addit, subs)

print(calculations(10,20))

# Exercise 2
people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]

short_names = list(filter(lambda person: len(person) <= 4 , people))
list(map(lambda name: print(f'hello {name}'), short_names))