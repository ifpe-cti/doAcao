
export class AgendamentoDoacao {
	idDoador: String;
	id?: String;

	data: String;
	cpfDoador: String;


	validarAgendamentoDoacao() {
		if (this.idDoador == ""  || this.data == "" || this.cpfDoador == "") {
			return false
		}
		return true
	}

	toDocument() {
		return {
			idDoador: this.idDoador,
			data: this.data,
			cpfDoador: this.cpfDoador
		}
	}
} 
