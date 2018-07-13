

export interface BancoDeSangue{
    // como fazer com que esse banco de sangue seja instanciado apenas uma vez?

    // quantidade de sangue no estoque dividido por tipo

    tipoOPositivo:number;
    tipoONegativo:number;
    
	tipoAPositivo:number;
    tipoANegativo:number;

	tipoBPositivo:number;
    tipoBNegativo:number;
      
	tipoABPositivo:number;
	tipoABNegativo:number;

    id?:String;
} 
