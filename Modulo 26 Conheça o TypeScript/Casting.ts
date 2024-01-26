// Conversão de tipos de dados
namespace casting {
    let idade : any = 25;
    // converteu a idade para numérico
    (idade as number).toFixed;
    (idade as string).length;
    (idade as string[]).forEach(x => {
        console.log(x)
    });

    // conversão de tipo de dado para "descohecido" para depois converter para o tipo desejado, utilizado quando não sabemos o valor que vira, no caso de uma respos de API
    let nome : string = 35 as unknown as string;
    let numero: number = 10;
    numero.toString
}