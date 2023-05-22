class Student {
    private _name: string;
    private _semester: number;
    private _course: string;
    private _calificaciones: number[];
  
    constructor(name: string, semester: number, course: string, calificaciones: number[]) {
      this._name = name;
      this._semester = semester;
      this._course = course;
      this._calificaciones = calificaciones;
    }
  
    public get name(): string {
      return this._name;
    }
  
    public get semester(): number {
      return this._semester;
    }
  
    public set semester(semester: number) {
      if (semester < 1 || semester > 8) {
        throw new Error('Sorry, this course is valid for students from 1st to 8th semester');
      }
      this._semester = semester;
    }
  
    public get course(): string {
      return this._course;
    }
  
    public set course(course: string) {
      this._course = course;
    }
  
    public get calificaciones(): number[] {
      return this._calificaciones;
    }
  
    public set calificaciones(calificaciones: number[]) {
      this._calificaciones = calificaciones;
    }
  }
  
  const student = new Student("Alexander Ortiz", 4, "Base de datos", [90, 85, 95]);
  

  document.write(`<p>Nombre del estudiante: ${student.name}</p>`);
document.write(`<p>Semestre: ${student.semester}</p>`);
document.write(`<p>Curso: ${student.course}</p>`);
document.write(`<p>Calificaciones: ${student.calificaciones.join(", ")}</p>`);