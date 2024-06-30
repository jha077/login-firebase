
  # Joshua Armenta
# CIS150AB Python
air_temperature = float(input()) #creates a float from user input
print(f"{air_temperature:.1f}F") # prints that input to one decimal.


user_word1 = str(input()) #user_word from input
user_word2 = str(input())
user_word3 = str(input())
user_word4 = str(input())
def string_slicing(user_word1, user_word2, user_word3, user_word4): 
    if len(user_word1) != 8:  #creates a condition that the user word has to be 8 letters
      return  'All words Must be 8 letters'
    else:
        hello = user_word1[0:3] # grabs first 3 letters
    if len(user_word2) != 8: #creates a condition that the user word has to be 8 letters
       return 'All words Must be 8 letters'
    else:
        world = user_word2[4:8] #grabs last 4 letters

    if len(user_word3) != 8: #creates a condition that the user word has to be 8 letters
       return 'All words Must be 8 letters'
    else:
         Iam = user_word3[3:6]  #grabs middle 3 letters

    if len(user_word4) != 8: #creates a condition that the user word has to be 8 letters
        return 'All words Must be 8 letters'
    else:
        coding = user_word4[5:8] # and last 3 letters
    print(f"{hello}{world}{Iam}{coding}") #prints statements
    
result = string_slicing(user_word1, user_word2, user_word3, user_word4)
if result:
    print(result) #prints result of string 

word1 = user_word1[:len(user_word1)//2] #splits word into half 
word2 = user_word2[len(user_word2)//2:] #splits word into half but grabs the last half

word3 = user_word3[:len(user_word3)//2] #splits word into half 
word4 = user_word4[len(user_word4)//2:] #splits word into half but grabs the last half
result = word1 + word2 + '' + word3 + word4 # adds word, also uses empty string for a space
print(result) #prints