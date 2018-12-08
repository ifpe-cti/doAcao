
export class Tecnico {

	nome: String;
	cpf: String;
	id?: String;


	validarTecnico() {
		if (this.nome == "" || this.cpf == "") {
			return false
		}
		return true
	}

	toDocument() {
		return {
			nome: this.nome,
			cpf: this.cpf,
			id: this.id
		}
	}
}

