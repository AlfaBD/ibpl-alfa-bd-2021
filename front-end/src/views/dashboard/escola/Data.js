/* ALFA-BD
  Created: 12-05-2021
  Author: Aline Rodrigues
  Mock dos dados para a construção do Dashboard
*/

const classes = [
    {id: 1, name: '1º Série A'},
    {id: 2, name: '2º Série A'},
    {id: 3, name: '3º Série A'},
]

const tasks = [
    {id: 1, title: 'O Cortiço', author:'Aluísio Azevedo', text: 'João Romão foi, dos treze aos vinte e cinco anos, empregado de um vendeiro que enriqueceu entre as quatro paredes de uma suja e obscura taverna nos refolhos do bairro do Botafogo'},
    {id: 2, title: 'Iracema', author:'José de Alencar', text: 'Além, muito além daquela serra, que ainda azula no horizonte, nasceu Iracema.'},
    {id: 3, title: 'Patinho Feio', author: '?', text: 'Mamãe pata chocou seus ovos durante muitos dias. Nasceram lindos patinhos, mas o último filhotinho não era bonito.'},
    {id: 4, title: 'A Cigarra e as Formigas', author: '?', text: 'Certa vez, uma cigarra cantava alegre em cima de um muro de cimento enquanto lá embaixo, as formiguinhas trabalhavam.'},
    {id: 5, title: 'Chapeuzinho Vermelho', author: '?', text: 'Era uma vez uma menina muito graciosa chamada Chapeuzinho Vermelho. Um dia sua mãe chamou Chapeuzinho Vermelho e pediu que fosse até a casa da vovozinha levar guloseimas.'},
    {id: 6, title: 'A Dança dos Ossos', author: 'Bernardo Guimarães', text: 'Antes de entrar na mata, a tempestade tinha-me surpreendido nas vastas e risonhas campinas, que se estendem até a pequena cidade de Catalão, donde eu havia partido.'},
    {id: 7, title: 'A Normalista', author: 'Adolfo Caminha', text: 'João Maciel da Mata Gadelha, conhecido em Fortaleza por João da Mata, habitava, há anos, no Trilho, uma casinhola de porta e janela, cor de açafrão, com a frente encardida pela fuligem das locomotivas que diariamente cruzavam defronte, e de onde se avistava a Estação da linha férrea de Baturité'},
    {id: 8, title: 'Miss Dollar', author: 'Machado de Assis', text: 'Se o leitor é rapaz e dado ao gênio melancólico, imagina que Miss Dollar é uma inglesa pálida e delgada, escassa de carnes e de sangue, abrindo à flor do rosto dois grandes olhos azuis e sacudindo ao vento umas longas tranças loiras.'},
    {id: 9, title: 'A Dama e o Vagabundo', author: 'Conto de Ward Greene', text: 'Que natal feliz! Uma jovem recém-casada recebeu de presente uma pequena cadelinha que chamou de Lady. E desde então é um festival de carinhos que não tem fim!'},
    {id: 10, title: 'Alice no Pais das Maravilhas', author: 'Lewis Carroll', text: 'Era uma vez uma menina chamada Alice. Numa tarde de verão, ela estava sob a sombra de uma árvore, ao lado de sua irmã mais velha, que lia um livro sem nenhuma figura. Achando aquilo muito chato, Alice foi ficando cada vez mais sonolenta quando, de repente, apareceu um coelho apressado com um enorme relógio exclamando'},
]


