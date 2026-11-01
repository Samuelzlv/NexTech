// ===== Valores estimados (R$) por categoria de aparelho =====
// Para ajustar um preço, é só mudar o número abaixo.
const PRECOS = {
    entrada:  { tela: 160,  bateria: 90,  placa: 180, conector: 90,  camera: 120 },
    inter:    { tela: 280,  bateria: 130, placa: 260, conector: 120, camera: 180 },
    top:      { tela: 600,  bateria: 200, placa: 420, conector: 180, camera: 350 },
    dobravel: { tela: 1200, bateria: 350, placa: 800, conector: 300, camera: 600 },
    iphoneA:  { tela: 350,  bateria: 220, placa: 450, conector: 230, camera: 280 },
    iphoneB:  { tela: 600,  bateria: 280, placa: 550, conector: 280, camera: 380 },
    iphoneC:  { tela: 900,  bateria: 340, placa: 700, conector: 330, camera: 500 },
    iphoneD:  { tela: 1300, bateria: 420, placa: 900, conector: 400, camera: 650 }
};

// ===== Catálogo: cada linha tem grupos [categoria de preço, "modelo|modelo|..."] =====
const CATALOGO = {
    apple: {
        padrao: "iphoneB",
        linhas: [{
            nome: "iPhone", prefixo: "iPhone ",
            grupos: [
                ["iphoneA", "XR|XS|XS Max|11|SE (2ª geração)|SE (3ª geração)"],
                ["iphoneB", "11 Pro|11 Pro Max|12|12 mini|12 Pro|12 Pro Max|13 mini|13|14|14 Plus"],
                ["iphoneC", "13 Pro|13 Pro Max|14 Pro|14 Pro Max|15|15 Plus|15 Pro|15 Pro Max|16e|17e"],
                ["iphoneD", "16|16 Plus|16 Pro|16 Pro Max|17|17 Air|17 Pro|17 Pro Max|18|18 Pro|18 Pro Max"]
            ]
        }]
    },
    samsung: {
        padrao: "inter",
        linhas: [{
            nome: "Galaxy", prefixo: "Samsung Galaxy ",
            grupos: [
                ["entrada", "A01|A01 Core|A02|A02s|A03|A03 Core|A03s|A04|A04e|A04s|A05|A05s|A06|A07|A10|A10s|A11|A12|A13|A13 5G|A14|A14 5G|A15|A15 5G|A16|A16 5G|A17|A20|A20s|M06|M10|M11|M12|M13|M14 5G|M15 5G|M16"],
                ["inter", "A21|A21s|A22|A22 5G|A23|A23 5G|A24|A25 5G|A26|A26 5G|A30|A30s|A31|A32|A32 5G|A33 5G|A34 5G|A35 5G|A36|A36 5G|A37|A41|A50|A51|A52|A52 5G|A52s|A53 5G|A54 5G|A55 5G|A56 5G|A57|M20|M21|M22|M23 5G|M30|M30s|M31|M31s|M32|M33 5G|M34 5G|M35 5G|M36|M51|M52 5G|M53 5G|M54 5G|M55 5G|M56|M62"],
                ["top", "A70|A70s|A71|A72|A73 5G|A80|S10|S10e|S10+|S10 Lite|Note 10|Note 10+|S20|S20+|S20 Ultra|S20 FE|Note 20|Note 20 Ultra|S21|S21+|S21 Ultra|S21 FE|S22|S22+|S22 Ultra|S23|S23+|S23 Ultra|S23 FE|S24|S24+|S24 Ultra|S24 FE|S25|S25+|S25 Ultra|S25 Edge|S25 FE|S26|S26+|S26 Ultra"],
                ["dobravel", "Z Flip|Z Fold2|Z Flip3|Z Fold3|Z Flip4|Z Fold4|Z Flip5|Z Fold5|Z Flip6|Z Fold6|Z Flip7|Z Flip7 FE|Z Fold7|Z Flip8|Z Fold8"]
            ]
        }]
    },
    xiaomi: {
        padrao: "inter",
        linhas: [
            {
                nome: "Xiaomi", prefixo: "Xiaomi ",
                grupos: [
                    ["inter", "Mi 9 SE|Mi 9|Mi 9T|Mi 10 Lite|Mi Note 10 Lite|Mi 11 Lite|Mi 11 Lite 5G|11T|12 Lite|12X|12T|13 Lite|13T|14T|15T|17T"],
                    ["top", "Mi 9T Pro|Mi Note 10|Mi Note 10 Pro|Mi 10|Mi 10 Pro|Mi 10T|Mi 10T Pro|Mi 11|Mi 11 Pro|Mi 11 Ultra|11T Pro|12|12 Pro|12T Pro|12S|12S Pro|12S Ultra|13|13 Pro|13 Ultra|13T Pro|14|14 Pro|14 Ultra|14T Pro|15|15 Ultra|15T Pro|17|17 Pro|17 Pro Max|17 Ultra|17T Pro"]
                ]
            },
            {
                nome: "Redmi", prefixo: "Xiaomi Redmi ",
                grupos: [
                    ["entrada", "7|8|8A|9|9A|9C|9T|10|10A|10C|10 2022|12|12C|13|13C|14C|14C 5G|15|15C|15 5G"],
                    ["inter", "Note 7|Note 8|Note 8 Pro|Note 8T|Note 9|Note 9S|Note 9 Pro|Note 9 Pro Max|Note 10|Note 10S|Note 10 Pro|Note 10 Pro Max|Note 11|Note 11S|Note 11 Pro|Note 11 Pro 5G|Note 11 Pro+ 5G|Note 12|Note 12 5G|Note 12S|Note 12 Pro|Note 12 Pro 5G|Note 12 Pro+|Note 12 Turbo|Note 13|Note 13 5G|Note 13 Pro|Note 13 Pro 5G|Note 13 Pro+|Note 14|Note 14 5G|Note 14 Pro|Note 14 Pro 5G|Note 14 Pro+|Note 15|Note 15 Pro|Note 15 Pro+"]
                ]
            },
            {
                nome: "POCO", prefixo: "POCO ",
                grupos: [
                    ["entrada", "C55|C65|C71|M2|M3|M5|M5s|M6|M7"],
                    ["inter", "M2 Pro|M3 Pro 5G|M4 Pro|M4 Pro 5G|M6 Pro|M7 Pro|M8|M8 Pro|X3 NFC|X3 Pro|X3 GT|X4 Pro 5G|X4 GT|X5|X5 Pro|X6|X6 Pro|X7|X7 Pro|X8|X8 Pro"],
                    ["top", "F2 Pro|F3|F4|F4 GT|F5|F5 Pro|F6|F6 Pro|F7|F7 Pro|F7 Ultra|F8 Pro|F8 Ultra|X8 Pro Max"]
                ]
            }
        ]
    },
    motorola: {
        padrao: "inter",
        linhas: [{
            nome: "Motorola", prefixo: "Motorola ",
            grupos: [
                ["entrada", "Moto E6|Moto E6 Plus|Moto E6i|Moto E7|Moto E7 Plus|Moto E7i Power|Moto E13|Moto E14|Moto E15|Moto E20|Moto E22|Moto E22i|Moto E30|Moto E32|Moto E32s|Moto G04|Moto G04s|Moto G05|Moto G06|Moto G7 Play|Moto G8 Play|Moto G8 Power Lite|Moto G9 Play|Moto G10|Moto G13|Moto G14|Moto G15|Moto G17|Moto G20|Moto G22"],
                ["inter", "Moto G7|Moto G7 Plus|Moto G7 Power|Moto G8|Moto G8 Plus|Moto G8 Power|Moto G9 Plus|Moto G9 Power|Moto G 5G|Moto G 5G Plus|Moto G23|Moto G24|Moto G24 Power|Moto G30|Moto G31|Moto G32|Moto G34|Moto G35|Moto G37|Moto G40 Fusion|Moto G41|Moto G42|Moto G45|Moto G47|Moto G50|Moto G52|Moto G53|Moto G54|Moto G55|Moto G56|Moto G60|Moto G62|Moto G67|Moto G71|Moto G72|Moto G73|Moto G75|Moto G77|Moto G82|Moto G84|Moto G85|Moto G86|Moto G87|Moto G Max|Moto One Vision|Moto One Action|Moto One Zoom|Moto One Macro|Edge 20 Lite|Edge 20 Fusion|Edge 30 Fusion|Edge 30 Neo|Edge 40 Neo|Edge 50 Fusion|Edge 50 Neo|Edge 60 Fusion|Edge 60 Neo|Edge 70 Fusion|Edge 70 Fusion+"],
                ["top", "Moto Z4|Moto G100|Moto G200|Edge|Edge+|Edge 20|Edge 20 Pro|Edge 30|Edge 30 Pro|Edge 30 Ultra|Edge 40|Edge 40 Pro|Edge 50 Pro|Edge 50 Ultra|Edge 60|Edge 60 Pro|Edge 60 Stylus|Edge 70|Edge 70 Pro|Edge 70 Plus|ThinkPhone 25|Signature"],
                ["dobravel", "Razr (2019)|Razr 5G|Razr 2022|Razr 40|Razr 40 Ultra|Razr 50|Razr 50 Ultra|Razr 60|Razr 60 Ultra|Razr 70|Razr 70 Ultra|Razr Fold"]
            ]
        }]
    },
    realme: {
        padrao: "inter",
        linhas: [{
            nome: "Realme", prefixo: "Realme ",
            grupos: [
                ["entrada", "C3|C11|C11 (2021)|C12|C15|C17|C20|C21|C21Y|C25|C25s|C25Y|C30|C30s|C31|C33|C33 (2023)|C35|C51|C51s|C53|C55|C61|C63|C63 5G|C65|C65 5G|C67|C67 4G|C71|C73|C75|C75 5G|C75x|C83|C85|C85 4G|C100|C100i|C100x|Narzo 10A|Narzo 20A|Narzo 30A|Narzo 50A|Narzo 50i|Narzo 50A Prime|Narzo 50i Prime|Narzo N53|Narzo N55|Narzo N61|Narzo N63|Narzo N65|Narzo 80 Lite|Narzo 100 Lite|Note 50|Note 60|Note 70T|P4 Lite"],
                ["inter", "6|6i|7|7i|7 5G|8|8 5G|8i|8s 5G|9|9 5G|9i|9i 5G|10|10 5G|10s|10T|11|11x|12|12 4G|12+|12x|13|13 4G|13+|14|14T|14x|14 Pro Lite|15|15T|15 Lite|16|16T|16x|X3|Narzo 10|Narzo 20|Narzo 20 Pro|Narzo 30|Narzo 30 Pro|Narzo 50|Narzo 50 5G|Narzo 50 Pro|Narzo 60|Narzo 60x|Narzo 60 Pro|Narzo 70|Narzo 70x|Narzo 70 Turbo|Narzo 70 Pro|Narzo 80x|Narzo 80 Pro|Narzo 100x|P4 Power|P4x"],
                ["top", "6 Pro|7 Pro|8 Pro|9 Pro|9 Pro+|10 Pro|10 Pro+|11 Pro|11 Pro+|12 Pro|12 Pro+|13 Pro|13 Pro+|14 Pro|14 Pro+|15 Pro|16 Pro|16 Pro+|X3 SuperZoom|X50|X50 Pro|GT|GT Master|GT Master Explorer|GT Neo|GT Neo 2|GT Neo 2T|GT 2|GT 2 Pro|GT Neo 3|GT Neo 3T|GT 3|GT Neo 5|GT Neo 5 SE|GT 5|GT 5 Pro|GT Neo 6|GT Neo 6 SE|GT 6|GT 6T|GT 7|GT 7T|GT 7 Pro|GT 8|GT 8 Pro|Neo8"]
            ]
        }]
    }
};

