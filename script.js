// ===== Links da Shopee (Array com os 61 links fornecidos) =====
const shopeeLinks = [
  "https://s.shopee.com.br/7VBha7imA4", // 1
  "https://s.shopee.com.br/3LM8cfXO9J", // 2
  "https://s.shopee.com.br/15geez3UR",  // 3
  "https://s.shopee.com.br/9UwlyHKqlW", // 4
  "https://s.shopee.com.br/9UwlyODPtM", // 5
  "https://s.shopee.com.br/4qAwPzR5Ag", // 6
  "https://s.shopee.com.br/15gfGEhWl",  // 7
  "https://s.shopee.com.br/5AnmoqfcE6", // 8
  "https://s.shopee.com.br/7fV7nWPXbn", // 9
  "https://s.shopee.com.br/1VuUSEPjox", // 10
  "https://s.shopee.com.br/8V4EnJxplR", // 11
  "https://s.shopee.com.br/9UwlzBxggr", // 12
  "https://s.shopee.com.br/7AYrD184dF", // 13
  "https://s.shopee.com.br/AUpJBP6j4S", // 14
  "https://s.shopee.com.br/4LEfq7OS8x", // 15
  "https://s.shopee.com.br/70FR1EQa15", // 16
  "https://s.shopee.com.br/900VOyQDbj", // 17
  "https://s.shopee.com.br/6VJAQPqfFA", // 18
  "https://s.shopee.com.br/2qPs3jpbO1", // 19
  "https://s.shopee.com.br/9KdLnidakc", // 20
  "https://s.shopee.com.br/4qAwRUg2Lx", // 21
  "https://s.shopee.com.br/5L7D2T7zkN", // 22
  "https://s.shopee.com.br/9zt2b6JXYX", // 23
  "https://s.shopee.com.br/7AYrE3UcNZ", // 24
  "https://s.shopee.com.br/1gDug0fLa0", // 25
  "https://s.shopee.com.br/gLNUEd07l",  // 26
  "https://s.shopee.com.br/807yDphaj6", // 27
  "https://s.shopee.com.br/8KkocUeyNY", // 28
  "https://s.shopee.com.br/8V4GLWqjuF", // 29
  "https://s.shopee.com.br/qepDcO911",  // 30
  "https://s.shopee.com.br/8V4GLkOwr4", // 31
  "https://s.shopee.com.br/9UwlyDmrdt", // 32
  "https://s.shopee.com.br/30jJnq12OI", // 33
  "https://s.shopee.com.br/3B2k0DcWRP", // 34
  "https://s.shopee.com.br/8ph6kvVg3t", // 35
  "https://s.shopee.com.br/6KzlmNme15", // 36
  "https://s.shopee.com.br/2BACq7BhBQ", // 37
  "https://s.shopee.com.br/LiYerbumG",  // 38
  "https://s.shopee.com.br/BP8SdIrUB",  // 39
  "https://s.shopee.com.br/9zt4AktU0Z", // 40
  "https://s.shopee.com.br/9fGDmIdePp", // 41
  "https://s.shopee.com.br/8KkocauHlW", // 42
  "https://shopee.com.br/Milhaseey-X5-100M-Rangefinder-Handheld-Digital-Medidor-De-Dist%C3%A2ncia-Do-Laser-Port%C3%A1til-Medida-Ferramentas-Para-Home-i.719359017.15586211548?extraParams=%7B%22display_model_id%22%3A116767573465%2C%22model_selection_logic%22%3A3%7D&sp_atk=85475a8d-b779-417d-a855-bbc732d5daeb&xptdk=85475a8d-b779-417d-a855-bbc732d5daeb", // 43
  "https://s.shopee.com.br/5VQeoxlZWf", // 44
  "https://s.shopee.com.br/20qmeZOUDj", // 45
  "https://s.shopee.com.br/3LMAF3rf9x", // 46
  "https://s.shopee.com.br/3B2k34Skzz", // 47
  "https://s.shopee.com.br/3VfaRiLw7o", // 48
  "https://s.shopee.com.br/1Lb5rmOmPE", // 49
  "https://s.shopee.com.br/900WzvyExH", // 50
  "https://s.shopee.com.br/4frXq1DSJm", // 51
  "https://s.shopee.com.br/9Uwnaxkz5E", // 52
  "https://s.shopee.com.br/9pZdzeQ63S", // 53
  "https://s.shopee.com.br/8fNgbYSyyW", // 54
  "https://s.shopee.com.br/70FScZ77DC", // 55
  "https://s.shopee.com.br/4LEhRi738f", // 56
  "https://s.shopee.com.br/8V4GPPYikt", // 57
  "https://s.shopee.com.br/5L7EdcWUgN", // 58
  "https://s.shopee.com.br/3VfaSKJmly", // 59
  "https://s.shopee.com.br/3VfaSMjigq", // 60
  "https://s.shopee.com.br/30jJrYI3O5", // 61
  "https://s.shopee.com.br/4VYAlRoZOe", // 62
  "https://s.shopee.com.br/AKVxiS7krs", // 63
  "https://s.shopee.com.br/8KktKr0HtR", // 64
  "https://s.shopee.com.br/2qPwmq148E", // 65
  "https://s.shopee.com.br/9KdQWpFFR4", // 66
  "https://s.shopee.com.br/8082wTI2Mv", // 67
  "https://s.shopee.com.br/9pZh7saIxR", // 68
  "https://s.shopee.com.br/1BHioFmUaZ", // 69
  "https://s.shopee.com.br/2BAG09PP0E", // 70
  "https://s.shopee.com.br/3LMDOWFJ0o", // 71
  "https://s.shopee.com.br/8KktLv4Yvd", // 72
  "https://s.shopee.com.br/1gDzPhkSSF", // 73
  "https://s.shopee.com.br/8082xVrmSR", // 74
  "https://s.shopee.com.br/6fcfN7Cy6q", // 75
  "https://s.shopee.com.br/6fcfNB75hR", // 76
  "https://s.shopee.com.br/4frazdSriL", // 77
  "https://s.shopee.com.br/1Lb91bLbLQ", // 78
  "https://s.shopee.com.br/6KzoypjtSO", // 79
  "https://s.shopee.com.br/3qIU0GS4Dn"  // 80

];

