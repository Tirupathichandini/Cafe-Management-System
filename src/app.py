print("welcome to  chandini's cafe")
print("Here is the menu")
menu={"pizza":300,
      "Burger":150,
      "pasta":120,
      "doughnut":100,
      "sandwich":200,
      "tea":40,
      "coffee":50}
bill=0
bill_details={}
for keys in menu:
    print(keys,"-",menu[keys])
while True:
    order=input("Enter what you want to order and enter done to exit:")
    if order=="done":
        break
    elif order in menu:
        quantity=int(input("enter quatity of the item:"))
        bill=bill+(menu[order]*quantity)
        bill_details[order]=quantity
    else:
        print("item not available yet")
for item in bill_details:
    item_cost=bill_details[item]*menu[item]
    print("********************************************************")
    print(f"{item}\t {bill_details[item]}\t {item_cost}")
print("your bill is:",bill)
bill+=((18/100)*bill)
print("your bill with gst:",bill)