const NOMES_MARCA = { apple: "Apple", samsung: "Samsung", motorola: "Motorola", xiaomi: "Xiaomi", realme: "Realme" };
const NOMES_DEFEITO = {
    tela: "Troca de Tela", bateria: "Troca de Bateria", placa: "Reparo de Placa",
    conector: "Conector de Carga", camera: "Reparo de Câmera"
};

// Palavras extras que também encontram a opção (ex.: digitar "iphone" acha Apple)
const SINONIMOS_MARCA = { apple: "iphone", samsung: "galaxy", motorola: "moto edge razr", xiaomi: "mi redmi poco", realme: "" };
const SINONIMOS_DEFEITO = { tela: "display touch", bateria: "", placa: "", conector: "carga carregador carregamento", camera: "" };

const $ = function (id) { return document.getElementById(id); };
const resultado = $("resultado");

function normalizar(texto) {
    return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Campo com lista própria: clica e vê todas as opções, ou digita para filtrar
function criarCombo(raiz, aoEscolher) {
    const input = raiz.querySelector("input");
    const lista = raiz.querySelector("ul");
    let opcoes = [];
    let escolhida = null;
    let visiveis = [];
    let ativo = -1;

    function filtrar() {
        // Se o texto é a opção já escolhida, mostra todas para poder trocar
        if (escolhida && input.value === escolhida.texto) return opcoes;
        const termos = normalizar(input.value).split(/\s+/).filter(Boolean);
        return opcoes.filter(function (o) {
            return termos.every(function (t) { return o.busca.indexOf(t) !== -1; });
        });
    }

    function abrir() {
        visiveis = filtrar();
        ativo = -1;
        lista.innerHTML = "";
        if (visiveis.length === 0) {
            const vazio = document.createElement("li");
            vazio.className = "vazio";
            vazio.textContent = "Nenhum resultado. Tente outro nome.";
            lista.appendChild(vazio);
        }
        visiveis.forEach(function (o) {
            const li = document.createElement("li");
            li.textContent = o.texto;
            if (o === escolhida) li.className = "selecionada";
            li.addEventListener("mousedown", function (e) {
                e.preventDefault();
                escolher(o);
            });
            lista.appendChild(li);
        });
        lista.hidden = false;
        input.setAttribute("aria-expanded", "true");
        const sel = lista.querySelector(".selecionada");
        if (sel) sel.scrollIntoView({ block: "nearest" });
    }

    function fechar() {
        lista.hidden = true;
        input.setAttribute("aria-expanded", "false");
    }

    function escolher(o) {
        escolhida = o;
        input.value = o.texto;
        fechar();
        aoEscolher(o);
    }

    function marcarAtivo() {
        Array.prototype.forEach.call(lista.children, function (li, i) {
            li.classList.toggle("ativo", i === ativo);
        });
        if (lista.children[ativo]) lista.children[ativo].scrollIntoView({ block: "nearest" });
    }

    input.addEventListener("focus", function () { input.select(); abrir(); });
    input.addEventListener("click", function () { if (lista.hidden) abrir(); });
    input.addEventListener("input", abrir);

    input.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            if (lista.hidden) abrir();
            if (visiveis.length) {
                const passo = e.key === "ArrowDown" ? 1 : -1;
                ativo = (ativo + passo + visiveis.length) % visiveis.length;
                marcarAtivo();
            }
        } else if (e.key === "Enter") {
            if (lista.hidden || visiveis.length === 0) return;
            e.preventDefault();
            if (ativo < 0 && escolhida && input.value === escolhida.texto) {
                fechar();
            } else {
                escolher(visiveis[ativo >= 0 ? ativo : 0]);
            }
        } else if (e.key === "Escape") {
            fechar();
        }
    });

    // Ao sair do campo: aceita o texto se for igual a uma opção, senão volta ao que estava escolhido
    input.addEventListener("blur", function () {
        const digitado = normalizar(input.value.trim());
        const exata = opcoes.find(function (o) { return normalizar(o.texto) === digitado; });
        if (exata && exata !== escolhida) {
            escolher(exata);
            return;
        }
        if (digitado === "") {
            if (escolhida) {
                escolhida = null;
                aoEscolher(null);
            }
        } else if (escolhida) {
            input.value = escolhida.texto;
        } else {
            input.value = "";
        }
        fechar();
    });

    return {
        definirOpcoes: function (novas) {
            opcoes = novas.map(function (o) {
                return {
                    valor: o.valor,
                    texto: o.texto,
                    generico: o.generico,
                    busca: normalizar(o.texto + " " + (o.extra || ""))
                };
            });
            escolhida = null;
            input.value = "";
        },
        obter: function () { return escolhida; },
        habilitar: function (sim, dica) {
            input.disabled = !sim;
            if (dica) input.placeholder = dica;
            if (!sim) fechar();
        }
    };
}