// ===== Lista de Produtos FixPrime (Limpa e Reorganizada) =====
const rawProducts = [
  { id: 1, name: "Serrote Profissional Cabo Plástico Emborrachado 22 Polegadas Carpinteiro Obra Construção Aço Reforçado Multiuso Fertak", brand: "fixprime", category: "ferramentas", price: 32.07, image: "assets/produto1.png" },
  { id: 2, name: "Kit Jogo De Brocas 13 - 16 - 18 Peças Madeira Concreto Metal A Escolha Profissional Hobbystas", brand: "fixprime", category: "ferramentas", price: 21.29, image: "assets/produto2.png" },
  { id: 3, name: "Abraçadeira Nylon Enforca Gato Cinta Plástica 50 Ou 100 Unidades Prender Organizar Cabos Peças", brand: "fixprime", category: "ferramentas", price: 8.99, image: "assets/produto3.png" },
  { id: 4, name: "Kit Jogo Chaves Precisão 16 Peças Fenda Torx Philips Pinça", brand: "fixprime", category: "ferramentas", price: 20.58, image: "assets/produto4.png" },
  { id: 5, name: "Jogo Chave Fenda Catracada Bits Soquetes Sextavado Kit 44 Peças", brand: "fixprime", category: "ferramentas", price: 33.20, image: "assets/produto5.png" },
  { id: 6, name: "Kit Jogo Chave De Fenda Fenda Phillips 8 Em 1 Peças Profissional Para Uso Geral Com Estojo", brand: "fixprime", category: "ferramentas", price: 23.29, image: "assets/produto6.png" },
  { id: 7, name: "Rolo para pintura Não Respinga Econ 10MMx23CM s/cabo Castor", brand: "fixprime", category: "pintura", price: 23.47, image: "assets/produto7.png" },
  { id: 8, name: "Chaves Combinadas Em Aço Carbono Boca Estrela 03 - 06 e 10 Peças Várias Medidas Escolha Seu Kit", brand: "fixprime", category: "ferramentas", price: 18.80, image: "assets/produto8.png" },
  { id: 9, name: "Kit Jogo Serra Copo 6 Peças 32 A 54 mm Madeira Gesso Pvc Para Uso Profissional", brand: "fixprime", category: "ferramentas", price: 19.29, image: "assets/produto9.png" },
  { id: 10, name: "Marreta Aço Forjado Com Cabo Fibra Emborrachado Resistente Pesado Demolição Várias Medidas", brand: "fixprime", category: "ferramentas", price: 59.29, image: "assets/produto10.png" },
  { id: 11, name: "Jogo 3 Trincha Pincel Cerdas Gris Pintura Parede Cabo Laranja Bestfer", brand: "fixprime", category: "pintura", price: 14.87, image: "assets/produto11.png" },
  { id: 12, name: "Alicate Universal 8Pol. Cabo Emborrachado", brand: "fixprime", category: "ferramentas", price: 24.20, image: "assets/produto12.png" },
  { id: 13, name: "Jogo de Chaves Allen 1,5 a 10 mm Gedore com 9 Peças 42-9M", brand: "fixprime", category: "ferramentas", price: 49.21, image: "assets/produto13.png" },
  { id: 14, name: "Alicate Decapador Crimpagem Rede RJ45 RJ11 RJ12 Multi Função EZ Crimp", brand: "fixprime", category: "ferramentas", price: 42.60, image: "assets/produto14.png" },
  { id: 15, name: "Trena emborrachada fita aço 16mmx3m c/ trava", brand: "fixprime", category: "ferramentas", price: 22.20, image: "assets/produto15.png" },
  { id: 16, name: "MARTELO UNHA, CABO DE MADEIRA, CABECA 20MM, 1PC // SPARTA", brand: "fixprime", category: "ferramentas", price: 25.06, image: "assets/produto16.png" },
  { id: 17, name: "Alicate Corta Vergalhão Cabos Arame Tesoura Profissional 24 Polegadas Lâmina Aço Cabo Emborrachado", brand: "fixprime", category: "ferramentas", price: 80.02, image: "assets/produto17.png" },
  { id: 18, name: "Tesoura Corta Chapa Calha Galvanizado Aviação Corte Reto 250mm - Prático Uso Profissional", brand: "fixprime", category: "ferramentas", price: 32.29, image: "assets/produto18.png" },
  { id: 19, name: "Alicate Rebitador Profissional Tipo Alavanca 17 Polegadas", brand: "fixprime", category: "ferramentas", price: 55.69, image: "assets/produto19.png" },
  { id: 20, name: "Martelo Unha Curvo Aço Forjado Com Cabo Em Fibra De Vidro Emborrachado 27mm Bramix", brand: "fixprime", category: "ferramentas", price: 27.59, image: "assets/produto20.png" },
  { id: 21, name: "Mini Serrote Dobrável Para Poda Cabo Emborrachado 14 Polegadas Ferramenta Profissional", brand: "fixprime", category: "ferramentas", price: 26.29, image: "assets/produto21.png" },
  { id: 22, name: "Cortador De Tubo Cano De Pvc Até 42mm Com Trava Bestfer", brand: "fixprime", category: "ferramentas", price: 38.50, image: "assets/produto22.png" },
  { id: 23, name: "Parafusadeira Furadeira Sem Fio 12V Com Maleta Bateria Brocas e 13 Acessórios", brand: "fixprime", category: "ferramentas", price: 121.41, image: "assets/produto23.png" },
  { id: 24, name: "Jogo De Soquete 46 Peças 1/4 Catraca Chave Allen", brand: "fixprime", category: "ferramentas", price: 28.58, image: "assets/produto24.png" },
  { id: 25, name: "LIMA CHATA MURCA, 6POL., CABO DE MADEIRA, 150MM, 1PC // MTX", brand: "fixprime", category: "ferramentas", price: 14.30, image: "assets/produto25.png" },
  { id: 26, name: "Alicate de Pressão 10 Tramontina Master Mordente Triangular 41070/110", brand: "fixprime", category: "ferramentas", price: 62.51, image: "assets/produto26.png" },
  { id: 27, name: "Trena emborrachada com fita de aço 18 mm x 5 m com trava", brand: "fixprime", category: "ferramentas", price: 24.90, image: "assets/produto27.png" },
  { id: 28, name: "Tesoura para Poda Famastil Profissional 8 com Cabo Emborrachado", brand: "fixprime", category: "ferramentas", price: 29.99, image: "assets/produto28.png" },
  { id: 29, name: "Cortador Tubos PVC Vonder 42mm Tipo Tesoura Alicate Cano Rígido Corte Sem Rebarba", brand: "fixprime", category: "ferramentas", price: 41.37, image: "assets/produto29.png" },
  { id: 30, name: "Caneta Detectora De Elétrica Voltagem Teste Tensão com Pilhas /Detector de Tensão 12-220V AC/DC", brand: "fixprime", category: "ferramentas", price: 12.88, image: "assets/produto30.png" },
  { id: 31, name: "Trena Métrica 5 metros Profissional Emborrachada com Trava Fita de Aço", brand: "fixprime", category: "ferramentas", price: 12.50, image: "assets/produto31.png" },
  { id: 32, name: "Kit De Ferramentas Completo 246 Peças Com Soquetes Catraca Reversível E Chaves Combinadas Uso Geral", brand: "fixprime", category: "ferramentas", price: 137.91, image: "assets/produto32.png" },
  { id: 33, name: "Alicate Aneis Interno /Externo 7 Polegadas 18CM", brand: "fixprime", category: "ferramentas", price: 20.00, image: "assets/produto33.png" },
  { id: 34, name: "40 Peças / 46 Peças Jogo De Chave Catraca Caixa De Ferramentas Completa Reversível Soquetes Maleta", brand: "fixprime", category: "ferramentas", price: 30.99, image: "assets/produto34.png" },
  { id: 35, name: "Kit Jogo Grampeador Tapeceiro Manual Alta Pressão Profissional Com Trena Grampos Multiuso Reforçado", brand: "fixprime", category: "ferramentas", price: 58.29, image: "assets/produto35.png" },
  { id: 36, name: "AUXOM Trena Profissional Emborrachada10m C/ Trava Reforçada e Sistema Autotrava", brand: "fixprime", category: "ferramentas", price: 18.70, image: "assets/produto36.png" },
  { id: 37, name: "Caneta Chave Teste De Voltagem Digital 12v A 220v AC/DC Corrente Elétrica Bivolt Construção", brand: "fixprime", category: "ferramentas", price: 13.59, image: "assets/produto37.png" },
  { id: 38, name: "Cortador De Vidro Profissional Com Reservatório Resistente Cabo Plástico Corte Rápido Preciso", brand: "fixprime", category: "ferramentas", price: 25.29, image: "assets/produto38.png" },
  { id: 39, name: "Fita Veda Rosca Teflon Para Torneiras E Hidráulica Em Geral Encanamento Melhor Vedação", brand: "fixprime", category: "ferramentas", price: 9.69, image: "assets/produto39.png" },
  { id: 40, name: "Trena Fibra De Vidro Longa Aberta Alça - Manivela 20 - 30 - 50 Metros Profissional Medição", brand: "fixprime", category: "ferramentas", price: 34.29, image: "assets/produto40.png" },
  { id: 41, name: "Kit Jogo 10 Peças Ponteiras Bits Philips PH2 65x6mm Ponta Dupla Para Parafusadeira Profissional", brand: "fixprime", category: "ferramentas", price: 36.20, image: "assets/produto41.png" },
  { id: 42, name: "Jogo de alicates Universal Corte e Bico meia cana 3 peças 43409/107 Tramontina", brand: "fixprime", category: "ferramentas", price: 134.92, image: "assets/produto42.png" },
  { id: 43, name: "Milhaseey X5 100M Rangefinder Handheld Digital Medidor De Distância Do Laser Portátil Medida Ferramentas Para Home", brand: "fixprime", category: "ferramentas", price: 81.55, image: "assets/produto43.png" },
  { id: 44, name: "Kit De Ferramentas 13 Peças OI-5024 Maleta Compacta Com Alicate Martelo E Chaves Domésticas", brand: "fixprime", category: "ferramentas", price: 72.25, image: "assets/produto44.png" },
  { id: 45, name: "Chave Inglesa Ajustável 8 Polegadas 200mm Profissional Aço Forjado", brand: "fixprime", category: "ferramentas", price: 18.88, image: "assets/produto45.png" },
  { id: 46, name: "Kit Ferramentas 25 Em 1 Jogo Chaves Reparo Celular Notebook", brand: "fixprime", category: "ferramentas", price: 20.88, image: "assets/produto46.png" },
  { id: 47, name: "Furadeira Industrial Impacto 3/8 Reversão 450W GSB 450RE + Estojo 30 Peças X-Line BOSCH", brand: "fixprime", category: "ferramentas", price: 318.16, image: "assets/produto47.png" },
  { id: 48, name: "Moto Esmeril 6 Pol 350w Bivolt 9727 Bremen", brand: "fixprime", category: "ferramentas", price: 178.51, image: "assets/produto48.png" },
  { id: 49, name: "Lavadora de Alta Pressão 1600 Libras 1400w LAV 1600 Vonder", brand: "fixprime", category: "ferramentas", price: 393.91, image: "assets/produto49.png" },
  { id: 50, name: "Politriz Lixadeira Esmerilhadeira 1050w 4.1/2 110v ou 220v Multifunções 6 Velocidades", brand: "fixprime", category: "ferramentas", price: 166.25, image: "assets/produto50.png" },
  { id: 51, name: "AUXOM Parafusadeira e Furadeira 21V 2 Baterias com 24 Bits - Maleta, Impacto, com motor 100% cobre", brand: "fixprime", category: "ferramentas", price: 114.00, image: "assets/produto51.png" },
  { id: 52, name: "Furadeira Parafusadeira De Impacto 3/8 21V Com 2 Baterias + 31 Acessórios e Maleta FST009 -Fasterr", brand: "fixprime", category: "ferramentas", price: 146.25, image: "assets/produto52.png" },
  { id: 53, name: "Parafusadeira Furadeira a Bateria 12V Com Maleta Bateria Brocas e 50 Acessórios FP12X NKF", brand: "fixprime", category: "ferramentas", price: 196.96, image: "assets/produto53.png" },
  { id: 54, name: "Parafusadeira Furadeira de Impacto 20v Sem Fio Com Maleta Broca e Bits PFV238I Vonder", brand: "fixprime", category: "ferramentas", price: 185.16, image: "assets/produto54.png" },
  { id: 55, name: "Parafusadeira Furadeira be lmpacto 2 Baterias", brand: "fixprime", category: "ferramentas", price: 102.60, image: "assets/produto55.png" },
  { id: 56, name: "Serra Mármore 110mm 1300W Com 2 Discos 4100NH3ZX2 Makita Profissional", brand: "fixprime", category: "ferramentas", price: 369.55, image: "assets/produto56.png" },
  { id: 57, name: "Máquina Solda Inversora 120A Bivolt IM125 Eletrodo e TIG Com Máscara Escurecimento Automático Vonder", brand: "fixprime", category: "ferramentas", price: 528.51, image: "assets/produto57.png" },
  { id: 58, name: "Serra Tico-Tico Philco Force PTT01 450W 3000GPM", brand: "fixprime", category: "ferramentas", price: 132.91, image: "assets/produto58.png" },
  { id: 59, name: "Martelete Rotativo Rompedor Parafusadeira e Furadeira de Impacto Potência de 800W 110V + Maleta Acessórios", brand: "fixprime", category: "ferramentas", price: 281.20, image: "assets/produto59.png" },
  { id: 60, name: "AUXOM Martelete Rompedor 21V 900W Profissional com 2 Baterias - Furadeira de Impacto e Rotativo", brand: "fixprime", category: "ferramentas", price: 327.75, image: "assets/produto60.png" },
  { id: 61, name: "48V Motosserra Eletrica Potente 2 Baterias Recarregavel Sem Fio Madeira Galho Bambu Arvore Folha Carpintaria", brand: "fixprime", category: "ferramentas", price: 204.00, image: "assets/produto61.png" },
  { id: 62, name: "Politriz Lixadeira Automática Profissional 5 Pol. 600w", brand: "fixprime", category: "ferramentas", price: 122.41, image: "assets/produto62.png" },
  { id: 63, name: "Alicate de Pressão Em Aço Carbono Com Mordente Curvo 10 Polegadas 250mm", brand: "fixprime", category: "ferramentas", price: 22.50, image: "assets/produto63.png" },
  { id: 64, name: "Caixa de Ferramentas Eletricista Forte Durável Lona Engrossa Portátil Multi-funcional", brand: "fixprime", category: "ferramentas", price: 39.99, image: "assets/produto64.png" },
  { id: 65, name: "Kit de Ferramentas 9 Peças com Maleta – Martelo, Alicate, Chaves, Estilete e Trena", brand: "fixprime", category: "ferramentas", price: 66.99, image: "assets/produto65.png" },
  { id: 66, name: "Kit Jogo De Ferramentas Com Maleta 12 Peças Titanium", brand: "fixprime", category: "ferramentas", price: 18.97, image: "assets/produto66.png" },
  { id: 67, name: "Kit Ferramenta 93 Peças Jogo Soquete Com Parafusadeira Furadeira Com Maleta", brand: "techforce", category: "ferramentas", price: 68.88, image: "assets/produto67.png" },
  { id: 68, name: "Kit de Ferramentas com Maleta Resistente 129 Peças", brand: "ironcut", category: "maquinas", price: 95.00, image: "assets/produto68.png" },
  { id: 69, name: "Furadeira Multifuncional Parafusadeira Martelete 26V Portatil a Bateria de Ions + Kit Caixa de Jogo de Ferramentas", brand: "precision", category: "ferramentas", price: 252.50, image: "assets/produto69.png" },
  { id: 70, name: "Furadeira Parafusadeira Bateria + Jogo Ferramentas", brand: "fixprime", category: "ferramentas", price: 141.55, image: "assets/produto70.png" },
  { id: 71, name: "Furadeira Elétrica De Impacto E Parafusadeira 750w C/ Maleta", brand: "organiza", category: "casa", price: 112.91, image: "assets/produto71.png" },
  { id: 72, name: "Mini Esmerilhadeira Lixadeira Elétrica Sem Fio Bivolt 110v/220v 2 Baterias 12V Com Maleta", brand: "ironcut", category: "maquinas", price: 96.82, image: "assets/produto72.png" },
  { id: 73, name: "Kit Furadeira Parafusadeira 850w + Esmerilhadeira 900w 25pçs Com Maleta e Acessórios Promoção", brand: "precision", category: "ferramentas", price: 233.69, image: "assets/produto73.png" },
  { id: 74, name: "Serra Mármore Rolamentada 2000w 13000 Rpm 110mm Cortador de Concreto Maquita de Mão", brand: "techforce", category: "ferramentas", price: 209.00, image: "assets/produto74.png" },
  { id: 75, name: "Soprador Térmico Pistola 2000w Ar Quente 2 Velocidades modelo TST Tssaper", brand: "ironcut", category: "maquinas", price: 113.91, image: "assets/produto75.png" },
  { id: 76, name: "Lixadeira Multi Funçoes 800W 6 Velocidades Completa - Politriz Polidor 220V", brand: "fixprime", category: "ferramentas", price: 110.11, image: "assets/produto76.png" },
  { id: 77, name: "Micro Retífica Profissional 500W Com Eixo Flexível Maleta com 189 Peças", brand: "craftpro", category: "casa", price: 190.81, image: "assets/produto77.png" },
  { id: 78, name: "Chave De Impacto Sem Fio Elétrica Com Maleta 2 Baterias 21v Bivolt 110v/220v Reforçada Portátil", brand: "fixprime", category: "ferramentas", price: 177.66, image: "assets/produto78.png" },
  { id: 79, name: "Parafusadeira Furadeira e Chave De Impacto 48v 02 Baterias Sem Fio Soquetes com Maleta Profissional", brand: "techforce", category: "ferramentas", price: 237.50, image: "assets/produto79.png" },
  { id: 80, name: "Chave De Impacto Parafusadeira Reforçada Portátil 1/2 21v Carregador Bivolt", brand: "casa", category: "casa", price: 226.95, image: "assets/produto80.png" }
];

