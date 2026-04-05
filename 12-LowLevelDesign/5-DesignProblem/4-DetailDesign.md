# Detail Design
* Identifying Attributes of each of the classes
* Identifying Behaviours of each of the classes
* Identifying the relationship between classes

* Top to Bottom / Bottom to top approach 
* Think from a flow perspective

# Bottom to top approach


<!-- Can model it via Abstract Class or by using ENUM. It depends on what attributes and behaviours we need in the child classes for this design -->
### Vehicle
+ RegistrationNumber
+ Type: ENUM ["Car", "Bus", "Truck", "Bike"]
---------------
No Behaviours

How do we model types of vehicle
* Inheritence route
* Enum route
<!-- These attributes are not needed in the Parking Lot -->
+ NoOfTyre
+ Color
+ Make
+ Model

### ParkingSpot
+ id: Number 
+ Type: ENUM["S", "M", "L", "XL"]
- vehicle: Vehicle 
- isUnderMaintaince: Boolean
---------------------------------
+ isAvialable(): Boleaan
+ putUnderMaintainence(): Boolean
+ getMaintainenceStatus(): Boolean


<!-- Relationship -->
ParkingSpot Has-A Weak relationship with Vehicle


### ParkingFloor
+ id: Number
+ spots: ParkingSpot[]  
------------------------------
+ putUnderMaintainence(): Boolean
+ getMaintainenceStatus(): Boolean


<!-- Relationship -->
ParkingFloor Has-A Strong relationship with ParkingSpot
