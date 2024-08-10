#what would you like to have?
menu = {
    'Pizza': 250,
    'Coffee': 80,
    'Sandwiches': 100,
    'Soups and salads': 60,
    'muffins': 40,
    'Burger': 150,
}
#welcome
print("Namaste!")
print("Pizza : Rs 250\nCoffee: Rs 80\nSandwiches: Rs 100\nSoups and salads: Rs 60\nmuffins: Rs 40\nBurger: Rs 150")

order = 0
item_1 = input("Enter the name of items =")
if item_1 in menu:
    order += menu[item_1]
    print(f"Your items {item_1} has been added to your order")
else:
   print(f"Sorry! {item_1} is not availble")

another_order = input("Do you want to add another items? YES/NO")
if another_order == "YES":
    item_2 = input("Enter second item")
    if item_2 in menu:
        order += menu[item_2]
        print(f"Item {item_2} has been added to order")
    else:
        print(f"Order item {item_2} is not availble")
print(f"The total amount of items to pay is {order} Thankyou! ")