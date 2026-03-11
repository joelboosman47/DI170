# Check what is the type of each value, then change it: if it is a string, make it an integer and vice-versa:

# bank_balance = '33000'
# phone_number = 532287514

bank_balance = '33000'
phone_number = 532287514
print(f"""Type of bank_balance: {type(bank_balance)}
Type of phone_number: {type(phone_number)}""")

if type(bank_balance) == str:
    bank_balance = int(bank_balance)
elif type(bank_balance) == int:
    bank_balance = str(bank_balance)

if type(phone_number) == str:
    phone_number = int(phone_number)
elif type(phone_number) == int:
    phone_number = str(phone_number)

print(f"""Type of bank_balance: {type(bank_balance)}
Type of phone_number: {type(phone_number)}""")