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
	validarUsuario() {
		if (this.nome == "" || this.user == "" || this.dataNascimento == null || this.senha == "" ||
			this.tipoSanguineo == "" || this.tipoUsuario == "" || this.cpf == "" || this.nomePai == "" || this.nomeMae == "" ||
			this.numeroDocumento == "" || this.tipoDocumento == "" || this.orgaoExpeditorDocumento == "" || this.id == "") {
			return false;
		}
		return true;
	}

	toDocument() {
		return {
			nome: this.nome, user: this.user, dataNascimento: this.dataNascimento,
			senha: this.senha, tipoSanguineo: this.tipoSanguineo, tipoUsuario: "usuario",
			cpf: this.cpf, nomePai: this.nomePai, nomeMae: this.nomeMae, numeroDocumento: this.numeroDocumento,
			tipoDocumento: this.tipoDocumento, orgaoExpeditorDocumento: this.orgaoExpeditorDocumento, id: this.id
		}
	}

} 
