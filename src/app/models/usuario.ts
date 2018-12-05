export class Usuario{

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

	validar() {
		
		if( this.nome == ""){
			return false;
		}

		return true;
	}

} 
