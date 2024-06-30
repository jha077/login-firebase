  # Joshua Armenta
# CIS150AB Python
salary1 = float(input("Enter previous salary"))
benefits1 = float(input("Enter previous benefits"))
bonus1 = float(input("Enter previous bonus"))
salary2 = float(input("Enter new salary"))
benefits2 = float(input("Enter new benefits"))
bonus2 = float(input("Enter new bonus"))
def wage(salary1, benefits1, bonus1, bonus2, salary2, benefits2): #defines function
    if salary2 > salary1:
        salaryincrease = salary2 - salary1
    else:
        salaryincrease = 0
    if benefits2 > benefits1:
        benefitsincrease = benefits2 - benefits1
    else:
        benefitsincrease = 0
    if bonus2 > bonus1:
        bonusincrease = bonus2 - bonus1
    else:
        bonusincrease = 0   
    print(f"${salaryincrease}") #prints if there is a salary increase
    print(f"${benefitsincrease}") #prints if there is a benefits increase
    print(f"${bonusincrease}") # prints if there is a bonus increase
wage(salary1, benefits1, bonus1, bonus2, salary2, benefits2)  #calls function
