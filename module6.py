
  # Joshua Armenta
# CIS150AB Python
def print_name(first_name, last_name, x_times): #creates a function with the given arguments
    for _ in range(x_times):
        full_name = f"{first_name} {last_name}" #splices to strings togeter
        print(full_name) #3prints full name
first_name = str(input()) ##gets name from user_input
last_name = str(input())
x_times = int(input())  #tell how many times to print from user_input

print_name(first_name, last_name, x_times) #prints

