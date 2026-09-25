// Étape 1 du login admin : redirige vers GitHub pour demander l'autorisation.
// Variables d'environnement à définir dans le dashboard Vercel :
//   GITHUB_CLIENT_ID     (fourni par ton app OAuth GitHub)

export default function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const redirectUri = `https://${req.headers.host}/api/callback`;

  const githubUrl =
    `https://github.com/login/oauth/authorize` +
    `?client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=repo,user`;

  res.writeHead(302, { Location: githubUrl });
  res.end();
}
