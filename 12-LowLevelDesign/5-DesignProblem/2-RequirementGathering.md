Is the Parking Lot have multiple Floors? Yes
Is the vehicles segrated? Yes
Supported Vehicles? 2W, 3W, 4W
Can the spots be interchanged? No, 
Payments: deductAmount(InTime, OutTime): Int
    * based on in and out
    * Non one picked the vehicle
    * Limit on Charges: No
    * When should we charge
    * Mode of payments: 
        Cash: Don't support it
    * Loss of Ticket: Not support
Valet Parking: No 
Slot Availability: Show
Multiple Entry / Exit points: No
Who handles: Fully autonomous
Waiting Queue: Don't
There should be a marking which designates a parking spot ==> Yes
Should we block partial spots = No 
Alerting System => No
    * Some mishap happens
    * Improper parking 
Ticketing System: Yes,  Can't directly park the car without a ticket
Spot Assignment: You call
fallback: no
Entry/Exit Validation: You answer
Live Update Of the Parking Lot: Yes
* How many empty spots are available
Support sensors: No
In Memory: We go with in memory
Gender specific parking: No
Advance Booking System: No
Total Counts: Dynamic
User: No Need
Floors could be put under maintainence


-------------------------------------------------------------------------------------
Entities:
-------------------------------------------------------------------------------------
ParkingLot
Vehicle
    * Car
    * Bus
    * Truck
    * Bike
* AllowedVehicles
ParkingSpot
    * Small
    * Medium
    * Large
    * ExtraLarge
ParkingFloor
EntryGate
ExitGate
Ticket
Payment
DisplayPanel