// Dinamicamente aplicar as novas categorias, Links da Shopee e gerar "Quantidade Vendida"
// Dinamicamente aplicar as novas categorias, Links da Shopee e gerar "Quantidade Vendida"
const products = rawProducts.map((p, index) => {
  let cat = 'manuais';
  const n = p.name.toLowerCase();
  
  // Forçando produtos específicos para 'maquinas' usando seus IDs
  // 56: Serra Mármore | 49: Lavadora | 57: Máquina Solda | 73: Kit Furadeira + Esmerilhadeira
  if (p.id === 56 || p.id === 49 || p.id === 57 || p.id === 73) {
    cat = 'maquinas';
  } else if (n.includes('kit') || n.includes('jogo') || n.includes('conjunto')) {
    cat = 'kits';
  } else if (p.category === 'eletricos' || n.includes('parafusadeira') || n.includes('furadeira') || n.includes('tico-tico') || n.includes('serra') || n.includes('esmeril') || n.includes('politriz') || n.includes('lavadora') || n.includes('solda')) {
    cat = 'maquinas';
  }
  
  const linkIndex = p.id - 1;
  const productLink = shopeeLinks[linkIndex] 
                      ? shopeeLinks[linkIndex] 
                      : "https://shopee.com.br/search?keyword=" + encodeURIComponent(p.name);

  // Gerando um número fixo/consistente de unidades vendidas simuladas baseado no ID para que não mude aleatoriamente
  const soldCount = (p.id * 17 + 33) % 400 + 40; 

  return { ...p, category: cat, link: productLink, sold: soldCount };
});

