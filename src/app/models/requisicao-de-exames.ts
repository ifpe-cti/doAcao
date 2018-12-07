import { Usuario } from "./usuario";
import { Observable } from "rxjs";

export class RequisicaoDeExames {

    idDoador: String;
    id?: String;

    numeroDocumentoDoador: String;
    tipoDocumentoDoador: String;
    orgaoExpeditorDoador: String;
    nomePaiDoador: String;
    nomeMaeDoador: String;

    tecnicoResponsavel: String;
    etiquetaDaAmostra: String;

    validacaoRequisicaoExame() {
        if (this.idDoador == "" || this.id == "" || this.numeroDocumentoDoador == "" || this.tipoDocumentoDoador == ""
            || this.orgaoExpeditorDoador == "" || this.nomeMaeDoador == "" || this.nomePaiDoador == "" || this.tecnicoResponsavel == ""
            || this.etiquetaDaAmostra == "") {
            return false
        }
        return true
    }

} 
