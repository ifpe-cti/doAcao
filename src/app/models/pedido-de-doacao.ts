
export class PedidoDeDoacao{

    nomeUsuario: String;
    cpfUsuario: String;
    tipoSanguineo: String;
    id?: String;
   
   validarPedidoDeDoacao(){
       if(this.nomeUsuario == "" || this.cpfUsuario == "" || this.tipoSanguineo == ""){
           return false
       }
       return true
   }

   toDocument(){
       return{
           nomeUsuario: this.nomeUsuario,
           cpfUsuario: this.cpfUsuario,
           tipoSanguineo: this.tipoSanguineo, 


       }
   }
} 
