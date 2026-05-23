// =============================================
//   CALCULADORA DE MAGNITUDES FÍSICAS
//   script.js
// =============================================

// ---- FUNCIÓN AUXILIAR: mostrar resultado ----
function mostrarResultado(id, texto, esError) {
    const div = document.getElementById(id);
    div.className = "result " + (esError ? "error" : "success");
    div.textContent = texto;
}

// ---- FUNCIÓN AUXILIAR: validar que no esté vacío ----
function camposVacios(...valores) {
    for (let v of valores) {
        if (v === "" || v === null) return true;
    }
    return false;
}

// ---- FUNCIÓN AUXILIAR: obtener valor de input ----
function val(id) {
    return document.getElementById(id).value;
}

// =============================================
// 1. VELOCIDAD  →  v = d / t
// =============================================
function calcularVelocidad() {
    const d = val("vel-d");
    const t = val("vel-t");

    if (camposVacios(d, t)) {
        mostrarResultado("res-velocidad", "⚠ Por favor, completa todos los campos.", true);
        return;
    }

    const distancia = parseFloat(d);
    const tiempo    = parseFloat(t);

    if (tiempo === 0) {
        mostrarResultado("res-velocidad", "⚠ Error: el tiempo no puede ser 0 (división por cero).", true);
        return;
    }
    if (distancia < 0 || tiempo < 0) {
        mostrarResultado("res-velocidad", "⚠ Error: los valores no pueden ser negativos.", true);
        return;
    }

    const resultado = distancia / tiempo;
    mostrarResultado("res-velocidad", `✔ Velocidad = ${resultado.toFixed(4)} m/s`, false);
}

// =============================================
// 2. ACELERACIÓN  →  a = Δv / Δt
// =============================================
function calcularAceleracion() {
    const vf = val("acel-vf");
    const vi = val("acel-vi");
    const t  = val("acel-t");

    if (camposVacios(vf, vi, t)) {
        mostrarResultado("res-aceleracion", "⚠ Por favor, completa todos los campos.", true);
        return;
    }

    const velFinal   = parseFloat(vf);
    const velInicial = parseFloat(vi);
    const tiempo     = parseFloat(t);

    if (tiempo === 0) {
        mostrarResultado("res-aceleracion", "⚠ Error: el tiempo no puede ser 0 (división por cero).", true);
        return;
    }

    const deltaV    = velFinal - velInicial;
    const resultado = deltaV / tiempo;
    mostrarResultado("res-aceleracion", `✔ Aceleración = ${resultado.toFixed(4)} m/s²`, false);
}

// =============================================
// 3. FUERZA  →  F = m · a
// =============================================
function calcularFuerza() {
    const m = val("fuerza-m");
    const a = val("fuerza-a");

    if (camposVacios(m, a)) {
        mostrarResultado("res-fuerza", "⚠ Por favor, completa todos los campos.", true);
        return;
    }

    const masa        = parseFloat(m);
    const aceleracion = parseFloat(a);

    if (masa < 0) {
        mostrarResultado("res-fuerza", "⚠ Error: la masa no puede ser negativa.", true);
        return;
    }

    const resultado = masa * aceleracion;
    mostrarResultado("res-fuerza", `✔ Fuerza = ${resultado.toFixed(4)} N (Newtons)`, false);
}

// =============================================
// 4. TRABAJO  →  W = F · d · cos(θ)
// =============================================
function calcularTrabajo() {
    const f   = val("trab-f");
    const d   = val("trab-d");
    const ang = val("trab-ang");

    if (camposVacios(f, d, ang)) {
        mostrarResultado("res-trabajo", "⚠ Por favor, completa todos los campos.", true);
        return;
    }

    const fuerza    = parseFloat(f);
    const distancia = parseFloat(d);
    const angulo    = parseFloat(ang);

    if (distancia < 0 || fuerza < 0) {
        mostrarResultado("res-trabajo", "⚠ Error: la fuerza y la distancia no pueden ser negativas.", true);
        return;
    }

    const anguloRad = angulo * (Math.PI / 180);
    const resultado = fuerza * distancia * Math.cos(anguloRad);
    mostrarResultado("res-trabajo", `✔ Trabajo = ${resultado.toFixed(4)} J (Joules)`, false);
}

