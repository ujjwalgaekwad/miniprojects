# Hey i am a programer
"""
   Multiple comment
"""
# print("hello world")


# input ----

# input("Name:")
# name = input("Name")
# print("Welcome",name)


# name = input("Enter Name:")
# age = int(input("Age:"))
# marks = float(input("Marks:"))

# print("Name is",name)
# print("Age",age)
# print("Marks",marks)

# String----
str1 = 'this string'
str2 = "this string"
str = """This string"""

name = "ujjwal singh gaekwad\nteldiha"
print(name)

# String function
str = "i am learning python form ap"
end =str.endswith("ap")
print(end)

str.count()
str.replace("i","u")
str.count("a")
str.capitalize("i") #I 
str.endswith("ap")


#Conditional statements

num = 5
if(num > 5):
    print("grater than 5") #indentation
elif(num < 5):
    print("Less than 5")
else:
    print("pata konsa number hai hahahah")

# List -----------

# A built in data type that stores set of values
# it can store elements of different types (integer,float,string, ete..)
# list are mutable and string are immutable

marks = [89,23.5,23,2,20,99,99,99.3]
student = ["karan",99.9,18,"rajasthan"]

print(marks)
print(type(marks))
print(len(marks))

score = [99,34,55,67,88,99]
print(score[1:3]) #slice [34,55]

list = [2,1,3]

list.append(4) #add one element at the end [2,1,3,4]
list.sort() #sorts in ascending order [1,2,3]
list.sort(reverse=True) #sorts in descending order [3,2,1]
list.reverse() #reverse list [3,1,2]
list.insert(idx, el) #insert element at index list.insert(0,ujjwal)
list.pop(2) #add one element at the start
list.remove(1) #removes first occurrence of element


#Tuple-----------

# A built in data type that lets us create immutable sequence of values.

tup = (2,1,3,4,)

print(tup[0])
print(tup[1:3])

tupls = ()
print(tupls)
print(type(tupls))

#Tuple methods

tupm = (1,2,3,4,5)

tupm.index(2) #returns index of first occurrence tupm.index(1) is 1
tupm.count(4) #counts total occurrence tupm.count(1) is 2

# Dictionary in Python

# Dictionaries are used to store data values in key:value pairs
# They are unordered, mutable(changeable) & don't allow duplicate keys

dict = {
    "name":"ujju",
    "cgpa":"8.45",
    "learning": "python",
    "age":18,
    "isAdult":True,
    "marks": 94.4
}
print(dict)
print(dict["age"])
print(dict["name"])

dict["name"] = "gaekwad"
dict["age"] =18

nullDict = {}

nullDict["name"] = "ujjwal"

# Nested dictionary 
Studnet = {
    "name": "ujjwal singh",
    "subjects": {
        "phy":88,
        "chem":65,
        "math":70
    }
}
print(Studnet["subjects"]["phy"])

# Dictionary methods

dict.keys() #return all keys
dict.values() #return all values
dict.items() #returns all (key,val) pairs as tuples
dict.get("key") #returns the key according to value
dict.update(newDict) #Inserts the specified items to the dictionaries

#Set -------

#Set is the collection of the unordered items. each element in the set must be unique and immutable.
#Note :- sets -> mutable,set -> element -> immutable

collection = {1,2,3,4,5,"hello","world","world",4,4,4,5}
print(collection)
print(len(collection))

marks = set() #empty set; syntax

print(marks)
print(type(marks))

#set methods
set.add() #adds an element

collection = set(10)
collection = set(2)
collection = set(2)
collection = set("hely")

set.remove() #removes the elem an
collection.remove(2)

set.clear() #empties the set
collection.clear() #all elements clear

set.pop() #removes a random value
print(collection.pop())

set.union #combines both set values and returns new
set1 = {1,2,3}
set2 = {3,4,5}
print(set1.union(set2)) #{1,2,3,4,5}

set.intersection #combines common values and returns new
print(set1.intersection(set2)) #{3}

