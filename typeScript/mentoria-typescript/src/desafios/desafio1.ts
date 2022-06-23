// Como podemos rodar isso em um arquivo .ts sem causar erros? 

interface funcionario{
    code:number, 
    name:string
}


let employee: funcionario = {
    code : 10,
    name : "John"
};
employee.code = 10;
employee.name = "John";