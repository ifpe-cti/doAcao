import { FichaMedica } from './ficha-medica';

export interface Usuario{

	nome:String;
	user:String;
	dataNascimento: String;
	senha:String;
	tipoSanguineo: String;
	tipoUsuario: String;
	cpf: String;
	nomePai: String;
	nomeMae: String;

	numeroDocumento: String;
	tipoDocumento: String;
	orgaoExpeditorDocumento: String;

	id?: string;

	} 
