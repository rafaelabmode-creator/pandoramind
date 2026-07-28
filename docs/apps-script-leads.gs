/**
 * PandoraMind — Recebe os leads do assistente e grava numa planilha.
 *
 * Cole este código no editor de Apps Script da sua planilha
 * (Extensões → Apps Script), salve e publique como "App da Web".
 * Veja o passo a passo em docs/leads-google-sheets.md.
 */
function doPost(e) {
  try {
    var planilha = SpreadsheetApp.getActiveSpreadsheet();
    var aba = planilha.getSheetByName("Leads") || planilha.insertSheet("Leads");

    // Cria o cabeçalho na primeira vez.
    if (aba.getLastRow() === 0) {
      aba.appendRow([
        "Data/Hora",
        "Nome",
        "Perfil",
        "Telefone",
        "E-mail",
        "Motivo",
        "Newsletter",
      ]);
    }

    var d = JSON.parse(e.postData.contents);
    var quando = d.data ? new Date(d.data) : new Date();

    aba.appendRow([
      quando,
      d.nome || "",
      d.perfil || "",
      d.telefone || "",
      d.email || "",
      d.motivo || "",
      d.newsletter ? "Sim" : "Não",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
