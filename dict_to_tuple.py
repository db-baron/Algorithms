# Convert the keys and values of a dictionary to elements of a tuple

my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}

# Clean way
def dict_to_tuple(dictionary):
    return tuple(my_dict.items())

print dict_to_tuple(my_dict)