// Category names map atualizado
const categoryNames = {
  'manuais': 'Ferramentas Manuais',
  'kits': 'Kits para Casa',
  'maquinas': 'Máquinas'
};

// Keywords for improved search
const searchKeywords = {
  'parafusar': ['parafusadeira', 'maquina'],
  'furar': ['furadeira', 'broca', 'maquina'],
  'cortar': ['alicate', 'tesoura', 'serrote', 'serra', 'manual'],
  'medir': ['trena', 'termometro', 'manual'],
  'pintar': ['rolo', 'pincel'],
  'bater': ['martelo', 'marreta', 'manual'],
  'apertar': ['chave', 'soquete', 'catraca', 'manual'],
  'crimpar': ['alicate crimpar', 'rj45'],
  'rede': ['crimpar', 'rj45', 'coaxial'],
  'cabo': ['crimpar', 'descascador', 'desencapar'],
  'madeira': ['broca', 'lima', 'serrote'],
  'metal': ['broca ferro', 'lima'],
  'jardim': ['serrote', 'poda', 'tesoura'],
  'precisao': ['precisao', 'chaves'],
  'kit': ['kit', 'jogo', 'conjunto', 'maleta', 'casa'],
  'profissional': ['profissional', 'rebitador']
};

// ===== State =====
let currentSlide = 0;
let carouselInterval;
let selectedProduct = null;
const favorites = new Set();
let isMobileSearchOpen = false;

