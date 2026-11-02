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

// Catálogo: cada linha tem grupos //
const CATALOGO = {
    apple: {
        padrao: "iphoneB",
        linhas: [
            {
                nome: "iPhone", prefixo: "iPhone ",
                grupos: [
                    ["iphoneA", "XR|XS|XS Max|11|SE (2ª geração)|SE (3ª geração)"],
                    ["iphoneB", "11 Pro|11 Pro Max|12|12 mini|12 Pro|12 Pro Max|13 mini|13|14|14 Plus"],
                    ["iphoneC", "13 Pro|13 Pro Max|14 Pro|14 Pro Max|15|15 Plus|15 Pro|15 Pro Max|16e|17e"],
                    ["iphoneD", "16|16 Plus|16 Pro|16 Pro Max|17|17 Air|17 Pro|17 Pro Max|18|18 Pro|18 Pro Max"]
                ]
            }
        ]
    },
    samsung: {
        padrao: "inter",
        linhas: [
            {
                nome: "Galaxy A", prefixo: "Samsung Galaxy ",
                grupos: [
                    ["entrada", "A01|A01 Core|A02|A02s|A03|A03 Core|A03s|A04|A04e|A04s|A05|A05s|A06|A07|A10|A10s|A11|A12|A13|A13 5G|A14|A14 5G|A15|A15 5G|A16|A16 5G|A17|A20|A20s"],
                    ["inter", "A21|A21s|A22|A22 5G|A23|A23 5G|A24|A25 5G|A26|A26 5G|A30|A30s|A31|A32|A32 5G|A33 5G|A34 5G|A35 5G|A36|A36 5G|A37|A41|A50|A51|A52|A52 5G|A52s|A53 5G|A54 5G|A55 5G|A56 5G|A57"],
                    ["top", "A70|A70s|A71|A72|A73 5G|A80"]
                ]
            },
            {
                nome: "Galaxy M", prefixo: "Samsung Galaxy ",
                grupos: [
                    ["entrada", "M06|M10|M11|M12|M13|M14 5G|M15 5G|M16"],
                    ["inter", "M20|M21|M22|M23 5G|M30|M30s|M31|M31s|M32|M33 5G|M34 5G|M35 5G|M36|M51|M52 5G|M53 5G|M54 5G|M55 5G|M56|M62"]
                ]
            },
            {
                nome: "Galaxy S e Note", prefixo: "Samsung Galaxy ",
                grupos: [
                    ["top", "S10|S10e|S10+|S10 Lite|Note 10|Note 10+|S20|S20+|S20 Ultra|S20 FE|Note 20|Note 20 Ultra|S21|S21+|S21 Ultra|S21 FE|S22|S22+|S22 Ultra|S23|S23+|S23 Ultra|S23 FE|S24|S24+|S24 Ultra|S24 FE|S25|S25+|S25 Ultra|S25 Edge|S25 FE|S26|S26+|S26 Ultra"]
                ]
            },
            {
                nome: "Galaxy Z (dobráveis)", prefixo: "Samsung Galaxy ",
                grupos: [
                    ["dobravel", "Z Flip|Z Fold2|Z Flip3|Z Fold3|Z Flip4|Z Fold4|Z Flip5|Z Fold5|Z Flip6|Z Fold6|Z Flip7|Z Flip7 FE|Z Fold7|Z Flip8|Z Fold8"]
                ]
            }
        ]
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
        linhas: [
            {
                nome: "Moto E", prefixo: "Motorola ",
                grupos: [
                    ["entrada", "Moto E6|Moto E6 Plus|Moto E6i|Moto E7|Moto E7 Plus|Moto E7i Power|Moto E13|Moto E14|Moto E15|Moto E20|Moto E22|Moto E22i|Moto E30|Moto E32|Moto E32s"]
                ]
            },
            {
                nome: "Moto G", prefixo: "Motorola ",
                grupos: [
                    ["entrada", "Moto G04|Moto G04s|Moto G05|Moto G06|Moto G7 Play|Moto G8 Play|Moto G8 Power Lite|Moto G9 Play|Moto G10|Moto G13|Moto G14|Moto G15|Moto G17|Moto G20|Moto G22"],
                    ["inter", "Moto G7|Moto G7 Plus|Moto G7 Power|Moto G8|Moto G8 Plus|Moto G8 Power|Moto G9 Plus|Moto G9 Power|Moto G 5G|Moto G 5G Plus|Moto G23|Moto G24|Moto G24 Power|Moto G30|Moto G31|Moto G32|Moto G34|Moto G35|Moto G37|Moto G40 Fusion|Moto G41|Moto G42|Moto G45|Moto G47|Moto G50|Moto G52|Moto G53|Moto G54|Moto G55|Moto G56|Moto G60|Moto G62|Moto G67|Moto G71|Moto G72|Moto G73|Moto G75|Moto G77|Moto G82|Moto G84|Moto G85|Moto G86|Moto G87|Moto G Max"],
                    ["top", "Moto G100|Moto G200"]
                ]
            },
            {
                nome: "Edge", prefixo: "Motorola ",
                grupos: [
                    ["inter", "Edge 20 Lite|Edge 20 Fusion|Edge 30 Fusion|Edge 30 Neo|Edge 40 Neo|Edge 50 Fusion|Edge 50 Neo|Edge 60 Fusion|Edge 60 Neo|Edge 70 Fusion|Edge 70 Fusion+"],
                    ["top", "Edge|Edge+|Edge 20|Edge 20 Pro|Edge 30|Edge 30 Pro|Edge 30 Ultra|Edge 40|Edge 40 Pro|Edge 50 Pro|Edge 50 Ultra|Edge 60|Edge 60 Pro|Edge 60 Stylus|Edge 70|Edge 70 Pro|Edge 70 Plus"]
                ]
            },
            {
                nome: "Razr (dobráveis)", prefixo: "Motorola ",
