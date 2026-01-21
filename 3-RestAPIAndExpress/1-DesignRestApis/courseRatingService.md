- Get a list of all availalbe courses
- Get details of a single course
- Create a course with provided details
- Modify a course with some information

<!-- http://host:port/context/v1/resource/param -->
<!-- context: course-rating-service -->

### Get a list of all availalbe courses
1. GET /v1/courses (OK)
2. GET /courses/v1/all (X)
3. GET /v1/courses/getCourse (X)
4. GET /v1/courselist (X)
5. GET /v1/getall-course (X)
6. GET /v1/courses/get (X)


### Get details of a single course
1. GET /v1/courses/{id}  :courseId
2. GET /v1/courses/1 (X)


### Create a course with provided details
1. POST /v1/courses
    * Body: Should contain the details of the course

### Modify a course with some information
1. PUT /v1/courses/{id} + Body
2. PATCH /v1/courses/{id} + Body

PUT  --> Replace the resource
     --> change each and every value of the resource
     --> id 1 was for jay
     --> id 1 was prathmesh
PATCH --> Modify the resource
    --> id 1 is for jay
    --> want to modify the city from Bangalore to Noida

### Gel all students associated with a course
1. GET /v1/courses/{:courseId}/students
2. GET /v1/courses/students (X)
3. GET /v1/courses/{id}?students=all (X)
4. GET /v1/students?courses={:courseId}

### Gets the average ratings of all the students for a course

GET /v1/courses/{:courseId}/ratings?type=avg




Amazon: 
--> Books
    --> Authors

Quora
--> Authors
    --> Books 

Zomato: 
--> Menus
--> Orders

? ==> Query Parameter
key=value 
keys are optional
limit=100
Offset = 10