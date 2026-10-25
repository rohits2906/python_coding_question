# Python Basics quiz: deployment

The quiz is a static site and can be deployed directly from this folder to Vercel. Google Sheets collection is optional until you configure the Apps Script URL.

## Connect a Google Sheet

1. Create a Google Sheet for the class responses.
2. In the Sheet, open **Extensions → Apps Script**.
3. Replace the editor contents with the code in `google-apps-script.gs`, then save.
4. In Apps Script, choose **Deploy → New deployment**. Select the gear icon and choose **Web app**.
5. Set **Execute as** to **Me** and **Who has access** to **Anyone**, then deploy and authorize the script.
6. Copy the Web app URL ending in `/exec`.
7. In `app.js`, replace the empty value in `SHEETS_WEB_APP_URL` with that URL. Save the file.
8. Open the `/exec` URL in a private/incognito browser window where you are signed out of Google. It should display `Python quiz response endpoint is ready.` If Google asks you to sign in or request access, edit the deployment so **Who has access** is **Anyone**, deploy a new version, and try again.

The web app must be accessible to anyone with the link so student submissions can reach it. The endpoint accepts quiz submissions from the public; do not use it for sensitive information. Scoring happens in the browser, so this is suitable for a class practice quiz, not a high-stakes or proctored assessment. The Sheet remains in your Google account. Each submission creates one row with the timestamp, student name, score, selected answer, correct answer, and correctness for all 30 questions.

After changing the Apps Script, choose **Deploy → Manage deployments**, edit the web app deployment, select **New version**, verify that **Execute as** is **Me** and **Who has access** is **Anyone**, then deploy. Keep using the deployment's `/exec` URL.

## Deploy to Vercel

1. Put the files in a GitHub repository, or install and sign in to the Vercel CLI.
2. Import the repository in the Vercel dashboard, or run `vercel` from this folder.
3. Use the project root as the root directory. No build command or framework preset is needed for this static site.
4. After deployment, open the Vercel URL and submit a test attempt. Confirm that the score/review displays and, if configured, that a row appears in the Sheet.
5. Share the production URL with your class.

The quiz requires all 30 answers before submission. Students see their score and a review showing their answer and, when incorrect, the correct answer.
