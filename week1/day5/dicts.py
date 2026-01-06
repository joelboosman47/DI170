# sample_dict = { 
#    "class":{ 
#       "student":{ 
#          "name":"Mike",
#          "marks":{ 
#             "physics":70,
#             "history":80
#          }
#       }
#    }
# }

# print(sample_dict["class"]["student"]["marks"]["history"])
# sample_dict["next_class"] = {"student":{"name":"Joel", "marks":{"Python":80, "JavaScript":70}}}
# print(sample_dict["next_class"]["student"])

# sample_dict = {
#   "name": "Kelly",
#   "age":25,
#   "salary": 8000,
#   "city": "New york"

# }
# keys_to_remove = ["name", "salary"]

# for i in keys_to_remove:
#     del sample_dict[i]

# print(sample_dict)

letters ='abcd'

letters2 = [i + i for i in letters]
print(letters2)