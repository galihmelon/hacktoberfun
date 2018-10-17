# Python 2
try:
    input = int(raw_input("Enter a number: "))
except ValueError:
    print "Invalid number"
finally:
    if input % 2 == 0:
        print "The number you entered is even"
    else:
        print "The number you entered is odd"
