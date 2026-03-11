# 🌟 Exercise 9: Tall enough to ride a roller coaster
# Instructions
# Write code that will ask the user for their height in centimeters.
# If they are over 145 cm, print a message that states they are tall enough to ride.
# If they are not tall enough, print a message that says they need to grow some more to ride.
height_user = int(input("To determine if you can ride this roller coaster, we need to know your height?\nIf you could please be so kind to tell us (in \'cm\')? "))

if height_user > 145:
    print("You\'re tall enough to ride.\nHave fun!")
else: print("Sorry, you need to grow some more te ride.\nMake sure to always finish your plate and you can take this ride in no-time!")