function carregarModelos(marca, linha) {
    const opcoes = [];
    if (linha) {
        linha.grupos.forEach(function (grupo) {
            grupo[1].split("|").forEach(function (nome) {
                opcoes.push({ valor: grupo[0], texto: linha.prefixo + nome });
            });
        });
    }
    opcoes.push({ valor: CATALOGO[marca].padrao, texto: "Outro modelo (estimativa)", extra: "outro nao listado", generico: true });
    comboModelo.definirOpcoes(opcoes);
    comboModelo.habilitar(true, "Selecione ou digite o modelo");
}

const comboMarca = criarCombo($("combo-marca"), function (marca) {
    resultado.innerHTML = "";
    $("combo-linha").style.display = "none";
    comboLinha.definirOpcoes([]);
    comboModelo.definirOpcoes([]);

    if (!marca) {
        comboModelo.habilitar(false, "Escolha primeiro a marca");
        return;
    }

    const cat = CATALOGO[marca.valor];
    if (cat.linhas.length > 1) {
        // Marca com várias linhas (Xiaomi): primeiro escolhe a linha
        comboLinha.definirOpcoes(cat.linhas.map(function (l, i) {
            return { valor: String(i), texto: l.nome };
        }));
        $("combo-linha").style.display = "";
        comboModelo.habilitar(false, "Escolha primeiro a linha");
    } else {
        carregarModelos(marca.valor, cat.linhas[0]);
    }
});

