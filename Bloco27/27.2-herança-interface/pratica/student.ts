import Person from "./Person";

export default class Students extends Person {
  private _enrollment: string = String();
  private _examsGrades: number[] = [];
  private _workGrandes: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
  }
  generateEnrollment(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `STU${randomStr}`;
  }

  get enrollment(): string { return this._enrollment;}

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error("menor que 16");
    }
    this._enrollment = value;
  }

  get examsGrades(): number[] { return this._examsGrades; }
  
  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('no maximo 4');
    }
    this._examsGrades = value;
  }
  
  get workGrades(): number[] { return this._workGrandes; }

  set workGrades(value: number[]) {
    if (value.length > 2) { 
      throw new Error('no maximo 2');
    }
  }
  public sumGrades(): number { 
    const grades = this.examsGrades.reduce((acc, curr) => acc + curr, 0);
    return grades;
  }

  public sumAverageGrade(): number { 
    const grades = this.examsGrades.reduce((acc, curr) => acc + curr, 0);
    return grades/this.examsGrades.length;
  }

}