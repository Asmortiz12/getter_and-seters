"use strict";
class Student {
    constructor(name, semester, course, calificaciones) {
        this._name = name;
        this._semester = semester;
        this._course = course;
        this._calificaciones = calificaciones;
    }
    get name() {
        return this._name;
    }
    get semester() {
        return this._semester;
    }
    set semester(semester) {
        if (semester < 1 || semester > 8) {
            throw new Error('Sorry, this course is valid for students from 1st to 8th semester');
        }
        this._semester = semester;
    }
    get course() {
        return this._course;
    }
    set course(course) {
        this._course = course;
    }
    get calificaciones() {
        return this._calificaciones;
    }
    set calificaciones(calificaciones) {
        this._calificaciones = calificaciones;
    }
}
const student = new Student("Alexander Ortiz", 4, "Base de datos", [90, 85, 95]);
document.write(`<p>Nombre del estudiante: ${student.name}</p>`);
document.write(`<p>Semestre: ${student.semester}</p>`);
document.write(`<p>Curso: ${student.course}</p>`);
document.write(`<p>Calificaciones: ${student.calificaciones.join(", ")}</p>`);
