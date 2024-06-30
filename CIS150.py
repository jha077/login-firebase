user_num = input("Enter a number: ")
num = 1
while (num <= user_num):
    num = num + 1
    print(num)

    # Joshua Armenta
# CIS150AB Python


days_worked = 45 # establishes variable days worked
weekly_hours = 22 #establishes how many hour the employee works per week

if days_worked > 31:  # assesses the criteria 31 days + to be eligible for benefits
    if weekly_hours >= 30:  #after that is checked and true establishes weekly hours for full time benefits
        print('eligible for full benefits') 
    elif weekly_hours < 30 and  weekly_hours > 20: #if 30+ hours a week is not true checks for part time benefits
        print('Eligible for reduced benefits')
    else:  #if all the previous were false they are not eligible for benefits
        print('They are not eligible for benefits')