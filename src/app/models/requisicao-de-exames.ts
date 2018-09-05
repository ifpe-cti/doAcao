import { Usuario } from "./usuario";
import { Observable } from "../../../node_modules/rxjs";

export interface RequisicaoDeExames{

    nomeDoador: String;
    numeroDeDocumentoDoador: String;
    tipoDeDocumentoDoador: String;
    orgaoExpeditorDoador: String;
    nomePaiDoador: String;
    nomeMaeDoador: String;
    tecnicoResponsavel: String;
    etiquetaDaAmostra: String;

	id?:String;

} 
