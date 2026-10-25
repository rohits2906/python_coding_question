function doPost(event) {
  const payload = JSON.parse(event.postData.contents);
  validatePayload(payload);

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const headers = [
    "Submitted at",
    "Student name",
    "Score",
    "Total questions",
  ];

  payload.responses.forEach(function (_response, index) {
    const number = String(index + 1).padStart(2, "0");
    headers.push("Q" + number + " answer");
    headers.push("Q" + number + " correct answer");
    headers.push("Q" + number + " correct?");
  });

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
  }

  const row = [
    new Date(),
    payload.studentName.trim(),
    payload.score,
    payload.total,
  ];

  payload.responses.forEach(function (response) {
    row.push(response.selectedAnswer);
    row.push(response.correctAnswer);
    row.push(response.isCorrect ? "Yes" : "No");
  });

  sheet.appendRow(row);
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function validatePayload(payload) {
  if (!payload || typeof payload !== "object") {
    throw new Error("Invalid quiz submission.");
  }
  if (typeof payload.studentName !== "string" || !payload.studentName.trim()) {
    throw new Error("Student name is required.");
  }
  if (
    payload.total !== 30 ||
    !Array.isArray(payload.responses) ||
    payload.responses.length !== payload.total
  ) {
    throw new Error("The quiz submission must contain all 30 answers.");
  }
  if (
    !Number.isInteger(payload.score) ||
    payload.score < 0 ||
    payload.score > payload.total
  ) {
    throw new Error("Invalid quiz score.");
  }

  payload.responses.forEach(function (response) {
    if (
      !response ||
      typeof response.question !== "string" ||
      typeof response.selectedAnswer !== "string" ||
      typeof response.correctAnswer !== "string" ||
      typeof response.isCorrect !== "boolean"
    ) {
      throw new Error("Invalid answer in quiz submission.");
    }
  });
  const calculatedScore = payload.responses.filter(function (response) {
    return response.isCorrect;
  }).length;
  if (payload.score !== calculatedScore) {
    throw new Error("Quiz score does not match the submitted answers.");
  }
}