// =============================================
// 5. ENERGÍA CINÉTICA  →  K = ½ · m · v²
// =============================================
function calcularECinetica() {
    const m = val("ec-m");
    const v = val("ec-v");

    if (camposVacios(m, v)) {
        mostrarResultado("res-ecinetica", "⚠ Por favor, completa todos los campos.", true);
        return;
    }

    const masa      = parseFloat(m);
    const velocidad = parseFloat(v);

    if (masa < 0) {
        mostrarResultado("res-ecinetica", "⚠ Error: la masa no puede ser negativa.", true);
        return;
    }

    const resultado = 0.5 * masa * Math.pow(velocidad, 2);
    mostrarResultado("res-ecinetica", `✔ Energía Cinética = ${resultado.toFixed(4)} J (Joules)`, false);
}

// =============================================
// 6. ENERGÍA POTENCIAL GRAVITATORIA  →  U = m · g · h
// =============================================
function calcularEPotencial() {
    const m = val("ep-m");
    const g = val("ep-g");
    const h = val("ep-h");

    if (camposVacios(m, g, h)) {
        mostrarResultado("res-epotencial", "⚠ Por favor, completa todos los campos.", true);
        return;
    }

    const masa    = parseFloat(m);
    const gravedad = parseFloat(g);
    const altura  = parseFloat(h);

    if (masa < 0 || altura < 0) {
        mostrarResultado("res-epotencial", "⚠ Error: la masa y la altura no pueden ser negativas.", true);
        return;
    }

    const resultado = masa * gravedad * altura;
    mostrarResultado("res-epotencial", `✔ Energía Potencial = ${resultado.toFixed(4)} J (Joules)`, false);
}

// =============================================
// 7. DENSIDAD  →  ρ = m / V
// =============================================
function calcularDensidad() {
    const m = val("den-m");
    const v = val("den-v");

    if (camposVacios(m, v)) {
        mostrarResultado("res-densidad", "⚠ Por favor, completa todos los campos.", true);
        return;
    }

    const masa    = parseFloat(m);
    const volumen = parseFloat(v);

    if (volumen === 0) {
        mostrarResultado("res-densidad", "⚠ Error: el volumen no puede ser 0 (división por cero).", true);
        return;
    }
    if (masa < 0 || volumen < 0) {
        mostrarResultado("res-densidad", "⚠ Error: la masa y el volumen no pueden ser negativos.", true);
        return;
    }

    const resultado = masa / volumen;
    mostrarResultado("res-densidad", `✔ Densidad = ${resultado.toFixed(4)} kg/m³`, false);
}

// =============================================
// 8. PRESIÓN  →  P = F / A
// =============================================
function calcularPresion() {
    const f = val("pre-f");
    const a = val("pre-a");

    if (camposVacios(f, a)) {
        mostrarResultado("res-presion", "⚠ Por favor, completa todos los campos.", true);
        return;
    }

    const fuerza = parseFloat(f);
    const area   = parseFloat(a);

    if (area === 0) {
        mostrarResultado("res-presion", "⚠ Error: el área no puede ser 0 (división por cero).", true);
        return;
    }
    if (area < 0 || fuerza < 0) {
        mostrarResultado("res-presion", "⚠ Error: la fuerza y el área no pueden ser negativos.", true);
        return;
    }

    const resultado = fuerza / area;
    mostrarResultado("res-presion", `✔ Presión = ${resultado.toFixed(4)} Pa (Pascales)`, false);
}

// =============================================
// 9. CARGA ELÉCTRICA  →  q = I · t
// =============================================
function calcularCargaElectrica() {
    const i = val("car-i");
    const t = val("car-t");

    if (camposVacios(i, t)) {
        mostrarResultado("res-carga", "⚠ Por favor, completa todos los campos.", true);
        return;
    }

    const corriente = parseFloat(i);
    const tiempo    = parseFloat(t);

    if (corriente < 0 || tiempo < 0) {
        mostrarResultado("res-carga", "⚠ Error: los valores no pueden ser negativos.", true);
        return;
    }

    const resultado = corriente * tiempo;
    mostrarResultado("res-carga", `✔ Carga Eléctrica = ${resultado.toFixed(4)} C (Coulombs)`, false);
}

// =============================================
// 10. LEY DE OHM  →  V = I · R
// =============================================
function calcularOhm() {
    const i = val("ohm-i");
    const r = val("ohm-r");

    if (camposVacios(i, r)) {
        mostrarResultado("res-ohm", "⚠ Por favor, completa todos los campos.", true);
        return;
    }

    const corriente   = parseFloat(i);
    const resistencia = parseFloat(r);

    if (corriente < 0 || resistencia < 0) {
        mostrarResultado("res-ohm", "⚠ Error: los valores no pueden ser negativos.", true);
        return;
    }

    const resultado = corriente * resistencia;
    mostrarResultado("res-ohm", `✔ Voltaje = ${resultado.toFixed(4)} V (Voltios)`, false);
}
