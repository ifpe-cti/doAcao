export class Usuario {

	nome: String;
	user: String;
	dataNascimento: Date;
	senha: String;
	tipoSanguineo: String;
	tipoUsuario: String;
	cpf: String;
	nomePai: String;
	nomeMae: String;

	numeroDocumento: String;
	tipoDocumento: String;
	orgaoExpeditorDocumento: String;

	id?: string;


	// se algum dos campos estiver vazio, a função retornará false 
	validar() {
		if (this.nome == "" || this.user == "" || this.dataNascimento == null || this.senha == "" ||
			this.tipoSanguineo == "" || this.tipoUsuario == "" || this.cpf == "" || this.nomePai == "" || this.nomeMae == "" ||
			this.numeroDocumento == "" || this.tipoDocumento == "" || this.orgaoExpeditorDocumento == "") {
			return false;
		}
		return true;
	}

} 