const evaluations = [
    {datetime: '2021-05-01 00:00:00', birth_student: '2012-05-01', teacher: 1, student: 1, class: 1, task: 1, result: 0.6},
    {datetime: '2021-05-01 00:00:00', birth_student: '2011-06-01', teacher: 1, student: 2, class: 1, task: 2, result: 0.5},
    {datetime: '2021-05-01 00:00:00', birth_student: '2013-07-01', teacher: 1, student: 3, class: 1, task: 3, result: 0.4},
    {datetime: '2021-05-01 00:00:00', birth_student: '2014-08-01', teacher: 1, student: 4, class: 1, task: 4, result: 0.7},
    {datetime: '2021-05-01 00:00:00', birth_student: '2012-09-01', teacher: 1, student: 5, class: 1, task: 5, result: 0.3},
    {datetime: '2021-05-01 00:00:00', birth_student: '2011-04-01', teacher: 1, student: 6, class: 1, task: 6, result: 0.8},
    {datetime: '2021-05-01 00:00:00', birth_student: '2013-02-01', teacher: 1, student: 7, class: 1, task: 7, result: 0.9},
    {datetime: '2021-05-01 00:00:00', birth_student: '2014-01-01', teacher: 1, student: 8, class: 1, task: 8, result: 0.3},
    {datetime: '2021-05-01 00:00:00', birth_student: '2012-11-01', teacher: 1, student: 9, class: 1, task: 9, result: 0.6},
    {datetime: '2021-05-01 00:00:00', birth_student: '2011-10-01', teacher: 1, student: 10, class: 1, task: 10, result: 0.5},

    {datetime: '2021-04-01 00:00:00', birth_student: '2012-05-01', teacher: 1, student: 1, class: 1, task: 1, result: 0.7},
    {datetime: '2021-04-01 00:00:00', birth_student: '2011-06-01', teacher: 1, student: 2, class: 1, task: 2, result: 0.6},
    {datetime: '2021-04-01 00:00:00', birth_student: '2013-07-01', teacher: 1, student: 3, class: 1, task: 3, result: 0.5},
    {datetime: '2021-04-01 00:00:00', birth_student: '2014-08-01', teacher: 1, student: 4, class: 1, task: 4, result: 0.8},
    {datetime: '2021-04-01 00:00:00', birth_student: '2012-09-01', teacher: 1, student: 5, class: 1, task: 5, result: 0.5},
    {datetime: '2021-04-01 00:00:00', birth_student: '2011-04-01', teacher: 1, student: 6, class: 1, task: 6, result: 0.7},
    {datetime: '2021-04-01 00:00:00', birth_student: '2013-02-01', teacher: 1, student: 7, class: 1, task: 7, result: 0.8},
    {datetime: '2021-04-01 00:00:00', birth_student: '2014-01-01', teacher: 1, student: 8, class: 1, task: 8, result: 0.5},
    {datetime: '2021-04-01 00:00:00', birth_student: '2012-11-01', teacher: 1, student: 9, class: 1, task: 9, result: 0.7},
    {datetime: '2021-04-01 00:00:00', birth_student: '2011-10-01', teacher: 1, student: 10, class: 1, task: 10, result: 0.6},

    {datetime: '2021-03-01 00:00:00', birth_student: '2012-05-01', teacher: 1, student: 1, class: 1, task: 1, result: 0.8},
    {datetime: '2021-03-01 00:00:00', birth_student: '2011-06-01', teacher: 1, student: 2, class: 1, task: 2, result: 0.7},
    {datetime: '2021-03-01 00:00:00', birth_student: '2013-07-01', teacher: 1, student: 3, class: 1, task: 3, result: 0.8},
    {datetime: '2021-03-01 00:00:00', birth_student: '2014-08-01', teacher: 1, student: 4, class: 1, task: 4, result: 0.8},
    {datetime: '2021-03-01 00:00:00', birth_student: '2012-09-01', teacher: 1, student: 5, class: 1, task: 5, result: 0.6},
    {datetime: '2021-03-01 00:00:00', birth_student: '2011-04-01', teacher: 1, student: 6, class: 1, task: 6, result: 0.8},
    {datetime: '2021-03-01 00:00:00', birth_student: '2013-02-01', teacher: 1, student: 7, class: 1, task: 7, result: 0.9},
    {datetime: '2021-03-01 00:00:00', birth_student: '2014-01-01', teacher: 1, student: 8, class: 1, task: 8, result: 0.5},
    {datetime: '2021-03-01 00:00:00', birth_student: '2012-11-01', teacher: 1, student: 9, class: 1, task: 9, result: 0.7},
    {datetime: '2021-03-01 00:00:00', birth_student: '2011-10-01', teacher: 1, student: 10, class: 1, task: 10, result: 0.8},


    {datetime: '2021-05-01 00:00:00', birth_student: '2012-05-01', teacher: 2, student: 11, class: 2, task: 1, result: 0.4},
    {datetime: '2021-05-01 00:00:00', birth_student: '2011-06-01', teacher: 2, student: 12, class: 2, task: 2, result: 0.2},
    {datetime: '2021-05-01 00:00:00', birth_student: '2013-07-01', teacher: 2, student: 13, class: 2, task: 3, result: 0.5},
    {datetime: '2021-05-01 00:00:00', birth_student: '2014-08-01', teacher: 2, student: 14, class: 2, task: 4, result: 0.6},
    {datetime: '2021-05-01 00:00:00', birth_student: '2012-09-01', teacher: 2, student: 15, class: 2, task: 5, result: 0.6},
    {datetime: '2021-05-01 00:00:00', birth_student: '2011-04-01', teacher: 2, student: 16, class: 2, task: 6, result: 0.2},
    {datetime: '2021-05-01 00:00:00', birth_student: '2013-02-01', teacher: 2, student: 17, class: 2, task: 7, result: 0.7},
    {datetime: '2021-05-01 00:00:00', birth_student: '2014-01-01', teacher: 2, student: 18, class: 2, task: 8, result: 0.8},
    {datetime: '2021-05-01 00:00:00', birth_student: '2012-11-01', teacher: 2, student: 19, class: 2, task: 9, result: 0.4},
    {datetime: '2021-05-01 00:00:00', birth_student: '2011-10-01', teacher: 2, student: 20, class: 2, task: 10, result: 0.2},
    
    {datetime: '2021-04-01 00:00:00', birth_student: '2012-05-01', teacher: 2, student: 11, class: 2, task: 1, result: 0.5},
    {datetime: '2021-04-01 00:00:00', birth_student: '2011-06-01', teacher: 2, student: 12, class: 2, task: 2, result: 0.5},
    {datetime: '2021-04-01 00:00:00', birth_student: '2013-07-01', teacher: 2, student: 13, class: 2, task: 3, result: 0.7},
    {datetime: '2021-04-01 00:00:00', birth_student: '2014-08-01', teacher: 2, student: 14, class: 2, task: 4, result: 0.7},
    {datetime: '2021-04-01 00:00:00', birth_student: '2012-09-01', teacher: 2, student: 15, class: 2, task: 5, result: 0.8},
    {datetime: '2021-04-01 00:00:00', birth_student: '2011-04-01', teacher: 2, student: 16, class: 2, task: 6, result: 0.5},
    {datetime: '2021-04-01 00:00:00', birth_student: '2013-02-01', teacher: 2, student: 17, class: 2, task: 7, result: 0.9},
    {datetime: '2021-04-01 00:00:00', birth_student: '2014-01-01', teacher: 2, student: 18, class: 2, task: 8, result: 0.8},
    {datetime: '2021-04-01 00:00:00', birth_student: '2012-11-01', teacher: 2, student: 19, class: 2, task: 9, result: 0.6},
    {datetime: '2021-04-01 00:00:00', birth_student: '2011-10-01', teacher: 2, student: 20, class: 2, task: 10, result: 0.5},
    
    {datetime: '2021-03-01 00:00:00', birth_student: '2012-05-01', teacher: 2, student: 11, class: 2, task: 1, result: 0.7},
    {datetime: '2021-03-01 00:00:00', birth_student: '2011-06-01', teacher: 2, student: 12, class: 2, task: 2, result: 0.7},
    {datetime: '2021-03-01 00:00:00', birth_student: '2013-07-01', teacher: 2, student: 13, class: 2, task: 3, result: 0.8},
    {datetime: '2021-03-01 00:00:00', birth_student: '2014-08-01', teacher: 2, student: 14, class: 2, task: 4, result: 0.9},
    {datetime: '2021-03-01 00:00:00', birth_student: '2012-09-01', teacher: 2, student: 15, class: 2, task: 5, result: 0.7},
    {datetime: '2021-03-01 00:00:00', birth_student: '2011-04-01', teacher: 2, student: 16, class: 2, task: 6, result: 0.6},
    {datetime: '2021-03-01 00:00:00', birth_student: '2013-02-01', teacher: 2, student: 17, class: 2, task: 7, result: 0.7},
    {datetime: '2021-03-01 00:00:00', birth_student: '2014-01-01', teacher: 2, student: 18, class: 2, task: 8, result: 0.8},
    {datetime: '2021-03-01 00:00:00', birth_student: '2012-11-01', teacher: 2, student: 19, class: 2, task: 9, result: 0.6},
    {datetime: '2021-03-01 00:00:00', birth_student: '2011-10-01', teacher: 2, student: 20, class: 2, task: 10, result: 0.8},


    {datetime: '2021-05-01 00:00:00', birth_student: '2012-05-01', teacher: 3, student: 21, class: 3, task: 1, result: 0.5},
    {datetime: '2021-05-01 00:00:00', birth_student: '2011-06-01', teacher: 3, student: 22, class: 3, task: 2, result: 0.5},
    {datetime: '2021-05-01 00:00:00', birth_student: '2013-07-01', teacher: 3, student: 23, class: 3, task: 3, result: 0.6},
    {datetime: '2021-05-01 00:00:00', birth_student: '2014-08-01', teacher: 3, student: 24, class: 3, task: 4, result: 0.7},
    {datetime: '2021-05-01 00:00:00', birth_student: '2012-09-01', teacher: 3, student: 25, class: 3, task: 5, result: 0.4},
    {datetime: '2021-05-01 00:00:00', birth_student: '2011-04-01', teacher: 3, student: 26, class: 3, task: 6, result: 0.8},
    {datetime: '2021-05-01 00:00:00', birth_student: '2013-02-01', teacher: 3, student: 27, class: 3, task: 7, result: 0.9},
    {datetime: '2021-05-01 00:00:00', birth_student: '2014-01-01', teacher: 3, student: 28, class: 3, task: 8, result: 0.9},
    {datetime: '2021-05-01 00:00:00', birth_student: '2012-11-01', teacher: 3, student: 29, class: 3, task: 9, result: 0.3},
    {datetime: '2021-05-01 00:00:00', birth_student: '2011-10-01', teacher: 3, student: 30, class: 3, task: 10, result: 0.5},

    {datetime: '2021-04-01 00:00:00', birth_student: '2012-05-01', teacher: 3, student: 21, class: 3, task: 1, result: 0.6},
    {datetime: '2021-04-01 00:00:00', birth_student: '2011-06-01', teacher: 3, student: 22, class: 3, task: 2, result: 0.6},
    {datetime: '2021-04-01 00:00:00', birth_student: '2013-07-01', teacher: 3, student: 23, class: 3, task: 3, result: 0.7},
    {datetime: '2021-04-01 00:00:00', birth_student: '2014-08-01', teacher: 3, student: 24, class: 3, task: 4, result: 0.8},
    {datetime: '2021-04-01 00:00:00', birth_student: '2012-09-01', teacher: 3, student: 25, class: 3, task: 5, result: 0.7},
    {datetime: '2021-04-01 00:00:00', birth_student: '2011-04-01', teacher: 3, student: 26, class: 3, task: 6, result: 0.9},
    {datetime: '2021-04-01 00:00:00', birth_student: '2013-02-01', teacher: 3, student: 27, class: 3, task: 7, result: 0.9},
    {datetime: '2021-04-01 00:00:00', birth_student: '2014-01-01', teacher: 3, student: 28, class: 3, task: 8, result: 0.9},
    {datetime: '2021-04-01 00:00:00', birth_student: '2012-11-01', teacher: 3, student: 29, class: 3, task: 9, result: 0.5},
    {datetime: '2021-04-01 00:00:00', birth_student: '2011-10-01', teacher: 3, student: 30, class: 3, task: 10, result: 0.7},

    {datetime: '2021-03-01 00:00:00', birth_student: '2012-05-01', teacher: 3, student: 21, class: 3, task: 1, result: 0.8},
    {datetime: '2021-03-01 00:00:00', birth_student: '2011-06-01', teacher: 3, student: 22, class: 3, task: 2, result: 0.7},
    {datetime: '2021-03-01 00:00:00', birth_student: '2013-07-01', teacher: 3, student: 23, class: 3, task: 3, result: 0.8},
    {datetime: '2021-03-01 00:00:00', birth_student: '2014-08-01', teacher: 3, student: 24, class: 3, task: 4, result: 0.8},
    {datetime: '2021-03-01 00:00:00', birth_student: '2012-09-01', teacher: 3, student: 25, class: 3, task: 5, result: 0.9},
    {datetime: '2021-03-01 00:00:00', birth_student: '2011-04-01', teacher: 3, student: 26, class: 3, task: 6, result: 0.8},
    {datetime: '2021-03-01 00:00:00', birth_student: '2013-02-01', teacher: 3, student: 27, class: 3, task: 7, result: 0.9},
    {datetime: '2021-03-01 00:00:00', birth_student: '2014-01-01', teacher: 3, student: 28, class: 3, task: 8, result: 0.9},
    {datetime: '2021-03-01 00:00:00', birth_student: '2012-11-01', teacher: 3, student: 29, class: 3, task: 9, result: 0.7},
    {datetime: '2021-03-01 00:00:00', birth_student: '2011-10-01', teacher: 3, student: 30, class: 3, task: 10, result: 0.8},
]
  
export  { classes, tasks, evaluations }