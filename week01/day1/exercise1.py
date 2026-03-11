# Working with the following string:

# description = "strings are..."

# make it all uper case
# replace the word "are" to "is"
# print just the word "strings"

description = "strings are..."

description2 = description.upper()
description3 = description2.replace('ARE', 'IS')

print(description3[0:7])