// ===== DOM Elements =====
const header = document.getElementById('header');
const menuBtn = document.getElementById('menuBtn');
const menuIcon = document.getElementById('menuIcon');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
const carouselInner = document.getElementById('carouselInner');
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');
const carouselDots = document.getElementById('carouselDots');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const clearFilters = document.getElementById('clearFilters');
const productModal = document.getElementById('productModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const floatingSocial = document.getElementById('floatingSocial');

// Mobile Sheet Elements
const mobileSheet = document.getElementById('mobileSheet');
const mobileSheetBackdrop = document.getElementById('mobileSheetBackdrop');
const mobileSheetClose = document.getElementById('mobileSheetClose');

// Search Elements
const searchInput = document.getElementById('searchInput');
const mobileSearchBtn = document.getElementById('mobileSearchBtn');

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initCarousel();
  initFilters();
  initProductCarousels();
  renderProducts();
  initModal();
  initMobileSheet();
  initSearch();
  initOfferButtons();
  initCountdownTimer();
});

// ===== Countdown Timer =====
function initCountdownTimer() {
  const now = new Date();
  const endDate = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000); 
  
  let storedEndDate = localStorage.getItem('offerEndDate');
  let countdownEnd;
  
  if (storedEndDate) {
    countdownEnd = new Date(storedEndDate);
    if (countdownEnd <= now) {
      countdownEnd = endDate;
      localStorage.setItem('offerEndDate', endDate.toISOString());
    }
  } else {
    countdownEnd = endDate;
    localStorage.setItem('offerEndDate', endDate.toISOString());
  }
  
  function updateTimer() {
    const now = new Date();
    const diff = countdownEnd - now;
    
    if (diff <= 0) {
      countdownEnd = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
      localStorage.setItem('offerEndDate', countdownEnd.toISOString());
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const timerDays = document.getElementById('timerDays');
    const timerHours = document.getElementById('timerHours');
    const timerMinutes = document.getElementById('timerMinutes');
    const timerSeconds = document.getElementById('timerSeconds');
    
    if (timerDays) timerDays.textContent = String(days).padStart(2, '0');
    if (timerHours) timerHours.textContent = String(hours).padStart(2, '0');
    if (timerMinutes) timerMinutes.textContent = String(minutes).padStart(2, '0');
    if (timerSeconds) timerSeconds.textContent = String(seconds).padStart(2, '0');
  }
  
  updateTimer();
  setInterval(updateTimer, 1000);
}

