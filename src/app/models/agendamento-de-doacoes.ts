
export class AgendamentoDoacao {
	idDoador: String;
	id?: String;

	data: String;
	cpfDoador: String;


	validarAgendamentoDoacao() {
		if (this.id == "" || this.id == "" || this.data == "" || this.cpfDoador == "") {
			return false
		}
		return true
	}
} 
