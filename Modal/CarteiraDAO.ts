import {cadastro} from './Carteira.ts';
 import {GenericDAO} from './GenericDAO';
 
 export default class AlunoDAO extends GenericDAO<carteira,string>{
   protected getCreateSQL(): string {
     return ' CREATE TABLE carteira (MATRICULA VARCHAR(10) '+
            ' PRIMARY KEY,NOME VARCHAR(20),REGISTRO INTEGER)';
   }
   protected getTableName(): string { return 'cadastro'; }
   protected getInsertSQL(): string {
     return 'INSERT INTO cadastro VALUES ( ?, ?, ? )';
   }
   protected getInsertParams(entidade: cadastro): any[] {
     let criacao = new Date();
     return
        [entidade.matricula,entidade.nome,criacao.getTime()];
   }
   protected getUpdateSQL(): string {
     return 'UPDATE carteira SET NOME = ? WHERE MATRICULA = ?';
   }
   protected getUpdateParams(entidade: carteira): any[] {
     return [entidade.nome, entidade.matricula];
   }
   protected getDeleteSQL(): string {
     return 'DELETE FROM carteira WHERE MATRICULA = ?';
   }
   protected getSelectAllSQL(): string {
     return 'SELECT * FROM carteira';
   }
   protected getSelectOneSQL(): string {
     return 'SELECT * FROM carteira WHERE MATRICULA = ?';
   }
   protected getEntidade(linha: any): carteira {
     let criacao = new Date(linha.REGISTRO); 
     return new carteira(linha.MATRICULA, linha.NOME, criacao);
   }
 }