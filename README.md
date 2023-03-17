<h1 align="center"> Send Email on Form Submission - Google AppScript </h1>

<p align="center"> A simple script that lets you send automated emails when a google form is submitted with the form information!</p>

<hr/>


<h3> Instructions for setting up: </h3>

<ul>
  <li>Create a google form and link a spreadsheet to it.</li>
  <li>Visit the spreadsheet and go to the Apps Script menu from Extensions</li>
  <li>Add the two files from this repo (you can also replace the default Code.gs file)</li>
  <li>Edit in the unique id of your google sheet in the createTrigger function.</li>
  <li>Edit in the details of whom to email in the sendEmail function.</li>
  <li>Edit the mailHeaders based on the responses you want. You can check what responses your form produces by doing <code>
  Logger.log(JSONresult['namedValues'])</code></li>
  <li>Go to the trigger menu and add a triger where the function is <b>mySubmit</b> and event type is <b>on form submit</b>. This might require some permissions which you can accept at that moment.</li>
  <li>Go back to your editor, select the <b>createTrigger</b> function and run it. This might require some permissions which you can accept at that moment</li>
  <li>Select the <b>sendEmail</b> function and run it. This might require some permissions which you can accept at that moment</li>
  <li>That sould do it - you can try by submitting a response in your form!</li>
</ul>

<h3>Link to a video showcasing the script</h3>

- [LinkedIn Video](https://linkedin.com)


<h3>Author</h3>

- [Ishmam Chowdhury](https://github.com/Ishmam156)

<h3>Contributing</h3>
<p>Contributions are always welcome!</p>
<p>Kindly do a <i>pull request</i> with your contribution.</p>

<h3>Feedback</h3>
<p>If you have any feedback, please reach out to me in <i>GitHub</i>.</p>

