// Étape 2 du login admin : échange le code reçu de GitHub contre un token,
// puis le transmet à la fenêtre d'admin (Decap CMS) via postMessage.
// Variables d'environnement à définir dans le dashboard Vercel :
//   GITHUB_CLIENT_ID
//   GITHUB_CLIENT_SECRET   (fourni par ton app OAuth GitHub, à garder secret)

export default async function handler(req, res) {
  const { code } = req.query;

  const tokenResp = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const tokenData = await tokenResp.json();

  if (tokenData.error) {
    res.status(401).send(`Erreur d'authentification : ${tokenData.error_description || tokenData.error}`);
    return;
  }

  const token = tokenData.access_token;
  const script = `
    <script>
      (function() {
        function receiveMessage(e) {
          window.opener.postMessage(
            'authorization:github:success:${JSON.stringify({ token })}',
            e.origin
          );
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })();
    </script>
  `;

  res.setHeader("Content-Type", "text/html");
  res.send(script);
}