// ===== Header Scroll =====
function initHeader() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ===== Floating Social Visibility =====
function hideFloatingSocial() {
  if (floatingSocial) {
    floatingSocial.classList.add('hidden');
  }
}

function showFloatingSocial() {
  if (floatingSocial) {
    floatingSocial.classList.remove('hidden');
  }
}

// ===== Mobile Menu =====
function initMobileMenu() {
  menuBtn.addEventListener('click', toggleMobileMenu);
  mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

function toggleMobileMenu() {
  const isOpen = mobileMenu.classList.toggle('open');
  menuIcon.innerHTML = isOpen
    ? "<i class='bx bx-x' style='font-size: 28px;'></i>"
    : "<i class='bx bx-menu' style='font-size: 28px;'></i>";
  
  if (isOpen) {
    document.body.style.overflow = 'hidden';
    hideFloatingSocial();
  } else {
    document.body.style.overflow = '';
    showFloatingSocial();
  }
}

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  menuIcon.innerHTML = "<i class='bx bx-menu' style='font-size: 28px;'></i>";
  document.body.style.overflow = '';
  showFloatingSocial();
}

// ===== Carousel Home =====
function initCarousel() {
  carouselPrev.addEventListener('click', prevSlide);
  carouselNext.addEventListener('click', nextSlide);
  carouselDots.querySelectorAll('.carousel-dot').forEach(dot => {
    dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.index)));
  });
  startCarouselAutoplay();
}

function updateCarousel() {
  const slides = carouselInner.querySelectorAll('.carousel-slide');
  const dots = carouselDots.querySelectorAll('.carousel-dot');
  
  slides.forEach((slide, index) => {
    slide.classList.remove('active', 'prev');
    if (index === currentSlide) {
      slide.classList.add('active');
    } else if (index < currentSlide) {
      slide.classList.add('prev');
    }
  });
  
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % 3;
  updateCarousel();
  resetCarouselAutoplay();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + 3) % 3;
  updateCarousel();
  resetCarouselAutoplay();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
  resetCarouselAutoplay();
}

function startCarouselAutoplay() {
  carouselInterval = setInterval(nextSlide, 4000);
}

function resetCarouselAutoplay() {
  clearInterval(carouselInterval);
  startCarouselAutoplay();
}

// ===== Product Grid Navigation (Setas) =====
function initProductCarousels() {
  document.querySelectorAll('.carousel-container').forEach(container => {
    const grid = container.querySelector('.products-grid');
    const leftBtn = container.querySelector('.scroll-arrow.left');
    const rightBtn = container.querySelector('.scroll-arrow.right');

    if (grid && leftBtn && rightBtn) {
      leftBtn.addEventListener('click', () => {
        grid.scrollBy({ left: -300, behavior: 'smooth' });
      });
      rightBtn.addEventListener('click', () => {
        grid.scrollBy({ left: 300, behavior: 'smooth' });
      });
    }
  });
}

// ===== Offer Buttons =====
function initOfferButtons() {
  document.querySelectorAll('.offer-btn[data-category]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const category = btn.dataset.category;
      navigateToProductsWithFilter(category);
    });
  });
  
  document.querySelectorAll('.offer-card[data-category]').forEach(card => {
    card.addEventListener('click', () => {
      const category = card.dataset.category;
      navigateToProductsWithFilter(category);
    });
  });
}

function navigateToProductsWithFilter(category) {
  if(categoryFilter) categoryFilter.value = category;
  if(priceFilter) priceFilter.value = 'all';
  renderProducts();
  document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
}

// ===== Filters =====
function initFilters() {
  if(categoryFilter) categoryFilter.addEventListener('change', () => renderProducts());
  if(priceFilter) priceFilter.addEventListener('change', () => renderProducts());
  if(clearFilters) {
    clearFilters.addEventListener('click', () => {
      categoryFilter.value = 'all';
      priceFilter.value = 'all';
      renderProducts();
    });
  }
}

