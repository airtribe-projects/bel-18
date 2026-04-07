# Detail Design
* Identifying Attributes of each of the classes
* Identifying Behaviours of each of the classes
* Identifying the relationship between classes

* Think from a flow perspective


* Top to Bottom / Bottom to top approach 

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
+ parkVehicle(vehicle): Boolean
+ unparkVehicle(vehicle): Boolean


<!-- Relationship -->
ParkingSpot Has-A Weak relationship with Vehicle

### ParkingFloor
+ id: Number
+ spots: ParkingSpot[]  
------------------------------
+ putUnderMaintainence(): Boolean
+ getMaintainenceStatus(): Boolean
+ getAvailableSpots(): Spot[] // Purpose: Display
+ getAvailableSpotForParking(type: SpotType): Spot // Purpose: Assigning spot
+ isFloorFull(): Boolean

<!-- Relationship -->
ParkingFloor Has-A Strong relationship with ParkingSpot


<!-- Facade Pattern -->

### ParkingLot
+ name: String
+ address: String
- parkingFloors: ParkingFloor[] 
- entryGate: EntryGate
- exitGate: ExitGate
- displayPanel: DisplayPanel[]
+ capacity: Number
---------------------------------
+ putUnderMaintainence(): Boolean
+ getMaintainenceStatus(): Boolean
+ getTotalAvailableSpots(): Spot[]
+ getNextSpot(): Spot //TODO: @Apurv 
- composeDisplayMessage(): Void
+ showDisplayMessage(): Void
+ getTicket(vehicle: Vehicle): Ticket
    - Calls getSpotToParkOn gets ParkingSpot
    - Calls generateParkingTicket gets the Ticket
+ unparkVehicle(ticket: Ticket): Boolean

<!-- Relationship -->
Has-A (Strong) with ParkingFloor
Has-A (Strong) with EntryGate
Has-A (Strong) with ExitGate
Has-A (Strong) with DisplayPanel
Uses-A relationship with ParkingTicket

### DisplayPanel
+ displayMessage(message: String)

### EntryGate
+ getSpotToParkOn(parkingFloors: ParkingFloor[], vehicleType: VehicleType): ParkingSpot
+ generateParkingTicket(vehicle: Vehicle, parkingSpot: ParkingSpot): ParkingTicket
- generateSpotTypeBasedOnVehicleType(vechicleType): SpotType

<!-- RelationShips -->
// Uses - A relationship with Ticket -->
// Uses - A relationship with Vehicle

### ExitGate
paymentProcessor: PaymentGateway
--------------------------------
checkout(ticket: Ticket): Ticket
    - CalculatePayableAmount
    - DeductPayment using PG
    - Stamp exittime on ticket
    - Give back the ticket to user 

<!-- RelationShips -->
Has - A weak with PaymentProcessor
Uses - A with Ticket

### Ticket
vehicle: Vehicle
spot: ParkingSpot
entryTime:
exitTime: 
amountPaid: Number
-------------------
calculateAmount(): number

// Lot of optional attributes that may impact the payment


