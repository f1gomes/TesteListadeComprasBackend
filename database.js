//yarn add pg 

 const Pool = require ('pg').Pool;

 // 1 abre conexao
 // 2 executa comandos SQl (select,insert...)
 // 3 fechar a conexao 
 // devendo ser executado o mais rapido possivel
 const pool = new Pool({
     user:'wdvzfmoocqpssi',
     password:'10127335970bcfbd32860728ba9550af44baaff9012e78881c9352b7cc1433b8',
     host:'ec2-34-198-243-120.compute-1.amazonaws.com',
     databse:'d8ondrq49hsccb',
     port:'5432',
     ssl:{ rejectUnauthorized:false}
 });

 pool.query('sql',[], function(error, result){});