function filterProducts(onlySale = false) {
  const category = categoryFilter ? categoryFilter.value : 'all';
  const price = priceFilter ? priceFilter.value : 'all';
  
  return products.filter(product => {
    const matchCategory = category === 'all' || product.category === category;
    let matchPrice = true;
    if (price === 'low') matchPrice = product.price < 100;
    else if (price === 'mid') matchPrice = product.price >= 100 && product.price <= 500;
    else if (price === 'high') matchPrice = product.price > 500;
    
    const matchSale = !onlySale || product.badge === 'sale';
    
    return matchCategory && matchPrice && matchSale;
  });
}

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// ===== Search =====
function initSearch() {
  const searchBar = document.querySelector('.search-bar');
  if (searchBar) {
    searchBar.style.position = 'relative';
    const dropdown = document.createElement('div');
    dropdown.className = 'search-dropdown';
    dropdown.id = 'searchDropdown';
    searchBar.appendChild(dropdown);
  }
  
  if (searchInput) {
    searchInput.addEventListener('input', handleDesktopSearch);
    searchInput.addEventListener('focus', handleDesktopSearch);
    
    document.addEventListener('click', (e) => {
      const dropdown = document.getElementById('searchDropdown');
      if (dropdown && !e.target.closest('.search-bar')) {
        dropdown.classList.remove('open');
      }
    });
  }
  
  if (mobileSearchBtn) {
    mobileSearchBtn.addEventListener('click', openMobileSearch);
  }
  
  createMobileSearchModal();
}

function searchProducts(query) {
  const normalizedQuery = normalizeText(query);
  const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length > 1);
  
  return products.filter(product => {
    const productText = normalizeText(`${product.name} ${product.brand} ${product.category}`);
    
    return queryWords.every(word => {
      if (productText.includes(word)) return true;
      for (const [key, synonyms] of Object.entries(searchKeywords)) {
        if (key.includes(word) || word.includes(key)) {
          if (synonyms.some(synonym => productText.includes(synonym))) {
            return true;
          }
        }
      }
      return false; 
    });
  }).sort((a, b) => {
    const aExact = normalizeText(a.name).includes(normalizedQuery);
    const bExact = normalizeText(b.name).includes(normalizedQuery);
    if (aExact && !bExact) return -1;
    if (!aExact && bExact) return 1;
    return 0;
  });
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function handleDesktopSearch(e) {
  const query = e.target.value.toLowerCase().trim();
  const dropdown = document.getElementById('searchDropdown');
  
  if (!dropdown) return;
  
  if (query.length < 2) {
    dropdown.classList.remove('open');
    return;
  }
  
  const results = searchProducts(query);
  
  if (results.length === 0) {
    dropdown.innerHTML = '<div class="search-no-results">Nenhum produto encontrado</div>';
  } else {
    dropdown.innerHTML = results.slice(0, 8).map(product => `
      <div class="search-result-item" data-id="${product.id}">
        <div class="search-result-image">
          <img src="${product.image || ''}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;">
        </div>
        <div class="search-result-info">
          <p class="search-result-name">${product.name}</p>
          <p class="search-result-price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
        </div>
      </div>
    `).join('');
    
    dropdown.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const productId = parseInt(item.dataset.id);
        openModal(productId);
        dropdown.classList.remove('open');
        searchInput.value = '';
      });
    });
  }
  
  dropdown.classList.add('open');
}

function createMobileSearchModal() {
  const modal = document.createElement('div');
  modal.className = 'mobile-search-modal';
  modal.id = 'mobileSearchModal';
  modal.innerHTML = `
    <div class="mobile-search-modal-header">
      <div class="mobile-search-modal-input">
        <i class='bx bx-search' style="font-size: 20px; color: rgba(255, 255, 255, 0.6);"></i>
        <input type="text" placeholder="Buscar produtos..." id="mobileSearchInput">
      </div>
      <button class="mobile-search-modal-close" id="mobileSearchClose">
        <i class='bx bx-x' style="font-size: 24px;"></i>
      </button>
    </div>
    <div class="mobile-search-modal-results" id="mobileSearchResults"></div>
  `;
  document.body.appendChild(modal);
  
  const closeBtn = document.getElementById('mobileSearchClose');
  closeBtn.addEventListener('click', closeMobileSearch);
  
  const input = document.getElementById('mobileSearchInput');
  input.addEventListener('input', handleMobileSearch);
}

function openMobileSearch() {
  const modal = document.getElementById('mobileSearchModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    hideFloatingSocial();
    setTimeout(() => {
      document.getElementById('mobileSearchInput').focus();
    }, 300);
  }
}

function closeMobileSearch() {
  const modal = document.getElementById('mobileSearchModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    showFloatingSocial();
    document.getElementById('mobileSearchInput').value = '';
    document.getElementById('mobileSearchResults').innerHTML = '';
  }
}

function handleMobileSearch(e) {
  const query = e.target.value.toLowerCase().trim();
  const resultsContainer = document.getElementById('mobileSearchResults');
  
  if (query.length < 2) {
    resultsContainer.innerHTML = '';
    return;
  }
  
  const results = searchProducts(query);
  
  if (results.length === 0) {
    resultsContainer.innerHTML = '<div class="search-no-results">Nenhum produto encontrado</div>';
  } else {
    resultsContainer.innerHTML = results.map(product => `
      <div class="search-result-item" data-id="${product.id}">
        <div class="search-result-image">
          <img src="${product.image || ''}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;">
        </div>
        <div class="search-result-info">
          <p class="search-result-name">${product.name}</p>
          <p class="search-result-price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
        </div>
      </div>
    `).join('');
    
    resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const productId = parseInt(item.dataset.id);
        closeMobileSearch();
        openModal(productId);
      });
    });
  }
}

