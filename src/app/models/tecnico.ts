
export class Tecnico {

	nome: String;
	cpf: String;
	id?: String;


	validarTecnico() {
		if (this.nome == "" || this.cpf == "" || this.id == "") {
			return false
		}
		return true
	}
}

