const navigate = useNavigate();

    useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      const authCode = params.get("code");

      if (authCode) {
        console.log("Authorization Code:", authCode);
        fetchTokens(authCode);
      }
    }, []);

    const fetchTokens = async (authCode) => {
      const client_id = "cilent_id";
      const redirect_uri = "redirect_uri";
      const client_secret = "client_secret";

      const tokenUrl = "cognito-domain-name/oauth2/token";
      //example: "https://s3932105web.auth.us-east-1.amazoncognito.com/oauth2/token"

      const response = await fetch(tokenUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          client_id: client_id,
          client_secret: client_secret,
          code: authCode,
          redirect_uri: redirect_uri,
        }),
      });
      const tokenData = await response.json();

      if (response.ok) {
        console.log("Access Token:", tokenData.access_token);
        console.log("ID Token:", tokenData.id_token);
        console.log("Refresh Token:", tokenData.refresh_token);

        const decoded = jwtDecode(tokenData.id_token);
        console.log("decoded", decoded);
        const group = decoded["cognito:groups"][0];
        console.log(group)
      } else {
        console.error("Failed to exchange code for tokens:", tokenData);
      }
    };