// ===== Create Product Card HTML =====
function generateProductCardHTML(product) {
  const isFavorite = favorites.has(product.id);
  
  let badgeHTML = '';
  if (product.badge === 'sale') {
    badgeHTML = '<span class="product-badge sale">Oferta</span>';
  } else if (product.badge === 'new') {
    badgeHTML = '<span class="product-badge new">Novo</span>';
  } else if (product.badge === 'bestseller') {
    badgeHTML = '<span class="product-badge bestseller">Mais Vendido</span>';
  }
  
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-image">
        <img src="${product.image || ''}" alt="${product.name}" class="product-img" loading="lazy">
        ${badgeHTML}
        <button class="product-favorite ${isFavorite ? 'active' : ''}" data-id="${product.id}" aria-label="Favoritar">
          <i class='bx ${isFavorite ? 'bxs-heart' : 'bx-heart'}'></i>
        </button>
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price" style="align-items: center;">
          <span class="product-price-current">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
          ${product.originalPrice ? `<span class="product-price-original">R$ ${product.originalPrice.toFixed(2).replace('.', ',')}</span>` : ''}
          <span class="product-sold" style="color: #000; font-size: 0.75rem; margin-left: 0.5rem;">${product.sold} vendidos</span>
        </div>
        <p class="product-installments">ou 12x de R$ ${(product.price / 12).toFixed(2).replace('.', ',')} sem juros</p>
        <div class="product-actions">
          <button class="product-view-btn" data-id="${product.id}">
            <i class='bx bx-show' style="font-size: 16px;"></i> Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  `;
}

// ===== Render Products Separados por Seção =====
function renderProducts(onlySale = false) {
  const filtered = filterProducts(onlySale);
  
  const gridManuais = document.getElementById('grid-manuais');
  const gridKits = document.getElementById('grid-kits');
  const gridMaquinas = document.getElementById('grid-maquinas');
  
  const secManuais = document.getElementById('sec-manuais');
  const secKits = document.getElementById('sec-kits');
  const secMaquinas = document.getElementById('sec-maquinas');
  
  const msgVazia = document.getElementById('no-products-msg');
  
  if (filtered.length === 0) {
    if(secManuais) secManuais.style.display = 'none';
    if(secKits) secKits.style.display = 'none';
    if(secMaquinas) secMaquinas.style.display = 'none';
    if(msgVazia) msgVazia.style.display = 'block';
    return;
  }
  
  if(msgVazia) msgVazia.style.display = 'none';

  const renderToGrid = (grid, section, categoryName) => {
    if(!grid || !section) return;
    const items = filtered.filter(p => p.category === categoryName);
    
    if (items.length === 0) {
      section.style.display = 'none';
    } else {
      section.style.display = 'block';
      grid.innerHTML = items.map(p => generateProductCardHTML(p)).join('');
    }
  };

  renderToGrid(gridManuais, secManuais, 'manuais');
  renderToGrid(gridKits, secKits, 'kits');
  renderToGrid(gridMaquinas, secMaquinas, 'maquinas');
  
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.product-favorite')) {
        openModal(parseInt(card.dataset.id));
      }
    });
  });
  
  document.querySelectorAll('.product-favorite').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(parseInt(btn.dataset.id));
    });
  });
}

// ===== Favorites =====
function toggleFavorite(productId) {
  if (favorites.has(productId)) {
    favorites.delete(productId);
  } else {
    favorites.add(productId);
  }
  renderProducts(); 
}

// ===== Modal (Desktop/Mobile) =====
function initModal() {
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && productModal && productModal.classList.contains('open')) {
      closeModal();
    }
  });
}

function openModal(productId) {
  selectedProduct = products.find(p => p.id === productId);
  if (!selectedProduct) return;
  
  openMobileSheet(selectedProduct);
}

function closeModal() {
  if (productModal) {
    productModal.classList.remove('open');
    document.body.style.overflow = '';
    selectedProduct = null;
    showFloatingSocial();
  }
}

// ===== Função para fechar o Mobile Sheet =====
function closeMobileSheet() {
  if (mobileSheet) {
    mobileSheet.classList.remove('open');
    document.body.style.overflow = ''; // Devolve o scroll à página
    showFloatingSocial(); // Mostra os botões sociais novamente
  }
}

// ===== Mobile Bottom Sheet =====
function initMobileSheet() {
  if (mobileSheetBackdrop) {
    mobileSheetBackdrop.addEventListener('click', closeMobileSheet);
  }
  if (mobileSheetClose) {
    mobileSheetClose.addEventListener('click', closeMobileSheet);
  }
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileSheet && mobileSheet.classList.contains('open')) {
      closeMobileSheet();
    }
  });
}

function openMobileSheet(product) {
  if (!mobileSheet) return;
  
  document.getElementById('mobileSheetName').textContent = product.name;
  document.getElementById('mobileSheetPrice').textContent = `R$ ${product.price.toFixed(2).replace('.', ',')}`;
  
  const soldEl = document.getElementById('mobileSheetSold');
  if(soldEl) {
    soldEl.textContent = `${product.sold} vendidos`;
  }
  
  const originalPriceEl = document.getElementById('mobileSheetOriginalPrice');
  if (product.originalPrice) {
    originalPriceEl.textContent = `R$ ${product.originalPrice.toFixed(2).replace('.', ',')}`;
    originalPriceEl.style.display = 'inline';
  } else {
    originalPriceEl.style.display = 'none';
  }
  
  document.getElementById('mobileSheetDescription').textContent = product.name;
  document.getElementById('mobileSheetSpecCategory').textContent = categoryNames[product.category] || product.category;
  
  document.getElementById('mobileSheetImage').innerHTML = `<img src="${product.image || ''}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;">`;
  
  const buyBtn = document.getElementById('mobileSheetBuyBtn');
  if (buyBtn) {
    buyBtn.href = product.link;
  }
  
  mobileSheet.classList.add('open');
  document.body.style.overflow = 'hidden';
  hideFloatingSocial();
}

// ===== Função de Filtrar pelo Footer =====
window.filtrarPeloRodape = function(categoria) {
  if (categoryFilter) {
    categoryFilter.value = categoria;
    if(priceFilter) priceFilter.value = 'all';
    
    renderProducts();
    
    const produtosSecao = document.getElementById('produtos');
    if(produtosSecao) {
      produtosSecao.scrollIntoView({ behavior: 'smooth' });
    }
  }
};