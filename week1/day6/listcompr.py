some_list = ['a', 'b', 'c', 'b', 'd', 'm', 'n', 'n']

duplicates = set([value for value in some_list if some_list.count(value) > 1])


# for value in some_list:
#     if some_list.count(value) > 1:
#         if value not in duplicates:
#             duplicates.append(value)

print(duplicates)