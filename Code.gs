const mailHeaders = [
  'Employee Name',
  'Employee email address',
  'Email Address of Line Manager',
  'Department',
  'Type of Leave',
  'Start Date of Leave',
  'End Date of Leave',
  'Total Leave Days',
  'Justification/Reason for leave'
]

function getEmailHtml(data) {
  var htmlTemplate = HtmlService.createTemplateFromFile("emailBody.html");
  htmlTemplate.data = data
  var htmlBody = htmlTemplate.evaluate().getContent();
  return htmlBody;
}

function sendEmail(data, employeeEmail, lineManagerEmail, employeeName, typeOfLeave, numberOfLeaves) {
  var htmlBody = getEmailHtml(data);

  MailApp.sendEmail({
    to: lineManagerEmail,
    cc: `hr@testing-something.com, ${employeeEmail}`,
    subject: `[Leave] ${employeeName} - ${typeOfLeave} - ${numberOfLeaves} day(s)`,
    htmlBody: htmlBody,
    name:	'HR Automation',
    noReply: true
  });

  Logger.log(`Mail has been sent to ${lineManagerEmail}!`)
}

function mySubmit(e) {
    const result = JSON.stringify(e);
    const JSONresult = JSON.parse(result);

    const mailDataSorted = []

    mailHeaders.forEach((header) => {
      mailDataSorted.push({
          headerName: header,
          value: JSONresult['namedValues'][header][0]
        })
    })

    const employeeEmail = JSONresult['namedValues']['Employee email address'][0]
    const lineManagerEmail = JSONresult['namedValues']['Email Address of Line Manager'][0]
    const employeeName = JSONresult['namedValues']['Employee Name'][0]
    const typeOfLeave = JSONresult['namedValues']['Type of Leave'][0]
    const numberOfLeaves = JSONresult['namedValues']['Total Leave Days'][0]

    Logger.log(mailDataSorted);

    sendEmail(mailDataSorted, employeeEmail, lineManagerEmail, employeeName, typeOfLeave, numberOfLeaves)

}

function createTrigger() {
    var sheet = SpreadsheetApp.openById(
        'INSERT_YOUR_UNIQUE_GOOGLE_SHEET_ID_HERE'
    );
    ScriptApp.newTrigger('mySubmit')
        .forSpreadsheet(sheet)
        .onFormSubmit()
        .create();
}