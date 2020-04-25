# angular-material-keycloak-theme

# Abstract
Build your own keycloak theme using angular material.

# TO DO MANUALLY (not scripted yet)
```script
npm run build
mkdir /<keycloak-path>/theme/<your-theme>
mkdir /<keycloak-path>/theme/<your-theme>/login
mkdir /<keycloak-path>/theme/<your-theme>/login/resources
cp /<build-path>/ to /<keycloak-path>/theme/<your-theme>/login/resources (except index.html)
cp /<build-path>/index.html to /<keycloak-path>/theme/<your-theme>/login/login.ftl
```

update tag base with ref="${url.resourcesPath}/" in /<keycloak-path>/theme/<your-theme>/login/login.ftl

Example:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>AngularMaterialKeycloakTheme</title>
  <base href="${url.resourcesPath}/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <script type="text/javascript">
		var g_urlLoginAction="${url.loginAction}" ;
	</script>
<link rel="stylesheet" href="styles.e85664fc5a31b02ac00f.css"></head>
<body>
  <app-root></app-root>
<script src="runtime-es2015.1eba213af0b233498d9d.js" type="module"></script><script src="runtime-es5.1eba213af0b233498d9d.js" nomodule defer></script><script src="polyfills-es5.47c00755135658becf3d.js" nomodule defer></script><script src="polyfills-es2015.a723b9f0fd424fda1454.js" type="module"></script><script src="main-es2015.e24267654529df8c885a.js" type="module"></script><script src="main-es5.e24267654529df8c885a.js" nomodule defer></script></body>
</html>
```



# Bibliography
* https://www.keycloak.org/docs/latest/server_development/#creating-a-theme 
* https://freemarker.apache.org/
* https://github.com/httpsOmkar/carbon-keycloak-theme
* https://github.com/UKHomeOffice/keycloak-theme-govuk
* https://www.npmjs.com/package/mkdirp
* https://www.npmjs.com/package/cross-var
* https://www.npmjs.com/package/copyfiles
* https://www.npmjs.com/package/replace
