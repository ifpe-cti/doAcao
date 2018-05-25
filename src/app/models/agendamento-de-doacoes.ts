
export interface AgendamentoDoacao{

	nomeDoador:String;
	//fazer função que busque e retorne no banco de dados o usuário correspondente à esse nome
	dataAgendamento:Date;
	numeroDocumentoDoador:String;

	id?:String;

} 
