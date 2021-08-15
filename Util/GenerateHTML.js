const fs = require("fs");
const path = require ("path");

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <title>Engineering Team Profile</title>
</head>

<body>
<div class="container-fluid">
    <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading">
            <h1 class="text-center">My Team</h1>
        
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            {{ team }}
        </div>
    </div>
</div>

</body>
</html>`;