import { FichaMedica } from './ficha-medica';

export interface Usuario{

	nome:String;
	user:String;
	dataNascimento:String;
	senha:String;
	tipoSanguineo: String;
	tipoUsuario: String;
	cpf: String;

	numeroDocumento: String;
	tipoDocumento: String;
	orgaoExpeditorDocumento: String;

	id?: String;

	} 
