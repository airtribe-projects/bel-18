const coursesController = require('../../src/controllers/coursesController');
const coursesModel = require("../../src/models/coursesModel");

// Mock courses model
jest.mock("../../src/models/coursesModel");

describe("Test Courses Controller Functionalities", () => {
    it("Should return all courses", () => {
        const mockCourses = [{_id: 1, "course": "NodeJS" }, {_id: 2, "course": "Java" }];

        coursesModel.find.mockReturnValue(mockCourses);

        const result = coursesController.getAllCourse();

        expect(result).toBe(mockCourses);
        expect(coursesModel.find).toHaveBeenCalledTimes(1);
    })

    it("Should return a course by Id", () => {
        const mockCourse = {_id: 5, "course": "NodeJS" };

        coursesModel.findById = jest.fn().mockImplementation((id) => {
            return id === 5 ? mockCourse: null;
        });

        const result = coursesController.getACourse(5);

        expect(result).toBe(mockCourse);
        expect(coursesModel.findById).toHaveBeenCalledWith(5);
    })

    it("Should throw an error if a course is not found", () => {
        const mockCourse = {_id: 5, "course": "NodeJS" };

        coursesModel.findById = jest.fn().mockImplementation((id) => {
            throw new Error("Course is not found");
        })

        expect(() => coursesController.getACourse(5)).toThrow("Course is not found");
        // expect(coursesModel.findById).toHaveBeenCalledWith(5);
    })

})