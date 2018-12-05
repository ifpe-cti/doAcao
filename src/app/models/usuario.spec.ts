import { Usuario } from "./usuario";

describe("Conjunto de testes do Usuário", ()=>{
    it("Deve retornar falso, pois é um usuário inválido", ()=>{
        let usuario:Usuario = new Usuario();
        
        expect(usuario.validar()).toBeFalsy();
    })
}

);