import { Usuario } from "./usuario";

export class SolicitacaoSanguinea{

    nomeUsuario: String;
    cpfUsuario: String;
    tipoSanguineo: String;
    id?: String;
   
   validarSolicitacaoSanguinea(){
       if(this.nomeUsuario == "" || this.cpfUsuario == "" || this.tipoSanguineo == "" || this.id == ""){
           return false
       }
       return true
   }

   toDocument(){
       return{
           nomeUsuario: this.nomeUsuario,
           cpfUsuario: this.cpfUsuario,
           tipoSanguineo: this.tipoSanguineo, 
           id: this.id

       }
   }
} 
