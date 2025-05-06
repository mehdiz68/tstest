let firstName: string = "Dylan";
let gender:any=true;
console.log("firstname :"+firstName+" & gender="+(gender===true?"man":"woman"));
gender=1;

const names: string[]=[];
names.push("mehdi");

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
  car.type="bemz";

  const car2: { type: string, mileage?: number } = {type: "Toyota"};
car2.mileage = 2000;

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25;
nameAgeMap.Mark = 24;
nameAgeMap.mehdi=22;