const comboLinha = criarCombo($("combo-linha"), function (linha) {
    resultado.innerHTML = "";
    comboModelo.definirOpcoes([]);
    if (!linha) {
        comboModelo.habilitar(false, "Escolha primeiro a linha");
        return;
    }
    const marca = comboMarca.obter().valor;
    carregarModelos(marca, CATALOGO[marca].linhas[Number(linha.valor)]);
});

const comboModelo = criarCombo($("combo-modelo"), function () { resultado.innerHTML = ""; });
const comboDefeito = criarCombo($("combo-defeito"), function () { resultado.innerHTML = ""; });

comboMarca.definirOpcoes(Object.keys(NOMES_MARCA).map(function (k) {
    return { valor: k, texto: NOMES_MARCA[k], extra: SINONIMOS_MARCA[k] };
}));
comboDefeito.definirOpcoes(Object.keys(NOMES_DEFEITO).map(function (k) {
    return { valor: k, texto: NOMES_DEFEITO[k], extra: SINONIMOS_DEFEITO[k] };
}));
comboModelo.habilitar(false, "Escolha primeiro a marca");

$("btnCalcular").addEventListener("click", function () {
    const marca = comboMarca.obter();
    const modelo = comboModelo.obter();
    const defeito = comboDefeito.obter();

    if (!marca || !modelo || !defeito) {
        resultado.textContent = "Selecione a marca, o modelo e o defeito para ver o preço.";
        return;
    }

    const valor = PRECOS[modelo.valor][defeito.valor];
    const nomeAparelho = modelo.generico ? "outro modelo " + marca.texto : modelo.texto;
    const valorFormatado = valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

    resultado.innerHTML =
        "<strong>" + defeito.texto + " - " + nomeAparelho + "</strong><br>" +
        "Valor estimado: <strong>" + valorFormatado + "</strong><br>" +
        "<small>Valor médio de referência. O preço final é confirmado após avaliação do aparelho.</small>";
});

$("btnWhatsapp").addEventListener("click", function () {
    window.open("https://wa.me/5594992732129?text=Olá,%20gostaria%20de%20pedir%20um%20orçamento%20para%20conserto%20de%20celular.", "_blank");
});