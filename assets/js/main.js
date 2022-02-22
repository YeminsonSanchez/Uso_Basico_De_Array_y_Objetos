let radio = [
  {
    HORA: "11:00",
    ESPECIALISTA: "IGNACIO SCHULZ",
    PACIENTE: "FRANCISCA ROJAS",
    RUT: "9878782-1",
    PREVISION: "FONASA",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "FEDERICO SUBERCASEAUX",
    PACIENTE: "PAMELA ESTRADA",
    RUT: "15345241-3",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:00",
    ESPECIALISTA: "FERNANDO WURTHZ",
    PACIENTE: "ARMANDO LUNA",
    RUT: "16445345-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:30",
    ESPECIALISTA: "ANA MARIA GODOY",
    PACIENTE: "MANUEL GODOY",
    RUT: "17666419-0",
    PREVISION: "FONASA",
  },
  {
    HORA: "16:00",
    ESPECIALISTA: "PATRICIA SUAZO",
    PACIENTE: "RAMON ULLOA",
    RUT: "14989389-K",
    PREVISION: "FONASA",
  },
];
let trauma = [
  {
    HORA: "8:00",
    ESPECIALISTA: "MARIA PAZ ALTUZARRA",
    PACIENTE: "PAULA SANCHEZ",
    RUT: "15554774-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "10:00",
    ESPECIALISTA: "RAUL ARAYA",
    PACIENTE: "ANGÉLICA NAVAS",
    RUT: "15444147-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "10:30",
    ESPECIALISTA: "MARIA ARRIAGADA",
    PACIENTE: "ANA KLAPP",
    RUT: "17879423-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00",
    ESPECIALISTA: "ALEJANDRO BADILLA",
    PACIENTE: "FELIPE MARDONES",
    RUT: "1547423-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "CECILIA BUDNIK",
    PACIENTE: "DIEGO MARRE",
    RUT: "16554741-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "12:00",
    ESPECIALISTA: "ARTURO CAVAGNARO",
    PACIENTE: "CECILIA MENDEZ",
    RUT: "9747535-8",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "12:30",
    ESPECIALISTA: "ANDRES KANACRI",
    PACIENTE: "MARCIAL SUAZO",
    RUT: "11254785-5",
    PREVISION: "ISAPRE",
  },
];
let odonto = [
  {
    HORA: "8:30",
    ESPECIALISTA: "ANDREA ZUÑIGA",
    PACIENTE: "MARCELA RETAMAL",
    RUT: "11123425-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00",
    ESPECIALISTA: "MARIA PIA ZAÑARTU",
    PACIENTE: "ANGEL MUÑOZ",
    RUT: "9878789-2",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "SCARLETT WITTING",
    PACIENTE: "MARIO KAST",
    RUT: "7998789-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "13:00",
    ESPECIALISTA: "FRANCISCO VON TEUBER",
    PACIENTE: "KARIN FERNANDEZ",
    RUT: "18887662-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "13:30",
    ESPECIALISTA: "EDUARDO VIÑUELA",
    PACIENTE: "HUGO SANCHEZ",
    RUT: "17665461-4",
    PREVISION: "FONASA",
  },
  {
    HORA: "14:00",
    ESPECIALISTA: "RAQUEL VILLASECA",
    PACIENTE: "ANA SEPULVEDA",
    RUT: "14441281-0",
    PREVISION: "ISAPRE",
  },
];

let tabla_radio =
  "<h4>RADIOLOGIA</h4><tr><th>HORA</th><th>ESPECIALIDAD</th><th>PACIENTE</th><th>RUT</th><th>PREVICION</th></tr>";
for (let i = 0; i < radio.length; i++) {
  tabla_radio += `<tr>
    <td>${radio[i].HORA}</td>
    <td>${radio[i].ESPECIALISTA}</td>
    <td>${radio[i].PACIENTE}</td>
    <td>${radio[i].RUT}</td>
    <td>${radio[i].PREVISION}</td>
    </tr>`;
}
document.getElementById(
  "texto_radio"
).innerHTML = `<br><strong>Primera atención</strong>: ${radio[0].PACIENTE} - ${
  radio[0].PREVISION
} | <strong>Última atención</strong>: ${radio[radio.length - 1].PACIENTE} - ${
  radio[radio.length - 1].PREVISION
}`;
document.getElementById("table_radio").innerHTML = tabla_radio;

let tabla_trauma =
  "<h4>TRAUMATOLOGIA</h4><tr><th>HORA</th><th>ESPECIALIDAD</th><th>PACIENTE</th><th>RUT</th><th>PREVICION</th></tr>";
for (let i = 0; i < trauma.length; i++) {
  tabla_trauma += `<tr>
    <td>${trauma[i].HORA}</td>
    <td>${trauma[i].ESPECIALISTA}</td>
    <td>${trauma[i].PACIENTE}</td>
    <td>${trauma[i].RUT}</td>
    <td>${trauma[i].PREVISION}</td>
    </tr>`;
}
document.getElementById(
  "texto_trauma"
).innerHTML = `<br><strong>Primera atención</strong>: ${trauma[0].PACIENTE} - ${
  trauma[0].PREVISION
} | <strong>Última atención</strong>: ${trauma[trauma.length - 1].PACIENTE} - ${
  trauma[trauma.length - 1].PREVISION
}`;
document.getElementById("table_trauma").innerHTML = tabla_trauma;

let tabla_odonto =
  "<h4>ODONTOLOGIA</h4><tr><th>HORA</th><th>ESPECIALIDAD</th><th>PACIENTE</th><th>RUT</th><th>PREVICION</th></tr>";
for (let i = 0; i < odonto.length; i++) {
  tabla_odonto += `<tr>
    <td>${odonto[i].HORA}</td>
    <td>${odonto[i].ESPECIALISTA}</td>
    <td>${odonto[i].PACIENTE}</td>
    <td>${odonto[i].RUT}</td>
    <td>${odonto[i].PREVISION}</td>
    </tr>`;
}
document.getElementById(
  "texto_odonto"
).innerHTML = `<br><strong>Primera atención</strong>: ${odonto[0].PACIENTE} - ${
  odonto[0].PREVISION
} | <strong>Última atención</strong>: ${odonto[odonto.length - 1].PACIENTE} - ${
  odonto[odonto.length - 1].PREVISION
}`;
document.getElementById("table_odonto").innerHTML = tabla_odonto;
